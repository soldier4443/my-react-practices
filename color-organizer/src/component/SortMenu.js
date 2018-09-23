import React from "react";
import { NavLink } from 'react-router-dom';

const selectedStyle = {
  color: "red"
}

const SortMenu = ({match}) =>
  <nav className="menu">
    <NavLink to="/" style={match.isExact && selectedStyle}>
      날짜
    </NavLink>
    <NavLink to="/sort/title" activeStyle={selectedStyle}>
      이름
    </NavLink>
    <NavLink to="/sort/rating" activeStyle={selectedStyle}>
      평점
    </NavLink>
  </nav>

export default SortMenu;
