import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./Components/Context/Context";

ReactDOM.render(
  
    <BrowserRouter basename="/">
      <ContextProvider>
      <App />
      </ContextProvider>
    </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
