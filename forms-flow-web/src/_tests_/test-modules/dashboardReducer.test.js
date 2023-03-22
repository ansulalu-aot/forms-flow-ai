import dashboards, { initialState } from "../../modules/dashboardReducer";
import ACTION_CONSTANTS from "../../actions/actionConstants";

describe("dashboards reducer", () => {
    it("should return initial state", () => {
        expect(dashboards(undefined, {})).toEqual(initialState);
    });

    it("should handle DASHBOARDS_LIST action", () => {
        const action = {
            type: ACTION_CONSTANTS.DASHBOARDS_LIST,
            payload: { results: [{ id: 1, name: "Dashboard 1" }] },
        };
        const expectedState = {
            ...initialState,
            dashboards: [{ id: 1, name: "Dashboard 1" }],
            isDashUpdated: true,
        };
        expect(dashboards(initialState, action)).toEqual(expectedState);
    });

    it("should handle DASHBOARDS_LIST_ERROR action", () => {
        const action = {
            type: ACTION_CONSTANTS.DASHBOARDS_LIST_ERROR,
            payload: "Error message",
        };
        const expectedState = {
            ...initialState,
            iserror: true,
            error: "Error message",
        };
        expect(dashboards(initialState, action)).toEqual(expectedState);
    });

    it("should handle DASHBOARDS_LIST_GROUPS action", () => {
        const action = {
            type: ACTION_CONSTANTS.DASHBOARDS_LIST_GROUPS,
            payload: [{ id: 1, name: "Group 1" }],
        };
        const expectedState = {
            ...initialState,
            groups: [{ id: 1, name: "Group 1" }],
            isGroupUpdated: true,
            updateError: false,
        };
        expect(dashboards(initialState, action)).toEqual(expectedState);
    });

    it("should handle DASHBOARDS_UPDATE_ERROR action", () => {
        const action = {
            type: ACTION_CONSTANTS.DASHBOARDS_UPDATE_ERROR,
            payload: "Error updating dashboard",
        };
        const expectedState = {
            ...initialState,
            updateError: true,
            error: "Error updating dashboard",
            isloading: false,
        };
        expect(dashboards(initialState, action)).toEqual(expectedState);
    });
    it('should handle SET_AUTHORIZATIONS', () => {
        const action = {
            type: ACTION_CONSTANTS.SET_AUTHORIZATIONS,
            payload: [
                { dashboardId: 1, groupId: 1 },
            ],
        };
        const expectedState = {
            ...initialState,
            authorizations: [
                { dashboardId: 1, groupId: 1 },
            ],
            isAuthRecieved: true,
            isAuthUpdated: false,
        };
        expect(dashboards(initialState, action)).toEqual(expectedState);
    });
    it('should handle UPDATE_AUTHORIZATIONS', () => {
        const action = {
            type: ACTION_CONSTANTS.UPDATE_AUTHORIZATIONS,
            payload: [
                { dashboardId: 1, groupId: 1 },
            ],
        };
        const expectedState = {
            ...initialState,
            authDashBoards:  [
                { dashboardId: 1, groupId: 1 },
            ],
            isAuthUpdated: true,
            isloading: false,
        };
        expect(dashboards(initialState, action)).toEqual(expectedState);
    });
});
