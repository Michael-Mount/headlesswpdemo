import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Events.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
