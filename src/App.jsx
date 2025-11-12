import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Import your page components
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Auctions from "./pages/Auctions";
import Farmers from "./pages/Farmers";
import Sustainability from "./pages/Sustainability";
import News from "./pages/news";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Page content container */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </div>
  );
}
