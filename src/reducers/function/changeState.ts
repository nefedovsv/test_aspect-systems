import { IStore, IElement } from "../../interfaces/index";

export const changeState = function(
  store: IStore,
  path: string,
  prop: string,
  value: string | number | boolean
): IStore {
  const numbers: string[] | null = path.match(/\d+/g);

  if (numbers) {
    let numberItem: number | null = Number(numbers[0]);
    // let subNumberItem: number | null = Number(numbers[1]);
    if (numbers.length !== 2) {
      return {
        ...store,
        content: [
          ...store.content.slice(0, numberItem),
          ...[
            {
              ...store.content[numberItem],
              props: {
                ...store.content[numberItem].props,
                [prop]: value
              }
            }
          ],
          ...store.content.slice(numberItem + 1)
        ]
      };
    } else {
      return {
        ...store,
        content: [
          ...store.content.slice(0, numberItem),
          ...[
            {
              ...store.content[numberItem],
              content: [
                ...store.content[numberItem].content!
                /*{
                  ...store.content[numberItem].content[subNumberItem],
                  props: {
                    ...store.content[numberItem].content[subNumberItem].props,
                    [prop]: value
                  }
                }*/
              ]
            }
          ],
          ...store.content.slice(numberItem + 1)
        ]
      };
    }
  } else {
    return store;
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
