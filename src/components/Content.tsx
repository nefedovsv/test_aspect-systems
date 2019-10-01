import * as React from "react";
import { IElement } from "../interfaces/index";
import { PanelComponent } from "./PanelComponent";
import { ButtonComponent } from "./ButtonComponent";
import { LabelComponent } from "./LabelComponent";
export interface IContent {
  list: IElement[];
}
export class Content extends React.Component<IContent> {
  render() {
    const { list } = this.props;
    const component: React.ReactNode[] = list.map((item, index) => {
      if (item.type === "panel" && item.props.visible) {
        return <PanelComponent key={index} data={item} />;
      } else if (item.type === "button" && item.props.visible) {
        return <ButtonComponent key={index} data={item} />;
      } else if (item.type === "label" && item.props.visible) {
        return <LabelComponent key={index} data={item} />;
      }
      return null;
    });
    return component.filter(Boolean);
  }
}
