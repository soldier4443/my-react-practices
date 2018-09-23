import React from "react";
import { render } from "react-dom";
import "./index.css";
import "./stylesheets/main.css";
import registerServiceWorker from "./registerServiceWorker";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
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
        <Redirect from="/history" to="/about/history" />
        <Redirect from="/services" to="/about/services" />
        <Redirect from="/location" to="/about/location" />
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
