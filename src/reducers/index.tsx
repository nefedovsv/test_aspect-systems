import {
  IStore,
  SendUserAction,
  SEND_USER,
  IElement
} from "../interfaces/index";
import { parserObject, changeState } from "./validateFunction";
import { initialState } from "./initialState";

export function rootReducer(
  state = initialState,
  action: SendUserAction
): IStore {
  switch (action.type) {
    case SEND_USER:
      const change_property = action.payload.value1;
      const newValue = action.payload.value2;
      const validate = function(
        change_property: string,
        newValue: string
      ): any {
        if (
          /^[0-9]+$/gm.test(newValue) === true &&
          /width$/gm.test(change_property)
        ) {
          const rez = changeState(
            state,
            change_property,
            "width",
            Number(newValue)
          );
          return rez;
        } else if (
          /^[0-9]+$/gm.test(newValue) === true &&
          /height$/gm.test(change_property)
        ) {
          const rez = changeState(
            state,
            change_property,
            "height",
            Number(newValue)
          );
          return rez;
        } else if (
          /^true|false$/gm.test(newValue) === true &&
          /visible$/gm.test(change_property) === true
        ) {
          if (newValue.charAt(0) === "t") {
            const rez = changeState(state, change_property, "visible", true);
            return rez;
          } else {
            const rez = changeState(state, change_property, "visible", false);
            return rez;
          }
        } else if (/caption$/gm.test(change_property)) {
          const rez = changeState(state, change_property, "caption", newValue);
          return rez;
        }
      };

      if (/visible/gm.test(newValue)) {
        const newElement: any = parserObject(newValue);
        if (state.content[0].content) {
          state.content[0].content.push(newElement);
        }
      } else {
        var rez = validate(change_property, newValue);
        console.log(rez.content);
      }

      return {
        user: action.payload,
        content: rez.content
      };
    default:
      return state;
  }
}
