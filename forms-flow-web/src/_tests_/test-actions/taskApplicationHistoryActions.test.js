import { setApplicationHistoryList, setUpdateHistoryLoader, serviceActionError } from '../../actions/taskApplicationHistoryActions';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('Task application history actions', () => {
    it('should create an action to set application history list', () => {
        const data = [{ id: 1, name: 'Test Application' }];
        const expectedAction = {
            type: ACTION_CONSTANTS.LIST_APPLICATION_HISTORY,
            payload: data,
        };
        const dispatch = jest.fn();
        setApplicationHistoryList(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set update history loader', () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_HISTORY_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setUpdateHistoryLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to handle service action error', () => {
        const expectedAction = {
            type: ACTION_CONSTANTS.ERROR,
            payload: 'Error Handling API',
        };
        const dispatch = jest.fn();
        serviceActionError()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
});
