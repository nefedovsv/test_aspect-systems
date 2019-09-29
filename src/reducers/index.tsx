import {
  IStore,
  SendUserAction,
  SEND_USER,
  ElementType
} from "../interfaces/index";
export const initialState: IStore = {
  user: { value1: "", value2: "" },
  content: [
    {
      type: ElementType.panel,
      props: {
        width: 200,
        height: 200,
        visible: true
      }
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

export function rootReducer(
  state = initialState,
  action: SendUserAction
): IStore {
  switch (action.type) {
    case SEND_USER:
      console.log(action.type);
      const change_property = action.payload.value1;
      const newValue = action.payload.value2;
      const validate = function(
        change_property: string,
        newValue: string
      ): void {
        if (
          /^[0-9]+$/gm.test(newValue) === true &&
          /width$/gm.test(change_property)
        ) {
          const nuberElement = Number(change_property.charAt(8));
          state.content[nuberElement].props.width = Number(newValue);
        } else if (
          /^[0-9]+$/gm.test(newValue) === true &&
          /height$/gm.test(change_property)
        ) {
          const nuberElement = Number(change_property.charAt(8));
          state.content[nuberElement].props.height = Number(newValue);
        } else if (
          /^true|false$/gm.test(newValue) === true &&
          /visible$/gm.test(change_property) === true
        ) {
          if (newValue.charAt(0) === "t") {
            const nuberElement = Number(change_property.charAt(8));
            state.content[nuberElement].props.visible = true;
          } else {
            const nuberElement = Number(change_property.charAt(8));
            state.content[nuberElement].props.visible = false;
          }
        } else if (/caption$/gm.test(change_property)) {
          const nuberElement = Number(change_property.charAt(8));
          state.content[nuberElement].props.caption = newValue;
        }
      };
      validate(change_property, newValue);
      return {
        user: action.payload,
        content: [...state.content]
      };
    default:
      return state;
  }
}
