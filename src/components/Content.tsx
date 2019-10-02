import * as React from "react";
import { IElement, ElementType } from "../interfaces/index";
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
      if (item.props.visible) {
        if (item.type === ElementType.panel) {
          return <PanelComponent key={index} data={item} />;
        } else if (item.type === ElementType.button) {
          return <ButtonComponent key={index} data={item} />;
        } else if (item.type === ElementType.label) {
          return <LabelComponent key={index} data={item} />;
        }
      }
      return null;
    });
    return component.filter(Boolean);
  }
}
