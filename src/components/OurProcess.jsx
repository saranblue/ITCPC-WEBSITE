// import React from 'react'
// import spice from "../assets/cardmon_log.png"

// export default function OurProcess (){
//   return (
//     <div className='w-full'>
//         <section className='our-process-section bg-green-200 h-150 max-w-6xl mx-auto  '>
//             <h1 className='text-5xl pt-5 text-center'>HOW WE WORK</h1>
//             <p className='px-20 mt-5'>Our approach combines traditional expertise with cutting-edge technology. From farmer registration to online bidding and transparent payments — every step is managed digitally to ensure fairness, speed, and accountability.</p>

//              <h1 className='text-5xl text-center pt-10'>PROCESS STEPS</h1>  

//           <div className='flex flex-col  md:flex-row items-center justify-between p-6 md:p-10 bg-gray-50'>
//              <div className='w-full md:w-1/2 space-y-4 text-center md:text-left'>
//                 <h1 className='text-3xl pt-5 ps-20 '>Farmer registration</h1>
//                 <p  className=' pt-5 ps-20 '>Verified onboarding of local producers.</p>
//             </div>    

//                <div className='w-full md:w-1/2 mt-6 md:mt-0 flex justify-center'>
//                        <img
//                        src={spice}
//                        alt="Spice Farming"
//                        className="rounded-lg shadow-lg w-full md:w-4/5 object-cover"
//                        />
//                </div>
//             </div>      


//         </section>
//     </div>
//   )
// }



import React from "react";
import spice from "../assets/cardmon_log.png"
import { Link } from "react-scroll";


export default function OurProcess() {
  return (
   <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
  {/* Section Heading */}
  <div className="text-center mb-10">
    <h3 className="text-green-600 uppercase tracking-wide font-semibold text-sm">
      Our Process
    </h3>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
      How We Work
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
      Our approach combines traditional expertise with cutting-edge technology. From farmer registration to online bidding and transparent payments — every step is managed digitally to ensure fairness, speed, and accountability.
    </p>
  </div>

  {/* Process Steps */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
    {/* Step 1 */}
    <div className="bg-gray-50  p-6 text-center hover:shadow-lg  transition-shadow">
      <div className="text-white ms-26 text-center font-bold text-lg mb-2  bg-green-800  w-7">01</div>
      <h4 className="font-semibold text-gray-800 mb-2">Farmer Registration</h4>
      <p className="text-gray-600 text-sm">
        Verified onboarding of local producers.
      </p>
    </div>

    {/* Step 2 */}
    <div className="bg-gray-50 p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-white ms-26 font-bold text-lg mb-2 bg-green-800 rounded-full w-7">02</div>
      <h4 className="font-semibold text-gray-800 mb-2">Quantaty Assessment</h4>
      <p className="text-gray-600 text-sm">
        Cardamom is graded for auction.
      </p>
    </div>

    {/* Step 3 */}
    <div className="bg-gray-50  p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-white ms-26 font-bold text-lg mb-2 bg-green-800 rounded-full w-7">03</div>
      <h4 className="font-semibold text-gray-800 mb-2">Digital Auction</h4>
      <p className="text-gray-600 text-sm">
        Real-time online bidding ensures competitive pricing.
      </p>
    </div>

    {/* Step 4 */}
    <div className="bg-gray-50  p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-white ms-26 rounded-full font-bold text-lg mb-2 bg-green-800 w-7">04</div>
      <h4 className="font-semibold text-gray-800 mb-2">Transparent Settlement</h4>
      <p className="text-gray-600 text-sm">
        Instant and accurate payment settlements for farmers.
      </p>
    </div>
  </div>
</section>

  );
}
