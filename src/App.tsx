import { Routes, Route } from "react-router-dom";
import "./index.css";
import ComingSoon from "./pages/coming-soon";
import LandingPage from "./pages/landing-page";
import EventsPage from "./pages/events-page";
import ScrollToTop from "./components/wrappers/scroll-to-top";
import Hero from "./components/heroPage/hero";
import PosterSection from "./components/molecules/sections/poster-section";
import FAQSection from "./components/molecules/sections/faq-section";

export default function App() {
  return (
    <>
    <Hero/>
    <PosterSection/>
    <FAQSection/>
      {/* <ScrollToTop />
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes> */}
    </>
  );
}
