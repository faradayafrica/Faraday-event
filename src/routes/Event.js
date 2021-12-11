import React, { useEffect } from "react";
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

const base = new Airtable({
  apiKey: process.env.REACT_APP_API_KEY,
}).base(process.env.REACT_APP_BASE);

function Event() {
  const params = useParams();

  useEffect(() => {
    base("events").find(params.eventId, function (err, record) {
      if (err) {
        console.error(err);
        return;
      }
      console.log("Retrieved", record);
    });
  }, []);

  return (
    <div className="relative">
      <Helmet>
        <title>My Title</title>
      </Helmet>

      <Sidebar />

      <div className="ml-[48px]">
        <Banner />
        <div className="container md:grid [grid-template-columns:2fr_1fr]">
          <di className="space-y-12">
            <Description />
            <Speakers />
            <Schedule />
          </di>
          <Form />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Event;
