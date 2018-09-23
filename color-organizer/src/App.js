import React from "react";
import { Switch, Route } from "react-router-dom";
import { NewColor, Menu, Colors, Color } from "./containers";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/:id" component={Color} />
    <Route
      path="/"
      component={() => (
        <div className="app">
          <Menu />
          <NewColor />
          <Colors />
        </div>
      )}
    />
  </Switch>
);

export default App;
