import {
    getDashboards,
    getDashboardDetail,
    setInsightDetailLoader,
    setInsightDashboardListLoader,
    setInsightError,
    runCleanup,
} from '../../actions/insightActions';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('Insight Actions', () => {
    it("should dispatch getDashboards action", () => {
        const data = { dashboard: 'sample dashboard' };
        const expectedAction = {
            type: ACTION_CONSTANTS.LIST_DASHBOARDS,
            payload: data,
        };
        const dispatch = jest.fn();
        getDashboards(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to get dashboard detail', () => {
        const data = { id: 'sample id' };
        const expectedAction = {
            type: ACTION_CONSTANTS.DASHBOARD_DETAIL,
            payload: data,
        };
        const dispatch = jest.fn();
        getDashboardDetail(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set insight detail loader', () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_INSIGHT_DETAIL_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setInsightDetailLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set insight dashboard list loader', () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_DASHBOARD_LOADING,
            payload: data,
        };
        const dispatch = jest.fn();
        setInsightDashboardListLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set insight error', () => {
        const data = { error: 'something went wrong' };
        const expectedAction = {
            type: ACTION_CONSTANTS.INSIGHT_ERROR,
            payload: data,
        };
        const dispatch = jest.fn();
        setInsightError(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to run cleanup', () => {
        const expectedAction = {
            type: ACTION_CONSTANTS.CLEANUP_INSIGHTS,
            payload: null,
        };
        const dispatch = jest.fn();
        runCleanup()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

});