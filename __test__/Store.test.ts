import { rootReducer, initialState } from "../src/reducers/index";
import { sendUser } from "../src/action/index";
import { SEND_USER, SendUserAction } from "../src/interfaces/index";
describe("test rootReducer", () => {
  it("SEND_USER", () => {
    const action: SendUserAction = {
      type: SEND_USER,
      payload: { value1: "content[0].props.width", value2: "400" }
    };

    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      isLoading: false, // доделать)
      data: action.payload // доделать)
    });
  });
});
