import App from "./App";
import { AppContainer } from "react-hot-loader";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

/* global document, Office, module, require */

initializeIcons();
let isOfficeInitialized = false;
const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
      <Component isOfficeInitialized={isOfficeInitialized} />
    </AppContainer>
    </BrowserRouter>
    ,
    document.getElementById("container")
  );
};

/* Render application after Office initializes */
Office.onReady(() => {
  isOfficeInitialized = true;
  render(App);
});

/* Initial render showing a progress bar */
render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}
