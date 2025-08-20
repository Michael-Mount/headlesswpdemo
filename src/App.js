import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import MobileNavBar from "./components/MobileNavBar";
import FullscreenLoader from "./components/loading/FullscreenLoadingAnimation/FullscreenLoadingAnimation";
import "./index.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Lazy load each page
const Home = lazy(() => import("./pages/Home/Home.js"));
const Event = lazy(() => import("./pages/Events/Events.js"));
const Amenities = lazy(() => import("./pages/Amenities/Amenities.js"));
const Contact = lazy(() => import("./pages/Contact/Contact.js"));
const Employment = lazy(() => import("./pages/Employment/Employment.js"));
const Gather = lazy(() => import("./pages/Gather/Gather.js"));
const HoneyGinger = lazy(() => import("./pages/HoneyGinger/HoneyGinger.js"));
const OurStory = lazy(() => import("./pages/OurStory/OurStory.js"));
const Packages = lazy(() => import("./pages/Packages/Packages.js"));
const PackageDetail = lazy(() => import("./pages/Packages/PackageDetail.js"));
const RBar = lazy(() => import("./pages/RBar/RBar.js"));
const RhylandRec = lazy(() => import("./pages/RhylandRec/RhylandRec.js"));
const Rooms = lazy(() => import("./pages/Rooms/Rooms.js"));
const RoomDetail = lazy(() => import("./pages/Rooms/RoomDetail.js"));
const Scene = lazy(() => import("./pages/Scene/Scene.js"));
const Stay = lazy(() => import("./pages/Stay/Stay.js"));
const DemoPage = lazy(() => import("./pages/DemoPage/DemoPage.js"));

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      {!loadingComplete && (
        <FullscreenLoader onFinish={() => setLoadingComplete(true)} />
      )}
      {loadingComplete && (
        <>
          <Navbar className="hidden md:block" />
          <MobileNavBar className="flex md:hidden" />
          <Suspense fallback={<div className="page-fallback"></div>}>
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
              <Route path="/demopage" element={<DemoPage />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </Suspense>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
