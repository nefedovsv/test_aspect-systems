import { connect } from "react-redux";
import { Dispatch } from "redux";
import { sendUser } from "../../action/index";
import { IStore } from "../../interfaces/index";
import { App, IStateModalProps, IStateDispatchProps } from "./App";

const mapStateToProps = (store: IStore): IStateModalProps => ({
  content: store.content
});

const mapDispatchToProps = (dispatch: Dispatch): IStateDispatchProps => ({
  sendUser: (value1: string, value2: string) =>
    dispatch(sendUser(value1, value2))
});

export const AppContainer = connect<
  IStateModalProps,
  IStateDispatchProps,
  {},
  IStore
>(
  mapStateToProps,
  mapDispatchToProps
)(App);
