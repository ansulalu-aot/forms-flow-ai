import tenants from '../../modules/tenantReducer';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('tenants reducer', () => {
  const initialState = {
    tenantId: '',
    tenantDetail: null,
    isTenantDetailLoading: false,
    tenantData: {},
    isTenantDataLoading: true,
  };

  it('should return the initial state', () => {
    expect(tenants(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_TENANT_ID', () => {
    const action = {
      type: ACTION_CONSTANTS.SET_TENANT_ID,
      payload: 'test-tenant-id',
    };

    const expectedState = {
      ...initialState,
      tenantId: 'test-tenant-id',
    };

    expect(tenants(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TENANT_DETAILS', () => {
    const action = {
      type: ACTION_CONSTANTS.SET_TENANT_DETAILS,
      payload: { name: 'Test Tenant' },
    };

    const expectedState = {
      ...initialState,
      tenantDetail: { name: 'Test Tenant' },
      isTenantDetailLoading: false,
    };

    expect(tenants(initialState, action)).toEqual(expectedState);
  });

  it('should handle IS_TENANT_DETAIL_LOADING', () => {
    const action = {
      type: ACTION_CONSTANTS.IS_TENANT_DETAIL_LOADING,
      payload: true,
    };

    const expectedState = {
      ...initialState,
      isTenantDetailLoading: true,
    };

    expect(tenants(initialState, action)).toEqual(expectedState);
  });

  it('should handle RESET_TENANT', () => {
    const action = {
      type: ACTION_CONSTANTS.RESET_TENANT,
      payload: 'test-tenant-id',
    };

    const expectedState = {
      ...initialState,
      tenantId: 'test-tenant-id',
      tenantDetail: null,
      tenantName: '',
    };

    expect(tenants(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_TENANT_DATA', () => {
    const action = {
      type: ACTION_CONSTANTS.SET_TENANT_DATA,
      payload: { data: 'test-data' },
    };

    const expectedState = {
      ...initialState,
      tenantData: { data: 'test-data' },
      isTenantDataLoading: false,
    };

    expect(tenants(initialState, action)).toEqual(expectedState);
  });
});
