import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <section className="home">
    <h1>Home Page</h1>
    <nav>
      <Link to="about">About</Link>
      <Link to="product">Product</Link>
      <Link to="contact">Contact</Link>
      <Link to="events">Event</Link>
    </nav>
  </section>
);

export const Events = () => (
  <section className="event">
    <h1>Event Page</h1>
  </section>
);

export const Product = () => (
  <section className="home">
    <h1>Product Page</h1>
  </section>
);

export const Contact = () => (
  <section className="home">
    <h1>Contact Page</h1>
  </section>
);

export const About = () => (
  <section className="home">
    <h1>About Page</h1>
  </section>
);

export const Whoops404 = ({ location }) => (
  <div className="whoops-404">
    <h1>resources on '{location.pathname}' not found</h1>
  </div>
);
