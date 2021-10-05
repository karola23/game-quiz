import React from "react";
import ReactDOM from "react-dom";

import "./styles/global.scss";
import { StatsProvider } from "./context";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <StatsProvider>
      <App />
    </StatsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
