import ACTION_CONSTANTS from "../../actions/actionConstants";
import { setBPMTaskLoader, setBPMTaskDetailLoader, updateBPMTaskGroups, setBPMTaskGroupsLoading, setBPMTaskDetailUpdating, setBPMTaskUpdateLoader, setBPMTaskList, setBPMProcessList, setBPMUserList, setBPMTaskCount, setBPMTaskListActivePage, setBPMTaskDetail, setBPMFilterLoader, setBPMFilterList, setSelectedBPMFilter, setSelectedTaskID, setFilterListSortParams, setFilterListSearchParams, setFilterListParams, setSearchQueryType, setIsVariableNameIgnoreCase, setIsVariableValueIgnoreCase, reloadTaskFormSubmission, serviceActionError, } from "../../actions/bpmTaskActions";

describe("BPM ACTION_CONSTANTS", () => {
    it("should create an action to set BPM task loader", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_BPM_TASK_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMTaskLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM task detail loader", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_BPM_TASK_DETAIL_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMTaskDetailLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to update BPM task groups", () => {
        const data = { group: "Group 1", count: 5 };
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_TASK_GROUP,
            payload: data,
        };
        const dispatch = jest.fn();
        updateBPMTaskGroups(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM task groups loading", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_TASK_GROUP_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMTaskGroupsLoading(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM task detail updating", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_BPM_TASK_DETAIL_UPDATING,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMTaskDetailUpdating(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM task update loader", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_BPM_TASK_UPDATING,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMTaskUpdateLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM task list", () => {
        const data = [{ id: 1, name: "Task 1" }, { id: 2, name: "Task 2" }];
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_LIST_TASKS,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMTaskList(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM process list", () => {
        const data = [{ id: 1, name: "Process 1" }, { id: 2, name: "Process 2" }];
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_PROCESS_LIST,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMProcessList(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM user list", () => {
        const data = [{ id: 1, name: "User 1" }, { id: 2, name: "User 2" }];
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_USER_LIST,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMUserList(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM task count", () => {
        const data = 10;
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_TASKS_COUNT,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMTaskCount(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM task list active page", () => {
        const data = 2;
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_TASK_LIST_ACTIVE_PAGE,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMTaskListActivePage(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM task detail", () => {
        const data = { id: 1, name: "Task 1" };
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_TASK_DETAIL,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMTaskDetail(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM filter loader", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_BPM_FILTERS_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMFilterLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM filter list", () => {
        const data = [{ id: 1, name: "Filter 1" }, { id: 2, name: "Filter 2" },];
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_FILTER_LIST,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMFilterList(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set selected BPM filter", () => {
        const data = { id: 1, name: "Filter 1" };
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_SELECTED_FILTER,
            payload: data,
        };
        const dispatch = jest.fn();
        setSelectedBPMFilter(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set selected task ID", () => {
        const data = 1;
        const expectedAction = {
            type: ACTION_CONSTANTS.SELECTED_TASK_ID,
            payload: data,
        };
        const dispatch = jest.fn();
        setSelectedTaskID(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set filter list sort params", () => {
        const data = { sortBy: "name", sortOrder: "asc" };
        const expectedAction = {
            type: ACTION_CONSTANTS.UPDATE_FILTER_LIST_SORT_PARAMS,
            payload: data,
        };
        const dispatch = jest.fn();
        setFilterListSortParams(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set filter list search params", () => {
        const data = { searchBy: "name", searchTerm: "Filter 1" };
        const expectedAction = {
            type: ACTION_CONSTANTS.UPDATE_FILTER_LIST_SEARCH_PARAMS,
            payload: data,
        };
        const dispatch = jest.fn();
        setFilterListSearchParams(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch UPDATE_LIST_PARAMS action with the given data', () => {
        const data = { page: 1, pageSize: 10 };
        const expectedAction = {
            type: ACTION_CONSTANTS.UPDATE_LIST_PARAMS,
            payload: data,
        };
        const dispatch = jest.fn();
        setFilterListParams(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch UPDATE_SEARCH_QUERY_TYPE action with the given data', () => {
        const data = 'someValue';
        const expectedAction = {
            type: 'UPDATE_SEARCH_QUERY_TYPE',
            payload: data
        };
        const dispatch = jest.fn();
        setSearchQueryType(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch UPDATE_VARIABLE_NAME_IGNORE_CASE action with the given data', () => {
        const data = true;
        const expectedAction = {
            type: 'UPDATE_VARIABLE_NAME_IGNORE_CASE',
            payload: data
        };
        const dispatch = jest.fn();
        setIsVariableNameIgnoreCase(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch UPDATE_VARIABLE_VALUE_IGNORE_CASE action with the given data', () => {
        const data = false;
        const expectedAction = {
            type: 'UPDATE_VARIABLE_VALUE_IGNORE_CASE',
            payload: data
        };
        const dispatch = jest.fn();
        setIsVariableValueIgnoreCase(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch RELOAD_TASK_FORM_SUBMISSION action with the given data', () => {
        const data = { someParam: 'someValue' };
        const expectedAction = {
            type: 'RELOAD_TASK_FORM_SUBMISSION',
            payload: data
        };
        const dispatch = jest.fn();
        reloadTaskFormSubmission(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should dispatch ERROR action with the error message', () => {
        const data = 'Error message';
        const expectedAction = {
            type: 'ERROR',
            payload: 'Error Handling API'
        };
        const dispatch = jest.fn();
        serviceActionError(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
});  