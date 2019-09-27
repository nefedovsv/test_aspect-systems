import { IStore, SendUserAction, SEND_USER } from "../interfaces/index";

export const initialState: IStore = {
  user: "",
  content: [
    {
      type: "panel",
      props: {
        width: 500,
        height: 500,
        visible: true
      }
    },
    {
      type: "panel",
      props: {
        width: 400,
        height: 400,
        visible: true
      }
    }
  ]
};

export function rootReducer(
  state = initialState,
  action: SendUserAction
): IStore {
  switch (action.type) {
    case SEND_USER:
      return {
        user: action.payload,
        content: state.content
      };
    default:
      return state;
  }
}
