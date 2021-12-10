import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Event from "./routes/Event";
import Airtable from "airtable";
import { useEffect, useState } from "react";

var base = new Airtable({
  apiKey: process.env.REACT_APP_API_KEY, // process.env.API_KEY,
}).base(process.env.REACT_APP_BASE);

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    base("events")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setEvents(records);
        fetchNextPage();
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage events={events} />} />
          <Route path="event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
