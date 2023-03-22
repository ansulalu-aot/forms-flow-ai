import insights from '../../modules/insightReducer';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('insights reducer', () => {
  const initialState = {
    isDashboardLoading: true,
    dashboardsList: [],
    dashboardDetail: {},
    isInsightLoading: true,
    isDashboardListUpdated: false,
    isDashboardDetailUpdated: false,
    error: false,
    errorMessage: null,
  };

  it('should return the initial state', () => {
    expect(insights(undefined, {})).toEqual(initialState);
  });

  it('should handle IS_DASHBOARD_LOADING', () => {
    const action = {
      type: ACTION_CONSTANTS.IS_DASHBOARD_LOADING,
      payload: false,
    };

    expect(insights(initialState, action)).toEqual({
      ...initialState,
      isDashboardLoading: false,
    });
  });

  it('should handle LIST_DASHBOARDS', () => {
    const action = {
      type: ACTION_CONSTANTS.LIST_DASHBOARDS,
      payload: [{ id: 1, name: 'dashboard1' }],
    };

    expect(insights(initialState, action)).toEqual({
      ...initialState,
      dashboardsList: action.payload,
      isDashboardLoading: false,
      isInsightLoading: false,
      isDashboardListUpdated: true,
    });
  });

  it('should handle DASHBOARD_DETAIL', () => {
    const action = {
      type: ACTION_CONSTANTS.DASHBOARD_DETAIL,
      payload: { id: 1, name: 'dashboard1' },
    };

    expect(insights(initialState, action)).toEqual({
      ...initialState,
      dashboardDetail: action.payload,
      isInsightLoading: false,
      isDashboardDetailUpdated: true,
    });
  });

  it('should handle IS_INSIGHT_DETAIL_LOADING', () => {
    const action = {
      type: ACTION_CONSTANTS.IS_INSIGHT_DETAIL_LOADING,
      payload: false,
    };

    expect(insights(initialState, action)).toEqual({
      ...initialState,
      isInsightLoading: false,
    });
  });

  it('should handle INSIGHT_ERROR', () => {
    const action = {
      type: ACTION_CONSTANTS.INSIGHT_ERROR,
      payload: 'Error message',
    };

    expect(insights(initialState, action)).toEqual({
      ...initialState,
      error: true,
      errorMessage: action.payload,
    });
  });

  it('should handle CLEANUP_INSIGHTS', () => {
    const action = {
      type: ACTION_CONSTANTS.CLEANUP_INSIGHTS,
    };

    expect(insights(initialState, action)).toEqual({
      ...initialState,
      dashboardDetail: {},
      dashboardsList: [],
      isDashboardDetailUpdated: false,
      isDashboardListUpdated: false,
    });
  });
});
