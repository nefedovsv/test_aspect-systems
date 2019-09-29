import * as React from "react";
import { IElement } from "../interfaces/index";
import { PanelComponent } from "./PanelComponent";
import { ButtonComponent } from "./ButtonComponent";
import { LabelComponent } from "./LabelComponent";
export interface IContentProps {
  list: IElement[];
}
export class Content extends React.Component<IContentProps> {
  render() {
    const { list } = this.props;
    const component: any = list.map(item => {
      if (item.type === "panel" && item.props.visible) {
        return <PanelComponent data={item} />;
      } else if (item.type === "button" && item.props.visible) {
        return <ButtonComponent data={item} />;
      } else if (item.type === "label" && item.props.visible) {
        return <LabelComponent data={item} />;
      }
    });
    return component.filter(Boolean);
  }
}
