

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-0 py-4 flex items-center justify-between">
        {/* 🔰 Logo Section */}
        <Link to="/" className="flex items-center gap-3 px-12">
          {/* Replace IT with your actual logo image */}
          <img
            src="/src/assets/cardmon_log.png"  // 👈 place your logo image path here
            alt="IMPcp Logo"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="text-lg font-semibold text-gray-900">IMTCP</div>
            <div className="text-xs text-gray-600">
              Idukki Traditional Producers
            </div>
          </div>
        </Link>

        {/* 💻 Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {["Home", "About", "Products", "Auctions", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="hover:text-lime-500 hover:underline underline-offset-4 transition duration-200"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center py-3 space-y-3 text-gray-700 font-medium">
            {["Home", "About", "Products", "Auctions", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  onClick={toggleMenu}
                  to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                  className="hover:text-green-700 hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
