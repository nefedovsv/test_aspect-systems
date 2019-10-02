import { IStore, SendUserAction, IElement } from "../interfaces/index";
import { SEND_USER } from "../constants/index";
import { parserObject, validate, insertNewElement } from "./validateFunction";
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
          if (newElement) {
            let rez: IStore = insertNewElement(state, newElement);
            return {
              user: action.payload,
              content: rez.content
            };
          }
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
