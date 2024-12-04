import { Routes, Route } from "react-router-dom";
import "./index.css";
import ComingSoon from "./pages/coming-soon";
import LandingPage from "./pages/landing-page";
import LandingPage from "./pages/landing-page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
  );
}
