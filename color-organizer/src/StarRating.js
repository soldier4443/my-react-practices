import React from "react";
import "./stylesheets/styles.css";
import PropTypes from "prop-types";

const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

const StarRating = ({ key, starsSelected = 0, totalStars = 5, onRate = f => f }) => (
  <div key={key} className="star-rating">
    {[...Array(totalStars)].map((n, i) => (
      <Star
        key={i}
        selected={i < starsSelected}
        onClick={() => onRate(i + 1)}
      />
    ))}
    별점: {starsSelected} / {totalStars}
  </div>
);

StarRating.propTypes = {
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number,
  onRate: PropTypes.func
};

export default StarRating;
export { Star };
