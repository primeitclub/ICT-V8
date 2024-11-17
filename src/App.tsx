<<<<<<< HEAD
// import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import ComingSoon from "./pages/coming-soon";
=======
import { Button } from "@/components/ui/button"
>>>>>>> e66b86774f7d0f061d2e80fbe20d60deaf29ab9d

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
    </Routes>
  );
}
