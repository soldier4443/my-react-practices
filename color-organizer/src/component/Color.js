import React, { Component } from "react";
import { withRouter } from "react-router";
import StarRating from "./StarRating";

class Color extends Component {
  // Before mounting component
  componentWillMount = () => {
    this.style = { backgroundColor: "#CCC" };
  };

  // After mounting component
  componentDidMount = () => {};

  // Before updating component
  componentWillUpdate = (nextProps, nextState) => {
    this.style = { backgroundColor: null };
  };

  // After updating component
  componentDidUpdate = (prevProps, prevState) => {};

  // It works as a predicate that determines
  // whether this component should update or not.
  // Could be useful for optimization of rendering process.
  shouldComponentUpdate = (nextProps, nextState) => {
    return this.props.rating !== nextProps.rating;
  };

  render = () => {
    const { id, title, color, rating = 0, onRemove, onRate, history } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1
          ref={input => (this._title = input)}
          className="color-title"
          onClick={() => history.push(`/${id}`)}
        >
          {title}
        </h1>
        <div
          className="color-tile"
          style={{ backgroundColor: color }}
          onClick={() => history.push(`/${id}`)}
        />
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
          <button onClick={onRemove}>X</button>
        </div>
      </section>
    );
  };
}

export default withRouter(Color);
