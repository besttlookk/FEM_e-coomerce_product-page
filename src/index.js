import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProvider from "./contexts/appContext";
import "./styles/index.scss";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
