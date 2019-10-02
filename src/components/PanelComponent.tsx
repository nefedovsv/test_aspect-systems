import * as React from "react";
import { IElement } from "../interfaces/index";
import { InsideComponent } from "./InsideComponent";

export interface IPanelComponent {
  data: IElement;
}

export class PanelComponent extends React.Component<IPanelComponent> {
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
      >
        <InsideComponent content={this.props.data.content} />
      </div>
    );
  }
}
