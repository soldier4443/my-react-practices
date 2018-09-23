import React from "react";
import { NavLink } from "react-router-dom";

const selectedStyle = {
  backgroundColor: "white",
  color: "slategray"
};

const MainMenu = () => (
  <nav className="main-menu">
    {/* NavLink creates a link. activeStyle - active when the link matches.*/}
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about" activeStyle={selectedStyle}>
      About
    </NavLink>
    <NavLink to="/product" activeStyle={selectedStyle}>
      Products
    </NavLink>
    <NavLink to="/events" activeStyle={selectedStyle}>
      Events
    </NavLink>
    <NavLink to="/contact" activeStyle={selectedStyle}>
      Contact
    </NavLink>
  </nav>
);

const AboutMenu = ({ match }) => (
  <div className="about-menu">
    {/*
      When user clicks ABOUT in Navigation, this link should be already active.
      if match.isExact is true, then the result is selectedStyle. (kind of like boolean algebra on objects?)
    */}
    <NavLink to="/about" style={match.isExact && selectedStyle}>
      회사
    </NavLink>
    <NavLink to="/about/history" activeStyle={selectedStyle}>
      연혁
    </NavLink>
    <NavLink to="/about/services" activeStyle={selectedStyle}>
      서비스
    </NavLink>
    <NavLink to="/about/location" activeStyle={selectedStyle}>
      위치
    </NavLink>
  </div>
);

// Composition??
const PageTemplate = ({ children }) => (
  <div>
    <MainMenu />
    {children}
  </div>
);

export { AboutMenu };
export default PageTemplate;
