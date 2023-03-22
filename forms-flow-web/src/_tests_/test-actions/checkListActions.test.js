import {
    setFormCheckList,
      setFormUploadList,
      updateFormUploadCounter,
      formUploadFailureCount,
      setFormLoading,
      setFormSearchLoading,
      setCustomSubmission,
} from "../../actions/checkListActions";
import ACTION_CONSTANTS from "../../actions/actionConstants";

describe("actions", () => {
    it("should create an action to set form check list", () => {
        const listData = [{ name: "Item 1" }, { name: "Item 2" }];
        const expectedAction = {
            type: ACTION_CONSTANTS.FORM_CHECK_LIST_UPDATE,
            payload: listData,
        };
        const dispatch = jest.fn();
        setFormCheckList(listData)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
    it("should create an action to set form upload list", () => {
        const listData = [{ name: "File 1" }, { name: "File 2" }];
        const expectedAction = {
          type: ACTION_CONSTANTS.FORM_UPLOAD_LIST,
          payload: listData,
        };
        const dispatch = jest.fn();
        setFormUploadList(listData)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it("should create an action to update form upload counter", () => {
        const expectedAction = {
          type: ACTION_CONSTANTS.FORM_UPLOAD_COUNTER,
        };
        const dispatch = jest.fn();
        updateFormUploadCounter()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it("should create an action to form upload failure count", () => {
        const expectedAction = {
          type: ACTION_CONSTANTS.FORM_UPLOAD_FAILURE_COUNTER,
        };
        const dispatch = jest.fn();
        formUploadFailureCount()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it("should create an action to set form loading state", () => {
        const data = true;
        const expectedAction = {
          type: ACTION_CONSTANTS.IS_FORM_LOADING,
          payload: data,
        };
        const dispatch = jest.fn();
        setFormLoading(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it("should create an action to set form search loading state", () => {
        const data = true;
        const expectedAction = {
          type: ACTION_CONSTANTS.IS_FORM_SEARCH_LOADING,
          payload: data,
        };
        const dispatch = jest.fn();
        setFormSearchLoading(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it("should create an action to set custom submission data", () => {
        const data = { name: "John", age: 30 };
        const expectedAction = {
          type: ACTION_CONSTANTS.CUSTOM_SUBMISSION,
          payload: data,
        };
        const dispatch = jest.fn();
        setCustomSubmission(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
});