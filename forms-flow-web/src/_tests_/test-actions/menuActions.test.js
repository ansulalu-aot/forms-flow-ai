import ACTION_CONSTANTS from "../../actions/actionConstants";
import { toggleMenu } from "../../actions/menuActions";

describe("toggleMenu action", () => {
    it("should create an action to toggle the menu", () => {
        const data = true;
        const expectedAction = {
            type: ACTION_CONSTANTS.TOGGLE_MENU,
            payload: true,
        };
        const dispatch = jest.fn();
        toggleMenu(data)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
});


