import { IStore, IElement } from "../../interfaces/index";

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
