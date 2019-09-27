import * as React from "react";
import { Input, Button } from "antd";
import { connect } from "react-redux";
import { sendUser } from "./action/index";
import { IContent } from "./interfaces/index";
import Content from "./components/Content";
export interface IStateModalProps {
  content: IContent;
}
export interface IStateDispatchProps {
  sendUser: (value: string) => void;
}

export type IAppProps = IStateModalProps & IStateDispatchProps;

interface IState {
  change_property: string;
  value: string;
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
    const change_property = this.state.change_property;
    const value = this.state.value;
    return (
      <div>
        <Input
          value={change_property}
          name="change_property"
          onChange={this.onChange1}
        />
        <Input value={value} name="value" onChange={this.onChange} />
        <Button type="primary" htmlType="submit" onClick={this.onSubmit}>
          Add TODO
        </Button>
        <Content />
      </div>
    );
  }
  onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: e.currentTarget.value });
  };
  onChange1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ change_property: e.currentTarget.value });
  };

  onSubmit = (e: any) => {
    e.preventDefault();
    const { sendUser } = this.props;
    sendUser(this.state.value);
  };
}
const mapStateToProps = (store: any): IStateModalProps => ({
  content: store.content
});

const mapDispatchToProps = (dispatch: any): IStateDispatchProps => ({
  sendUser: (value: string) => dispatch(sendUser(value))
});

export default connect<IStateModalProps, IStateDispatchProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(App);
