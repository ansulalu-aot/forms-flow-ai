import draftSubmission from "../../modules/draftReducer";
import ACTION_CONSTANTS from "../../actions/actionConstants";

describe("draftSubmission reducer", () => {
    const initialState = {
        draftSubmission: {},
        draftDelete: { modalOpen: false, draftId: null, draftName: "" },
        draftSubmissionError: {
            error: null,
            message: null,
        },
        draftList: [],
        countPerPage: 5,
        isDraftListLoading: true,
        draftCount: 0,
        activePage: 1,
        isDraftDetailLoading: true,
        submission: {},
        draftDetailStatusCode: "",
        lastUpdated: {},
    };

    it("should return the initial state", () => {
        expect(draftSubmission(undefined, {})).toEqual(initialState);
    });

    it("should handle SAVE_DRAFT_DATA", () => {
        const action = {
            type: ACTION_CONSTANTS.SAVE_DRAFT_DATA,
            payload: { id: 1, title: "Draft 1" },
        };
        const expectedState = {
            ...initialState,
            draftSubmission: { id: 1, title: "Draft 1" },
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
    });

    it("should handle DRAFT_LIST", () => {
        const action = {
            type: ACTION_CONSTANTS.DRAFT_LIST,
            payload: [
                { id: 1, title: "Draft 1" },
                { id: 2, title: "Draft 2" },
            ],
        };
        const expectedState = {
            ...initialState,
            draftList: [
                { id: 1, title: "Draft 1" },
                { id: 2, title: "Draft 2" },
            ],
            isDraftListLoading: false,
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
    });

    it("should handle DRAFT_DETAIL", () => {
        const action = {
            type: ACTION_CONSTANTS.DRAFT_DETAIL,
            payload: { id: 1, title: "Draft 1" },
        };
        const expectedState = {
            ...initialState,
            submission: { id: 1, title: "Draft 1" },
            isDraftDetailLoading: false,
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
    });

    it("should handle DRAFT_COUNT", () => {
        const action = {
            type: ACTION_CONSTANTS.DRAFT_COUNT,
            payload: 10,
        };
        const expectedState = {
            ...initialState,
            draftCount: 10,
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
    });

    it("should handle DRAFT_LIST_LOADER", () => {
        const action = {
            type: ACTION_CONSTANTS.DRAFT_LIST_LOADER,
            payload: false,
        };
        const expectedState = {
            ...initialState,
            isDraftListLoading: false,
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
    });

    it("should handle SET_DRAFT_LIST_ACTIVE_PAGE", () => {
        const action = {
            type: ACTION_CONSTANTS.SET_DRAFT_LIST_ACTIVE_PAGE,
            payload: 2,
        };
        const expectedState = {
            ...initialState,
            activePage: 2,
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
    });
    it("should handle SET_DRAFT_COUNT_PER_PAGE", () => {
        const action = {
            type: ACTION_CONSTANTS.SET_DRAFT_COUNT_PER_PAGE,
            payload: 10,
        };
        const expectedState = {
            ...initialState,
            countPerPage: 10,
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
    });

    it("should handle DRAFT_SUBMISSION_ERROR", () => {
        const error = new Error("Error message");
        const action = {
          type: ACTION_CONSTANTS.DRAFT_SUBMISSION_ERROR,
          payload: error.message,
        };
        const expectedState = {
          ...initialState,
          draftSubmissionError: { error: true, message: error.message },
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
      });
      
    it("should handle DRAFT_DETAIL_STATUS_CODE", () => {
        const statusCode = "404";
        const action = {
            type: ACTION_CONSTANTS.DRAFT_DETAIL_STATUS_CODE,
            payload: statusCode,
        };
        const expectedState = {
            ...initialState,
            draftDetailStatusCode: statusCode,
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
    });

    it("should handle DRAFT_LAST_UPDATED", () => {
        const action = {
            type: ACTION_CONSTANTS.DRAFT_LAST_UPDATED,
            payload: { name: "test" },
        };
        const expectedState = {
            ...initialState,
            lastUpdated: { name: "test" },
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
    });
    
    it("should handle DRAFT_DELETE", () => {
        const action = {
          type: ACTION_CONSTANTS.DRAFT_DELETE,
          payload: { modalOpen: true, draftId: "1", draftName: "test" },
        };
        const expectedState = {
          ...initialState,
          draftDelete: { modalOpen: true, draftId: "1", draftName: "test" },
        };
        expect(draftSubmission(initialState, action)).toEqual(expectedState);
      });
});  
