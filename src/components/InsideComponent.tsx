import * as React from "react";
import { IElement, ElementType } from "../interfaces/index";
import { InsidePanelComponent } from "./InsidePanelComponent";
import { ButtonComponent } from "./ButtonComponent";
import { LabelComponent } from "./LabelComponent";
export interface IInsideComponent {
  content?: IElement[];
}
export class InsideComponent extends React.Component<IInsideComponent> {
  render() {
    const { content } = this.props;
    if (content) {
      const component: React.ReactNode[] = content.map((item, index) => {
        if (item.props.visible) {
          if (item.type === ElementType.panel) {
            return <InsidePanelComponent key={index} data={item} />;
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
}
