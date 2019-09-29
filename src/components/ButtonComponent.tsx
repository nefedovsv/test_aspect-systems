import * as React from "react";
import { Button } from "antd";
import { IElement } from "../interfaces/index";
import styles from "./styles/Content.module.css";
export interface IButtonComponentProps {
  data: IElement;
}
export class ButtonComponent extends React.Component<IButtonComponentProps> {
  render() {
    const { props } = this.props.data;
    return (
      <Button
        className={styles.box}
        type="primary"
        style={{
          width: `${props.width}px`,
          height: `${props.height}px`
        }}
      >
        Кнопка
      </Button>
    );
  }
}
