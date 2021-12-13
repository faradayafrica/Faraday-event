import React from "react";
import Banner from "../components/Homepage/Banner";
import EventList from "../components/Homepage/EventList";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PastEvent from "../components/Homepage/PastEvent";

function Homepage({ events }) {
  const upComingEvents =
    events &&
    events.filter((event) => event?.fields?.event_completed == undefined);
  const pastEvents =
    events && events.filter((event) => event?.fields?.event_completed == true);
  return (
    <div className="">
      <Navigation />
      <Banner />
      <EventList events={upComingEvents} />
      <PastEvent events={pastEvents} />
      <Footer />
    </div>
  );
}

export default Homepage;
