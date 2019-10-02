import React from "react";
import { render } from "react-dom";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import "./Antd.css";
import { AppContainer } from "./components/AppContainer/AppContainer";

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);
