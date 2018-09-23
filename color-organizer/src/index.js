import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import storeFactory from "./new/store";

const store = storeFactory();
const render = () =>
  ReactDOM.render(<App store={store} />, document.getElementById("root"));

store.subscribe(render);
render();
registerServiceWorker();
