import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('ACTION_CONSTANTS', () => {
    test('should contain the correct properties', () => {
        expect(ACTION_CONSTANTS).toHaveProperty('SET_CURRENT_PAGE');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_USER_AUTHENTICATION');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_USER_TOKEN');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_USER_ROLES');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_USER_DETAILS');
        expect(ACTION_CONSTANTS).toHaveProperty('ERROR');
        expect(ACTION_CONSTANTS).toHaveProperty('IS_LOADING');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_LANGUAGE');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_SELECT_LANGUAGES');
        expect(ACTION_CONSTANTS).toHaveProperty('ROLE_IDS');
        expect(ACTION_CONSTANTS).toHaveProperty('ACCESS_ADDING');
    });

    test('should contain the correct properties of form', () => {
        expect(ACTION_CONSTANTS).toHaveProperty('FORM_DELETE');
        expect(ACTION_CONSTANTS).toHaveProperty('RESTORE_FORM_ID');
        expect(ACTION_CONSTANTS).toHaveProperty('RESTORE_FORM_DATA');
        expect(ACTION_CONSTANTS).toHaveProperty('FORM_HISTORY');
        expect(ACTION_CONSTANTS).toHaveProperty('FORM_SUBMISSION_DELETE');
        expect(ACTION_CONSTANTS).toHaveProperty('FORM_SUBMISSION_ERROR');
        expect(ACTION_CONSTANTS).toHaveProperty('IS_FORM_SUBMISSION_LOADING');
        expect(ACTION_CONSTANTS).toHaveProperty('IS_FORM_WORKFLOW_SAVED');
        expect(ACTION_CONSTANTS).toHaveProperty('PUBLIC_FORM_SUBMIT');
        expect(ACTION_CONSTANTS).toHaveProperty('PUBLIC_FORM_STATUS');
        expect(ACTION_CONSTANTS).toHaveProperty('IS_FORM_LOADING');
        expect(ACTION_CONSTANTS).toHaveProperty('APPLICATION_COUNT');
        expect(ACTION_CONSTANTS).toHaveProperty('IS_APPLICATION_COUNT_LOADING');
        expect(ACTION_CONSTANTS).toHaveProperty('APPLICATION_COUNT_RESPONSE');
        expect(ACTION_CONSTANTS).toHaveProperty('UNPUBLISH_API_ERROR');
        expect(ACTION_CONSTANTS).toHaveProperty('IS_PUBLIC_STATUS_LOADING');
        expect(ACTION_CONSTANTS).toHaveProperty('IS_FORM_SEARCH_LOADING');
    });

    test('should contain the correct properties of custom submission', () => {
        expect(ACTION_CONSTANTS).toHaveProperty('CUSTOM_SUBMISSION');
    });

    test('should contain the correct properties of React Formio Action Constants', () => {
        expect(ACTION_CONSTANTS).toHaveProperty("FORM_CLEAR_ERROR");
        expect(ACTION_CONSTANTS).toHaveProperty("FORM_REQUEST");
        expect(ACTION_CONSTANTS).toHaveProperty("FORM_SUCCESS");
        expect(ACTION_CONSTANTS).toHaveProperty("FORM_FAILURE");
        expect(ACTION_CONSTANTS).toHaveProperty("FORM_SAVE");
        expect(ACTION_CONSTANTS).toHaveProperty("FORM_RESET");
        expect(ACTION_CONSTANTS).toHaveProperty("SUBMISSION_CLEAR_ERROR");
    });

    test('should contain the correct properties of dashboard', () => {
        expect(ACTION_CONSTANTS).toHaveProperty("LIST_DASHBOARDS");
        expect(ACTION_CONSTANTS).toHaveProperty("DASHBOARD_DETAIL");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_DASHBOARD_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_INSIGHT_DETAIL_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("INSIGHT_ERROR");
        expect(ACTION_CONSTANTS).toHaveProperty("CLEANUP_INSIGHTS");
    });

    test('should contain the correct properties of metrics', () => {
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_SUBMISSION_DATE");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_LIST");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_SUBMISSIONS");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_METRICS_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_SUBMISSIONS_STATUS");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_METRICS_STATUS_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("SELECTED_METRICS_ID");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_LOAD_ERROR");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_STATUS_LOAD_ERROR");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_PROCESS_STATUS_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("PROCESS_STATUS_LIST");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_PROCESS_STATUS_LOAD_ERROR");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_PROCESS_ACTIVITY_LOAD_ERROR");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_SUBMISSIONS_SEARCH");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_SUBMISSIONS_SORT_CHANGE");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_SUBMISSIONS_LIST_LIMIT_CHANGE");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_SUBMISSIONS_LIST_PAGE_CHANGE");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_DATE_RANGE_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_SUBMISSION_STATUS_COUNT_LOADER");
        expect(ACTION_CONSTANTS).toHaveProperty("METRICS_SUBMISSIONS_COUNT");
    });

    test('should contain the correct properties of application history', () => {
        expect(ACTION_CONSTANTS).toHaveProperty("LIST_APPLICATION_HISTORY");
        expect(ACTION_CONSTANTS).toHaveProperty("APPLICATION_HISTORY_DETAIL");
        expect(ACTION_CONSTANTS).toHaveProperty("PROCESS_LIST");
        expect(ACTION_CONSTANTS).toHaveProperty("DMN_PROCESS_LIST");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_HISTORY_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_FORM_PROCESS_STATUS_LOAD_ERROR");
        expect(ACTION_CONSTANTS).toHaveProperty("FORM_PROCESS_LIST");
        expect(ACTION_CONSTANTS).toHaveProperty("WORKFLOW_ASSOCIATION_CHANGED");
    });

    test('should contain the correct properties of application', () => {
        expect(ACTION_CONSTANTS).toHaveProperty("LIST_APPLICATIONS");
        expect(ACTION_CONSTANTS).toHaveProperty("LIST_APPLICATIONS_OF_FORM");
        expect(ACTION_CONSTANTS).toHaveProperty("APPLICATION_DETAIL");
        expect(ACTION_CONSTANTS).toHaveProperty("APPLICATION_DETAIL_STATUS_CODE");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_APPLICATION_LIST_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_APPLICATION_DETAIL_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_APPLICATION_UPDATING");
        expect(ACTION_CONSTANTS).toHaveProperty("APPLICATION_PROCESS");
        expect(ACTION_CONSTANTS).toHaveProperty("SET_APPLICATION_LIST_COUNT");
        expect(ACTION_CONSTANTS).toHaveProperty("PROCESS_ACTIVITIES");
        expect(ACTION_CONSTANTS).toHaveProperty("PROCESS_DIAGRAM_XML");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_PROCESS_DIAGRAM_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("APPLICATION_LIST_ACTIVE_PAGE");
        expect(ACTION_CONSTANTS).toHaveProperty("APPLICATION_STATUS_LIST");
        expect(ACTION_CONSTANTS).toHaveProperty("APPLICATIONS_ERROR");
        expect(ACTION_CONSTANTS).toHaveProperty("FORM_PREVIOUS_DATA");
    });

    test('should contain the correct properties of menu', () => {
        expect(ACTION_CONSTANTS).toHaveProperty("TOGGLE_MENU");
    });

    test('should contain the correct properties of BPM tasks', () => {
        expect(ACTION_CONSTANTS).toHaveProperty("BPM_LIST_TASKS");
        expect(ACTION_CONSTANTS).toHaveProperty("BPM_PROCESS_LIST");
        expect(ACTION_CONSTANTS).toHaveProperty("BPM_USER_LIST");
        expect(ACTION_CONSTANTS).toHaveProperty("BPM_TASKS_COUNT");
        expect(ACTION_CONSTANTS).toHaveProperty("BPM_TASK_DETAIL");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_BPM_TASK_UPDATING");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_BPM_TASK_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_BPM_TASK_DETAIL_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_BPM_TASK_DETAIL_UPDATING");
        expect(ACTION_CONSTANTS).toHaveProperty("BPM_FILTER_LIST");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_BPM_FILTERS_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("BPM_SELECTED_FILTER");
        expect(ACTION_CONSTANTS).toHaveProperty("SELECTED_TASK_ID");
        expect(ACTION_CONSTANTS).toHaveProperty("SET_TASK_GROUP");
        expect(ACTION_CONSTANTS).toHaveProperty("IS_TASK_GROUP_LOADING");
        expect(ACTION_CONSTANTS).toHaveProperty("UPDATE_FILTER_LIST_SORT_PARAMS");
        expect(ACTION_CONSTANTS).toHaveProperty("UPDATE_FILTER_LIST_SEARCH_PARAMS");
        expect(ACTION_CONSTANTS).toHaveProperty("UPDATE_LIST_PARAMS");
        expect(ACTION_CONSTANTS).toHaveProperty("UPDATE_SEARCH_QUERY_TYPE");
        expect(ACTION_CONSTANTS).toHaveProperty("UPDATE_VARIABLE_NAME_IGNORE_CASE");
        expect(ACTION_CONSTANTS).toHaveProperty("UPDATE_VARIABLE_VALUE_IGNORE_CASE");
        expect(ACTION_CONSTANTS).toHaveProperty("RELOAD_TASK_FORM_SUBMISSION");
        expect(ACTION_CONSTANTS).toHaveProperty("BPM_TASK_LIST_ACTIVE_PAGE");
        expect(ACTION_CONSTANTS).toHaveProperty("DEPLOYMENT_LIST");
    });

    test('should have the correct BPM FORM actions', () => {
        expect(ACTION_CONSTANTS).toHaveProperty('BPM_FORM_LIST');
        expect(ACTION_CONSTANTS).toHaveProperty('IS_BPM_FORM_LIST_LOADING');
        expect(ACTION_CONSTANTS).toHaveProperty('BPM_FORM_LIST_PAGE_CHANGE');
        expect(ACTION_CONSTANTS).toHaveProperty('BPM_FORM_LIST_LIMIT_CHANGE');
        expect(ACTION_CONSTANTS).toHaveProperty('BPM_FORM_LIST_SORT_CHANGE');
        expect(ACTION_CONSTANTS).toHaveProperty('BPM_MAINTAIN_PAGINATION');
        expect(ACTION_CONSTANTS).toHaveProperty('BPM_FORM_SEARCH');
        expect(ACTION_CONSTANTS).toHaveProperty('BPM_FORM_TYPE');
        expect(ACTION_CONSTANTS).toHaveProperty('BPM_FORM_LOADING');
    });

    test('should have the correct CHECKLIST FORM actions', () => {
        expect(ACTION_CONSTANTS).toHaveProperty('FORM_CHECK_LIST_UPDATE');
        expect(ACTION_CONSTANTS).toHaveProperty('FORM_UPLOAD_LIST');
        expect(ACTION_CONSTANTS).toHaveProperty('FORM_UPLOAD_COUNTER');
        expect(ACTION_CONSTANTS).toHaveProperty('FORM_UPLOAD_FAILURE_COUNTER');
        expect(ACTION_CONSTANTS).toHaveProperty('CHANGE_SIZE_PER_PAGE');
    });

    test('should have the correct DASHBOARD actions', () => {
        expect(ACTION_CONSTANTS).toHaveProperty('DASHBOARDS_LIST');
        expect(ACTION_CONSTANTS).toHaveProperty('DASHBOARDS_LIST_ERROR');
        expect(ACTION_CONSTANTS).toHaveProperty('DASHBOARDS_LIST_GROUPS');
        expect(ACTION_CONSTANTS).toHaveProperty('DASHBOARDS_UPDATE_ERROR');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_AUTHORIZATIONS');
        expect(ACTION_CONSTANTS).toHaveProperty('UPDATE_AUTHORIZATIONS');
    });

    test('should have the correct PROCESS actions', () => {
        expect(ACTION_CONSTANTS).toHaveProperty('RESET_PROCESS');
        expect(ACTION_CONSTANTS).toHaveProperty('FORM_STATUS_LOADING');
    });

    test('should have the correct TENANT actions', () => {
        expect(ACTION_CONSTANTS).toHaveProperty('RESET_TENANT');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_TENANT_DETAILS');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_TENANT_ID');
        expect(ACTION_CONSTANTS).toHaveProperty('IS_TENANT_DETAIL_LOADING');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_TENANT_DATA');
    });

    test('should have the correct DRAFT actions', () => {
        expect(ACTION_CONSTANTS).toHaveProperty('SAVE_DRAFT_DATA');
        expect(ACTION_CONSTANTS).toHaveProperty('DRAFT_SUBMISSION_ERROR');
        expect(ACTION_CONSTANTS).toHaveProperty('DRAFT_LIST');
        expect(ACTION_CONSTANTS).toHaveProperty('DRAFT_DETAIL');
        expect(ACTION_CONSTANTS).toHaveProperty('DRAFT_COUNT');
        expect(ACTION_CONSTANTS).toHaveProperty('DRAFT_LIST_LOADER');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_DRAFT_LIST_ACTIVE_PAGE');
        expect(ACTION_CONSTANTS).toHaveProperty('SET_DRAFT_COUNT_PER_PAGE');
        expect(ACTION_CONSTANTS).toHaveProperty('DRAFT_DETAIL_STATUS_CODE');
        expect(ACTION_CONSTANTS).toHaveProperty('DRAFT_LAST_UPDATED');
        expect(ACTION_CONSTANTS).toHaveProperty('DRAFT_DELETE');
    });

});
