import ACTION_CONSTANTS from "../../actions/actionConstants";
import RestoreFormReducer from "../../modules/RestoreFormReducer";

describe("RestoreFormReducer", () => {
  it("should return the initial state", () => {
    expect(RestoreFormReducer(undefined, {})).toEqual({
      restoredFormData: {},
      restoredFormId: null,
      formHistory: [],
    });
  });

  it("should handle RESTORE_FORM_ID", () => {
    const action = {
      type: ACTION_CONSTANTS.RESTORE_FORM_ID,
      payload: 123,
    };
    expect(RestoreFormReducer(undefined, action)).toEqual({
      restoredFormData: {},
      restoredFormId: 123,
      formHistory: [],
    });
  });

  it("should handle RESTORE_FORM_DATA", () => {
    const action = {
      type: ACTION_CONSTANTS.RESTORE_FORM_DATA,
      payload: { foo: "bar" },
    };
    expect(RestoreFormReducer(undefined, action)).toEqual({
      restoredFormData: { foo: "bar" },
      restoredFormId: null,
      formHistory: [],
    });
  });

 it("should handle FORM_HISTORY", () => {
  const action = {
    type: ACTION_CONSTANTS.FORM_HISTORY,
    payload: [
      { id: 1, changeLog: { version: "v1", new_version: true } },
      { id: 2, changeLog: { version: "v2", new_version: true } },
    ],
  };
  expect(RestoreFormReducer(undefined, action)).toEqual({
    restoredFormData: {},
    restoredFormId: null,
    formHistory: [
      { id: 1, changeLog: { version: "v1", new_version: true } },
      { id: 2, changeLog: { version: "v2", new_version: true } },
    ],
  });
});

});
