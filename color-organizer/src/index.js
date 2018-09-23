import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import storeFactory from "./new/store";

const store = storeFactory()

render(
    <App store={store} />,
    document.getElementById('root')
)

registerServiceWorker();
