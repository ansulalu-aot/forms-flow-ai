import ACTION_CONSTANTS from "../../actions/actionConstants";
import formCheckList from "../../modules/formCheckListReducer";

describe("formCheckList reducer", () => {
  const initialState = {
    formList: [],
    formUploadFormList: [],
    formUploadCounter: 0,
    formUploadFailureCounter: 0,
    designerFormLoading: false,
    searchFormLoading:false,
  };

  it("should handle FORM_CHECK_LIST_UPDATE", () => {
    const formList = [{ id: 1, name: "Form 1" }, { id: 2, name: "Form 2" }];
    const action = { type: ACTION_CONSTANTS.FORM_CHECK_LIST_UPDATE, payload: formList };
    const expectedState = { ...initialState, formList };
    expect(formCheckList(initialState, action)).toEqual(expectedState);
  });

  it("should handle FORM_UPLOAD_LIST", () => {
    const formUploadFormList = [{ id: 1, name: "Form 1" }, { id: 2, name: "Form 2" }];
    const action = { type: ACTION_CONSTANTS.FORM_UPLOAD_LIST, payload: formUploadFormList };
    const expectedState = {
      ...initialState,
      formUploadFormList,
      formUploadCounter: 0,
      formUploadFailureCounter: 0,
    };
    expect(formCheckList(initialState, action)).toEqual(expectedState);
  });

  it("should handle FORM_UPLOAD_COUNTER", () => {
    const action = { type: ACTION_CONSTANTS.FORM_UPLOAD_COUNTER };
    const expectedState = { ...initialState, formUploadCounter: 1 };
    expect(formCheckList(initialState, action)).toEqual(expectedState);
  });

  it("should handle FORM_UPLOAD_FAILURE_COUNTER", () => {
    const action = { type: ACTION_CONSTANTS.FORM_UPLOAD_FAILURE_COUNTER };
    const expectedState = { ...initialState, formUploadFailureCounter: 1 };
    expect(formCheckList(initialState, action)).toEqual(expectedState);
  });

  it("should handle IS_FORM_LOADING", () => {
    const action = { type: ACTION_CONSTANTS.IS_FORM_LOADING, payload: true };
    const expectedState = { ...initialState, designerFormLoading: true };
    expect(formCheckList(initialState, action)).toEqual(expectedState);
  });

  it("should handle IS_FORM_SEARCH_LOADING", () => {
    const action = { type: ACTION_CONSTANTS.IS_FORM_SEARCH_LOADING, payload: true };
    const expectedState = { ...initialState, searchFormLoading: true };
    expect(formCheckList(initialState, action)).toEqual(expectedState);
  });

  it("should return the current state for unknown action types", () => {
    const action = { type: "UNKNOWN_ACTION_TYPE" };
    expect(formCheckList(initialState, action)).toEqual(initialState);
  });
});
