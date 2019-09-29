import * as React from "react";
import { Input, Button } from "antd";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { sendUser } from "../action/index";
import { IElement, IStore } from "../interfaces/index";
import { Content } from "./Content";
import styles from "./styles/App.module.css";
export interface IStateModalProps {
  content: IElement[];
}
export interface IStateDispatchProps {
  sendUser: (value1: string, value2: string) => void;
}
export type IAppProps = IStateModalProps & IStateDispatchProps;
interface IState {
  [key: string]: string;
}
class App extends React.Component<IAppProps, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      change_property: "",
      value: ""
    };
  }
  render() {
    const { change_property } = this.state;
    const { value } = this.state;
    return (
      <div className={styles.box}>
        <div className={styles.panel}>
          <Input
            className={styles.input}
            addonBefore={"Путь"}
            placeholder="content[0].props.width"
            defaultValue={"dsfdsf"}
            value={change_property}
            name="change_property"
            onChange={this.onChange}
          />
          <Input
            className={styles.input}
            addonBefore={"Новое значение"}
            placeholder="число, true/false, текст"
            value={value}
            name="value"
            onChange={this.onChange}
          />
          <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
            Изменить
          </Button>
        </div>
        <div className={styles.content}>
          <Content list={this.props.content} />
        </div>
      </div>
    );
  }
  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { sendUser } = this.props;
    sendUser(this.state.change_property, this.state.value);
    this.setState({
      change_property: "",
      value: ""
    });
  };
}
const mapStateToProps = (store: IStore): IStateModalProps => ({
  content: store.content
});
const mapDispatchToProps = (dispatch: Dispatch): IStateDispatchProps => ({
  sendUser: (value1: string, value2: string) =>
    dispatch(sendUser(value1, value2))
});
export default connect<IStateModalProps, IStateDispatchProps, {}, IStore>(
  mapStateToProps,
  mapDispatchToProps
)(App);