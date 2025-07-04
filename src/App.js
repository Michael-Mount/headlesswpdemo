import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home";
import Event from "./pages/Events.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
