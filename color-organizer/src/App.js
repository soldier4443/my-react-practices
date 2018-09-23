import React from "react";
import { NewColor, Menu, Colors } from "./containers";
import "./App.css";

const App = () => (
  <div className="app">
    <Menu />
    <NewColor />
    <Colors />
  </div>
);

export default App;
