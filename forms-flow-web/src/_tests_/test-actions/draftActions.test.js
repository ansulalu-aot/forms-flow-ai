import {
    setDraftSubmission,
    setDraftSubmissionError,
    setDraftlist,
    setDraftDetail,
    setDraftCount,
    setDraftListLoader,
    setDraftListActivePage,
    setCountPerpage,
    setDraftDetailStatusCode,
    saveLastUpdatedDraft,
    setDraftDelete,
} from '../../actions/draftActions';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('draft actions', () => {
    it('should create an action to set draft submission data', () => {
        const data = { foo: 'bar' };
        const expectedAction = {
            type: ACTION_CONSTANTS.SAVE_DRAFT_DATA,
            payload: data,
        };
        const dispatch = jest.fn();
        setDraftSubmission(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });


    it('should create an action to set draft submission error', () => {
        const data = { message: 'Error message' };
        const expectedAction = {
            type: ACTION_CONSTANTS.DRAFT_SUBMISSION_ERROR,
            payload: data,
        };
        const dispatch = jest.fn();
        setDraftSubmissionError(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set draft list data', () => {
        const data = { items: [], count: 0 };
        const expectedAction = {
            type: ACTION_CONSTANTS.DRAFT_LIST,
            payload: data,
        };
        const dispatch = jest.fn();
        setDraftlist(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set draft detail data', () => {
        const data = { foo: 'bar' };
        const expectedAction = {
            type: ACTION_CONSTANTS.DRAFT_DETAIL,
            payload: data,
        };
        const dispatch = jest.fn();
        setDraftDetail(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set draft count data', () => {
        const data = 10;
        const expectedAction = {
            type: ACTION_CONSTANTS.DRAFT_COUNT,
            payload: data,
        };
        const dispatch = jest.fn();
        setDraftCount(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set draft list loader', () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.DRAFT_LIST_LOADER,
            payload: data,
        };
        const dispatch = jest.fn();
        setDraftListLoader(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set draft list active page', () => {
        const data = 2;
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_DRAFT_LIST_ACTIVE_PAGE,
            payload: data,
        };
        const dispatch = jest.fn();
        setDraftListActivePage(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set draft count per page', () => {
        const data = 20;
        const expectedAction = {
            type: ACTION_CONSTANTS.SET_DRAFT_COUNT_PER_PAGE,
            payload: data,
        };
        const dispatch = jest.fn();
        setCountPerpage(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to set draft detail status code', () => {
        const data = 404;
        const expectedAction = {
            type: ACTION_CONSTANTS.DRAFT_DETAIL_STATUS_CODE,
            payload: data,
        };
        const dispatch = jest.fn();
        setDraftDetailStatusCode(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to save last updated draft', () => {
        const data = { id: 1, title: 'Last Updated Draft' };
        const expectedAction = {
            type: ACTION_CONSTANTS.DRAFT_LAST_UPDATED,
            payload: data,
        };
        const dispatch = jest.fn();
        saveLastUpdatedDraft(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    it('should create an action to delete a draft submission', () => {
        const data = { id: 123, title: 'My draft submission' };
        const expectedAction = {
            type: ACTION_CONSTANTS.DRAFT_DELETE,
            payload: data,
        };
        const dispatch = jest.fn();
        setDraftDelete(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
});