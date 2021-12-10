import React from "react";
import Banner from "../components/Homepage/Banner";
import EventList from "../components/Homepage/EventList";
import Navigation from "../components/Homepage/Navigation";

function Homepage() {
  return (
    <div className="container">
      <Navigation />
      <Banner />
      <EventList />
    </div>
  );
}

export default Homepage;
