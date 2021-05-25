import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./Styles/reset.scss";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Routes />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
