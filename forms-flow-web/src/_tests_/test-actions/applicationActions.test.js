import {
    setApplicationList,
    setApplicationListByFormId,
    setApplicationDetail,
    setApplicationDetailStatusCode,
    setUpdateLoader,
    setApplicationListLoader,
    setApplicationDetailLoader,
    setApplicationProcess,
    setApplicationListCount,
    setApplicationListActivePage,
    setCountPerpage,
    setApplicationStatusList,
    setApplicationError,
    setPublicStatusLoading,
} from "../../actions/applicationActions";
import ACTION_CONSTANTS from "../../actions/actionConstants";

describe("Application actions", () => {
    it("should create an action to set application list", () => {
        const data = [{ id: 1, name: "Application 1" }];
        const expectedAction = {
            type: ACTION_CONSTANTS.LIST_APPLICATIONS,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationList(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set application list by form id", () => {
        const data = [{ id: 1, name: "Application 1" }];
        const expectedAction = {
            type: ACTION_CONSTANTS.LIST_APPLICATIONS_OF_FORM,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationListByFormId(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set application detail", () => {
        const data = { id: 1, name: "Application 1" };
        const expectedAction = {
            type: ACTION_CONSTANTS.APPLICATION_DETAIL,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationDetail(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set application detail status code", () => {
        const data = 200;
        const expectedAction = {
            type: ACTION_CONSTANTS.APPLICATION_DETAIL_STATUS_CODE,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationDetailStatusCode(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set update loader", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_APPLICATION_UPDATING,
            payload: data,
        };
        const dispatch = jest.fn();
        setUpdateLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set application list loader", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_APPLICATION_LIST_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationListLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set application detail loader", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_APPLICATION_DETAIL_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationDetailLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set application process", () => {
        const data = { id: 1, name: "Application 1" };
        const expectedAction = {
            type: ACTION_CONSTANTS.APPLICATION_PROCESS,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationProcess(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set application list count", () => {
        const data = 10;
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_APPLICATION_LIST_COUNT,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationListCount(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set application list active page", () => {
        const data = 1;
        const expectedAction = {
            type: ACTION_CONSTANTS.APPLICATION_LIST_ACTIVE_PAGE,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationListActivePage(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set count per page', () => {
        const data = 10;
        const expectedAction = {
            type: ACTION_CONSTANTS.CHANGE_SIZE_PER_PAGE,
            payload: data,
        };
        const dispatch = jest.fn();
        setCountPerpage(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set application status list', () => {
        const data = [{ id: 1, name: 'Submitted' }, { id: 2, name: 'Approved' }];
        const expectedAction = {
            type: ACTION_CONSTANTS.APPLICATION_STATUS_LIST,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationStatusList(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set application error', () => {
        const data = 'There was an error.';
        const expectedAction = {
            type: ACTION_CONSTANTS.APPLICATIONS_ERROR,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationError(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set public status loading', () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_PUBLIC_STATUS_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setPublicStatusLoading(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
});
