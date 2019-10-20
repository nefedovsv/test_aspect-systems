import * as I from "../../interfaces/index";
import { changeState } from "./changeState";

export const parserObject = function(value: string): I.IElement | null {
  const numbers: string[] | null = value.match(/\d+/g);
  const text = value
    .split(":")[3]
    .split(",")[0]
    .slice(1, -1);

  const elementType = [
    I.ElementType.panel,
    I.ElementType.label,
    I.ElementType.button
  ];

  for (let item of elementType) {
    if (checkElement(item, value)) {
      if (numbers) {
        return {
          type: item,
          props: {
            width: Number(numbers[0]),
            height: Number(numbers[1]),
            visible: true
          }
        };
      } else {
        return {
          type: item,
          props: {
            caption: text,
            visible: true
          }
        };
      }
    }
  }
  return null;
};

export const changePropertyItem = function(userData: I.IUserData): any {
  const { value, path, state } = userData;

  let validValue = [
    ["^[0-9]+$", "width", Number(value)],
    ["^[0-9]+$", "height", Number(value)],
    ["^true$", "visible", true],
    ["^false$", "visible", false],
    ["", "caption", value]
  ];

  for (let item of validValue) {
    let regValue: RegExp = new RegExp(`${item[0]}`, "gm");
    let regPath: RegExp = new RegExp(`${item[1]}`, "gm");

    if (regValue.test(value) && regPath.test(path)) {
      return changeState(state, path, `${item[1]}`, item[2]);
    }
  }
  return state;
};

function checkElement(type: I.ElementType, value: string): boolean {
  const regExp: RegExp = new RegExp(type, "gm");
  return regExp.test(value) && /true/gm.test(value);
}

export const parseValue = (value: string) => /[{|}]/gm.test(value);
