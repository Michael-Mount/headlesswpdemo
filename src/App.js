import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import MobileNavBar from "./components/MobileNavBar";
import "./index.css";
//Pages
import Home from "./pages/Home/Home.js";
import Event from "./pages/Events/Events.js";
import Amenities from "./pages/Amenities/Amenities.js";
import Contact from "./pages/Contact/Contact.js";
import Employment from "./pages/Employment/Employment.js";
import Gather from "./pages/Gather/Gather.js";
import HoneyGinger from "./pages/HoneyGinger/HoneyGinger.js";
import OurStory from "./pages/OurStory/OurStory.js";
import Packages from "./pages/Packages/Packages.js";
import PackageDetail from "./pages/Packages/PackageDetail";
import RBar from "./pages/RBar/RBar.js";
import RhylandRec from "./pages/RhylandRec/RhylandRec.js";
import Rooms from "./pages/Rooms/Rooms";
import RoomDetail from "./pages/Rooms/RoomDetail";
import Scene from "./pages/Scene/Scene.js";
import Stay from "./pages/Stay/Stay.js";

function App() {
  return (
    <>
      <Navbar className="hidden md:block" />
      <MobileNavBar className="flex md:hidden" />
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
        <Route path="/packages/:slug" element={<PackageDetail />} />
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
