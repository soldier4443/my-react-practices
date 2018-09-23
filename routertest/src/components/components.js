import React from "react";
import { Route, Link } from "react-router-dom";
import PageTemplate, { AboutMenu } from "./PageTemplate";

export const Home = () => (
  <PageTemplate>
    <section className="home">
      <h1>Home Page</h1>
      <nav>
        <Link to="about">About</Link>
        <Link to="product">Product</Link>
        <Link to="contact">Contact</Link>
        <Link to="events">Event</Link>
      </nav>
    </section>
  </PageTemplate>
);

export const Events = () => (
  <PageTemplate>
    <section className="event">
      <h1>Event Page</h1>
    </section>
  </PageTemplate>
);

export const Product = () => (
  <PageTemplate>
    <section className="home">
      <h1>Product Page</h1>
    </section>
  </PageTemplate>
);

export const Contact = () => (
  <PageTemplate>
    <section className="home">
      <h1>Contact Page</h1>
    </section>
  </PageTemplate>
);

const Company = () => 
  <section className="company">
    <h2>회사</h2>
  </section>
  
const Services = () => 
<section className="services">
  <h2>서비스</h2>
</section>

const History = () => 
  <section className="history">
    <h2>연혁</h2>
  </section>
  
const Location = () => 
<section className="location">
  <h2>위치</h2>
</section>

export const About = () => (
  <PageTemplate>
    <section className="home">
      <Route component={AboutMenu}/>
      <Route exact path="/about" component={Company}/>
      <Route path="/about/history" component={History}/>
      <Route path="/about/services" component={Services}/>
      <Route path="/about/location" component={Location}/>
    </section>
  </PageTemplate>
);

export const Whoops404 = ({ location }) => (
  <div className="whoops-404">
    <h1>resources on '{location.pathname}' not found</h1>
  </div>
);
