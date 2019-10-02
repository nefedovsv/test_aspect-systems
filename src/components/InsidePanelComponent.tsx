import * as React from "react";
import { IElement } from "../interfaces/index";

export interface IInsidePanelComponent {
  data: IElement;
}

export class InsidePanelComponent extends React.Component<
  IInsidePanelComponent
> {
  render() {
    const { props } = this.props.data;
    return (
      <div
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`,
          border: "10px outset #3d77b8",
          margin: "auto"
        }}
      />
    );
  }
}
