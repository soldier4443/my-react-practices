import React from "react";
import { Switch, Route } from "react-router-dom";
import SortMenu from "./component/SortMenu";
import { NewColor, Colors, Color } from "./containers";
import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/:id" component={Color} />
    <Route
      path="/"
      component={() => (
        <div className="app">
          <Route component={SortMenu} />
          <NewColor />
          <Switch>
            <Route exact path="/" component={Colors} />
            <Route path="/sort/:sort" component={Colors} />
          </Switch>
        </div>
      )}
    />
  </Switch>
);

export default App;
