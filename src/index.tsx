import React from "react";
import { render } from "react-dom";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";
import "./Antd.css";
import App from "./App";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
