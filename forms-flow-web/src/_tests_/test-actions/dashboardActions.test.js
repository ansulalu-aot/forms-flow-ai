import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    setDashboards,
    dashboardErrorHandler,
    setGroups,
    updateErrorHandler,
    setDashboardAuthorizations,
    updateDashboardAuthorizationList
} from '../../actions/dashboardActions';
import ACTION_CONSTANTS from '../../actions/actionConstants';

const mockStore = configureMockStore([thunk]);

describe('dashboardActions', () => {
    it('should create an action to set dashboards', () => {
        const data = [{ id: 1, name: 'Dashboard 1' }, { id: 2, name: 'Dashboard 2' }];
        const expectedAction = {
            type: ACTION_CONSTANTS.DASHBOARDS_LIST,
            payload: data
        };
        const dispatch = jest.fn();
        setDashboards(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to handle dashboard errors', () => {
        const data = { error: 'Dashboard not found' };
        const expectedAction = {
            type: ACTION_CONSTANTS.DASHBOARDS_LIST_ERROR,
            payload: data
        };
        const dispatch = jest.fn();
        dashboardErrorHandler(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set groups', () => {
        const data = [{ id: 1, name: 'Group 1' }, { id: 2, name: 'Group 2' }];
        const expectedAction = {
            type: ACTION_CONSTANTS.DASHBOARDS_LIST_GROUPS,
            payload: data
        };
        const dispatch = jest.fn();
        setGroups(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to update dashboard errors', () => {
        const data = { error: 'Error updating dashboard' };
        const expectedAction = {
            type: ACTION_CONSTANTS.DASHBOARDS_UPDATE_ERROR,
            payload: data
        };
        const store = mockStore({});
        store.dispatch(updateErrorHandler(data));
        const actions = store.getActions();
        expect(actions).toEqual([expectedAction]);
    });

    it('should create an action to set dashboard authorizations', () => {
        const data = [{ id: 1, name: 'User 1', accessLevel: 'Read' }, { id: 2, name: 'User 2', accessLevel: 'Write' }];
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_AUTHORIZATIONS,
            payload: data
        };
        const dispatch = jest.fn();
        setDashboardAuthorizations(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to update dashboard authorization list', () => {
        const data = { id: 1, name: 'User 1', accessLevel: 'Read' };
        const expectedAction = {
            type: ACTION_CONSTANTS.UPDATE_AUTHORIZATIONS,
            payload: data
        };
        const dispatch = jest.fn();
        updateDashboardAuthorizationList(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
});
