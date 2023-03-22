import { setCurrentPage, setUserAuth, setUserToken, setUserRole, setUserDetails, serviceActionError } from '../../actions/bpmActions';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('actions', () => {
    it('should create an action to set the current page', () => {
        const data = 1;
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_CURRENT_PAGE,
            payload: data,
        };
        const dispatch = jest.fn();
        setCurrentPage(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set the user authentication', () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_USER_AUTHENTICATION,
            payload: data,
        };
        const dispatch = jest.fn();
        setUserAuth(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set the user token', () => {
        const data = 'token';
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_USER_TOKEN,
            payload: data,
        };
        const dispatch = jest.fn();
        setUserToken(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set the user role', () => {
        const data = 'role';
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_USER_ROLES,
            payload: data,
        };
        const dispatch = jest.fn();
        setUserRole(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it("should create an action to set the user details and save to local storage", () => {
        const data = { id: 1, name: "John Doe" };
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_USER_DETAILS,
            payload: data,
        };
        const dispatch = jest.fn();
        const localStorageMock = {
            setItem: jest.fn(),
        };
        Object.defineProperty(window, "localStorage", {
            value: localStorageMock,
        });

        setUserDetails(data)(dispatch);

        expect(localStorageMock.setItem).toHaveBeenCalledWith(
            "UserDetails",
            JSON.stringify(data)
        );
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action for handling service errors', () => {
        const expectedAction = {
            type: ACTION_CONSTANTS.ERROR,
            payload: 'Error Handling Message',
        };
        const dispatch = jest.fn();
        serviceActionError()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

});
