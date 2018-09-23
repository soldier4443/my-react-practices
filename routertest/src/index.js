import React from "react";
import { render } from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter, Route, Switch } from "react-router-dom";
import {
  Events,
  Home,
  About,
  Contact,
  Product,
  Whoops404
} from "./components/components";

window.React = React;

render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/product" component={Product} />
        <Route path="/contact" component={Contact} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById("root")
);
registerServiceWorker();
