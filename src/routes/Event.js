import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import { useParams } from "react-router-dom";
import Banner from "../components/Event/Banner";
import Sidebar from "../components/Event/Sidebar";
import Description from "../components/Event/Description";
import Speakers from "../components/Event/Speakers";
import { Helmet } from "react-helmet";
import Schedule from "../components/Event/Schedule";
import Footer from "../components/Footer";
import Form from "../components/Event/Form";
import Countdown from "../components/Event/Countdown";
import Navigation from "../components/Navigation";

const base = new Airtable({
  apiKey: process.env.REACT_APP_API_KEY,
}).base(process.env.REACT_APP_BASE);

function Event() {
  const params = useParams();
  const [event, setEvent] = useState([]);

  useEffect(() => {
    base("events").find(params.eventId, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      setEvent(record);
    });
  }, []);

  const eventTitle = event?.fields?.title;
  const bannerImage = event?.fields?.cover_image[0].url;

  return (
    <div className="relative">
      <Helmet>
        <title>Faraday Event </title>
      </Helmet>

      <Sidebar />
      <Navigation event />

      <div className="md:ml-[48px]">
        <Banner bannerImage={bannerImage} />
        <div className="container md:grid [grid-template-columns:2fr_1fr] my-5">
          <div className="space-y-12">
            <Countdown eventTitle={eventTitle} />
            <Description />
            <Speakers />
            <Schedule />
          </div>
          <Form />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Event;
