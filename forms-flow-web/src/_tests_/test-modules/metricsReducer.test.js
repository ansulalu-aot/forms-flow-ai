import metrics from '../../modules/metricsReducer';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('metrics reducer', () => {
    const now = new Date();
    let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const initialState = {
        submissionDate: [
            firstDay,
            lastDay
        ],
        sortOrder: 'asc',
        totalItems: 0,
        isMetricsLoading: true,
        submissionsList: [],
        submissionsSearchList: [],
        submissionsFullList: [],
        submissionsStatusList: [],
        isMetricsStatusLoading: true,
        selectedMetricsId: 0,
        metricsLoadError: false,
        metricsStatusLoadError: false,
        limit: 6,
        pageno: 1,
        pagination: {
            numPages: 0,
            page: 1,
            total: 0,
        },
        sort: "formName",
        searchText: "",
        maintainPagination: false,
        metricsDateRangeLoader: undefined,
        submissionStatusCountLoader: false,
    };

    it('should return the initial state', () => {
        expect(metrics(undefined, {})).toEqual(initialState);
    });

    it('should handle METRICS_SUBMISSION_DATE', () => {
        const submissionDate = [new Date(2022, 1, 1), new Date(2022, 1, 28)];
        const expectedState = {
            ...initialState,
            submissionDate: submissionDate,
        };
        const action = {
            type: ACTION_CONSTANTS.METRICS_SUBMISSION_DATE,
            payload: submissionDate,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle IS_METRICS_LOADING', () => {
        const isMetricsLoading = true;
        const expectedState = {
            ...initialState,
            isMetricsLoading: isMetricsLoading,
        };
        const action = {
            type: ACTION_CONSTANTS.IS_METRICS_LOADING,
            payload: isMetricsLoading,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle IS_METRICS_STATUS_LOADING', () => {
        const isMetricsStatusLoading = true;
        const expectedState = {
            ...initialState,
            isMetricsStatusLoading: isMetricsStatusLoading,
        };
        const action = {
            type: ACTION_CONSTANTS.IS_METRICS_STATUS_LOADING,
            payload: isMetricsStatusLoading,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_SUBMISSIONS', () => {
        const submissionsList = ['submission1', 'submission2'];
        const expectedState = {
            ...initialState,
            submissionsList: submissionsList,
        };
        const action = {
            type: ACTION_CONSTANTS.METRICS_SUBMISSIONS,
            payload: submissionsList,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_SUBMISSIONS_COUNT', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_SUBMISSIONS_COUNT,
            payload: 10,
        };
        const expectedState = {
            ...initialState,
            totalItems: 10,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_SUBMISSIONS_SEARCH', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_SUBMISSIONS_SEARCH,
            payload: 'search text',
        };
        const expectedState = {
            ...initialState,
            searchText: 'search text',
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_SUBMISSIONS_SORT_CHANGE', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_SUBMISSIONS_SORT_CHANGE,
            payload: 'fieldName',
        };
        const expectedState = {
            ...initialState,
            sortOrder: 'fieldName',
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_SUBMISSIONS_LIST_PAGE_CHANGE', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_SUBMISSIONS_LIST_PAGE_CHANGE,
            payload: 2,
        };
        const expectedState = {
            ...initialState,
            pageno: 2,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_SUBMISSIONS_LIST_LIMIT_CHANGE', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_SUBMISSIONS_LIST_LIMIT_CHANGE,
            payload: 10,
        };
        const expectedState = {
            ...initialState,
            limit: 10,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_SUBMISSIONS_STATUS', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_SUBMISSIONS_STATUS,
            payload: ['status1', 'status2'],
        };
        const expectedState = {
            ...initialState,
            submissionsStatusList: ['status1', 'status2'],
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle SELECTED_METRICS_ID', () => {
        const action = {
            type: ACTION_CONSTANTS.SELECTED_METRICS_ID,
            payload: 12345,
        };
        const expectedState = {
            ...initialState,
            selectedMetricsId: action.payload,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_LOAD_ERROR', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_LOAD_ERROR,
            payload: true,
        };
        const expectedState = {
            ...initialState,
            metricsLoadError: action.payload,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_STATUS_LOAD_ERROR', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_STATUS_LOAD_ERROR,
            payload: true,
        };
        const expectedState = {
            ...initialState,
            metricsStatusLoadError: action.payload,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_DATE_RANGE_LOADING', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_DATE_RANGE_LOADING,
            payload: true,
        };
        const expectedState = {
            ...initialState,
            metricsDateRangeLoader: action.payload,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_SUBMISSION_RESET', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_SUBMISSION_RESET,
            payload: true,
        };
        const expectedState = {
            ...initialState,
            metricsDateRangeLoader: action.payload,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle METRICS_SUBMISSION_STATUS_COUNT_LOADER', () => {
        const action = {
            type: ACTION_CONSTANTS.METRICS_SUBMISSION_STATUS_COUNT_LOADER,
            payload: true,
        };
        const expectedState = {
            ...initialState,
            submissionStatusCountLoader: action.payload,
        };
        expect(metrics(initialState, action)).toEqual(expectedState);
    });

    it('should handle unknown action types', () => {
        const action = {
            type: 'UNKNOWN_ACTION_TYPE',
        };
        expect(metrics(initialState, action)).toEqual(initialState);
    });
});