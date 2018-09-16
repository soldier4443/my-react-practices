import React from "react";
import "./stylesheets/styles.css";

const Star = ({ selected = false, onClick = f => f }) => (
  <div className={selected ? "star selected" : "star"} onClick={onClick} />
);

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func
};

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.setState({ starsSelected: 0 });
  }

  change = starsSelected => {
    this.setState({ starsSelected });
  };

  render = () => {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map(i => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => this.change(i + 1)}
          />
        ))}
      </div>
    );
  };
}

StarRating.propTypes = {
  totalStars: PropTypes.number
};

StarRating.defaultProps = {
  totalStars: 5
};

export default StarRating;
export { Star };
