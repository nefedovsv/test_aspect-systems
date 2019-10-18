import { IStore, ElementType } from "../interfaces/index";

export const initialState: IStore = {
  user: { value1: "", value2: "" },
  content: [
    {
      type: ElementType.panel,
      props: {
        width: 800,
        height: 600,
        visible: true
      },
      content: [
        {
          type: ElementType.button,
          props: {
            width: 120,
            height: 35,
            visible: true
          }
        }
      ]
    },
    {
      type: ElementType.label,
      props: {
        caption: "Aspect Ryazan",
        visible: true
      }
    },
    {
      type: ElementType.button,
      props: {
        width: 120,
        height: 35,
        visible: true
      }
    }
  ]
};
