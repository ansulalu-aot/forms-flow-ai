import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setRoleIds, setAccessForForm } from '../../actions/roleActions';
import ACTION_CONSTANTS from '../../actions/actionConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
    it('setRoleIds should dispatch the correct action with the payload', () => {
        const data = [1, 2, 3];
        const expectedAction = {
            type: ACTION_CONSTANTS.ROLE_IDS,
            payload: data,
        };
        const store = mockStore({});
        store.dispatch(setRoleIds(data));
        expect(store.getActions()).toEqual([expectedAction]);
    });

    it('setAccessForForm should dispatch the correct action with the payload', () => {
        const data = { role: 'admin', access: true };
        const expectedAction = {
            type: ACTION_CONSTANTS.ACCESS_ADDING,
            payload: data,
        };
        const store = mockStore({});
        store.dispatch(setAccessForForm(data));
        expect(store.getActions()).toEqual([expectedAction]);
    });
});
