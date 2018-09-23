import React from "react";
import PropTypes from "prop-types";
import { sortColors } from "./new/actions";

const options = {
  date: "SORTED_BY_DATE",
  title: "SORTED_BY_TITLE",
  rating: "SORTED_BY_RATING"
};

const SortMenu = ({ store }) => (
  <nav className="menu"
    style={{
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "black"
    }}>
    <h1 style={{display: "none"}}>Sort Colors</h1>
    {Object.keys(options).map((item, i) => (
      <a
        key={i}
        href="#"
        style={{
          color: "white",
          fontFamily: "Arial, sans-serif",
          fontSize: "2em",
          padding: ".5em",
          textDecoration: "none"
        }}
        className={store.getState().sort === options[item] ? "selected" : null}
        onClick={e => {
          e.preventDefault();
          console.log("working!!", options[item])
          store.dispatch(sortColors(options[item]));
        }}
      >
        {item}
      </a>
    ))}
  </nav>
);

SortMenu.propTypes = {
  store: PropTypes.object
};

export default SortMenu;
