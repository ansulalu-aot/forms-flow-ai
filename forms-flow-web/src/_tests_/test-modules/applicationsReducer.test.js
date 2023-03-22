import applications, { initialState } from "../../modules/applicationsReducer";
import ACTION_CONSTANTS from "../../actions/actionConstants";

describe("applicationsReducer", () => {
    it("should return initial state", () => {
        expect(applications(undefined, {})).toEqual(initialState);
    });
    it("should handle LIST_APPLICATIONS action", () => {
        const action = {
            type: ACTION_CONSTANTS.LIST_APPLICATIONS,
            payload: [{ id: 1, name: "Application 1" }, { id: 2, name: "Application 2" }],
        };
        const expectedState = {
            ...initialState,
            applicationsList: action.payload,
            isApplicationListLoading: false,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
    });
    it("should handle LIST_APPLICATIONS_OF_FORM action", () => {
        const action = {
          type: ACTION_CONSTANTS.LIST_APPLICATIONS_OF_FORM,
          payload: [{ id: 1, name: "Application 1" }, { id: 2, name: "Application 2" }],
        };
        const expectedState = {
          ...initialState,
          formApplicationsList: action.payload,
          isApplicationListLoading: false,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
      });
      
    it("should handle APPLICATION_DETAIL action", () => {
        const action = {
            type: ACTION_CONSTANTS.APPLICATION_DETAIL,
            payload: { id: 1, name: "Application 1" },
        };
        const expectedState = {
            ...initialState,
            applicationDetail: action.payload,
            isApplicationDetailLoading: false,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
    });
    it('should handle IS_APPLICATION_LIST_LOADING', () => {
        const action = {
            type: ACTION_CONSTANTS.IS_APPLICATION_LIST_LOADING,
            payload: true,
        };
        const expectedState = {
            ...initialState,
            isApplicationListLoading: true,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
    });

    it('should handle IS_APPLICATION_DETAIL_LOADING', () => {
        const action = {
            type: ACTION_CONSTANTS.IS_APPLICATION_DETAIL_LOADING,
            payload: true,
        };
        const expectedState = {
            ...initialState,
            isApplicationDetailLoading: true,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
    });
    it('should handle IS_APPLICATION_UPDATING', () => {
        const action = {
            type: ACTION_CONSTANTS.IS_APPLICATION_UPDATING,
            payload: true,
        };
        const expectedState = {
            ...initialState,
            isApplicationUpdating: true,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
    });

    it('should handle APPLICATION_PROCESS', () => {
        const action = {
            type: ACTION_CONSTANTS.APPLICATION_PROCESS,
            payload: { id: 1, name: 'Application 1' },
        };
        const expectedState = {
            ...initialState,
            applicationProcess: action.payload,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
    });

    it('should handle SET_APPLICATION_LIST_COUNT', () => {
        const action = {
            type: ACTION_CONSTANTS.SET_APPLICATION_LIST_COUNT,
            payload: 10,
        };
        const expectedState = {
            ...initialState,
            applicationCount: action.payload,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
    });
    it('should handle APPLICATION_DETAIL_STATUS_CODE', () => {
        const action = {
            type: ACTION_CONSTANTS.APPLICATION_DETAIL_STATUS_CODE,
            payload: '200',
        };
        expect(applications(initialState, action)).toEqual({
            ...initialState,
            applicationDetailStatusCode: '200',
        });
    });

    it('should handle APPLICATION_LIST_ACTIVE_PAGE', () => {
        const action = {
            type: ACTION_CONSTANTS.APPLICATION_LIST_ACTIVE_PAGE,
            payload: 2,
        };
        expect(applications(initialState, action)).toEqual({
            ...initialState,
            activePage: 2,
        });
    });

    it('should handle CHANGE_SIZE_PER_PAGE', () => {
        const action = {
            type: ACTION_CONSTANTS.CHANGE_SIZE_PER_PAGE,
            payload: 10,
        };
        expect(applications(initialState, action)).toEqual({
            ...initialState,
            countPerPage: 10,
        });
    });
    it("should handle APPLICATION_STATUS_LIST", () => {
        const action = {
            type: ACTION_CONSTANTS.APPLICATION_STATUS_LIST,
            payload: ["Pending", "Approved", "Rejected"],
        };
        const expectedState = {
            ...initialState,
            applicationStatus: action.payload,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
    });

    it("should handle APPLICATIONS_ERROR", () => {
        const action = {
            type: ACTION_CONSTANTS.APPLICATIONS_ERROR,
            payload: "Error while fetching applications",
        };
        const expectedState = {
            ...initialState,
            iserror: true,
            error: action.payload,
            isApplicationListLoading: false,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
    });

    it("should handle IS_PUBLIC_STATUS_LOADING", () => {
        const action = {
            type: ACTION_CONSTANTS.IS_PUBLIC_STATUS_LOADING,
            payload: true,
        };
        const expectedState = {
            ...initialState,
            isPublicStatusLoading: action.payload,
        };
        expect(applications(initialState, action)).toEqual(expectedState);
    });
});