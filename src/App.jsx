import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Events from "./pages/events";
import Team from "./pages/team";
import "./index.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;