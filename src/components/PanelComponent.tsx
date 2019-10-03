import * as React from "react";
import { IElement } from "../interfaces/index";
import { InsideComponent } from "./InsideComponent";

export interface IPanelComponent {
  data: IElement;
}

export class PanelComponent extends React.Component<IPanelComponent> {
  render() {
    return (
      <div style={getStyle(this.props.data)}>
        <InsideComponent content={this.props.data.content} />
      </div>
    );
  }
}

export const getStyle = (data: IElement) => ({
  width: `${data.props.width}px`,
  height: `${data.props.height}px`,
  border: "10px outset #3d77b8",
  margin: "auto"
});
