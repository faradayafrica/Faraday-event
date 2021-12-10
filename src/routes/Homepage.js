import React from "react";
import Banner from "../components/Homepage/Banner";
import EventList from "../components/Homepage/EventList";
import Footer from "../components/Homepage/Footer";
import Navigation from "../components/Homepage/Navigation";
import PastEvent from "../components/Homepage/PastEvent";

function Homepage() {
  return (
    <div className="">
      <Navigation />
      <Banner />
      <EventList />
      <PastEvent />
      <Footer />
    </div>
  );
}

export default Homepage;
