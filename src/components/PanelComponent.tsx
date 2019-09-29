import * as React from "react";
import { IElement } from "../interfaces/index";
export interface IPanelComponentProps {
  data: IElement;
}
export class PanelComponent extends React.Component<IPanelComponentProps> {
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
      ></div>
    );
  }
}
