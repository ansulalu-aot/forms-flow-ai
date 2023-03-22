import formDelete from '../../modules/formReducer';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('formDelete reducer', () => {
  const initialState = {
    formSubMissionDelete: { modalOpen: false, submissionId: "", formId: "" },
    formDelete: { modalOpen: false, formId: "", formName: "" },
    formSubmissionError: { modalOpen: false, message: "" },
    isFormSubmissionLoading: false,
    isFormWorkflowSaved: false,
    formSubmitted: false,
    publicFormStatus: null,
    customSubmission:{}
  };

  it('should return the initial state', () => {
    expect(formDelete(undefined, {})).toEqual(initialState);
  });

  it('should handle FORM_SUBMISSION_DELETE', () => {
    const payload = { modalOpen: true, submissionId: "submission-1", formId: "form-1" };
    const action = { type: ACTION_CONSTANTS.FORM_SUBMISSION_DELETE, payload };
    const expectedState = { ...initialState, formSubMissionDelete: payload };
    expect(formDelete(initialState, action)).toEqual(expectedState);
  });

  it('should handle FORM_DELETE', () => {
    const payload = { modalOpen: true, formId: "form-1", formName: "Form 1" };
    const action = { type: ACTION_CONSTANTS.FORM_DELETE, payload };
    const expectedState = { ...initialState, formDelete: payload };
    expect(formDelete(initialState, action)).toEqual(expectedState);
  });

  it('should handle FORM_SUBMISSION_ERROR', () => {
    const payload = { modalOpen: true, message: "Error message" };
    const action = { type: ACTION_CONSTANTS.FORM_SUBMISSION_ERROR, payload };
    const expectedState = { ...initialState, formSubmissionError: payload };
    expect(formDelete(initialState, action)).toEqual(expectedState);
  });

  it('should handle IS_FORM_SUBMISSION_LOADING', () => {
    const action = { type: ACTION_CONSTANTS.IS_FORM_SUBMISSION_LOADING, payload: true };
    const expectedState = { ...initialState, isFormSubmissionLoading: true };
    expect(formDelete(initialState, action)).toEqual(expectedState);
  });

  it('should handle IS_FORM_WORKFLOW_SAVED', () => {
    const action = { type: ACTION_CONSTANTS.IS_FORM_WORKFLOW_SAVED, payload: true };
    const expectedState = { ...initialState, isFormWorkflowSaved: true };
    expect(formDelete(initialState, action)).toEqual(expectedState);
  });

  it('should handle PUBLIC_FORM_SUBMIT', () => {
    const action = { type: ACTION_CONSTANTS.PUBLIC_FORM_SUBMIT, payload: true };
    const expectedState = { ...initialState, formSubmitted: true };
    expect(formDelete(initialState, action)).toEqual(expectedState);
  });

  it('should handle PUBLIC_FORM_STATUS', () => {
    const payload = { anonymous: false, status: 'inactive' };
    const action = { type: ACTION_CONSTANTS.PUBLIC_FORM_STATUS, payload };
    const expectedState = { ...initialState, publicFormStatus: payload };
    expect(formDelete(initialState, action)).toEqual(expectedState);
  });

  it('should handle CUSTOM_SUBMISSION', () => {
    const payload = { field1: "value1", field2: "value2" };
    const action = { type: ACTION_CONSTANTS.CUSTOM_SUBMISSION, payload };
    const expectedState = { ...initialState, customSubmission: payload };
    expect(formDelete(initialState, action)).toEqual(expectedState);
  });
});
