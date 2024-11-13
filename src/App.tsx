// import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import ComingSoon from "./pages/ComingSoon";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
    </Routes>
  );
}
