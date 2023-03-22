import process from "../../modules/processReducer";
import ACTION_CONSTANTS from "../../actions/actionConstants";

describe('process reducer', () => {
    const initialState = {
        isProcessLoading: true,
        processStatusList: [],
        processLoadError: false,
        processList: [],
        dmnProcessList: [],
        formProcessError: false,
        formProcessList: [],
        formPreviousData: [],
        processActivityList: null,
        processDiagramXML: "",
        processActivityLoadError: false,
        isProcessDiagramLoading: true,
        applicationCount: 0,
        isApplicationCountLoading: false,
        applicationCountResponse: false,
        unPublishApiError: false,
        workflowAssociated: null, //{label:'Workflow Name', value:'workflow_process_key'}
        formStatusLoading: false,
    };

    it('should return the initial state', () => {
        expect(process(undefined, {})).toEqual(initialState);
    });

    it('should handle IS_PROCESS_STATUS_LOADING', () => {
        const action = {
            type: ACTION_CONSTANTS.IS_PROCESS_STATUS_LOADING,
            payload: false,
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            isProcessLoading: false,
        });
    });

    it('should handle PROCESS_STATUS_LIST', () => {
        const action = {
            type: ACTION_CONSTANTS.PROCESS_STATUS_LIST,
            payload: ['status1', 'status2'],
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            processStatusList: ['status1', 'status2'],
        });
    });

    it('should handle IS_PROCESS_STATUS_LOAD_ERROR', () => {
        const action = {
            type: ACTION_CONSTANTS.IS_PROCESS_STATUS_LOAD_ERROR,
            payload: true,
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            processLoadError: true,
        });
    });

    it("should handle IS_PROCESS_ACTIVITY_LOAD_ERROR", () => {
        const action = {
            type: ACTION_CONSTANTS.IS_PROCESS_ACTIVITY_LOAD_ERROR,
            payload: true,
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            processActivityLoadError: true,
        });
    });

    it("should handle PROCESS_LIST", () => {
        const action = {
            type: ACTION_CONSTANTS.PROCESS_LIST,
            payload: ["process1", "process2"],
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            processList: ["process1", "process2"],
        });
    });

    it("should handle DMN_PROCESS_LIST", () => {
        const action = {
            type: ACTION_CONSTANTS.DMN_PROCESS_LIST,
            payload: ["dmn1", "dmn2"],
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            dmnProcessList: ["dmn1", "dmn2"],
        });
    });

    it("should handle IS_FORM_PROCESS_STATUS_LOAD_ERROR", () => {
        const action = {
            type: ACTION_CONSTANTS.IS_FORM_PROCESS_STATUS_LOAD_ERROR,
            payload: true,
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            formProcessError: true,
        });
    });

    it('should handle FORM_PROCESS_LIST', () => {
        const action = {
            type: ACTION_CONSTANTS.FORM_PROCESS_LIST,
            payload: [
                {
                    processName: 'Process A',
                    processKey: 'process_a',
                    processTenant: 'tenant_a',
                },
                {
                    processName: 'Process B',
                    processKey: 'process_b',
                    processTenant: 'tenant_b',
                },
            ],
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            formProcessList: [
                {
                    processName: 'Process A',
                    processKey: 'process_a',
                    processTenant: 'tenant_a',
                },
                {
                    processName: 'Process B',
                    processKey: 'process_b',
                    processTenant: 'tenant_b',
                },
            ],
            workflowAssociated: null,
        });
    });


    it('should handle PROCESS_ACTIVITIES', () => {
        const action = {
            type: ACTION_CONSTANTS.PROCESS_ACTIVITIES,
            payload: [{ id: 1, name: 'Task A' }, { id: 2, name: 'Task B' }],
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            processActivityList: [{ id: 1, name: 'Task A' }, { id: 2, name: 'Task B' }],
        });

    });

    it('should handle PROCESS_DIAGRAM_XML', () => {
        const action = {
            type: ACTION_CONSTANTS.PROCESS_DIAGRAM_XML,
            payload: '<bpmn></bpmn>',
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            processDiagramXML: '<bpmn></bpmn>',
        });
    });

    it('should handle IS_PROCESS_DIAGRAM_LOADING', () => {
        const action = {
            type: ACTION_CONSTANTS.IS_PROCESS_DIAGRAM_LOADING,
            payload: false,
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            isProcessDiagramLoading: false,
        });
    });

    it('should handle FORM_PREVIOUS_DATA', () => {
        const action = {
            type: ACTION_CONSTANTS.FORM_PREVIOUS_DATA,
            payload: { name: 'Test' },
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            formPreviousData: { name: 'Test' },
        });
    });

    it('should handle APPLICATION_COUNT', () => {
        const action = {
            type: ACTION_CONSTANTS.APPLICATION_COUNT,
            payload: 10,
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            applicationCount: 10,
        });
    });

    it('should handle IS_APPLICATION_COUNT_LOADING', () => {
        const action = {
            type: ACTION_CONSTANTS.IS_APPLICATION_COUNT_LOADING,
            payload: 10,
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            isApplicationCountLoading: 10,
        });
    });

    it('should handle APPLICATION_COUNT_RESPONSE', () => {
        const action = {
            type: ACTION_CONSTANTS.APPLICATION_COUNT_RESPONSE,
            payload: true,
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            applicationCountResponse: true,
        });
    });

    it('should handle UNPUBLISH_API_ERROR', () => {
        const action = {
            type: ACTION_CONSTANTS.UNPUBLISH_API_ERROR,
            payload: 'An error occurred while unpublishing the API',
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            unPublishApiError: 'An error occurred while unpublishing the API',
        });
    });

    it('should handle RESET_PROCESS', () => {
        const action = { type: ACTION_CONSTANTS.RESET_PROCESS };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            formPreviousData: [],
            formProcessList: [],
            processDiagramXML: "",
            isProcessDiagramLoading: true,
            applicationCount: 0,
            applicationCountResponse: false,
        });
    });    

    it('should handle WORKFLOW_ASSOCIATION_CHANGED', () => {
        const action = {
            type: ACTION_CONSTANTS.WORKFLOW_ASSOCIATION_CHANGED,
            payload: '12345',
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            workflowAssociated: '12345',
        });
    });

    it('should handle FORM_STATUS_LOADING', () => {
        const action = {
            type: ACTION_CONSTANTS.FORM_STATUS_LOADING,
            payload: true,
        };
        expect(process(initialState, action)).toEqual({
            ...initialState,
            formStatusLoading: true,
        });
    });
});
