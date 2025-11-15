

// export default function OurProcess() {
//   return (
//     <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

//         {/* LEFT SIDE — TEXT */}
//         <div className="text-left sticky top-20">
//           <h3 className="text-green-600 uppercase tracking-wide font-semibold text-sm">
//             Our Process
//           </h3>

//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
//             How We Work
//           </h2>

//           <p className="text-gray-600 max-w-xl mt-4 text-sm sm:text-base">
//             Our approach combines traditional expertise with cutting-edge technology.
//             From farmer registration to online bidding and transparent payments —
//             every step is managed digitally to ensure fairness, speed, and accountability.
//           </p>
//         </div>

//         {/* RIGHT SIDE — PARALLEL CARDS WITH UP/DOWN OFFSET */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20">

//           {/* Card 1 — UP */}
//           <div className="transform -translate-y-6">
//             <div className="group bg-lime-300 p-6 h-72 rounded-2xl flex flex-col  justify-center hover:shadow-lg transition-all">
//               <div className="text-white font-bold text-lg bg-green-800 w-8 h-8 flex   justify-center rounded-full ">01</div>
//               <h4 className="text-black font-semibold my-2 ">Farmer Registration</h4>
//               <p className="text-black text-sm  ">Verified onboarding of local producers.</p>
//             </div>
//           </div>

//           {/* Card 2 — DOWN */}
//           <div className="transform translate-y-50">
//             <div className="group bg-cyan-300 p-6 h-72 rounded-2xl flex flex-col  justify-center hover:shadow-lg transition-all">
//               <div className="text-white font-bold text-lg bg-green-800 w-8 h-8 flex items-center justify-center rounded-full ">02</div>
//               <h4 className="text-black font-semibold my-2 ">Quantity Assessment</h4>
//               <p className="text-black text-sm ">Cardamom is graded for auction.</p>
//             </div>
//           </div>

//           {/* Card 3 — UP */}
//           <div className="transform -translate-y-">
//             <div className="group bg-lime-300 p-6 h-72 rounded-2xl flex flex-col  justify-center hover:shadow-lg transition-all">
//               <div className="text-white font-bold text-lg bg-green-800 w-8 h-8 flex items-center justify-center rounded-full ">03</div>
//               <h4 className="text-black font-semibold my-2 ">Digital Auction</h4>
//               <p className="text-black text-sm ">Real-time online bidding ensures competitive pricing.</p>
//             </div>
//           </div>

//           {/* Card 4 — DOWN */}
//           <div className="transform translate-y-60">
//             <div className="group bg-cyan-300 p-6 h-72 rounded-2xl flex flex-col  justify-center hover:shadow-lg transition-all">
//               <div className="text-white font-bold text-lg bg-green-800 w-8 h-8 flex items-center justify-center rounded-full ">04</div>
//               <h4 className="text-black font-semibold my-2 ">Transparent Settlement</h4>
//               <p className="text-black text-sm ">Instant and accurate payment settlements.</p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }


export default function OurProcess() {
  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* LEFT TEXT */}
        <div className="text-left lg:sticky lg:top-20">
          <h3 className="text-green-600 uppercase tracking-wide font-semibold text-sm">
            Our Process
          </h3>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
            How We Work
          </h2>

          <p className="text-gray-600 max-w-xl mt-4 text-sm sm:text-base">
            Our approach combines traditional expertise with cutting-edge technology.
            From farmer registration to online bidding and transparent payments —
            every step is managed digitally to ensure fairness, speed, and accountability.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

          {/* CARD 1 — UP from sm devices */}
          <div className="sm:-translate-y-6">
            <div className="group bg-linear-to-t from-lime-200 to-transparent p-6 h-72 rounded-2xl flex flex-col justify-center hover:shadow-lg transition-all">
              <div className="text-white font-bold text-lg bg-lime-600 w-8 h-8 flex justify-center items-center rounded-full">
                01
              </div>
              <h4 className="text-black font-semibold my-2">Farmer Registration</h4>
              <p className="text-black text-sm">Verified onboarding of local producers.</p>
            </div>
          </div>

          {/* CARD 2 — DOWN from sm devices */}
          <div className="sm:translate-y-14">
            <div className="group bg-linear-to-t from-lime-200 to-transparent p-6 h-72 rounded-2xl flex flex-col justify-center hover:shadow-lg transition-all">
              <div className="text-white font-bold text-lg bg-lime-600 w-8 h-8 flex justify-center items-center rounded-full">
                02
              </div>
              <h4 className="text-black font-semibold my-2">Quantity Assessment</h4>
              <p className="text-black text-sm">Cardamom is graded for auction.</p>
            </div>
          </div>

          {/* CARD 3 — UP from sm devices */}
          <div className="sm:-translate-y-2">
            <div className="group bg-linear-to-t from-lime-200 to-transparent p-6 h-72 rounded-2xl flex flex-col justify-center hover:shadow-lg transition-all">
              <div className="text-white font-bold text-lg bg-lime-600 w-8 h-8 flex justify-center items-center rounded-full">
                03
              </div>
              <h4 className="text-black font-semibold my-2">Digital Auction</h4>
              <p className="text-black text-sm">
                Real-time online bidding ensures competitive pricing.
              </p>
            </div>
          </div>

          {/* CARD 4 — DOWN from sm devices */}
          <div className="sm:translate-y-23">
            <div className="group bg-linear-to-t from-lime-200 to-transparent p-6 h-72 rounded-2xl flex flex-col justify-center hover:shadow-lg transition-all">
              <div className="text-white font-bold text-lg bg-lime-600 w-8 h-8 flex justify-center items-center rounded-full">
                04
              </div>
              <h4 className="text-black font-semibold my-2">Transparent Settlement</h4>
              <p className="text-black text-sm">
                Instant and accurate payment settlements.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
