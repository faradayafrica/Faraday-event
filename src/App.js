import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Event from "./routes/Event";
import { useEffect, useState } from "react";
import { base } from "./util";
import Gallery from "./routes/Gallery";

function App() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    base("events")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setEvents(records);
        setLoading(false)
        fetchNextPage();
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage events={events} loading={loading} />} />
          <Route path="/:eventId" element={<Event />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
