import * as React from "react";
import { IElement } from "../interfaces/index";
import { getStyle } from "./PanelComponent";

export interface IInsidePanelComponent {
  data: IElement;
}

export class InsidePanelComponent extends React.Component<
  IInsidePanelComponent
> {
  render() {
    return <div style={getStyle(this.props.data)} />;
  }
}
