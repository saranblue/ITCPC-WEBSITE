import React from 'react'
import { Link } from "react-scroll";


export default function Footer(){
  return (
    <div>
<footer id="contact" className="bg-lime-500 text-black py-12 px-6 sm:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
    
    {/* Company */}
    <div>
      <h3 className="text-black font-semibold text-lg mb-3">Company</h3>
      <p className="text-black text-sm leading-relaxed">
        IMCPC - Idukki District Traditional Producer Company Ltd.<br />
        Empowering traditional spice growers through fair trade and innovation.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-black font-semibold text-lg mb-3">Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="#about" className="hover:text-white">About</a></li>
        <li><a href="#products" className="hover:text-white">Products</a></li>
        <li><a href="#auctions" className="hover:text-white">Auctions</a></li>
        <li><a href="#contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Our Products */}
    <div>
      <h3 className="text-black font-semibold text-lg mb-3">Our Products</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/products/cardamom" className="hover:text-white">Cardamom</a></li>

      </ul>
    </div>

    {/* Community Impact */}
    <div>
      <h3 className="text-black font-semibold text-lg mb-3">Community Impact</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/sustainability" className="hover:text-white">Sustainability</a></li>
        <li><a href="/farmers" className="hover:text-white">Farmer Empowerment</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h2 className="text-black font-semibold text-lg mb-3">Contact</h2>
      <ul className="space-y-2 text-sm text-black">
        <li>Email: <a href="mailto:info@imcpc.com" className="text-black hover:text-white">info@imcpc.com</a></li>
        <li>Phone: <span className="text-black">+91 98765 43210</span></li>
        <li>Location: <span className="text-black">Idukki, Kerala, India</span></li>
      </ul>
    </div>

  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-black">
    © 2025 IMCPC - Idukki District Traditional Producer Company Ltd.  
    <br className="sm:hidden" />
    <span className="block sm:inline"> Empowering Farmers • Enhancing Transparency • Enabling Growth</span>
  </div>
</footer>


    </div>
  )
}

