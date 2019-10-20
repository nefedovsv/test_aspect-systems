import * as I from "../interfaces/index";
import { SEND_USER } from "../constants/index";
import * as func from "./function/validateFunction";
import { insertNewElement } from "./function/changeState";
import { initialState } from "./initialState";

export function rootReducer(
  state = initialState,
  action: I.SendUserAction
): I.IStore {
  switch (action.type) {
    case SEND_USER:
      let userData: I.IUserData = {
        path: action.payload.value1,
        value: action.payload.value2,
        state: initialState
      };

      if (func.parseValue(userData.value)) {
        const objectInValue: I.IElement | null = func.parserObject(
          userData.value
        );

        if (objectInValue) {
          return insertNewElement(state, objectInValue);
        }
      } else {
        return func.changePropertyItem(userData);
      }
    // eslint-disable-next-line
    default:
      return state;
  }
}
