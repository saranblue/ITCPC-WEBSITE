import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import your page components
import Home from "./pages/Home";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page content container */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </div>
    </div>
  );
}
