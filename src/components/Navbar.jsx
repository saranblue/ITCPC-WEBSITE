

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu, X } from "lucide-react"; // icons
// import log from '../assets/cardmon_log.png';
// import { Link } from "react-scroll";


// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const navItems = ["Home", "About", "Products", "Auctions", "Contact"];

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
//         <div className="flex items-center justify-between h-16">
//           {/* 🔰 Logo Section */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={log}
//               alt="IMTCP Logo"
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <div>
//               <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
//                 IMTCP
//               </h1>
//               <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">
//                 Idukki Traditional Producers
//               </p>
//             </div>
//           </Link>

//           {/* 💻 Desktop Menu */}
//           <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
//             {navItems.map((item) => (
//               <li key={item}>
//                 <Link
//                   to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
//                   className="hover:text-lime-600 hover:underline underline-offset-4 transition duration-200"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* 📱 Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden text-gray-800 focus:outline-none"
//             aria-label="Toggle menu"
//           >
//             {isOpen ? <X size={26} /> : <Menu size={26} />}
//           </button>
//         </div>
//       </div>

//       {/* 📱 Mobile Menu Dropdown */}
//       <div
//         className={`md:hidden transition-all duration-300 ease-in-out ${
//           isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
//         }`}
//       >
//         <ul className="flex flex-col items-center bg-white py-3 space-y-3 text-gray-700 font-medium border-t border-gray-200 shadow-md">
//           {navItems.map((item) => (
//             <li key={item}>
//               <Link
//                 onClick={() => setIsOpen(false)}
//                 to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
//                 className="block px-3 py-2 hover:text-green-700 hover:underline underline-offset-4"
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import log from "../assets/cardmon_log.png";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // ✅ Section names for scrolling
  const navItems = ["Home", "About", "Products", "Auctions", "Contact"];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* 🔰 Logo Section */}
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={log}
              alt="IMTCP Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                IMTCP
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">
                Idukki Traditional Producers
              </p>
            </div>
          </ScrollLink>

          {/* 💻 Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <ScrollLink
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80} // adjust for navbar height
                  className="cursor-pointer hover:text-lime-600 hover:underline underline-offset-4 transition duration-200"
                >
                  {item}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* 📱 Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center bg-white py-3 space-y-3 text-gray-700 font-medium border-t border-gray-200 shadow-md">
          {navItems.map((item) => (
            <li key={item}>
              <ScrollLink
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)} // closes menu on click
                className="block px-3 py-2 cursor-pointer hover:text-green-700 hover:underline underline-offset-4"
              >
                {item}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

