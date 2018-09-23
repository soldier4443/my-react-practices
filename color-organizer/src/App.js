import React from "react";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import SortMenu from "./SortMenu";
import "./App.css";

const App = ({ store }) => (
  <div className="app">
    <SortMenu store={store} />
    <AddColorForm store={store} />
    <ColorList store={store} />
  </div>
);

export default App;
