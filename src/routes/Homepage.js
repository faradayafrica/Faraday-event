import React from "react";
import Banner from "../components/Homepage/Banner";
import EventList from "../components/Homepage/EventList";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import PastEvent from "../components/Homepage/PastEvent";
import MetaTags from "react-meta-tags";

function Homepage({ events, loading }) {
  const upComingEvents =
    events &&
    events.filter((event) => event?.fields?.event_completed === undefined);
  const pastEvents =
    events && events.filter((event) => event?.fields?.event_completed === true);

  return (
    <div className="">
      <Navigation />
      <MetaTags>
        <title> Events at Faraday</title>
        <meta
          name="description"
          content="Discover events with faraday happening around you."
        />
        <meta property="og:title" content="Events at Faraday" />
        <meta property="og:image" content="../images/meta-image.png" />
        <meta name="DC.identifier" content="https://events.faraday.africa/" />
      </MetaTags>
      <Banner />
      {upComingEvents && (
        <EventList events={upComingEvents} loading={loading} />
      )}
      {pastEvents.length > 0 && <PastEvent events={pastEvents} />}
      <Footer />
    </div>
  );
}

export default Homepage;
