import bpmForms from '../../modules/bpmFormReducer';
import ACTION_CONSTANTS from '../../actions/actionConstants';
import { formatForms } from '../../apiManager/services/bpmServices';

describe('bpmForms reducer', () => {
    it('should return the initial state', () => {
        expect(bpmForms(undefined, {})).toEqual({
            error: "",
            forms: [],
            isActive: false,
            limit: 5,
            page: 1,
            totalForms: 0,
            bpmFormLoading: false,
            sortBy: "formName",
            sortOrder: "asc",
            formType: "form",
            searchText: "",
        });
    });

    it('should handle BPM_FORM_LIST', () => {
        const forms = [
            {
                _id: 1,
                title: 'Form 1',
                processKey: undefined,
            },
            {
                _id: 2,
                title: 'Form 2',
                processKey: undefined,
            },
        ];

        const action = {
            type: ACTION_CONSTANTS.BPM_FORM_LIST,
            payload: {
                forms,
                totalCount: 2,
            },
        };

        expect(bpmForms(undefined, action)).toEqual({
            error: '',
            forms: formatForms(forms),
            isActive: false,
            limit: 5,
            page: 1,
            totalForms: 2,
            bpmFormLoading: false,
            sortBy: 'formName',
            sortOrder: 'asc',
            formType: 'form',
            searchText: '',
        });
    });
    it("should handle BPM_FORM_LIST_LIMIT_CHANGE", () => {
        const limit = 10;
        const action = {
            type: ACTION_CONSTANTS.BPM_FORM_LIST_LIMIT_CHANGE,
            payload: limit,
        };
        expect(bpmForms(undefined, action)).toEqual({
            error: "",
            forms: [],
            isActive: false,
            limit,
            page: 1,
            totalForms: 0,
            bpmFormLoading: false,
            sortBy: "formName",
            sortOrder: "asc",
            formType: "form",
            searchText: "",
        });
    });

    it("should handle BPM_FORM_LIST_PAGE_CHANGE", () => {
        const page = 2;
        const action = {
            type: ACTION_CONSTANTS.BPM_FORM_LIST_PAGE_CHANGE,
            payload: page,
        };
        expect(bpmForms(undefined, action)).toEqual({
            error: "",
            forms: [],
            isActive: false,
            limit: 5,
            page,
            totalForms: 0,
            bpmFormLoading: false,
            sortBy: "formName",
            sortOrder: "asc",
            formType: "form",
            searchText: "",
        });
    });

    it("should handle IS_BPM_FORM_LIST_LOADING", () => {
        const isActive = true;
        const action = {
            type: ACTION_CONSTANTS.IS_BPM_FORM_LIST_LOADING,
            payload: isActive,
        };
        expect(bpmForms(undefined, action)).toEqual({
            error: "",
            forms: [],
            isActive,
            limit: 5,
            page: 1,
            totalForms: 0,
            bpmFormLoading: false,
            sortBy: "formName",
            sortOrder: "asc",
            formType: "form",
            searchText: "",
        });
    });

    it("should handle BPM_FORM_SEARCH", () => {
        const searchText = "test";
        const action = {
            type: ACTION_CONSTANTS.BPM_FORM_SEARCH,
            payload: searchText,
        };
        expect(bpmForms(undefined, action)).toEqual({
            error: "",
            forms: [],
            isActive: false,
            limit: 5,
            page: 1,
            totalForms: 0,
            bpmFormLoading: false,
            sortBy: "formName",
            sortOrder: "asc",
            formType: "form",
            searchText,
        });
    });

    it("should handle BPM_FORM_LIST_SORT_CHANGE", () => {
        const sortOrder = "desc";
        const action = {
            type: ACTION_CONSTANTS.BPM_FORM_LIST_SORT_CHANGE,
            payload: sortOrder,
        };
        expect(bpmForms(undefined, action)).toEqual({
            error: "",
            forms: [],
            isActive: false,
            limit: 5,
            page: 1,
            totalForms: 0,
            bpmFormLoading: false,
            sortBy: "formName",
            sortOrder,
            formType: "form",
            searchText: "",
        });
    });
    it("should handle BPM_FORM_LOADING", () => {
        const bpmFormLoading = true;
        const action = {
            type: ACTION_CONSTANTS.BPM_FORM_LOADING,
            payload: bpmFormLoading,
        };
        expect(bpmForms(undefined, action)).toEqual({
            error: "",
            forms: [],
            isActive: false,
            limit: 5,
            page: 1,
            totalForms: 0,
            bpmFormLoading,
            sortBy: "formName",
            sortOrder: "asc",
            formType: "form",
            searchText: "",
        });
    });
    it('should handle BPM_FORM_TYPE', () => {
        const formType = 'process';
        const action = {
            type: ACTION_CONSTANTS.BPM_FORM_TYPE,
            payload: formType,
        };
        expect(bpmForms(undefined, action)).toEqual({
            error: '',
            forms: [],
            isActive: false,
            limit: 5,
            page: 1,
            totalForms: 0,
            bpmFormLoading: false,
            sortBy: 'formName',
            sortOrder: 'asc',
            formType: 'process',
            searchText: '',
        });
    });
});