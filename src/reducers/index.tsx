import { IStore, SendUserAction, IElement } from "../interfaces/index";
import { SEND_USER } from "../constants/index";
import { parserObject, validate } from "./function/validateFunction";
import { insertNewElement } from "./function/changeState";
import { initialState } from "./initialState";

export function rootReducer(
  state = initialState,
  action: SendUserAction
): IStore {
  switch (action.type) {
    case SEND_USER:
      const change_property = action.payload.value1;
      const newValue = action.payload.value2;

      if (checkElement(newValue)) {
        if (state.content[0].content) {
          const newElement: IElement | null = parserObject(newValue);
          if (newElement) {
            let newState: IStore = insertNewElement(state, newElement);
            return {
              user: action.payload,
              content: newState.content
            };
          }
        }
      } else {
        let newState: IStore = validate(state, change_property, newValue);
        return {
          user: action.payload,
          content: newState.content
        };
      }
    // eslint-disable-next-line
    default:
      return state;
  }
}

function checkElement(value: string): boolean {
  const regExp: RegExp = new RegExp("visible", "gm");
  return regExp.test(value);
}
