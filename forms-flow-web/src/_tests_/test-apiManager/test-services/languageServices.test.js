import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchSelectLanguages } from '../../../apiManager/services/languageServices';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
process.env.PUBLIC_URL = 'http://localhost:3000';

describe('fetchSelectLanguages', () => {

    afterEach(() => {
        fetchMock.restore();
    });

    it('should dispatch SET_SELECT_LANGUAGES action with data from response', () => {
        const data = { en: 'English', fr: 'French', es: 'Spanish' };
        fetchMock.getOnce(`${process.env.PUBLIC_URL}/languageConfig/languageData.json`, {
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        });

        const expectedActions = [
            {
                type: "SET_SELECT_LANGUAGES",
                payload: {
                    en: "English",
                    es: "Spanish",
                    fr: "French",
                },
            },
        ];
        const store = mockStore({});

        return store.dispatch(fetchSelectLanguages()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});