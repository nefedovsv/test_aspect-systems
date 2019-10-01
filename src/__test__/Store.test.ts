import { initialState } from "../reducers/initialState";
import { rootReducer } from "../reducers/index";
import { SEND_USER, SendUserAction } from "../interfaces/index";
import { IElement } from "../interfaces/index";
const test: {
  input: { value1: string; value2: string };
  result: any;
}[] = [
  {
    input: { value1: "content[0].props.width", value2: "400" },
    result: [
      {
        type: "panel",
        props: {
          width: 400,
          height: 600,
          visible: true
        },
        content: []
      },
      {
        type: "label",
        props: {
          caption: "Aspect Ryazan",
          visible: true
        }
      },
      {
        type: "button",
        props: {
          width: 120,
          height: 35,
          visible: true
        }
      }
    ]
  },
  {
    input: { value1: "content[2].props.width", value2: "400" },
    result: [
      {
        type: "panel",
        props: {
          width: 400,
          height: 600,
          visible: true
        },
        content: []
      },
      {
        type: "label",
        props: {
          caption: "Aspect Ryazan",
          visible: true
        }
      },
      {
        type: "button",
        props: {
          width: 400,
          height: 35,
          visible: true
        }
      }
    ]
  },
  {
    input: {
      value1: "",
      value2: '{type:"button",props:{width:120,height:35,visible:true}}'
    },
    result: [
      {
        type: "panel",
        props: {
          width: 400,
          height: 600,
          visible: true
        },
        content: [
          {
            type: "button",
            props: {
              width: 120,
              height: 35,
              visible: true
            }
          }
        ]
      },
      {
        type: "label",
        props: {
          caption: "Aspect Ryazan",
          visible: true
        }
      },
      {
        type: "button",
        props: {
          width: 400,
          height: 35,
          visible: true
        }
      }
    ]
  }
];

describe("test rootReducer", () => {
  it("SEND_USER", () => {
    for (const item of test) {
      const action: SendUserAction = {
        type: SEND_USER,
        payload: item.input
      };

      expect(rootReducer(initialState, action)).toEqual({
        user: action.payload,
        content: item.result
      });
    }
  });
});
