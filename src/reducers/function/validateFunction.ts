import * as I from "../../interfaces/index";
import { changeState } from "./changeState";

function checkElement(type: I.ElementType, value: string): boolean {
  const regExp: RegExp = new RegExp(type, "gm");
  return regExp.test(value) && /true/gm.test(value);
}

export const parserObject = function(value: string): I.IElement | null {
  const numbers: string[] | null = value.match(/\d+/g);
  const text = value
    .split(":")[3]
    .split(",")[0]
    .slice(1, -1);

  if (checkElement(I.ElementType.panel, value)) {
    if (numbers) {
      return {
        type: I.ElementType.panel,
        props: {
          width: Number(numbers[0]),
          height: Number(numbers[1]),
          visible: true
        }
      };
    }
  } else if (checkElement(I.ElementType.label, value)) {
    return {
      type: I.ElementType.label,
      props: {
        caption: text,
        visible: true
      }
    };
  } else if (checkElement(I.ElementType.button, value)) {
    if (numbers) {
      return {
        type: I.ElementType.button,
        props: {
          width: Number(numbers[0]),
          height: Number(numbers[1]),
          visible: true
        }
      };
    }
  }
  return null;
};

export const changePropertyItem = function(userData: I.IUserData): I.IStore {
  const { value, path, state } = userData;

  if (/^[0-9]+$/gm.test(value) === true && /width$/gm.test(path)) {
    return changeState(state, path, "width", Number(value));
  } else if (/^[0-9]+$/gm.test(value) === true && /height$/gm.test(path)) {
    return changeState(state, path, "height", Number(value));
  } else if (
    /^true|false$/gm.test(value) === true &&
    /visible$/gm.test(path) === true
  ) {
    if (value.charAt(0) === "t") {
      return changeState(state, path, "visible", true);
    } else {
      return changeState(state, path, "visible", false);
    }
  } else if (/caption$/gm.test(path)) {
    return changeState(state, path, "caption", value);
  } else {
    return state;
  }
};

export const parsePath = (path: string) => {
  const repeatContent: string[] | null = path.match(/content/g);
  return repeatContent !== null && repeatContent.length === 2;
};

export const parseValue = (value: string) => /[{|}]/gm.test(value);
