import React, { Component } from "react";
import PropTypes from "prop-types";
import { NewColor, Menu, Colors } from "./containers";
import "./App.css";

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
    return (
      <div className="app">
        <Menu />
        <NewColor />
        <Colors />
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
