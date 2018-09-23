import React, { Component } from "react";
import PropTypes from "prop-types";
import StarRating from "./StarRating";
import { removeColor, rateColor } from "./new/actions";

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
    const { id, title, color, rating, timestamp } = this.props;
    const { store } = this.context
    return (
      <section className="color" style={this.style}>
        <h1 ref={input => (this._title = input)} className="color-title">
          {title}
        </h1>
        <div className="color-tile" style={{ backgroundColor: color }} />
        <div>
          <StarRating starsSelected={rating} onRate={rating => store.dispatch(rateColor(id, rating))} />
          <button onClick={() => store.dispatch(removeColor(id))}>X</button>
        </div>
      </section>
    );
  };
}

Color.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number
}

Color.defaultProps = {
  rating: 0
}

Color.contextTypes = {
  store: PropTypes.object
}

export default Color;
