import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
