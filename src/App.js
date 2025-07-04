import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
//Pages
import Home from "./pages/Home";
import Event from "./pages/Events.js";
import Amenities from "./pages/Amenities";
import Contact from "./pages/Contact";
import Employment from "./pages/Employment";
import Gather from "./pages/Gather";
import HoneyGinger from "./pages/HoneyGinger";
import OurStory from "./pages/OurStory";
import Packages from "./pages/Packages";
import RBar from "./pages/RBar";
import RhylandRec from "./pages/RhylandRec";
import Rooms from "./pages/Rooms";
import RoomDetail from "./pages/RoomDetail";
import Scene from "./pages/Scene";
import Stay from "./pages/Stay";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/gather" element={<Gather />} />
        <Route path="/honey-ginger" element={<HoneyGinger />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/packages-specials" element={<Packages />} />
        <Route path="/rbar" element={<RBar />} />
        <Route path="/rhyland-recomandations" element={<RhylandRec />} />
        <Route path="/rooms-suites" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<RoomDetail />} />
        <Route path="/the-scene" element={<Scene />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
