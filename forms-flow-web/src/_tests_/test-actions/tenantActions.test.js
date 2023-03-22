import { resetTenant, setTenantID, setTenantDetails, setTenantListLoading, setTenantDetailLoading, setTenantData, serviceActionError } from '../../actions/tenantActions';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('tenant ACTION_CONSTANTS', () => {
    it('should create an action to reset tenant', () => {
        const tenantId = '123';
        const expectedAction = {
            type: ACTION_CONSTANTS.RESET_TENANT,
            payload: tenantId,
        };
        const dispatch = jest.fn();
        resetTenant(tenantId)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set tenant ID', () => {
        const tenantID = '456';
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_TENANT_ID,
            payload: tenantID,
        };
        const dispatch = jest.fn();
        setTenantID(tenantID)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set tenant details', () => {
        const tenantDetails = {
            name: 'Test Tenant',
            description: 'This is a test tenant',
            isActive: true,
        };
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_TENANT_DETAILS,
            payload: tenantDetails,
        };
        const dispatch = jest.fn();
        setTenantDetails(tenantDetails)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set tenant list loading state', () => {
        const isLoading = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_TENANT_LIST_LOADING,
            payload: isLoading,
        };
        const dispatch = jest.fn();
        setTenantListLoading(isLoading)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set tenant detail loading state', () => {
        const isLoading = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.IS_TENANT_DETAIL_LOADING,
            payload: isLoading,
        };
        const dispatch = jest.fn();
        setTenantDetailLoading(isLoading)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set tenant data', () => {
        const tenantData = [
            {
                id: '123',
                name: 'Test Tenant',
                description: 'This is a test tenant',
                isActive: true,
            },
            {
                id: '456',
                name: 'Another Tenant',
                description: 'This is another test tenant',
                isActive: false,
            },
        ];
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_TENANT_DATA,
            payload: tenantData,
        };
        const dispatch = jest.fn();
        setTenantData(tenantData)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to handle service errors', () => {
        const errorMessage = 'An error occurred';
        const expectedAction = {
            type: ACTION_CONSTANTS.ERROR,
            payload: 'Error Handling Message',
        };
        const dispatch = jest.fn();
        serviceActionError(errorMessage)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
});
