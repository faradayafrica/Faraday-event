import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./routes/Homepage";
import Event from "./routes/Event";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="event" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
