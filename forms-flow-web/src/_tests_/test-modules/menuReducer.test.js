import menu from '../../modules/menuReducer';
import ACTION_CONSTANTS from '../../actions/actionConstants';

describe('menu reducer', () => {
  it('should return the initial state', () => {
    expect(menu(undefined, {})).toEqual({
      isMenuOpen: false,
    });
  });

  it('should handle TOGGLE_MENU', () => {
    const action = {
      type: ACTION_CONSTANTS.TOGGLE_MENU,
      payload: true,
    };
    expect(menu(undefined, action)).toEqual({
      isMenuOpen: true,
    });
  });
});
