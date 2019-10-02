import { IStore, IElement, ElementType } from "../interfaces/index";

function checkElement(type: ElementType, value: string): boolean {
  const regExp: RegExp = new RegExp(type, "gm");
  return regExp.test(value) && /true/gm.test(value);
}

export const parserObject = function(value: string): IElement | null {
  const numbers: string[] | null = value.match(/\d+/g);
  const text = value
    .split(":")[3]
    .split(",")[0]
    .slice(1, -1);

  if (checkElement(ElementType.panel, value)) {
    if (numbers) {
      return {
        type: ElementType.panel,
        props: {
          width: Number(numbers[0]),
          height: Number(numbers[1]),
          visible: true
        }
      };
    }
  } else if (checkElement(ElementType.label, value)) {
    return {
      type: ElementType.label,
      props: {
        caption: text,
        visible: true
      }
    };
  } else if (checkElement(ElementType.button, value)) {
    if (numbers) {
      return {
        type: ElementType.button,
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

export const changeState = function(
  store: IStore,
  way: string,
  prop: string,
  value: string | number | boolean
): IStore {
  const numberElement = Number(way.charAt(8));
  return {
    ...store,
    content: [
      ...store.content.slice(0, numberElement),
      ...[
        {
          ...store.content[numberElement],
          props: {
            ...store.content[numberElement].props,
            [prop]: value
          }
        }
      ],
      ...store.content.slice(numberElement + 1)
    ]
  };
};

export const validate = function(
  state: IStore,
  change_property: string,
  newValue: string
): IStore {
  if (
    /^[0-9]+$/gm.test(newValue) === true &&
    /width$/gm.test(change_property)
  ) {
    const rez: IStore = changeState(
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
    const rez: IStore = changeState(
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
  } else {
    return state;
  }
};

export const insertNewElement = function(
  store: IStore,
  element: IElement
): IStore {
  return {
    ...store,
    content: [
      {
        ...store.content[0],

        content: [...store.content[0].content!, element]
      },
      ...store.content.slice(1)
    ]
  };
};
