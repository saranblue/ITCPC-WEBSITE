import React from 'react'

export default function WhyChooseUs  ()  {
  return (
    <div>
        <section id="why-choose-us" className="bg-gray-50 py-20 px-6 sm:px-10 lg:px-24">
  {/* Heading Section */}
  <div className="max-w-6xl mx-auto text-center mb-16  ">
    <h3 className="text-green-600 uppercase tracking-wide font-semibold text-sm mb-2 ">
      Why Choose Us
    </h3>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 ">
      Why Choose <span className="text-green-700">IMTCP</span>
    </h2>
  </div>

  <div className='bg-green-800 h-100 w-full sticky top-50 z-index'>

  </div>

  {/* Key Points Section */}
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 sticky top-60 z-index">
    <div className="bg-gray-50  p-6  hover:shadow-lg transition-shadow">
      <p className="text-2xl mb-3">🌿</p>
      <h4 className="font-semibold text-gray-800 mb-2">Farmer-Centric Model</h4>
      <p className="text-gray-600 text-sm">
        Every decision we make prioritizes farmer welfare and empowerment.
      </p>
    </div>

    <div className="bg-gray-50  p-6  hover:shadow-lg transition-shadow">
      <p className="text-2xl mb-3">🔒</p>
      <h4 className="font-semibold text-gray-800 mb-2">Transparent Systems</h4>
      <p className="text-gray-600 text-sm">
        Our digital auction platform ensures fairness with zero manipulation.
      </p>
    </div>

    <div className="bg-gray-50  p-6  hover:shadow-lg transition-shadow">
      <p className="text-2xl mb-3">💼</p>
      <h4 className="font-semibold text-gray-800 mb-2">Trusted by Traders</h4>
      <p className="text-gray-600 text-sm">
        Recognized by the Spices Board and trusted by leading buyers.
      </p>
    </div>

    <div className="bg-gray-50  p-6  hover:shadow-lg transition-shadow">
      <p className="text-2xl mb-3">🌍</p>
      <h4 className="font-semibold text-gray-800 mb-2">Sustainable Vision</h4>
      <p className="text-gray-600 text-sm">
        We promote green growth and long-term prosperity for all.
      </p>
    </div>

    <div className="bg-gray-50  p-6  hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
      <p className="text-2xl mb-3">🤝</p>
      <h4 className="font-semibold text-gray-800 mb-2">Community Driven</h4>
      <p className="text-gray-600 text-sm">
        Built by farmers, for the farmers — a cooperative of trust.
      </p>
    </div>
  </div>

<div className='bg-green-100 h-110 w-full sticky top-50 '>

</div>
  {/* Objectives Section */}
  <div className="max-w-6xl mx-auto text-center mb-10 sticky ">
    <h3 className="text-green-600 uppercase tracking-wide font-semibold text-sm mb-2 ">
      Our Objectives
    </h3>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
      Our Core Objectives
    </h2>
  </div>

  {/* Objectives Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sticky top-20">
    {/* Card 1 */}
    <div className="bg-gray-50 mb-3  p-8  border-l-4 border-lime-300  hover:shadow-lg transition-shadow hover:bg-green-300">
      <h4 className="text-xl font-semibold text-green-700 mb-3">Digital Transparency</h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        We streamline spice auctions through secure, technology-driven systems 
        that bring efficiency and eliminate manual errors.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-gray-50 mb-3 p-8 border-l-4 border-lime-300 hover:shadow-lg transition-shadow hover:bg-green-300">
      <h4 className="text-xl font-semibold text-green-700 mb-3">Farmer Empowerment</h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        We ensure fair pricing and equal opportunities for all cardamom producers 
        through a farmer-first approach.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-gray-50 mb-3  p-8 border-l-4 border-lime-300 hover:shadow-lg transition-shadow hover:bg-green-300">
      <h4 className="text-xl font-semibold text-green-700 mb-3">Sustainable Growth</h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        We promote eco-friendly cultivation and responsible trade practices 
        to safeguard the future of cardamom farming.
      </p>
    </div>
  </div>
</section>

    </div>
  )
}
