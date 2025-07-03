import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Event from "./pages/Events.js";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Events">Events</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Events" element={<Event />} />
      </Routes>
    </>
  );
}

export default App;
