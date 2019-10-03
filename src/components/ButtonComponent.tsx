import * as React from "react";
import { Button } from "antd";
import { IElement } from "../interfaces/index";
import styles from "./styles/Content.module.css";

export interface IButtonComponent {
  data: IElement;
}

export class ButtonComponent extends React.Component<IButtonComponent> {
  render() {
    return (
      <Button
        className={styles.box}
        type="primary"
        style={getStyle(this.props.data)}
      >
        Кнопка
      </Button>
    );
  }
}

export const getStyle = (data: IElement) => ({
  width: `${data.props.width}px`,
  height: `${data.props.height}px`
});
