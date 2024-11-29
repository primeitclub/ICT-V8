import { Routes, Route } from "react-router-dom";
import "./index.css";
import ComingSoon from "./pages/coming-soon";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
    </Routes>
  );
}
