import bpmTasks from '../../modules/bpmTaskReducer';
import ACTION_CONSTANTS from '../../actions/actionConstants';
import { TASK_FILTER_LIST_DEFAULT_PARAM } from '../../constants/taskConstants';
import { QUERY_TYPES } from '../../components/ServiceFlow/constants/taskConstants';

describe('bpmTasks reducer', () => {
    const initialState = {
        isTaskListLoading: true,
        tasksList: [],
        tasksCount: 0,
        taskDetail: null,
        isTaskUpdating: false,
        appHistory: [],
        isHistoryListLoading: true,
        isTaskDetailLoading: true,
        isTaskDetailUpdating: false,
        isGroupLoading: false,
        processList: [],
        userList: [],
        filterList: [],
        isFilterLoading: true,
        selectedFilter: null,
        taskId: null,
        filterListSortParams: { sorting: [{ ...TASK_FILTER_LIST_DEFAULT_PARAM }] },
        filterSearchSelections: [],
        filterListSearchParams: {},
        listReqParams: { sorting: [{ ...TASK_FILTER_LIST_DEFAULT_PARAM }] },
        searchQueryType: QUERY_TYPES.ALL,
        variableNameIgnoreCase: false,
        variableValueIgnoreCase: false,
        taskGroups: [],
        taskFormSubmissionReload: false,
        activePage: 1,
        firstResult: 0,
    };

    it('should return the initial state', () => {
        expect(bpmTasks(undefined, {})).toEqual(initialState);
    });

    it('should handle IS_BPM_TASK_LOADING', () => {
        const action = { type: ACTION_CONSTANTS.IS_BPM_TASK_LOADING, payload: false };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            isTaskListLoading: false,
        });
    });

    it('should handle IS_BPM_TASK_DETAIL_LOADING', () => {
        const action = { type: ACTION_CONSTANTS.IS_BPM_TASK_DETAIL_LOADING, payload: false };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            isTaskDetailLoading: false,
        });
    });

    it('should handle IS_BPM_TASK_DETAIL_UPDATING', () => {
        const action = { type: ACTION_CONSTANTS.IS_BPM_TASK_DETAIL_UPDATING, payload: true };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            isTaskDetailUpdating: true,
        });
    });

    it('should handle BPM_LIST_TASKS', () => {
        const tasksList = [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }];
        const action = { type: ACTION_CONSTANTS.BPM_LIST_TASKS, payload: tasksList };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            tasksList: tasksList,
        });
    });

    it('should handle BPM_PROCESS_LIST', () => {
        const processList = ['process1', 'process2'];
        const action = { type: ACTION_CONSTANTS.BPM_PROCESS_LIST, payload: processList };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            processList: processList,
        });
    });

    it('should handle BPM_USER_LIST', () => {
        const userList = ['user1', 'user2'];
        const action = { type: ACTION_CONSTANTS.BPM_USER_LIST, payload: userList };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            userList: userList,
        });
    });

    it('should handle BPM_TASKS_COUNT', () => {
        const tasksCount = 10;
        const action = { type: ACTION_CONSTANTS.BPM_TASKS_COUNT, payload: { count: tasksCount } };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            tasksCount: tasksCount,
        });
    });

    it('should handle BPM_TASK_DETAIL', () => {
        const taskDetail = { id: 1, name: 'Task 1' };
        const action = { type: ACTION_CONSTANTS.BPM_TASK_DETAIL, payload: taskDetail };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            taskDetail: taskDetail,
        });
    });

    it('should handle IS_BPM_TASK_UPDATING', () => {
        const action = { type: ACTION_CONSTANTS.IS_BPM_TASK_UPDATING, payload: true };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            isTaskUpdating: true,
        });
    });

    it('should handle IS_HISTORY_LOADING', () => {
        const action = { type: ACTION_CONSTANTS.IS_HISTORY_LOADING, payload: true };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            isHistoryListLoading: true,
        });
    });

    it('should handle LIST_APPLICATION_HISTORY', () => {
        const appHistory = ['history1', 'history2'];
        const action = { type: ACTION_CONSTANTS.LIST_APPLICATION_HISTORY, payload: appHistory };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            appHistory: appHistory,
        });
    });

    it('should handle BPM_FILTER_LIST', () => {
        const filterList = [{ name: 'Filter 1', id: 1 }, { name: 'Filter 2', id: 2 }];
        const action = { type: ACTION_CONSTANTS.BPM_FILTER_LIST, payload: filterList };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            filterList: filterList,
        });
    });

    it('should handle IS_BPM_FILTERS_LOADING', () => {
        const action = { type: ACTION_CONSTANTS.IS_BPM_FILTERS_LOADING, payload: true };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            isFilterLoading: true,
        });
    });

    it('should handle BPM_SELECTED_FILTER', () => {
        const selectedFilter = { name: 'Filter 1', id: 1 };
        const action = { type: ACTION_CONSTANTS.BPM_SELECTED_FILTER, payload: selectedFilter };
        expect(bpmTasks(initialState, action)).toEqual({
            ...initialState,
            selectedFilter: selectedFilter,
        });
    });

});