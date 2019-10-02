import {
  IStore,
  SendUserAction,
  SEND_USER,
  IElement
} from "../interfaces/index";
import { parserObject, validate } from "./validateFunction";
import { initialState } from "./initialState";

export function rootReducer(
  state = initialState,
  action: SendUserAction
): IStore {
  switch (action.type) {
    case SEND_USER:
      const change_property = action.payload.value1;
      const newValue = action.payload.value2;

      if (/visible/gm.test(newValue)) {
        if (state.content[0].content) {
          const newElement: IElement | null = parserObject(newValue);
          console.log(newElement);
        }
      } else {
        let rez: IStore = validate(state, change_property, newValue);
        return {
          user: action.payload,
          content: rez.content
        };
      }
    default:
      return state;
  }
}
