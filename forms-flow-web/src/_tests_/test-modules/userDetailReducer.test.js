import user from '../../modules/userDetailReducer';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe("user reducer", () => {
    it("should return the initial state", () => {
        expect(user(undefined, {})).toEqual({
            bearerToken: "",
            roles: "",
            roleIds: {},
            formAccess: [],
            submissionAccess: [],
            userDetail: null,
            isAuthenticated: false,
            currentPage: "",
            showApplications: false,
            showViewSubmissions: false,
            lang: "en",
            selectLanguages: [],
        });
    });

    it("should handle SET_CURRENT_PAGE", () => {
        const action = {
            type: ACTION_CONSTANTS.SET_CURRENT_PAGE,
            payload: "login",
        };
        expect(user({}, action)).toEqual({
            currentPage: "login",
        });
    });

    it("should handle SET_USER_TOKEN", () => {
        const action = {
            type: ACTION_CONSTANTS.SET_USER_TOKEN,
            payload: "token123",
        };
        expect(user({}, action)).toEqual({
            bearerToken: "token123",
        });
    });

    it("should handle SET_USER_ROLES", () => {
        const action = {
            type: ACTION_CONSTANTS.SET_USER_ROLES,
            payload: "admin",
        };
        expect(user({}, action)).toEqual({
            roles: "admin",
        });
    });

    it("should handle SET_USER_DETAILS", () => {
        const action = {
            type: ACTION_CONSTANTS.SET_USER_DETAILS,
            payload: {
                groups: ["admin"],
            },
        };
        expect(user({}, action)).toEqual({
            userDetail: {
                groups: ["admin"],
            },
            showApplications: true,
            showViewSubmissions: true,
        });
    });

    it("should handle SET_USER_AUTHENTICATION", () => {
        const action = {
            type: ACTION_CONSTANTS.SET_USER_AUTHENTICATION,
            payload: true,
        };
        expect(user({}, action)).toEqual({
            isAuthenticated: true,
        });
    });

    it("should handle SET_LANGUAGE", () => {
        const action = {
            type: ACTION_CONSTANTS.SET_LANGUAGE,
            payload: "fr",
        };
        expect(user({}, action)).toEqual({
            lang: "fr",
        });
    });

    it("should handle SET_SELECT_LANGUAGES", () => {
        const action = {
            type: ACTION_CONSTANTS.SET_SELECT_LANGUAGES,
            payload: ["en", "fr"],
        };
        expect(user({}, action)).toEqual({
            selectLanguages: ["en", "fr"],
        });
    });

    it("should handle ROLE_IDS", () => {
        const action = {
            type: ACTION_CONSTANTS.ROLE_IDS,
            payload: [1, 2, 3],
        };
        expect(user({}, action)).toEqual({
            roleIds: { undefined: undefined },
        });
    });

    it("should handle ACCESS_ADDING", () => {
        const action = {
            type: ACTION_CONSTANTS.ACCESS_ADDING,
            payload: [1, 2, 3],
        };
        expect(user({}, action)).toEqual({
            formAccess: [],
            submissionAccess: [],
        });
    });
});