package org.camunda.bpm.extension.hooks.listeners;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.inject.Named;

import org.apache.commons.collections.MapUtils;
import org.apache.commons.lang.StringUtils;
import org.camunda.bpm.engine.delegate.DelegateExecution;
import org.camunda.bpm.engine.delegate.DelegateTask;
import org.camunda.bpm.engine.delegate.ExecutionListener;
import org.camunda.bpm.engine.delegate.Expression;
import org.camunda.bpm.engine.delegate.TaskListener;
import org.camunda.bpm.extension.commons.connector.HTTPServiceInvoker;
import org.camunda.bpm.extension.hooks.exceptions.FormioServiceException;
import org.camunda.bpm.extension.hooks.listeners.data.CustomFormElement;
import org.camunda.bpm.extension.hooks.services.FormSubmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.reactive.function.client.WebClient;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonObject;

import reactor.core.publisher.Mono;

/**
 *
 * @author Sneha Suresh
 */
@Named("SyncFormDataPipelineListener")
public class SyncFormDataPipelineListener extends BaseListener implements TaskListener, ExecutionListener {
	private Logger LOGGER = Logger.getLogger(SyncFormDataPipelineListener.class.getName());

	private Expression fields;

	@Autowired
	private HTTPServiceInvoker httpServiceInvoker;

	@Autowired
	private FormSubmissionService formSubmissionService;

	@Autowired
	private WebClient webClient;

	@Override
	public void notify(DelegateExecution execution) {
		try {
			invokeSyncApplicationService(execution);
			patchFormAttributes(execution);
		} catch (IOException e) {
			handleException(execution, ExceptionSource.EXECUTION, e);
		}
	}

	@Override
	public void notify(DelegateTask delegateTask) {
		try {
			patchFormAttributes(delegateTask.getExecution());
		} catch (IOException e) {
			handleException(delegateTask.getExecution(), ExceptionSource.TASK, e);
		}
	}

	private String invokeSyncApplicationService(DelegateExecution execution) throws IOException {
//		String url = "http://host.docker.internal:5001/api/v1/sync-form-data";
		Object dataJson = prepareSyncData(execution);
		String payload = dataJson != null ? new ObjectMapper().writeValueAsString(dataJson) : null;
		payload = (dataJson == null) ? new JsonObject().toString() : payload;

		Mono<ResponseEntity<String>> entityMono = webClient.method(HttpMethod.POST).uri(getSyncApplicationUrl())
				.accept(MediaType.APPLICATION_JSON).header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
				.body(Mono.just(payload), String.class).retrieve().toEntity(String.class);

		ResponseEntity<String> response = entityMono.block();
		return response.getBody();
	}

	private JsonNode prepareSyncData(DelegateExecution execution) throws IOException {
		String submission = formSubmissionService.readSubmission(getUrl(execution));
		if (submission.isEmpty()) {
			throw new RuntimeException("Unable to retrieve submission");
		}
		JsonNode dataNode = new ObjectMapper().readTree(submission);
		JsonNode dataElements = dataNode.findValue("data");
		return dataElements;

	}

	private void patchFormAttributes(DelegateExecution execution) throws IOException {
		String formUrl = MapUtils.getString(execution.getVariables(), "formUrl", null);
		if (StringUtils.isBlank(formUrl)) {
			LOGGER.log(Level.SEVERE, "Unable to read submission for " + execution.getVariables().get("formUrl"));
			return;
		}
		ResponseEntity<String> response = httpServiceInvoker.execute(getUrl(execution), HttpMethod.PATCH,
				getModifiedCustomFormElements(execution));
		if (response.getStatusCodeValue() != HttpStatus.OK.value()) {
			throw new FormioServiceException(
					"Unable to get patch values for: " + formUrl + ". Message Body: " + response.getBody());
		}
	}

	private List<CustomFormElement> getModifiedCustomFormElements(DelegateExecution execution) throws IOException {
		List<CustomFormElement> elements = new ArrayList<>();
		ObjectMapper objectMapper = new ObjectMapper();
		List<String> injectableFields = this.fields != null && this.fields.getValue(execution) != null
				? objectMapper.readValue(String.valueOf(this.fields.getValue(execution)), List.class)
				: null;
		for (String entry : injectableFields) {
			JsonNode data = new ObjectMapper().readTree(invokeSyncApplicationService(execution));
			JsonNode entryValue = data.get(entry).findValue("id");
			elements.add(new CustomFormElement(entry, String.valueOf(entryValue)));
		}
		return elements;
	}

	private String getUrl(DelegateExecution execution) {
		return String.valueOf(execution.getVariables().get("formUrl"));
	}

	private String getSyncApplicationUrl() {
		return httpServiceInvoker.getProperties().getProperty("report.url") + "/sync-form-data";
	}

}