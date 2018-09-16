import React from "react";
import StarRating from "./StarRating";

const Color = ({
  title,
  color,
  rating = 0,
  onRemove = f => f,
  onRate = f => f
}) => {
  return (
    <section className="color">
      <h1 className="color-title">{title}</h1>
      <div className="color-tile" style={{ backgroundColor: color }} />
      <div>
        <StarRating starsSelected={rating} onRate={onRate} />
        <button onClick={onRemove}>X</button>
      </div>
    </section>
  );
};

export default Color;
