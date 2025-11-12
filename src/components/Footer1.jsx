import React from 'react'

export default function Footer(){
  return (
    <div>
<footer className="bg-green-900 text-gray-200 py-12 px-6 sm:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
    
    {/* Company */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-3">Company</h3>
      <p className="text-gray-200 text-sm leading-relaxed">
        ITCPC - Idukki District Traditional Producer Company Ltd.<br />
        Empowering traditional spice growers through fair trade and innovation.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-3">Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-white">Home</a></li>
        <li><a href="/about" className="hover:text-white">About</a></li>
        <li><a href="/auctions" className="hover:text-white">Auctions</a></li>
        <li><a href="/Products" className="hover:text-white">Products</a></li>
        <li><a href="/contact" className="hover:text-white">Contact</a></li>
      </ul>
    </div>

    {/* Our Products */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-3">Our Products</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/products/cardamom" className="hover:text-white">Cardamom</a></li>

      </ul>
    </div>

    {/* Community Impact */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-3">Community Impact</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/sustainability" className="hover:text-white">Sustainability</a></li>
        <li><a href="/farmers" className="hover:text-white">Farmer Empowerment</a></li>
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h3 className="text-white font-semibold text-lg mb-3">Contact</h3>
      <ul className="space-y-2 text-sm text-gray-200">
        <li>Email: <a href="mailto:info@itcpc.com" className="text-gray-300 hover:text-white">info@itcpc.com</a></li>
        <li>Phone: <span className="text-gray-300">+91 98765 43210</span></li>
        <li>Location: <span className="text-gray-300">Idukki, Kerala, India</span></li>
      </ul>
    </div>

  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-200">
    © 2025 ITCPC - Idukki District Traditional Producer Company Ltd.  
    <br className="sm:hidden" />
    <span className="block sm:inline"> Empowering Farmers • Enhancing Transparency • Enabling Growth</span>
  </div>
</footer>


    </div>
  )
}

