import ACTION_CONSTANTS from "../../actions/actionConstants";
import {
    setFormSubmissionDeleteStatus,
    setFormSubmissionError,
    setFormSubmissionLoading,
    setFormDeleteStatus,
    setFormWorkflowSaved,
    setBPMFormList,
    setBPMFormListLoading,
    setBPMFormListPage,
    setBPMFormLimit,
    setMaintainBPMFormPagination,
    setBPMFormListSort,
    setFormSubmitted,
    setPublicFormStatus,
    setFormSuccessData,
    setFormRequestData,
    resetFormData,
    setFormFailureErrorData,
    setBpmFormSearch,
    setBpmFormType,
    setBpmFormLoading,
    clearFormError,
    clearSubmissionError,
    setRestoreFormId,
    setRestoreFormData,
    setFormHistories,
} from "../../actions/formActions";

describe("Form Actions", () => {
    it("should create an action to set form submission delete status", () => {
        const data = { id: 1, status: true };
        const expectedAction = {
            type: ACTION_CONSTANTS.FORM_SUBMISSION_DELETE,
            payload: data,
        };
        const dispatch = jest.fn();
        setFormSubmissionDeleteStatus(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set form submission error", () => {
        const data = { id: 1, error: "Error message" };
        const expectedAction = {
            type: ACTION_CONSTANTS.FORM_SUBMISSION_ERROR,
            payload: data,
        };
        const dispatch = jest.fn();
        setFormSubmissionError(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set form submission loading", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_FORM_SUBMISSION_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setFormSubmissionLoading(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set form delete status", () => {
        const data = { id: 1, status: true };
        const expectedAction = {
            type: ACTION_CONSTANTS.FORM_DELETE,
            payload: data,
        };
        const dispatch = jest.fn();
        setFormDeleteStatus(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set form workflow saved", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_FORM_WORKFLOW_SAVED,
            payload: data,
        };
        const dispatch = jest.fn();
        setFormWorkflowSaved(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM form list", () => {
        const data = [{ id: 1, name: "Form 1" }, { id: 2, name: "Form 2" }];
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_FORM_LIST,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMFormList(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM form list loading", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_BPM_FORM_LIST_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setBPMFormListLoading(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set BPM form list page", () => {
        const page = 2;
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_FORM_LIST_PAGE_CHANGE,
            payload: page,
        };
        const dispatch = jest.fn();
        setBPMFormListPage(page)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set BPM form limit', () => {
        const pageLimit = 10;
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_FORM_LIST_LIMIT_CHANGE,
            payload: pageLimit,
        };
        const dispatch = jest.fn();
        setBPMFormLimit(pageLimit)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set maintain BPM form pagination', () => {
        const maintainList = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_MAINTAIN_PAGINATION,
            payload: maintainList,
        };
        const dispatch = jest.fn();
        setMaintainBPMFormPagination(maintainList)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set BPM form list sort', () => {
        const sort = 'asc';
        const expectedAction = {
            type: ACTION_CONSTANTS.BPM_FORM_LIST_SORT_CHANGE,
            payload: sort,
        };
        const dispatch = jest.fn();
        setBPMFormListSort(sort)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set public form submission", () => {
        const data = { id: 1, name: "Form 1" };
        const expectedAction = {
            type: ACTION_CONSTANTS.PUBLIC_FORM_SUBMIT,
            payload: data,
        };
        const dispatch = jest.fn();
        setFormSubmitted(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set public form status", () => {
        const data = { id: 1, status: "approved" };
        const expectedAction = {
            type: ACTION_CONSTANTS.PUBLIC_FORM_STATUS,
            payload: data,
        };
        const dispatch = jest.fn();
        setPublicFormStatus(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set form success data", () => {
        const name = "John";
        const form = { id: 1, name: "Form 1" };
        const url = "https://example.com";
        const expectedAction = {
            type: ACTION_CONSTANTS.FORM_SUCCESS,
            name,
            form,
            url,
        };
        const dispatch = jest.fn();
        setFormSuccessData(name, form, url)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set form request data", () => {
        const name = "John";
        const id = 1;
        const url = "https://example.com";
        const expectedAction = {
            type: ACTION_CONSTANTS.FORM_REQUEST,
            name,
            id,
            url,
        };
        const dispatch = jest.fn();
        setFormRequestData(name, id, url)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to reset form data', () => {
        const name = 'form1';
        const expectedAction = {
          type: ACTION_CONSTANTS.FORM_RESET,
          name,
        };
        const dispatch = jest.fn();
        resetFormData(name)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it('should create an action to set form failure error data', () => {
        const name = 'form1';
        const error = 'Something went wrong';
        const expectedAction = {
          type: ACTION_CONSTANTS.FORM_FAILURE,
          name,
          error,
        };
        const dispatch = jest.fn();
        setFormFailureErrorData(name, error)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it('should create an action to set BPM form search', () => {
        const data = 'search query';
        const expectedAction = {
          type: ACTION_CONSTANTS.BPM_FORM_SEARCH,
          payload: data,
        };
        const dispatch = jest.fn();
        setBpmFormSearch(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });

      it('should create an action to set the bpm form type', () => {
        const data = 'some data';
        const expectedAction = {
          type: ACTION_CONSTANTS.BPM_FORM_TYPE,
          payload: data,
        };
        const dispatch = jest.fn();
        setBpmFormType(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it('should create an action to set the bpm form loading state', () => {
        const data = true;
        const expectedAction = {
          type: ACTION_CONSTANTS.BPM_FORM_LOADING,
          payload: data,
        };
        const dispatch = jest.fn();
        setBpmFormLoading(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it('should create an action to clear a form error', () => {
        const name = 'some error';
        const expectedAction = {
          type: ACTION_CONSTANTS.FORM_CLEAR_ERROR,
          name,
        };
        const dispatch = jest.fn();
        clearFormError(name)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it('should create an action to clear a submission error', () => {
        const name = 'some error';
        const expectedAction = {
          type: ACTION_CONSTANTS.SUBMISSION_CLEAR_ERROR,
          name,
        };
        const dispatch = jest.fn();
        clearSubmissionError(name)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it('should create an action to set the restore form id', () => {
        const form_id = 'some id';
        const expectedAction = {
          type: ACTION_CONSTANTS.RESTORE_FORM_ID,
          payload: form_id,
        };
        const dispatch = jest.fn();
        setRestoreFormId(form_id)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it('should create an action to set the restore form data', () => {
        const formData = { data: 'some data' };
        const expectedAction = {
          type: ACTION_CONSTANTS.RESTORE_FORM_DATA,
          payload: formData,
        };
        const dispatch = jest.fn();
        setRestoreFormData(formData)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
    
      it('should create an action to set the form histories', () => {
        const historyData = [{ data: 'some data' }];
        const expectedAction = {
          type: ACTION_CONSTANTS.FORM_HISTORY,
          payload: historyData,
        };
        const dispatch = jest.fn();
        setFormHistories(historyData)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
      });
});
