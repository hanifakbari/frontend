// // Partners.jsx
// import React from "react";

// const Partners = ({ partners, partnersLoading }) => {
//   return (
//     <section className="bg-[#F0F2F5] py-10 transition-colors duration-300 dark:bg-gray-900">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 transition-colors duration-300 sm:text-4xl dark:text-white">
//             Our Partners
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 transition-colors duration-300 dark:text-gray-300">
//             Trusted by leading companies worldwide
//           </p>
//         </div>

//         <div className="mt-12">
//           {partnersLoading ? (
//             // Loading State
//             <div className="py-12 text-center">
//               <div className="inline-flex items-center px-4 py-2 text-sm leading-6 font-semibold text-gray-500 transition-colors duration-300 dark:text-gray-400">
//                 <svg
//                   className="mr-3 -ml-1 h-5 w-5 animate-spin text-gray-500 transition-colors duration-300 dark:text-gray-400"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   />
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   />
//                 </svg>
//                 Loading partners...
//               </div>
//             </div>
//           ) : partners.length === 0 ? (
//             // Empty State
//             <div className="py-12 text-center">
//               <div className="text-gray-500 transition-colors duration-300 dark:text-gray-400">
//                 <svg
//                   className="mx-auto h-12 w-12 text-gray-300 transition-colors duration-300 dark:text-gray-600"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                   />
//                 </svg>
//                 <p className="mt-2 transition-colors duration-300">
//                   No partners available at the moment.
//                 </p>
//               </div>
//             </div>
//           ) : (
//             // Partners Grid
//             <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
//               {partners.map((partner) => {
//                 const { id, name, url, image } = partner;
//                 const imageUrl = image?.url
//                   ? `http://localhost:1337${image.url}`
//                   : null;
//                 const imageAlt =
//                   image?.alternativeText ||
//                   name ||
//                   "Partner logo";
//                 const hasValidUrl =
//                   url && url.trim() !== "" && url !== null;

//                 const PartnerCard = () => (
//                   <div className="group relative">
//                     <div className="relative flex h-28 cursor-pointer items-center justify-center rounded-xl border border-white/60 bg-white/40 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/50 dark:border-white/20 dark:bg-white/10 dark:hover:bg-white/15">
//                       <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-white/10"></div>

//                       <div className="relative z-10 flex h-full w-full flex-col items-center justify-center space-y-2">
//                         <div className="flex h-12 w-full items-center justify-center">
//                           {imageUrl ? (
//                             <img
//                               src={imageUrl}
//                               alt={imageAlt}
//                               className="max-h-full max-w-full object-contain transition-all duration-300"
//                               onError={(e) => {
//                                 e.target.style.display =
//                                   "none";
//                                 e.target.nextSibling.style.display =
//                                   "flex";
//                               }}
//                             />
//                           ) : null}

//                           {/* Fallback Placeholder */}
//                           <div
//                             className="flex h-10 w-16 items-center justify-center rounded-lg border border-white/50 bg-white/30 text-xs backdrop-blur-sm transition-all duration-300 group-hover:bg-white/40 dark:border-white/30 dark:bg-white/20 dark:group-hover:bg-white/25"
//                             style={{
//                               display: imageUrl
//                                 ? "none"
//                                 : "flex",
//                             }}
//                           >
//                             <svg
//                               className="h-6 w-6 text-gray-500 transition-colors duration-300 group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//                               />
//                             </svg>
//                           </div>
//                         </div>

//                         {/* Partner Name */}
//                         <span className="text-center text-xs font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-300 dark:group-hover:text-white">
//                           {name}
//                         </span>
//                       </div>

//                       {/* External Link Indicator */}
//                       {hasValidUrl && (
//                         <div className="absolute top-2 right-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
//                           <div className="rounded-full border border-white/50 bg-white/30 p-1 backdrop-blur-sm dark:border-white/30 dark:bg-white/20">
//                             <svg
//                               className="h-3 w-3 text-gray-600 dark:text-gray-400"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                       )}
//                     </div>

//                     {/* Soft shadow behind card */}
//                     <div className="absolute inset-0 -z-10 scale-95 transform rounded-xl bg-gradient-to-br from-gray-200/30 to-gray-300/20 opacity-0 blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-50 dark:from-gray-600/20 dark:to-gray-700/10"></div>
//                   </div>
//                 );

//                 // Render clickable or non-clickable version
//                 if (hasValidUrl) {
//                   return (
//                     <a
//                       key={id}
//                       href={url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="transform transition-transform duration-300 hover:-translate-y-1"
//                       title={`Visit ${name} website`}
//                     >
//                       <PartnerCard />
//                     </a>
//                   );
//                 }

//                 return (
//                   <div key={id}>
//                     <PartnerCard />
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>

//         {/* Partners Count */}
//         {!partnersLoading && partners.length > 0 && (
//           <div className="mt-8 text-center">
//             <p className="text-sm text-gray-500 transition-colors duration-300 dark:text-gray-400">
//               Working with{" "}
//               <span className="font-semibold">
//                 {partners.length}
//               </span>{" "}
//               trusted partner
//               {partners.length !== 1 ? "s" : ""}
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Partners;

// Partners.jsx
// Partners.jsx
// import React from "react";
// import Marquee from "react-fast-marquee";

// const Partners = ({ partners, partnersLoading }) => {
//   return (
//     <section className="bg-[#F0F2F5] py-10 transition-colors duration-300 dark:bg-gray-900">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="mb-12 text-center">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 transition-colors duration-300 sm:text-4xl dark:text-white">
//             Our Partners
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 transition-colors duration-300 dark:text-gray-300">
//             Trusted by leading companies worldwide
//           </p>
//         </div>

//         {partnersLoading ? (
//           // Loading State
//           <div className="py-12 text-center">
//             <div className="inline-flex items-center px-4 py-2 text-sm leading-6 font-semibold text-gray-500 transition-colors duration-300 dark:text-gray-400">
//               <svg
//                 className="mr-3 -ml-1 h-5 w-5 animate-spin text-gray-500 transition-colors duration-300 dark:text-gray-400"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 />
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                 />
//               </svg>
//               Loading partners...
//             </div>
//           </div>
//         ) : partners.length === 0 ? (
//           // Empty State
//           <div className="py-12 text-center">
//             <div className="text-gray-500 transition-colors duration-300 dark:text-gray-400">
//               <svg
//                 className="mx-auto h-12 w-12 text-gray-300 transition-colors duration-300 dark:text-gray-600"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                 />
//               </svg>
//               <p className="mt-2 transition-colors duration-300">
//                 No partners available at the moment.
//               </p>
//             </div>
//           </div>
//         ) : (
//           // Single Row Marquee - Very Slow
//           <div className="py-8">
//             <Marquee
//               gradient={false}
//               speed={15}
//               pauseOnHover={true}
//             >
//               {partners.map((partner, index) => (
//                 <PartnerLogo
//                   key={`${partner.id}-${index}`}
//                   partner={partner}
//                 />
//               ))}
//             </Marquee>
//           </div>
//         )}

//         {/* Partners Count */}
//         {!partnersLoading && partners.length > 0 && (
//           <div className="mt-8 text-center">
//             <p className="text-sm text-gray-500 transition-colors duration-300 dark:text-gray-400">
//               Working with{" "}
//               <span className="font-semibold">
//                 {partners.length}
//               </span>{" "}
//               trusted partner
//               {partners.length !== 1 ? "s" : ""}
//             </p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// // Simple Partner Logo Component - No Background
// const PartnerLogo = ({ partner }) => {
//   const { name, url, image } = partner;
//   const imageUrl = image?.url
//     ? `http://localhost:1337${image.url}`
//     : null;
//   const imageAlt =
//     image?.alternativeText || name || "Partner logo";
//   const hasValidUrl =
//     url && url.trim() !== "" && url !== null;

//   const LogoContent = () => (
//     <div className="group mx-8 flex items-center justify-center">
//       {/* Logo Container - No Background */}
//       <div className="flex h-16 w-24 items-center justify-center transition-all duration-300 group-hover:scale-110">
//         {imageUrl ? (
//           <img
//             src={imageUrl}
//             alt={imageAlt}
//             className="max-h-full max-w-full object-contain opacity-70 transition-all duration-300 group-hover:opacity-100"
//             onError={(e) => {
//               e.target.style.display = "none";
//               e.target.nextSibling.style.display = "flex";
//             }}
//           />
//         ) : (
//           // Simple fallback - just text
//           <div className="text-center">
//             <div className="text-xs font-medium text-gray-400 dark:text-gray-500">
//               {name}
//             </div>
//           </div>
//         )}

//         {/* Fallback Placeholder - Very Simple */}
//         <div
//           className="flex h-12 w-16 items-center justify-center text-gray-400 dark:text-gray-500"
//           style={{
//             display: imageUrl ? "none" : "flex",
//           }}
//         >
//           <svg
//             className="h-8 w-8 opacity-50"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={1}
//               d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );

//   // Render clickable or non-clickable version
//   if (hasValidUrl) {
//     return (
//       <a
//         href={url}
//         target="_blank"
//         rel="noopener noreferrer"
//         title={`Visit ${name} website`}
//         className="inline-block"
//       >
//         <LogoContent />
//       </a>
//     );
//   }

//   return <LogoContent />;
// };

// export default Partners;

// Partners.jsx
import React from "react";
import Marquee from "react-fast-marquee";

const Partners = ({ partners, partnersLoading }) => {
  return (
    <section className="transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {partnersLoading ? (
          // Loading State
          <div className="py-12 text-center">
            <div className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-gray-500 transition-colors duration-300 dark:text-gray-400">
              <svg
                className="-ml-1 mr-3 h-5 w-5 animate-spin text-gray-500 transition-colors duration-300 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Loading partners...
            </div>
          </div>
        ) : partners.length === 0 ? (
          // Empty State
          <div className="py-12 text-center">
            <div className="text-gray-500 transition-colors duration-300 dark:text-gray-400">
              <svg
                className="mx-auto h-12 w-12 text-gray-300 transition-colors duration-300 dark:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <p className="mt-2 transition-colors duration-300">
                No partners available at the moment.
              </p>
            </div>
          </div>
        ) : (
          // Single Row Marquee - Very Slow
          <div className="py-8">
            <Marquee
              gradient={false}
              speed={15}
              pauseOnHover={true}
            >
              {partners.map((partner, index) => (
                <PartnerLogo
                  key={`${partner.id}-${index}`}
                  partner={partner}
                />
              ))}
            </Marquee>
          </div>
        )}
      </div>
      {/* <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 transition-colors duration-300 sm:text-4xl dark:text-white">
          Our Partners
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 transition-colors duration-300 dark:text-gray-300">
          Trusted by leading companies worldwide
        </p>
        {!partnersLoading && partners.length > 0 && (
          <div className="mt-2 text-center">
            <p className="text-sm text-gray-500 transition-colors duration-300 dark:text-gray-400">
              Working with{" "}
              <span className="font-semibold">
                {partners.length}
              </span>{" "}
              trusted partner
              {partners.length !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div> */}
    </section>
  );
};

const PartnerLogo = ({ partner }) => {
  const { name, url, image } = partner;
  const imageUrl = image?.url
    ? `http://localhost:1337${image.url}`
    : null;
  const imageAlt =
    image?.alternativeText || name || "Partner logo";
  const hasValidUrl =
    url && url.trim() !== "" && url !== null;

  const LogoContent = () => (
    <div className="group mx-6 flex items-center justify-center">
      <div className="relative flex h-16 w-36 cursor-pointer items-center justify-center rounded-[10px] bg-transparent p-4 backdrop-blur-sm transition-all duration-300">
        {/* <div className="relative flex h-16 w-36 cursor-pointer items-center justify-center rounded-[10px] bg-transparent p-4 backdrop-blur-sm transition-all duration-300 dark:border dark:border-white/20 dark:bg-white/15 dark:backdrop-blur-sm"> */}
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="max-h-full max-w-full object-contain transition-all duration-300"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : (
            <div className="text-center">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-300">
                {name}
              </div>
            </div>
          )}

          <div
            className="flex h-10 w-16 items-center justify-center rounded-[10px] border border-white/50 bg-white/40 backdrop-blur-sm dark:border-white/30 dark:bg-white/30"
            style={{
              display: imageUrl ? "none" : "flex",
            }}
          >
            <svg
              className="h-6 w-6 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Soft shadow behind card */}
        <div className="absolute inset-0 -z-10 scale-95 transform rounded-[10px] bg-white/20 opacity-0 blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-60 dark:bg-white/20"></div>
      </div>
    </div>
  );

  if (hasValidUrl) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Visit ${name} website`}
        className="inline-block"
      >
        <LogoContent />
      </a>
    );
  }

  return <LogoContent />;
};

export default Partners;
