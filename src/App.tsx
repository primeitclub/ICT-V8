import { Routes, Route } from "react-router-dom";
import "./index.css";
import ComingSoon from "./pages/coming-soon";
import LandingPage from "./pages/landing-page";
import EventsPage from "./pages/events-page";
import ScrollToTop from "./components/wrappers/scroll-to-top";


export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>
    </>
  );
}
