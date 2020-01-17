import App from "./App";
import ReactDom from "react-dom";
import React from "react";

const render = App => {
  ReactDom.render(<App />, document.getElementById("AppContainer"));
};

render(App);
