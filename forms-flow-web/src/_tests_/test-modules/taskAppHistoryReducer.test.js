import taskAppHistory from '../../modules/taskAppHistoryReducer';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('taskAppHistory reducer', () => {
  const initialState = {
    appHistory: [],
    isHistoryListLoading: true,
  };

  it('should return the initial state', () => {
    expect(taskAppHistory(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_HISTORY_LOADING', () => {
    const action = {
      type: ACTION_CONSTANTS.IS_HISTORY_LOADING,
      payload: false,
    };
    const expectedState = {
      ...initialState,
      isHistoryListLoading: false,
    };
    expect(taskAppHistory(initialState, action)).toEqual(expectedState);
  });

  it('should handle LIST_APPLICATION_HISTORY', () => {
    const action = {
      type: ACTION_CONSTANTS.LIST_APPLICATION_HISTORY,
      payload: ['item1', 'item2'],
    };
    const expectedState = {
      ...initialState,
      appHistory: ['item1', 'item2'],
    };
    expect(taskAppHistory(initialState, action)).toEqual(expectedState);
  });
});
