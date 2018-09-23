import React from "react";

const options = {
  date: "SORTED_BY_DATE",
  title: "SORTED_BY_TITLE",
  rating: "SORTED_BY_RATING"
};

const SortMenu = ({ sort, onSelect = f => f }) => (
  <nav
    className="menu"
    style={{
      display: "flex",
      justifyContent: "space-around",
      backgroundColor: "black"
    }}
  >
    <h1 style={{ display: "none" }}>Sort Colors</h1>
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
        className={sort === options[item] ? "selected" : null}
        onClick={e => {
          e.preventDefault();
          console.log("working!!", options[item]);
          console.log(onSelect);
          onSelect(options[item]);
        }}
      >
        {item}
      </a>
    ))}
  </nav>
);

export default SortMenu;
