import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {store} from "./reducers/store";
import App from "./routes/App";
//ReactDOM.render(<App />, document.getElementById("app"));

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="Home" />
  </Provider>
);
