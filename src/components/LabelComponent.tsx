import * as React from "react";
import { IElement } from "../interfaces/index";
import styles from "./styles/Content.module.css";
export interface ILabelComponent {
  data: IElement;
}
export class LabelComponent extends React.Component<ILabelComponent> {
  render() {
    const { props } = this.props.data;
    return <span className={styles.box}>{props.caption}</span>;
  }
}
