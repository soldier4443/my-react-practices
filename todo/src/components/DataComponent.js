import React, { Component } from "react";
import axios from "axios";

const DataComponent = (ComposedComponnet, url) =>
  class DataComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: false,
        loaded: false
      };
    }

    componentWillMount = () => {
      this.setState({ loading: true });
      axios.get(url).then(response => {
        this.setState({
          data: response.data,
          loaded: true,
          loading: false
        });
      });
    };

    render() {
      return (
        <div className="data-component">
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            <ComposedComponnet {...this.state} {...this.props} />
          )}
        </div>
      );
    }
  };

export default DataComponent;
