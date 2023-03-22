import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  setLanguage,
  setSelectLanguages,
} from '../../actions/languageSetAction';
import ACTION_CONSTANTS from '../../actions/actionConstants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Language actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  it('dispatches SET_LANGUAGE action with correct payload', () => {
    const language = 'en';
    const expectedAction = {
      type: ACTION_CONSTANTS.SET_LANGUAGE,
      payload: language,
    };

    store.dispatch(setLanguage(language));
    const actions = store.getActions();

    expect(actions).toEqual([expectedAction]);
  });

  it('dispatches SET_SELECT_LANGUAGES action with correct payload', () => {
    const selectLanguages = ['en', 'fr', 'de'];
    const expectedAction = {
      type: ACTION_CONSTANTS.SET_SELECT_LANGUAGES,
      payload: selectLanguages,
    };

    store.dispatch(setSelectLanguages(selectLanguages));
    const actions = store.getActions();

    expect(actions).toEqual([expectedAction]);
  });
  
});
