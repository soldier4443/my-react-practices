import React, { Component } from "react";
import PropTypes from "prop-types";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import SortMenu from "./SortMenu";
import "./App.css";
import { sortFunction } from "./helpers/array-helpers";

class App extends Component {
  constructor(props) {
    super(props);
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  getChildContext = () => ({
    store: this.props.store
  });

  render = () => {
    const { colors, sort } = this.props.store.getState();
    const sortedColors = [...colors].sort(sortFunction(sort));
    return (
      <div className="app">
        <SortMenu />
        <AddColorForm />
        <ColorList colors={sortedColors} />
      </div>
    );
  };
}

App.propTypes = {
  stoer: PropTypes.object.isRequired
};

App.childContextTypes = {
  store: PropTypes.object.isRequired
}

export default App;
