// import { useState, useEffect } from "react";
// import { fetchPartners } from "../utils/api";
// import Partners from "./Partners";

// const HeroSection = ({
//   data,
//   aboutData,
//   isDarkMode,
//   toggleDarkMode,
// }) => {
//   const defaultData = {
//     title: "Next-Generation IT Solutions",
//     subtitle: "Empowering Digital Transformation",
//     description: [
//       {
//         children: [
//           {
//             text: "We deliver cutting-edge technology solutions with AI-powered insights, cloud infrastructure, and seamless digital experiences that propel your business into the future.",
//           },
//         ],
//       },
//     ],
//   };

//   const heroData = data || defaultData;
//   const { title, subtitle, description } = heroData;

//   const [partners, setPartners] = useState([]);
//   const [partnersLoading, setPartnersLoading] =
//     useState(true);

//   const [isLoaded, setIsLoaded] = useState(false);
//   const [animationStep, setAnimationStep] = useState(0);

//   useEffect(() => {
//     fetchPartners().then((data) => {
//       console.log("Fetched partners:", data);
//       setPartners(data || []);
//       setPartnersLoading(false);
//     });

//     const timer = setTimeout(() => {
//       setIsLoaded(true);

//       // Staggered animation steps
//       const steps = [
//         () => setAnimationStep(1),
//         () => setAnimationStep(2),
//         () => setAnimationStep(3),
//         () => setAnimationStep(4),
//         () => setAnimationStep(5),
//       ];

//       steps.forEach((step, index) => {
//         setTimeout(step, index * 200);
//       });
//     }, 100);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!heroData) return null;

//   return (
//     <div
//       id="home"
//       className="relative flex h-full w-full flex-col items-center justify-center transition-colors duration-300"
//     >
//       {/* Hero Content */}
//       <section className="relative flex min-h-screen w-full items-center justify-center pt-24">
//         <div className="relative z-10 mx-auto flex max-w-sm flex-col items-center justify-center px-4 text-center lg:max-w-5xl">
//           {/* Subtitle with animation */}
//           {subtitle && (
//             <div
//               className={`mb-4 transform transition-all duration-700 ease-out md:mb-6 ${
//                 isLoaded && animationStep >= 1
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-8 opacity-0"
//               }`}
//             >
//               <span
//                 className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wide backdrop-blur-sm transition-all duration-500 sm:px-4 sm:py-2 sm:text-sm ${
//                   isDarkMode
//                     ? "border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200"
//                     : "border-blue-300/40 bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-700"
//                 } ${isLoaded && animationStep >= 1 ? "scale-100" : "scale-95"}`}
//               >
//                 <span
//                   className={`mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full sm:mr-2 sm:h-2 sm:w-2 ${
//                     isDarkMode
//                       ? "bg-blue-400"
//                       : "bg-blue-500"
//                   }`}
//                 ></span>
//                 {subtitle}
//               </span>
//             </div>
//           )}

//           <div className="w-[90%] sm:w-[80%] md:w-[70%]">
//             <h1
//               className={`mb-6 font-dosis text-3xl font-bold leading-tight transition-all duration-300 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl xl:text-7xl ${
//                 isDarkMode ? "text-white" : "text-gray-900"
//               }`}
//             >
//               {title.split(" ").map((word, index) => (
//                 <span
//                   key={index}
//                   className={`inline-block transform transition-all duration-700 ease-out ${
//                     isLoaded && animationStep >= 2
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-12 opacity-0"
//                   }`}
//                   style={{
//                     transitionDelay: `${index * 100 + 200}ms`,
//                   }}
//                 >
//                   {word}
//                   {index < title.split(" ").length - 1 &&
//                     "\u00A0"}
//                 </span>
//               ))}
//             </h1>
//           </div>

//           {Array.isArray(description) && (
//             <div
//               className={`mx-auto mb-12 max-w-3xl transform transition-all duration-700 ease-out ${
//                 isLoaded && animationStep >= 3
//                   ? "translate-y-0 opacity-100"
//                   : "translate-y-8 opacity-0"
//               }`}
//               style={{ transitionDelay: "600ms" }}
//             >
//               {description.map((block, index) => (
//                 <p
//                   key={index}
//                   className={`text-sm font-light leading-relaxed transition-colors duration-300 lg:text-xl ${
//                     isDarkMode
//                       ? "text-gray-300"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   {block.children
//                     ?.map((child) => child.text)
//                     .join("")}
//                 </p>
//               ))}
//             </div>
//           )}

//           <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
//             <button
//               className={`transform rounded-[10px] bg-[#2563EB] px-10 py-4 font-semibold text-white backdrop-blur-md transition-all duration-700 ease-out hover:scale-105 hover:bg-[#1d4ed8] hover:shadow-xl ${
//                 isLoaded && animationStep >= 4
//                   ? "translate-y-0 scale-100 opacity-100"
//                   : "translate-y-8 scale-95 opacity-0"
//               }`}
//               style={{ transitionDelay: "800ms" }}
//             >
//               Start Consultation
//             </button>

//             <button
//               className={`group transform rounded-[10px] border-2 px-10 py-4 font-semibold backdrop-blur-sm transition-all duration-700 ease-out hover:scale-105 ${
//                 isDarkMode
//                   ? "border-[1px] border-white/20 bg-white/15 text-gray-300 hover:border-gray-400/50 hover:text-white"
//                   : "border-[1px] border-gray-400/50 bg-white/30 text-gray-700 hover:border-gray-500/60 hover:text-gray-900"
//               } ${
//                 isLoaded && animationStep >= 4
//                   ? "translate-y-0 scale-100 opacity-100"
//                   : "translate-y-8 scale-95 opacity-0"
//               }`}
//               style={{ transitionDelay: "900ms" }}
//             >
//               <span className="flex items-center">
//                 Explore Solutions
//                 <svg
//                   className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           <div
//             className={`w-full transform transition-all duration-700 ease-out ${
//               isLoaded && animationStep >= 5
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-8 opacity-0"
//             }`}
//             style={{ transitionDelay: "1000ms" }}
//           >
//             <div className="mx-auto max-w-6xl px-4">
//               <p
//                 className={`text-[10px] font-medium uppercase tracking-wide transition-colors duration-300 ${
//                   isDarkMode
//                     ? "text-gray-400"
//                     : "text-gray-500"
//                 }`}
//               >
//                 Trusted by Industry Leaders
//               </p>
//               <div
//                 className={`transform transition-all duration-500 ${
//                   isLoaded && animationStep >= 5
//                     ? "scale-100"
//                     : "scale-95"
//                 }`}
//                 style={{ transitionDelay: "1200ms" }}
//               >
//                 <Partners
//                   partners={partners}
//                   partnersLoading={partnersLoading}
//                 />
//               </div>
//               <div className="text-center">
//                 <div className="flex flex-wrap items-center justify-center gap-6">
//                   {[
//                     {
//                       color: "green",
//                       text: "99.9% Uptime",
//                       delay: "1300ms",
//                     },
//                     {
//                       color: "blue",
//                       text: "SOC 2 Compliant",
//                       delay: "1400ms",
//                     },
//                     {
//                       color: "purple",
//                       text: "24/7 Support",
//                       delay: "1500ms",
//                     },
//                   ].map((indicator, index) => (
//                     <div
//                       key={index}
//                       className={`flex transform items-center space-x-2 transition-all duration-500 ${
//                         isLoaded && animationStep >= 5
//                           ? "translate-y-0 opacity-100"
//                           : "translate-y-4 opacity-0"
//                       }`}
//                       style={{
//                         transitionDelay: indicator.delay,
//                       }}
//                     >
//                       <div
//                         className={`h-2 w-2 animate-pulse rounded-full bg-${indicator.color}-400 ${
//                           index === 1
//                             ? "delay-300"
//                             : index === 2
//                               ? "delay-600"
//                               : ""
//                         }`}
//                       ></div>
//                       <span
//                         className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
//                       >
//                         {indicator.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <div
//         className={`absolute inset-0 -z-10 transition-opacity duration-1000 ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         <div
//           className={`absolute inset-0 bg-gradient-to-br ${
//             isDarkMode
//               ? "from-gray-900 via-blue-900/20 to-purple-900/20"
//               : "from-blue-50/50 via-white to-purple-50/50"
//           }`}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import React from "react";
// import Navbar from "./Navbar";

// const BASE_URL = process.env.REACT_APP_STRAPI_URL || "";

// const HeroSection = ({
//   data,
//   isDarkMode,
//   toggleDarkMode,
// }) => {
//   // Default data if not provided
//   const defaultData = {
//     title: "IT Solutions & Business Services Company",
//     description: [
//       {
//         children: [
//           {
//             text: "We provide cutting-edge technology solutions that are easy to understand and use, specifically designed to help your business thrive in the digital era.",
//           },
//         ],
//       },
//     ],
//     image: {
//       url: "/api/placeholder/600/400",
//       alternativeText: "Hero Technology Image",
//     },
//     social_links: [
//       {
//         url: "https://facebook.com",
//         icon: {
//           url: "/api/placeholder/24/24",
//           alternativeText: "Facebook",
//         },
//       },
//       {
//         url: "https://twitter.com",
//         icon: {
//           url: "/api/placeholder/24/24",
//           alternativeText: "Twitter",
//         },
//       },
//       {
//         url: "https://linkedin.com",
//         icon: {
//           url: "/api/placeholder/24/24",
//           alternativeText: "LinkedIn",
//         },
//       },
//     ],
//   };

//   const heroData = data || defaultData;
//   const { title, description, image } = heroData;

//   if (!heroData) return null;

//   return (
//     <div className="min-h-screen bg-[#F0F2F5] transition-colors duration-300 dark:bg-gray-900">
//       <div className="pointer-events-none fixed inset-0 overflow-hidden">
//         <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-20 blur-3xl"></div>
//         <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-400 to-cyan-500 opacity-20 blur-3xl"></div>
//       </div>

//       {/* Navbar Component */}
//       <Navbar
//         isDarkMode={isDarkMode}
//         toggleDarkMode={toggleDarkMode}
//       />

//       {/* Hero Content */}
//       <section className="relative flex h-[calc(100vh-80px)] w-full items-center justify-center">
//         <div className="relative z-10 mx-auto flex h-full flex-col items-center justify-between gap-10 px-4 md:flex-row md:px-28">
//           {/* Left side - Text Content */}
//           <div className="md:w-1/2">
//             {/* Main Title */}
//             <h1 className="font-dosis mb-6 text-5xl font-bold text-[#252525] transition-colors duration-300 md:text-5xl dark:text-white">
//               {title}
//             </h1>

//             {/* Description */}
//             {Array.isArray(description) && (
//               <div className="mb-12">
//                 {description.map((block, index) => (
//                   <p
//                     key={index}
//                     className="text-lg leading-relaxed text-gray-600 transition-colors duration-300 md:text-xl dark:text-gray-300"
//                   >
//                     {block.children
//                       ?.map((child) => child.text)
//                       .join("")}
//                   </p>
//                 ))}
//               </div>
//             )}

//             {/* CTA Buttons */}
//             <div className="mb-12 flex flex-col gap-4 sm:flex-row">
//               <button className="transform rounded-xl border border-white/20 bg-[#2563EB] px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#1d4ed8] hover:shadow-xl">
//                 Start Consultation
//               </button>

//               <button className="transform rounded-xl border border-gray-300/50 bg-white/20 px-8 py-4 font-semibold text-gray-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-gray-50/30 dark:border-gray-600/50 dark:bg-gray-900/20 dark:text-gray-300 dark:hover:bg-gray-800/30">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Right side - Hero Image */}
//           <div className="relative w-full md:w-1/2">
//             {image?.url ? (
//               <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-blue-100/15 to-orange-100/15 p-8 shadow-2xl backdrop-blur-xl">
//                 <img
//                   src={`${BASE_URL}${image.url}`}
//                   alt={
//                     image?.alternativeText || "Hero Image"
//                   }
//                   className="w-full"
//                 />
//               </div>
//             ) : (
//               // Fallback illustration if no image provided
//               <div className="relative rounded-3xl border border-white/20 bg-gradient-to-br from-blue-100/5 to-orange-100/5 p-8 shadow-2xl backdrop-blur-md">
//                 <div className="mb-4 flex h-64 items-center justify-center">
//                   <div className="text-8xl text-blue-600 transition-colors duration-300 dark:text-blue-400">
//                     💻
//                   </div>
//                 </div>

//                 {/* Progress bars */}
//                 <div className="space-y-2">
//                   <div className="h-2 rounded-full border border-white/20 bg-gray-200/50 backdrop-blur-sm">
//                     <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-orange-400 to-red-500"></div>
//                   </div>
//                   <div className="h-2 rounded-full border border-white/20 bg-gray-200/50 backdrop-blur-sm">
//                     <div className="h-2 w-1/2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"></div>
//                   </div>
//                   <div className="h-2 rounded-full border border-white/20 bg-gray-200/50 backdrop-blur-sm">
//                     <div className="h-2 w-5/6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="absolute inset-0 -z-10 scale-105 rotate-6 transform rounded-3xl border border-white/10 bg-gradient-to-r from-orange-400/10 to-blue-400/10 backdrop-blur-xl"></div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;
// import React from "react";
// import Navbar from "./Navbar";

// const HeroSection = ({
//   data,
//   isDarkMode,
//   toggleDarkMode,
// }) => {
//   // Default data if not provided
//   const defaultData = {
//     title: "Next-Generation IT Solutions",
//     subtitle: "Empowering Digital Transformation",
//     description: [
//       {
//         children: [
//           {
//             text: "We deliver cutting-edge technology solutions with AI-powered insights, cloud infrastructure, and seamless digital experiences that propel your business into the future.",
//           },
//         ],
//       },
//     ],
//   };

//   const heroData = data || defaultData;
//   const { title, subtitle, description } = heroData;

//   if (!heroData) return null;

//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[#0A0B0D] text-white">
//       {/* Animated Background Grid */}
//       <div className="absolute inset-0 opacity-30">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20"></div>
//         {/* Grid pattern */}
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//             linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
//           `,
//             backgroundSize: "50px 50px",
//           }}
//         ></div>
//       </div>

//       {/* Floating Orbs */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-1/4 h-32 w-32 animate-pulse rounded-full bg-blue-500/20 blur-xl"></div>
//         <div className="absolute top-1/3 right-1/4 h-48 w-48 animate-pulse rounded-full bg-purple-500/20 blur-2xl delay-1000"></div>
//         <div className="absolute bottom-1/4 left-1/3 h-40 w-40 animate-pulse rounded-full bg-cyan-500/20 blur-xl delay-2000"></div>
//         <div className="absolute top-1/2 right-1/3 h-24 w-24 animate-pulse rounded-full bg-indigo-500/30 blur-lg delay-500"></div>
//       </div>

//       {/* Navbar Component */}
//       <Navbar
//         isDarkMode={isDarkMode}
//         toggleDarkMode={toggleDarkMode}
//       />

//       {/* Hero Content */}
//       <section className="relative flex h-[calc(100vh-80px)] w-full items-center justify-center">
//         <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
//           {/* Subtitle */}
//           {subtitle && (
//             <div className="mb-6">
//               <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-4 py-2 text-sm font-medium tracking-wide text-blue-200 uppercase backdrop-blur-sm">
//                 <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-blue-400"></span>
//                 {subtitle}
//               </span>
//             </div>
//           )}

//           {/* Main Title */}
//           <h1 className="font-dosis mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-6xl leading-tight font-bold text-transparent md:text-7xl lg:text-8xl">
//             {title}
//           </h1>

//           {/* Glowing underline */}
//           <div className="mx-auto mb-8 h-1 w-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 shadow-lg shadow-blue-500/50"></div>

//           {/* Description */}
//           {Array.isArray(description) && (
//             <div className="mx-auto mb-12 max-w-3xl">
//               {description.map((block, index) => (
//                 <p
//                   key={index}
//                   className="text-xl leading-relaxed font-light text-gray-300 md:text-2xl"
//                 >
//                   {block.children
//                     ?.map((child) => child.text)
//                     .join("")}
//                 </p>
//               ))}
//             </div>
//           )}

//           {/* CTA Buttons */}
//           <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
//             <button className="group relative transform overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 px-10 py-4 font-semibold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40">
//               <span className="relative z-10">
//                 Start Your Journey
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-cyan-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//             </button>

//             <button className="group transform rounded-full border-2 border-gray-600/50 bg-gray-900/20 px-10 py-4 font-semibold text-gray-300 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gray-400/50 hover:text-white">
//               <span className="flex items-center">
//                 Explore Solutions
//                 <svg
//                   className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </span>
//             </button>
//           </div>

//           {/* Technology Indicators */}
//           <div className="flex items-center justify-center space-x-8 text-gray-400">
//             <div className="flex items-center space-x-2">
//               <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
//               <span className="text-sm">AI Powered</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400 delay-300"></div>
//               <span className="text-sm">Cloud Native</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400 delay-600"></div>
//               <span className="text-sm">Secure</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 delay-900"></div>
//               <span className="text-sm">Scalable</span>
//             </div>
//           </div>

//           {/* Floating Stats */}
//           <div className="absolute top-1/4 left-8 hidden lg:block">
//             <div className="rounded-2xl border border-gray-700/50 bg-gray-900/40 p-4 text-center backdrop-blur-md">
//               <div className="text-2xl font-bold text-blue-400">
//                 99.9%
//               </div>
//               <div className="text-sm text-gray-400">
//                 Uptime
//               </div>
//             </div>
//           </div>

//           <div className="absolute top-1/3 right-8 hidden lg:block">
//             <div className="rounded-2xl border border-gray-700/50 bg-gray-900/40 p-4 text-center backdrop-blur-md">
//               <div className="text-2xl font-bold text-purple-400">
//                 500+
//               </div>
//               <div className="text-sm text-gray-400">
//                 Projects
//               </div>
//             </div>
//           </div>

//           <div className="absolute bottom-1/4 left-12 hidden lg:block">
//             <div className="rounded-2xl border border-gray-700/50 bg-gray-900/40 p-4 text-center backdrop-blur-md">
//               <div className="text-2xl font-bold text-cyan-400">
//                 24/7
//               </div>
//               <div className="text-sm text-gray-400">
//                 Support
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
//           <div className="flex flex-col items-center text-gray-400">
//             <span className="mb-2 text-sm">
//               Discover More
//             </span>
//             <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-600">
//               <div className="mt-2 h-3 w-1 animate-bounce rounded-full bg-gradient-to-b from-blue-400 to-transparent"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;

const HeroSection = ({
  data,
  isDarkMode,
  toggleDarkMode,
}) => {
  const defaultData = {
    title: "IT Solutions & Business Services Company",
    description: [
      {
        children: [
          {
            text: "We deliver cutting-edge technology solutions with AI-powered insights, cloud infrastructure, and seamless digital experiences that propel your business into the future.",
          },
        ],
      },
    ],
  };

  const heroData = data || defaultData;
  const { title, subtitle, description } = heroData;

  if (!heroData) return null;

  return (
    <div
      className={`relative flex min-h-screen items-center justify-center overflow-hidden pt-28 transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 text-slate-900"
      }`}
    >
      <div className="absolute inset-0 opacity-30">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20"
              : "bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-cyan-100/30"
          }`}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(${isDarkMode ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.15)"} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.15)"} 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute left-1/4 top-20 h-32 w-32 animate-pulse rounded-full blur-xl ${
            isDarkMode ? "bg-blue-500/20" : "bg-blue-400/30"
          }`}
        ></div>
        <div
          className={`absolute right-1/4 top-1/3 h-48 w-48 animate-pulse rounded-full blur-2xl delay-1000 ${
            isDarkMode
              ? "bg-orange-500/20"
              : "bg-orange-400/25"
          }`}
        ></div>

        {/* Purple Orb */}
        <div
          className={`delay-2000 absolute bottom-1/4 left-1/3 h-40 w-40 animate-pulse rounded-full blur-xl ${
            isDarkMode
              ? "bg-purple-500/20"
              : "bg-purple-400/25"
          }`}
        ></div>

        {/* Yellow Orb */}
        <div
          className={`absolute right-1/3 top-1/2 h-24 w-24 animate-pulse rounded-full blur-lg delay-500 ${
            isDarkMode
              ? "bg-yellow-500/25"
              : "bg-yellow-400/30"
          }`}
        ></div>

        {/* Additional Blue Orb */}
        <div
          className={`right-1/5 delay-1500 absolute bottom-1/3 h-36 w-36 animate-pulse rounded-full blur-xl ${
            isDarkMode ? "bg-cyan-500/20" : "bg-cyan-400/25"
          }`}
        ></div>

        {/* Small Orange Accent */}
        <div
          className={`left-1/5 delay-3000 absolute top-3/4 h-20 w-20 animate-pulse rounded-full blur-lg ${
            isDarkMode
              ? "bg-orange-400/30"
              : "bg-orange-300/35"
          }`}
        ></div>
      </div>

      {/* Hero Content */}
      <section className="relative flex h-[calc(100vh-80px)] w-full items-center justify-center">
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          {subtitle && (
            <div className="mb-6">
              <span
                className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide backdrop-blur-sm transition-colors duration-300 ${
                  isDarkMode
                    ? "border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200"
                    : "border-blue-300/40 bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-700"
                }`}
              >
                <span
                  className={`mr-2 h-2 w-2 animate-pulse rounded-full ${
                    isDarkMode
                      ? "bg-blue-400"
                      : "bg-blue-500"
                  }`}
                ></span>
                {subtitle}
              </span>
            </div>
          )}

          {/* Main Title */}
          <h1
            className={`mb-8 font-dosis text-6xl font-bold leading-tight transition-all duration-300 md:text-7xl lg:text-8xl ${
              isDarkMode
                ? "bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-800 bg-clip-text text-transparent"
            }`}
          >
            {title}
          </h1>

          {/* Glowing underline */}
          {/* <div
            className={`mx-auto mb-8 h-1 w-32 rounded-full shadow-lg transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 shadow-blue-500/50"
                : "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 shadow-blue-400/40"
            }`}
          ></div> */}

          {/* Description */}
          {Array.isArray(description) && (
            <div className="mx-auto mb-12 max-w-3xl">
              {description.map((block, index) => (
                <p
                  key={index}
                  className={`text-xl font-light leading-relaxed transition-colors duration-300 md:text-2xl ${
                    isDarkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {block.children
                    ?.map((child) => child.text)
                    .join("")}
                </p>
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <button
              className={`transform rounded-[10px] bg-[#2563EB] px-10 py-4 font-semibold text-white backdrop-blur-md transition-all duration-700 ease-out hover:scale-105 hover:bg-[#1d4ed8] hover:shadow-xl`}
            >
              Start Consultation
            </button>

            <button
              className={`group transform rounded-[10px] border-2 px-10 py-4 font-semibold backdrop-blur-sm transition-all duration-700 ease-out hover:scale-105 ${
                isDarkMode
                  ? "border-[1px] border-white/20 bg-white/15 text-gray-300 hover:border-gray-400/50 hover:text-white"
                  : "border-[1px] border-gray-400/50 bg-white/30 text-gray-700 hover:border-gray-500/60 hover:text-gray-900"
              }`}
            >
              <span className="flex items-center">
                Explore Solutions
                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
          {/* Floating Stats */}
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
