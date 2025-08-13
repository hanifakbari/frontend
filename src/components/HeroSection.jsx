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

// const HeroSection = ({
//   data,
//   isDarkMode,
//   toggleDarkMode,
// }) => {
//   const defaultData = {
//     title: "IT Solutions & Business Services Company",
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
//     <div
//       className={`relative flex min-h-screen items-center justify-center overflow-hidden pt-28 transition-colors duration-500 ${
//         isDarkMode
//           ? "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white"
//           : "bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 text-slate-900"
//       }`}
//     >
//       <div className="absolute inset-0 opacity-30">
//         <div
//           className={`absolute inset-0 ${
//             isDarkMode
//               ? "bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20"
//               : "bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-cyan-100/30"
//           }`}
//         ></div>

//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `
//             linear-gradient(${isDarkMode ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.15)"} 1px, transparent 1px),
//             linear-gradient(90deg, ${isDarkMode ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.15)"} 1px, transparent 1px)
//           `,
//             backgroundSize: "50px 50px",
//           }}
//         ></div>
//       </div>

//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div
//           className={`absolute left-1/4 top-20 h-32 w-32 animate-pulse rounded-full blur-xl ${
//             isDarkMode ? "bg-blue-500/20" : "bg-blue-400/30"
//           }`}
//         ></div>
//         <div
//           className={`absolute right-1/4 top-1/3 h-48 w-48 animate-pulse rounded-full blur-2xl delay-1000 ${
//             isDarkMode
//               ? "bg-orange-500/20"
//               : "bg-orange-400/25"
//           }`}
//         ></div>

//         {/* Purple Orb */}
//         <div
//           className={`delay-2000 absolute bottom-1/4 left-1/3 h-40 w-40 animate-pulse rounded-full blur-xl ${
//             isDarkMode
//               ? "bg-purple-500/20"
//               : "bg-purple-400/25"
//           }`}
//         ></div>

//         {/* Yellow Orb */}
//         <div
//           className={`absolute right-1/3 top-1/2 h-24 w-24 animate-pulse rounded-full blur-lg delay-500 ${
//             isDarkMode
//               ? "bg-yellow-500/25"
//               : "bg-yellow-400/30"
//           }`}
//         ></div>

//         {/* Additional Blue Orb */}
//         <div
//           className={`right-1/5 delay-1500 absolute bottom-1/3 h-36 w-36 animate-pulse rounded-full blur-xl ${
//             isDarkMode ? "bg-cyan-500/20" : "bg-cyan-400/25"
//           }`}
//         ></div>

//         {/* Small Orange Accent */}
//         <div
//           className={`left-1/5 delay-3000 absolute top-3/4 h-20 w-20 animate-pulse rounded-full blur-lg ${
//             isDarkMode
//               ? "bg-orange-400/30"
//               : "bg-orange-300/35"
//           }`}
//         ></div>
//       </div>

//       {/* Hero Content */}
//       <section className="relative flex h-[calc(100vh-80px)] w-full items-center justify-center">
//         <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
//           {subtitle && (
//             <div className="mb-6">
//               <span
//                 className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide backdrop-blur-sm transition-colors duration-300 ${
//                   isDarkMode
//                     ? "border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200"
//                     : "border-blue-300/40 bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-700"
//                 }`}
//               >
//                 <span
//                   className={`mr-2 h-2 w-2 animate-pulse rounded-full ${
//                     isDarkMode
//                       ? "bg-blue-400"
//                       : "bg-blue-500"
//                   }`}
//                 ></span>
//                 {subtitle}
//               </span>
//             </div>
//           )}

//           {/* Main Title */}
//           <h1
//             className={`mb-8 font-dosis text-6xl font-bold leading-tight transition-all duration-300 md:text-7xl lg:text-8xl ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
//                 : "bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-800 bg-clip-text text-transparent"
//             }`}
//           >
//             {title}
//           </h1>

//           {/* Description */}
//           {Array.isArray(description) && (
//             <div className="mx-auto mb-12 max-w-3xl">
//               {description.map((block, index) => (
//                 <p
//                   key={index}
//                   className={`text-xl font-light leading-relaxed transition-colors duration-300 md:text-2xl ${
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

//           {/* CTA Buttons */}
//           <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
//             <button
//               className={`transform rounded-[10px] bg-[#2563EB] px-10 py-4 font-semibold text-white backdrop-blur-md transition-all duration-700 ease-out hover:scale-105 hover:bg-[#1d4ed8] hover:shadow-xl`}
//             >
//               Start Consultation
//             </button>

//             <button
//               className={`group transform rounded-[10px] border-2 px-10 py-4 font-semibold backdrop-blur-sm transition-all duration-700 ease-out hover:scale-105 ${
//                 isDarkMode
//                   ? "border-[1px] border-white/20 bg-white/15 text-gray-300 hover:border-gray-400/50 hover:text-white"
//                   : "border-[1px] border-gray-400/50 bg-white/30 text-gray-700 hover:border-gray-500/60 hover:text-gray-900"
//               }`}
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
//           {/* Floating Stats */}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;

// import { useEffect } from "react";
// import buildingHero from "../assets/images/building-hero.png";

// const HeroSection = ({
//   data,
//   isDarkMode,
//   toggleDarkMode,
// }) => {
//   const defaultData = {
//     title: "IT Solutions & Business Services Company",
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

//   // Set CSS custom property for background image
//   useEffect(() => {
//     document.documentElement.style.setProperty(
//       "--building-hero-bg",
//       `url(${buildingHero})`
//     );
//   }, []);

//   // Early return setelah semua hooks
//   if (!heroData) return null;

//   return (
//     <div className={`${isDarkMode ? "dark" : ""}`}>
//       <div
//         className={`relative flex min-h-screen items-center justify-center overflow-hidden transition-all duration-700 ${
//           isDarkMode
//             ? "bg-hero-dark text-white"
//             : "bg-hero-light text-slate-900"
//         }`}
//       >
//         {/* Enhanced Building Background Section */}
//         <div className="absolute inset-0 flex">
//           {/* Left Content Area - Improved spacing */}
//           <div
//             className={`w-full transition-all duration-700 lg:w-3/5 ${
//               isDarkMode
//                 ? "bg-gradient-to-br from-slate-900/95 via-gray-900/90 to-slate-800/85"
//                 : "bg-gradient-to-br from-white/95 via-blue-50/90 to-slate-50/85"
//             }`}
//           >
//             {/* Subtle pattern overlay */}
//             <div
//               className="absolute inset-0 opacity-30"
//               style={{
//                 backgroundImage: `
//                   radial-gradient(circle at 25% 25%, ${isDarkMode ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.15)"} 0%, transparent 50%),
//                   radial-gradient(circle at 75% 75%, ${isDarkMode ? "rgba(147, 51, 234, 0.1)" : "rgba(147, 51, 234, 0.15)"} 0%, transparent 50%)
//                 `,
//               }}
//             ></div>
//           </div>

//           {/* Right Building Area - Enhanced with filters */}
//           <div className="relative hidden lg:block lg:w-2/5">
//             {/* Building Image with Theme-Based Filters */}
//             <div
//               className={`h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700 ${
//                 isDarkMode
//                   ? "bg-building-hero"
//                   : "bg-building-hero"
//               }`}
//               style={{
//                 filter: isDarkMode
//                   ? "brightness(0.7) contrast(1.1) sepia(0.2) hue-rotate(200deg) saturate(1.2)"
//                   : "brightness(1.1) contrast(1.05) sepia(0.1) hue-rotate(210deg) saturate(1.1)",
//               }}
//             >
//               {/* Dynamic Color Overlay */}
//               <div
//                 className={`absolute inset-0 transition-all duration-700 ${
//                   isDarkMode
//                     ? "bg-gradient-to-l from-blue-900/20 via-slate-900/30 to-slate-900/60"
//                     : "bg-gradient-to-l from-blue-100/20 via-white/30 to-blue-50/60"
//                 }`}
//               ></div>

//               {/* Pattern Overlay for Building */}
//               <div
//                 className={`absolute inset-0 transition-opacity duration-700 ${
//                   isDarkMode
//                     ? "bg-building-overlay-dark"
//                     : "bg-building-overlay-light"
//                 }`}
//               ></div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Floating Elements */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           {/* Main accent orbs */}
//           <div
//             className={`animate-float absolute left-[10%] top-[15%] h-40 w-40 rounded-full blur-2xl transition-colors duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-blue-500/25 to-cyan-500/25"
//                 : "bg-gradient-to-r from-blue-400/30 to-cyan-400/30"
//             }`}
//             style={{ animationDelay: "0s" }}
//           ></div>

//           <div
//             className={`animate-float absolute left-[25%] top-[45%] h-56 w-56 rounded-full blur-3xl transition-colors duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
//                 : "bg-gradient-to-r from-purple-400/25 to-pink-400/25"
//             }`}
//             style={{ animationDelay: "2s" }}
//           ></div>

//           <div
//             className={`animate-float absolute bottom-[20%] left-[15%] h-48 w-48 rounded-full blur-2xl transition-colors duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-orange-500/20 to-yellow-500/20"
//                 : "bg-gradient-to-r from-orange-400/25 to-yellow-400/25"
//             }`}
//             style={{ animationDelay: "4s" }}
//           ></div>

//           {/* Right side accent for balance */}
//           <div
//             className={`animate-float absolute right-[15%] top-[25%] h-32 w-32 rounded-full blur-xl transition-colors duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-teal-500/20 to-emerald-500/20"
//                 : "bg-gradient-to-r from-teal-400/25 to-emerald-400/25"
//             }`}
//             style={{ animationDelay: "1s" }}
//           ></div>

//           <div
//             className={`animate-float absolute bottom-[30%] right-[20%] h-36 w-36 rounded-full blur-xl transition-colors duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-indigo-500/15 to-violet-500/15"
//                 : "bg-gradient-to-r from-indigo-400/20 to-violet-400/20"
//             }`}
//             style={{ animationDelay: "3s" }}
//           ></div>
//         </div>

//         {/* Main Content - Improved Layout */}
//         <section className="relative flex min-h-screen w-full items-center justify-center py-20">
//           <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
//             <div className="grid items-center gap-12 lg:grid-cols-2">
//               {/* Left Content */}
//               <div className="animate-slide-up space-y-8">
//                 {/* Enhanced Subtitle Badge */}
//                 {subtitle && (
//                   <div className="flex justify-start lg:justify-start">
//                     <span
//                       className={`animate-glow inline-flex items-center rounded-full border px-6 py-3 text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-500 hover:scale-105 ${
//                         isDarkMode
//                           ? "border-blue-400/40 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-200 shadow-2xl shadow-blue-500/20"
//                           : "border-blue-400/50 bg-gradient-to-r from-white/90 to-blue-50/90 text-blue-700 shadow-2xl shadow-blue-500/15"
//                       }`}
//                     >
//                       <span
//                         className={`mr-3 h-2.5 w-2.5 animate-pulse rounded-full ${
//                           isDarkMode
//                             ? "bg-blue-400"
//                             : "bg-blue-600"
//                         }`}
//                       ></span>
//                       {subtitle}
//                     </span>
//                   </div>
//                 )}

//                 {/* Enhanced Main Title */}
//                 <h1
//                   className={`font-dosis text-4xl font-bold leading-tight transition-all duration-700 sm:text-5xl lg:text-6xl xl:text-7xl ${
//                     isDarkMode
//                       ? "bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent"
//                       : "bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent"
//                   }`}
//                 >
//                   {title}
//                 </h1>

//                 {/* Enhanced Description */}
//                 {Array.isArray(description) && (
//                   <div className="max-w-2xl">
//                     {description.map((block, index) => (
//                       <p
//                         key={index}
//                         className={`text-lg font-light leading-relaxed transition-colors duration-700 sm:text-xl lg:text-2xl ${
//                           isDarkMode
//                             ? "text-gray-300"
//                             : "text-gray-700"
//                         }`}
//                       >
//                         {block.children
//                           ?.map((child) => child.text)
//                           .join("")}
//                       </p>
//                     ))}
//                   </div>
//                 )}

//                 {/* Enhanced CTA Buttons */}
//                 <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
//                   <button className="hover:shadow-3xl group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-bold text-white shadow-2xl shadow-blue-500/30 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/40">
//                     {/* Button glow effect */}
//                     <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
//                     <span className="relative flex items-center">
//                       Start Consultation
//                       <svg
//                         className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M13 7l5 5m0 0l-5 5m5-5H6"
//                         />
//                       </svg>
//                     </span>
//                   </button>

//                   <button
//                     className={`group relative overflow-hidden rounded-2xl border-2 px-8 py-4 font-bold shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-105 ${
//                       isDarkMode
//                         ? "border-white/30 bg-white/10 text-gray-200 hover:border-white/50 hover:bg-white/20 hover:text-white"
//                         : "border-gray-400/50 bg-white/70 text-gray-800 hover:border-gray-500/70 hover:bg-white/90 hover:text-gray-900"
//                     }`}
//                   >
//                     <span className="relative flex items-center">
//                       Explore Solutions
//                       <svg
//                         className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17 8l4 4m0 0l-4 4m4-4H3"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               {/* Right Content - Mobile Building Preview */}
//               <div className="flex justify-center lg:hidden">
//                 <div className="relative h-64 w-48 overflow-hidden rounded-2xl shadow-2xl">
//                   <div
//                     className="h-full w-full bg-cover bg-center"
//                     style={{
//                       backgroundImage: `url(${buildingHero})`,
//                       filter: isDarkMode
//                         ? "brightness(0.7) contrast(1.1) sepia(0.2) hue-rotate(200deg) saturate(1.2)"
//                         : "brightness(1.1) contrast(1.05) sepia(0.1) hue-rotate(210deg) saturate(1.1)",
//                     }}
//                   >
//                     <div
//                       className={`absolute inset-0 ${
//                         isDarkMode
//                           ? "bg-gradient-to-t from-blue-900/40 to-transparent"
//                           : "bg-gradient-to-t from-blue-100/40 to-transparent"
//                       }`}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Enhanced Dark Mode Toggle */}
//         <button
//           onClick={toggleDarkMode}
//           className={`absolute right-6 top-6 z-30 rounded-2xl p-4 shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-110 ${
//             isDarkMode
//               ? "border border-white/30 bg-white/15 text-yellow-400 shadow-yellow-400/20 hover:bg-white/25"
//               : "border border-black/30 bg-black/15 text-slate-700 shadow-slate-700/20 hover:bg-black/25"
//           }`}
//         >
//           <div className="relative">
//             {isDarkMode ? (
//               <svg
//                 className="h-6 w-6 transition-transform duration-300 hover:rotate-12"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6 transition-transform duration-300 hover:rotate-12"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//               </svg>
//             )}
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import { useState, useEffect } from "react";
// import { fetchPartners } from "../utils/api";
// import Partners from "./Partners";
// // Import gambar building
// import buildingHero from "../assets/images/building-hero.png"; // Sesuaikan path

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
//       className={`relative flex h-full w-full flex-col items-center justify-center transition-all duration-500 ${
//         isDarkMode ? "dark" : ""
//       }`}
//     >
//       {/* Enhanced Background with Building Image */}
//       <div
//         className={`absolute inset-0 -z-10 overflow-hidden transition-opacity duration-1000 ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         }`}
//       >
//         {/* Main Background Gradient */}
//         <div
//           className={`absolute inset-0 transition-all duration-500 ${
//             isDarkMode
//               ? "bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800"
//               : "bg-gradient-to-br from-blue-50 via-white to-purple-50"
//           }`}
//         ></div>

//         {/* Building Image Container */}
//         <div className="absolute inset-0 flex items-center justify-end">
//           <div className="relative flex h-full w-full items-center justify-center lg:w-1/2 lg:justify-end">
//             {/* Building Image */}
//             <div
//               className={`relative h-[70vh] w-auto max-w-md transform transition-all duration-1000 lg:h-[80vh] lg:max-w-lg xl:max-w-xl ${
//                 isLoaded
//                   ? "translate-x-0 opacity-70 lg:opacity-85"
//                   : "translate-x-10 opacity-0"
//               }`}
//               style={{ transitionDelay: "300ms" }}
//             >
//               <img
//                 src={buildingHero}
//                 alt="Building"
//                 className={`h-full w-auto object-contain transition-all duration-700 ${
//                   isDarkMode
//                     ? "contrast-110 saturate-110 brightness-75 hue-rotate-[210deg] sepia-[0.15] filter"
//                     : "contrast-105 saturate-105 brightness-110 hue-rotate-[200deg] sepia-[0.05] filter"
//                 }`}
//                 style={{
//                   filter: isDarkMode
//                     ? "brightness(0.75) contrast(1.1) sepia(0.15) hue-rotate(210deg) saturate(1.1) drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))"
//                     : "brightness(1.1) contrast(1.05) sepia(0.05) hue-rotate(200deg) saturate(1.05) drop-shadow(0 10px 30px rgba(59, 130, 246, 0.2))",
//                 }}
//               />

//               {/* Subtle Glow Effect */}
//               <div
//                 className={`absolute inset-0 transition-opacity duration-700 ${
//                   isDarkMode
//                     ? "bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/10"
//                     : "bg-gradient-to-t from-blue-100/30 via-transparent to-purple-100/20"
//                 }`}
//                 style={{
//                   mask: `url(${buildingHero})`,
//                   maskSize: "contain",
//                   maskRepeat: "no-repeat",
//                   maskPosition: "center",
//                   WebkitMask: `url(${buildingHero})`,
//                   WebkitMaskSize: "contain",
//                   WebkitMaskRepeat: "no-repeat",
//                   WebkitMaskPosition: "center",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Floating Elements */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           {/* Main floating orbs - positioned to avoid building */}
//           <div
//             className={`absolute left-[8%] top-[15%] h-32 w-32 rounded-full blur-xl transition-all duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-blue-500/25 to-cyan-500/25"
//                 : "bg-gradient-to-r from-blue-400/30 to-cyan-400/30"
//             } ${isLoaded ? "animate-pulse opacity-100" : "opacity-0"}`}
//             style={{
//               animationDuration: "4s",
//               transitionDelay: "500ms",
//             }}
//           ></div>

//           <div
//             className={`absolute left-[15%] top-[50%] h-40 w-40 rounded-full blur-2xl transition-all duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
//                 : "bg-gradient-to-r from-purple-400/25 to-pink-400/25"
//             } ${isLoaded ? "animate-pulse opacity-100" : "opacity-0"}`}
//             style={{
//               animationDuration: "6s",
//               animationDelay: "1s",
//               transitionDelay: "700ms",
//             }}
//           ></div>

//           <div
//             className={`absolute bottom-[25%] left-[5%] h-36 w-36 rounded-full blur-xl transition-all duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-orange-500/20 to-yellow-500/20"
//                 : "bg-gradient-to-r from-orange-400/25 to-yellow-400/25"
//             } ${isLoaded ? "animate-pulse opacity-100" : "opacity-0"}`}
//             style={{
//               animationDuration: "5s",
//               animationDelay: "2s",
//               transitionDelay: "900ms",
//             }}
//           ></div>

//           {/* Right side subtle accents */}
//           <div
//             className={`absolute right-[10%] top-[20%] h-24 w-24 rounded-full blur-lg transition-all duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-teal-500/15 to-emerald-500/15"
//                 : "bg-gradient-to-r from-teal-400/20 to-emerald-400/20"
//             } ${isLoaded ? "animate-pulse opacity-100" : "opacity-0"}`}
//             style={{
//               animationDuration: "7s",
//               animationDelay: "1.5s",
//               transitionDelay: "1100ms",
//             }}
//           ></div>
//         </div>

//         {/* Grid Pattern Overlay */}
//         <div
//           className={`absolute inset-0 transition-opacity duration-700 ${
//             isLoaded ? "opacity-20" : "opacity-0"
//           }`}
//           style={{
//             backgroundImage: `
//               linear-gradient(${isDarkMode ? "rgba(59, 130, 246, 0.08)" : "rgba(59, 130, 246, 0.12)"} 1px, transparent 1px),
//               linear-gradient(90deg, ${isDarkMode ? "rgba(59, 130, 246, 0.08)" : "rgba(59, 130, 246, 0.12)"} 1px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//             transitionDelay: "600ms",
//           }}
//         ></div>
//       </div>

//       {/* Hero Content */}
//       <section className="relative flex min-h-screen w-full items-center justify-center pt-24">
//         <div className="relative z-10 mx-auto flex max-w-sm flex-col items-center justify-center px-4 text-center lg:max-w-6xl">
//           {/* Enhanced Content Layout */}
//           <div className="grid w-full items-center gap-12 lg:grid-cols-2">
//             {/* Left Content */}
//             <div className="space-y-6 lg:space-y-8">
//               {/* Enhanced Subtitle */}
//               {subtitle && (
//                 <div
//                   className={`transform transition-all duration-700 ease-out ${
//                     isLoaded && animationStep >= 1
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-8 opacity-0"
//                   }`}
//                 >
//                   <span
//                     className={`inline-flex items-center rounded-full border px-4 py-2.5 text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-md transition-all duration-500 ${
//                       isDarkMode
//                         ? "border-blue-400/40 bg-gradient-to-r from-blue-600/30 to-purple-600/30 text-blue-200 shadow-blue-500/20"
//                         : "border-blue-400/50 bg-gradient-to-r from-white/90 to-blue-50/90 text-blue-700 shadow-blue-500/15"
//                     } ${isLoaded && animationStep >= 1 ? "scale-100" : "scale-95"}`}
//                   >
//                     <span
//                       className={`mr-2.5 h-2.5 w-2.5 animate-pulse rounded-full ${
//                         isDarkMode
//                           ? "bg-blue-400"
//                           : "bg-blue-600"
//                       }`}
//                     ></span>
//                     {subtitle}
//                   </span>
//                 </div>
//               )}

//               {/* Enhanced Title */}
//               <div className="text-left lg:text-left">
//                 <h1
//                   className={`font-dosis text-3xl font-bold leading-tight transition-all duration-300 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ${
//                     isDarkMode
//                       ? "bg-gradient-to-r from-white via-blue-200 to-cyan-300 bg-clip-text text-transparent"
//                       : "bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent"
//                   }`}
//                 >
//                   {title.split(" ").map((word, index) => (
//                     <span
//                       key={index}
//                       className={`inline-block transform transition-all duration-700 ease-out ${
//                         isLoaded && animationStep >= 2
//                           ? "translate-y-0 opacity-100"
//                           : "translate-y-12 opacity-0"
//                       }`}
//                       style={{
//                         transitionDelay: `${index * 100 + 200}ms`,
//                       }}
//                     >
//                       {word}
//                       {index <
//                         title.split(" ").length - 1 &&
//                         "\u00A0"}
//                     </span>
//                   ))}
//                 </h1>
//               </div>

//               {/* Enhanced Description */}
//               {Array.isArray(description) && (
//                 <div
//                   className={`max-w-2xl transform text-left transition-all duration-700 ease-out lg:text-left ${
//                     isLoaded && animationStep >= 3
//                       ? "translate-y-0 opacity-100"
//                       : "translate-y-8 opacity-0"
//                   }`}
//                   style={{ transitionDelay: "600ms" }}
//                 >
//                   {description.map((block, index) => (
//                     <p
//                       key={index}
//                       className={`text-lg font-light leading-relaxed transition-colors duration-300 lg:text-xl ${
//                         isDarkMode
//                           ? "text-gray-300"
//                           : "text-gray-700"
//                       }`}
//                     >
//                       {block.children
//                         ?.map((child) => child.text)
//                         .join("")}
//                     </p>
//                   ))}
//                 </div>
//               )}

//               {/* Enhanced CTA Buttons */}
//               <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6 lg:justify-start">
//                 <button
//                   className={`hover:shadow-3xl group relative transform overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-bold text-white shadow-2xl shadow-blue-500/30 backdrop-blur-md transition-all duration-700 ease-out hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/40 ${
//                     isLoaded && animationStep >= 4
//                       ? "translate-y-0 scale-100 opacity-100"
//                       : "translate-y-8 scale-95 opacity-0"
//                   }`}
//                   style={{ transitionDelay: "800ms" }}
//                 >
//                   {/* Button shimmer effect */}
//                   <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
//                   <span className="relative flex items-center">
//                     Start Consultation
//                     <svg
//                       className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13 7l5 5m0 0l-5 5m5-5H6"
//                       />
//                     </svg>
//                   </span>
//                 </button>

//                 <button
//                   className={`group transform rounded-xl border-2 px-8 py-4 font-bold shadow-xl backdrop-blur-md transition-all duration-700 ease-out hover:scale-105 ${
//                     isDarkMode
//                       ? "border-white/30 bg-white/10 text-gray-200 hover:border-white/50 hover:bg-white/20 hover:text-white"
//                       : "border-gray-400/50 bg-white/70 text-gray-800 hover:border-gray-500/70 hover:bg-white/90 hover:text-gray-900"
//                   } ${
//                     isLoaded && animationStep >= 4
//                       ? "translate-y-0 scale-100 opacity-100"
//                       : "translate-y-8 scale-95 opacity-0"
//                   }`}
//                   style={{ transitionDelay: "900ms" }}
//                 >
//                   <span className="flex items-center">
//                     Explore Solutions
//                     <svg
//                       className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17 8l4 4m0 0l-4 4m4-4H3"
//                       />
//                     </svg>
//                   </span>
//                 </button>
//               </div>

//               {/* Enhanced Stats */}
//               <div className="grid grid-cols-3 gap-4 pt-6">
//                 {[
//                   {
//                     value: "500+",
//                     label: "Projects",
//                     color: "blue",
//                   },
//                   {
//                     value: "98%",
//                     label: "Success Rate",
//                     color: "purple",
//                   },
//                   {
//                     value: "24/7",
//                     label: "Support",
//                     color: "emerald",
//                   },
//                 ].map((stat, index) => (
//                   <div
//                     key={index}
//                     className={`transform text-left transition-all duration-700 ${
//                       isLoaded && animationStep >= 4
//                         ? "translate-y-0 opacity-100"
//                         : "translate-y-8 opacity-0"
//                     }`}
//                     style={{
//                       transitionDelay: `${1000 + index * 100}ms`,
//                     }}
//                   >
//                     <div
//                       className={`text-2xl font-bold ${
//                         isDarkMode
//                           ? `text-${stat.color}-400`
//                           : `text-${stat.color}-600`
//                       }`}
//                     >
//                       {stat.value}
//                     </div>
//                     <div
//                       className={`text-sm ${
//                         isDarkMode
//                           ? "text-gray-400"
//                           : "text-gray-600"
//                       }`}
//                     >
//                       {stat.label}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right side - Building area (hidden on mobile, visible on lg+) */}
//             <div className="hidden lg:flex lg:items-center lg:justify-center">
//               {/* This space is reserved for the building image positioned absolutely */}
//             </div>
//           </div>

//           {/* Partners Section */}
//           <div
//             className={`mt-16 w-full transform transition-all duration-700 ease-out ${
//               isLoaded && animationStep >= 5
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-8 opacity-0"
//             }`}
//             style={{ transitionDelay: "1000ms" }}
//           >
//             <div className="mx-auto max-w-6xl px-4">
//               <p
//                 className={`mb-6 text-center text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
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

//               {/* Trust Indicators */}
//               <div className="mt-8 text-center">
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
//                         className={`text-sm ${
//                           isDarkMode
//                             ? "text-gray-400"
//                             : "text-gray-500"
//                         }`}
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

//       {/* Enhanced Dark Mode Toggle */}
//       <button
//         onClick={toggleDarkMode}
//         className={`absolute right-6 top-6 z-30 rounded-2xl p-4 shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-110 ${
//           isDarkMode
//             ? "border border-white/30 bg-white/15 text-yellow-400 shadow-yellow-400/20 hover:bg-white/25"
//             : "border border-black/30 bg-black/15 text-slate-700 shadow-slate-700/20 hover:bg-black/25"
//         }`}
//       >
//         {isDarkMode ? (
//           <svg
//             className="h-6 w-6 transition-transform duration-300 hover:rotate-12"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path
//               fillRule="evenodd"
//               d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
//               clipRule="evenodd"
//             />
//           </svg>
//         ) : (
//           <svg
//             className="h-6 w-6 transition-transform duration-300 hover:rotate-12"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//           </svg>
//         )}
//       </button>
//     </div>
//   );
// };

// export default HeroSection;

// import { useState, useEffect } from "react";
// import { fetchPartners } from "../utils/api";
// import Partners from "./Partners";
// import buildingHero from "../assets/images/building-hero.png";

// const HeroSection = ({
//   data,
//   isDarkMode,
//   toggleDarkMode,
// }) => {
//   const defaultData = {
//     title: "IT Solutions & Business Services Company",
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

//   useEffect(() => {
//     fetchPartners().then((data) => {
//       console.log("Fetched partners:", data);
//       setPartners(data || []);
//       setPartnersLoading(false);
//     });
//   }, []);

//   // Early return setelah semua hooks
//   if (!heroData) return null;

//   return (
//     <div className={`${isDarkMode ? "dark" : ""}`}>
//       <div
//         className={`relative flex min-h-screen items-center justify-center overflow-hidden transition-all duration-700`}
//       >
//         <div className="absolute inset-0 flex">
//           <div
//             className={`w-full transition-all duration-700 lg:w-3/5`}
//           >
//             <div
//               className="absolute inset-0 opacity-30"
//               style={{
//                 backgroundImage: `
//                   radial-gradient(circle at 25% 25%, ${isDarkMode ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.15)"} 0%, transparent 50%),
//                   radial-gradient(circle at 75% 75%, ${isDarkMode ? "rgba(147, 51, 234, 0.1)" : "rgba(147, 51, 234, 0.15)"} 0%, transparent 50%)
//                 `,
//               }}
//             ></div>
//           </div>

//           <div className="relative hidden lg:block lg:w-2/5">
//             <div
//               className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
//               style={{
//                 backgroundImage: `url(${buildingHero})`,
//                 filter: isDarkMode
//                   ? "brightness(0.6) contrast(1.2) saturate(1.3) hue-rotate(200deg) sepia(0.3)"
//                   : "brightness(1.1) contrast(1.1) saturate(1.2) hue-rotate(15deg) sepia(0.1)",
//               }}
//             ></div>
//           </div>
//         </div>

//         {/* Enhanced Floating Elements */}
//         <div className="pointer-events-none absolute inset-0 overflow-hidden">
//           {/* Main accent orbs */}
//           {/* <div
//             className={`absolute left-[10%] top-[15%] h-40 w-40 animate-pulse rounded-full blur-2xl transition-colors duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-blue-500/25 to-cyan-500/25"
//                 : "bg-gradient-to-r from-blue-400/30 to-cyan-400/30"
//             }`}
//             style={{ animationDuration: "4s" }}
//           ></div>

//           <div
//             className={`absolute left-[25%] top-[45%] h-56 w-56 animate-pulse rounded-full blur-3xl transition-colors duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
//                 : "bg-gradient-to-r from-purple-400/25 to-pink-400/25"
//             }`}
//             style={{
//               animationDuration: "6s",
//               animationDelay: "2s",
//             }}
//           ></div>

//           <div
//             className={`absolute bottom-[20%] left-[15%] h-48 w-48 animate-pulse rounded-full blur-2xl transition-colors duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-orange-500/20 to-yellow-500/20"
//                 : "bg-gradient-to-r from-orange-400/25 to-yellow-400/25"
//             }`}
//             style={{
//               animationDuration: "5s",
//               animationDelay: "4s",
//             }}
//           ></div> */}

//           {/* Right side accent for balance */}
//           {/* <div
//             className={`absolute right-[15%] top-[25%] h-32 w-32 animate-pulse rounded-full blur-xl transition-colors duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-teal-500/20 to-emerald-500/20"
//                 : "bg-gradient-to-r from-teal-400/25 to-emerald-400/25"
//             }`}
//             style={{
//               animationDuration: "7s",
//               animationDelay: "1s",
//             }}
//           ></div> */}

//           {/* <div
//             className={`absolute bottom-[30%] right-[20%] h-36 w-36 animate-pulse rounded-full blur-xl transition-colors duration-700 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-indigo-500/15 to-violet-500/15"
//                 : "bg-gradient-to-r from-indigo-400/20 to-violet-400/20"
//             }`}
//             style={{
//               animationDuration: "8s",
//               animationDelay: "3s",
//             }}
//           ></div> */}
//         </div>

//         {/* Main Content - Improved Layout */}
//         <section className="relative flex w-full items-center justify-start px-20 pt-28">
//           <div className="relative z-10">
//             <div className="grid items-center gap-12">
//               {/* Left Content */}
//               <div className="space-y-8">
//                 {/* Enhanced Subtitle Badge */}
//                 {subtitle && (
//                   <div className="flex justify-start lg:justify-start">
//                     <span
//                       className={`inline-flex items-center rounded-full border px-6 py-3 text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-500 hover:scale-105`}
//                     >
//                       <span
//                         className={`mr-3 h-2.5 w-2.5 animate-pulse rounded-full ${
//                           isDarkMode
//                             ? "bg-blue-400"
//                             : "bg-blue-600"
//                         }`}
//                       ></span>
//                       {subtitle}
//                     </span>
//                   </div>
//                 )}

//                 <div className="w-full lg:w-[70%]">
//                   <h1
//                     className={`font-dosis text-4xl font-bold leading-tight text-gray-900 transition-all duration-700 dark:text-white sm:text-5xl lg:text-6xl xl:text-6xl`}
//                   >
//                     {title}
//                   </h1>
//                 </div>

//                 {/* Enhanced Description */}
//                 {Array.isArray(description) && (
//                   <div className="max-w-2xl">
//                     {description.map((block, index) => (
//                       <p
//                         key={index}
//                         className={`text-lg font-light leading-relaxed transition-colors duration-700 sm:text-xl lg:text-xl ${
//                           isDarkMode
//                             ? "text-gray-300"
//                             : "text-gray-700"
//                         }`}
//                       >
//                         {block.children
//                           ?.map((child) => child.text)
//                           .join("")}
//                       </p>
//                     ))}
//                   </div>
//                 )}

//                 {/* Enhanced CTA Buttons */}
//                 <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
//                   <button className="hover:shadow-3xl group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-bold text-white shadow-2xl shadow-blue-500/30 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/40">
//                     {/* Button glow effect */}
//                     <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
//                     <span className="relative flex items-center">
//                       Start Consultation
//                       <svg
//                         className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M13 7l5 5m0 0l-5 5m5-5H6"
//                         />
//                       </svg>
//                     </span>
//                   </button>

//                   <button
//                     className={`group relative overflow-hidden rounded-2xl border-2 px-8 py-4 font-bold shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-105 ${
//                       isDarkMode
//                         ? "border-white/30 bg-white/10 text-gray-200 hover:border-white/50 hover:bg-white/20 hover:text-white"
//                         : "border-gray-400/50 bg-white/70 text-gray-800 hover:border-gray-500/70 hover:bg-white/90 hover:text-gray-900"
//                     }`}
//                   >
//                     <span className="relative flex items-center">
//                       Explore Solutions
//                       <svg
//                         className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17 8l4 4m0 0l-4 4m4-4H3"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                 </div>

//                 {/* Enhanced Stats */}
//               </div>

//               {/* Right Content - Mobile Building Preview */}
//               <div className="flex justify-center lg:hidden">
//                 <div className="relative h-64 w-48 overflow-hidden rounded-2xl shadow-2xl">
//                   <div
//                     className="h-full w-full bg-cover bg-center"
//                     style={{
//                       backgroundImage: `url(${buildingHero})`,
//                       filter: isDarkMode
//                         ? "brightness(0.6) contrast(1.2) saturate(1.3) hue-rotate(200deg) sepia(0.3)"
//                         : "brightness(1.1) contrast(1.1) saturate(1.2) hue-rotate(15deg) sepia(0.1)",
//                     }}
//                   ></div>
//                 </div>
//               </div>
//             </div>

//             {/* Partners Section */}
//             <div className="mt-20 flex w-full items-start justify-start">
//               <div className="max-w-4xl">
//                 <p
//                   className={`mb-8 text-left text-xs font-medium uppercase tracking-wide transition-colors duration-300 ${
//                     isDarkMode
//                       ? "text-gray-400"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   Trusted by Industry Leaders
//                 </p>

//                 <div className="transform transition-all duration-500">
//                   <Partners
//                     partners={partners}
//                     partnersLoading={partnersLoading}
//                   />
//                 </div>

//                 {/* Trust Indicators */}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import { useState, useEffect } from "react";
// import { fetchPartners } from "../utils/api";
// import Partners from "./Partners";
// import buildingHero from "../assets/images/building-hero.png";
// import buildingHeroLight from "../assets/images/building-hero-light.png";

// const HeroSection = ({
//   data,
//   isDarkMode,
//   toggleDarkMode,
// }) => {
//   const defaultData = {
//     title: "IT Solutions & Business Services Company",
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

//   // Pilih gambar berdasarkan mode
//   const buildingImage = isDarkMode
//     ? buildingHero
//     : buildingHeroLight;

//   useEffect(() => {
//     fetchPartners().then((data) => {
//       console.log("Fetched partners:", data);
//       setPartners(data || []);
//       setPartnersLoading(false);
//     });
//   }, []);

//   // Early return setelah semua hooks
//   if (!heroData) return null;

//   return (
//     <div className={`${isDarkMode ? "dark" : ""}`}>
//       <div className="relative flex min-h-screen items-center justify-center overflow-hidden transition-all duration-700">
//         {/* Desktop Layout */}
//         <div className="absolute inset-0 hidden lg:flex">
//           <div className="w-full transition-all duration-700 lg:w-3/5">
//             <div className="absolute inset-0 opacity-30"></div>
//           </div>

//           <div className="relative lg:block lg:w-2/5">
//             <div
//               className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
//               style={{
//                 backgroundImage: `url(${buildingImage})`,
//               }}
//             ></div>
//           </div>
//         </div>

//         {/* Mobile/Tablet Background - No background image */}
//         <div className="absolute inset-0 lg:hidden">
//           <div
//             className={`h-full w-full ${
//               isDarkMode
//                 ? "bg-gradient-to-br from-black via-gray-900 to-black"
//                 : "bg-gradient-to-br from-white via-gray-50 to-gray-100"
//             }`}
//           ></div>
//         </div>

//         <section className="relative flex w-full items-center justify-start px-4 pt-28 sm:px-8 lg:px-20">
//           <div className="relative z-10 w-full">
//             <div className="grid items-center gap-12">
//               <div className="space-y-8">
//                 {subtitle && (
//                   <div className="flex justify-start">
//                     <span
//                       className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-500 hover:scale-105 sm:px-6 sm:py-3 sm:text-sm ${
//                         isDarkMode
//                           ? "border-white/20 bg-white/10 text-gray-200"
//                           : "border-gray-300/50 bg-white/60 text-gray-700"
//                       }`}
//                     >
//                       <span
//                         className={`mr-2 h-2 w-2 animate-pulse rounded-full sm:mr-3 sm:h-2.5 sm:w-2.5 ${
//                           isDarkMode
//                             ? "bg-blue-400"
//                             : "bg-blue-600"
//                         }`}
//                       ></span>
//                       {subtitle}
//                     </span>
//                   </div>
//                 )}

//                 <div className="w-full">
//                   <h1
//                     className={`font-dosis text-3xl font-bold leading-tight text-gray-900 transition-all duration-700 dark:text-white sm:text-4xl md:text-5xl lg:w-[70%] lg:text-6xl xl:text-7xl`}
//                   >
//                     {title}
//                   </h1>
//                 </div>

//                 {Array.isArray(description) && (
//                   <div className="max-w-full lg:max-w-2xl">
//                     {description.map((block, index) => (
//                       <p
//                         key={index}
//                         className={`text-base font-light leading-relaxed transition-colors duration-700 sm:text-lg lg:text-xl ${
//                           isDarkMode
//                             ? "text-gray-300"
//                             : "text-gray-600"
//                         }`}
//                       >
//                         {block.children
//                           ?.map((child) => child.text)
//                           .join("")}
//                       </p>
//                     ))}
//                   </div>
//                 )}

//                 <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
//                   <button className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-bold text-white transition-all duration-500 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/40 sm:w-auto sm:px-8 sm:py-4">
//                     <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
//                     <span className="relative flex items-center justify-center">
//                       Start Consultation
//                       <svg
//                         className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M13 7l5 5m0 0l-5 5m5-5H6"
//                         />
//                       </svg>
//                     </span>
//                   </button>

//                   <button
//                     className={`group relative w-full overflow-hidden rounded-2xl border-2 px-6 py-3 font-bold backdrop-blur-md transition-all duration-500 hover:scale-105 sm:w-auto sm:px-8 sm:py-4 ${
//                       isDarkMode
//                         ? "border-white/30 bg-white/10 text-gray-200 hover:border-white/50 hover:bg-white/20 hover:text-white"
//                         : "border-gray-400/50 bg-white/70 text-gray-800 hover:border-gray-500/70 hover:bg-white/90 hover:text-gray-900"
//                     }`}
//                   >
//                     <span className="relative flex items-center justify-center">
//                       Explore Solutions
//                       <svg
//                         className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17 8l4 4m0 0l-4 4m4-4H3"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               {/* Mobile Building Image Card - Full width showcase */}
//               <div className="flex justify-center lg:hidden">
//                 <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-2xl sm:h-72 md:h-80">
//                   <div
//                     className="h-full w-full bg-cover bg-center transition-all duration-700"
//                     style={{
//                       backgroundImage: `url(${buildingImage})`,
//                     }}
//                   ></div>
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-t ${
//                       isDarkMode
//                         ? "from-black/30 to-transparent"
//                         : "from-white/10 to-transparent"
//                     }`}
//                   ></div>
//                   {/* Optional overlay text */}
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <div
//                       className={`rounded-lg px-3 py-2 backdrop-blur-md ${
//                         isDarkMode
//                           ? "bg-black/30 text-white"
//                           : "bg-white/30 text-gray-800"
//                       }`}
//                     >
//                       <p className="text-sm font-medium">
//                         Our Modern Office
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Partners Section */}
//             <div className="mt-12 flex w-full items-start justify-start lg:mt-20">
//               <div className="max-w-4xl">
//                 <p
//                   className={`mb-6 text-left text-xs font-medium uppercase tracking-wide transition-colors duration-300 sm:mb-8 ${
//                     isDarkMode
//                       ? "text-gray-400"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   Trusted by Industry Leaders
//                 </p>

//                 <div className="transform transition-all duration-500">
//                   <Partners
//                     partners={partners}
//                     partnersLoading={partnersLoading}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

// import { useState, useEffect } from "react";
// import { fetchPartners } from "../utils/api";
// import Partners from "./Partners";
// import buildingHero from "../assets/images/building-hero.png";
// import buildingHeroLight from "../assets/images/building-hero-light.png";

// const HeroSection = ({
//   data,
//   isDarkMode,
//   toggleDarkMode,
// }) => {
//   const defaultData = {
//     title: "IT Solutions & Business Services Company",
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

//   // Pilih gambar berdasarkan mode
//   const buildingImage = isDarkMode
//     ? buildingHero
//     : buildingHeroLight;

//   useEffect(() => {
//     fetchPartners().then((data) => {
//       console.log("Fetched partners:", data);
//       setPartners(data || []);
//       setPartnersLoading(false);
//     });
//   }, []);

//   // Early return setelah semua hooks
//   if (!heroData) return null;

//   return (
//     <div className={`${isDarkMode ? "dark" : ""}`}>
//       <div className="relative flex min-h-screen items-center justify-center overflow-hidden transition-all duration-700">
//         {/* Desktop Layout */}
//         <div className="absolute inset-0 hidden lg:flex">
//           <div className="w-full transition-all duration-700 lg:w-3/5">
//             <div className="absolute inset-0 opacity-30"></div>
//           </div>

//           <div className="relative lg:block lg:w-2/5">
//             <div
//               className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
//               style={{
//                 backgroundImage: `url(${buildingImage})`,
//               }}
//             ></div>
//           </div>
//         </div>

//         {/* Mobile/Tablet Background - No background image */}
//         <div className="absolute inset-0 lg:hidden">
//           <div
//             className={`h-full w-full ${
//               isDarkMode
//                 ? "bg-gradient-to-br from-black via-gray-900 to-black"
//                 : "bg-gradient-to-br from-white via-gray-50 to-gray-100"
//             }`}
//           ></div>
//         </div>

//         <section className="relative flex w-full items-center justify-start px-4 pt-28 sm:px-8 lg:px-20">
//           <div className="relative z-10 w-full">
//             <div className="grid items-center gap-12">
//               <div className="space-y-8">
//                 {subtitle && (
//                   <div className="flex justify-start">
//                     <span
//                       className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-500 hover:scale-105 sm:px-6 sm:py-3 sm:text-sm ${
//                         isDarkMode
//                           ? "border-white/20 bg-white/10 text-gray-200"
//                           : "border-gray-300/50 bg-white/60 text-gray-700"
//                       }`}
//                     >
//                       <span
//                         className={`mr-2 h-2 w-2 animate-pulse rounded-full sm:mr-3 sm:h-2.5 sm:w-2.5 ${
//                           isDarkMode
//                             ? "bg-blue-400"
//                             : "bg-blue-600"
//                         }`}
//                       ></span>
//                       {subtitle}
//                     </span>
//                   </div>
//                 )}

//                 <div className="w-full">
//                   <h1
//                     className={`font-dosis text-3xl font-bold leading-tight text-gray-900 transition-all duration-700 dark:text-white sm:text-4xl md:text-5xl lg:w-[70%] lg:text-6xl xl:text-7xl`}
//                   >
//                     {title}
//                   </h1>
//                 </div>

//                 {Array.isArray(description) && (
//                   <div className="max-w-full lg:max-w-2xl">
//                     {description.map((block, index) => (
//                       <p
//                         key={index}
//                         className={`text-base font-light leading-relaxed transition-colors duration-700 sm:text-lg lg:text-xl ${
//                           isDarkMode
//                             ? "text-gray-300"
//                             : "text-gray-600"
//                         }`}
//                       >
//                         {block.children
//                           ?.map((child) => child.text)
//                           .join("")}
//                       </p>
//                     ))}
//                   </div>
//                 )}

//                 <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
//                   <button className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-bold text-white transition-all duration-500 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/40 sm:w-auto sm:px-8 sm:py-4">
//                     <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
//                     <span className="relative flex items-center justify-center">
//                       Start Consultation
//                       <svg
//                         className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M13 7l5 5m0 0l-5 5m5-5H6"
//                         />
//                       </svg>
//                     </span>
//                   </button>

//                   <button
//                     className={`group relative w-full overflow-hidden rounded-2xl border-2 px-6 py-3 font-bold backdrop-blur-md transition-all duration-500 hover:scale-105 sm:w-auto sm:px-8 sm:py-4 ${
//                       isDarkMode
//                         ? "border-white/30 bg-white/10 text-gray-200 hover:border-white/50 hover:bg-white/20 hover:text-white"
//                         : "border-gray-400/50 bg-white/70 text-gray-800 hover:border-gray-500/70 hover:bg-white/90 hover:text-gray-900"
//                     }`}
//                   >
//                     <span className="relative flex items-center justify-center">
//                       Explore Solutions
//                       <svg
//                         className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17 8l4 4m0 0l-4 4m4-4H3"
//                         />
//                       </svg>
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               {/* Mobile Building Image Card - Full showcase */}
//               <div className="lg:hidden">
//                 <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-2xl sm:h-72 md:h-80">
//                   <div
//                     className="h-full w-full bg-cover bg-center transition-all duration-700"
//                     style={{
//                       backgroundImage: `url(${buildingImage})`,
//                     }}
//                   ></div>
//                   <div
//                     className={`absolute inset-0 bg-gradient-to-t ${
//                       isDarkMode
//                         ? "from-black/30 to-transparent"
//                         : "from-white/10 to-transparent"
//                     }`}
//                   ></div>
//                   {/* Optional overlay text */}
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <div
//                       className={`rounded-lg px-3 py-2 backdrop-blur-md ${
//                         isDarkMode
//                           ? "bg-black/30 text-white"
//                           : "bg-white/30 text-gray-800"
//                       }`}
//                     >
//                       <p className="text-sm font-medium">
//                         Our Modern Office
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Partners Section */}
//             <div className="mt-12 flex w-full items-start justify-start lg:mt-20">
//               <div className="max-w-4xl">
//                 <p
//                   className={`mb-6 text-left text-xs font-medium uppercase tracking-wide transition-colors duration-300 sm:mb-8 ${
//                     isDarkMode
//                       ? "text-gray-400"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   Trusted by Industry Leaders
//                 </p>

//                 <div className="transform transition-all duration-500">
//                   <Partners
//                     partners={partners}
//                     partnersLoading={partnersLoading}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import { useState, useEffect } from "react";
import { fetchPartners } from "../utils/api";
import Partners from "./Partners";
import buildingHero from "../assets/images/building-hero.png";
import buildingHeroLight from "../assets/images/building-hero-light.png";

const HeroSection = ({
  data,
  isDarkMode,
  toggleDarkMode,
}) => {
  const defaultData = {
    title: "IT Solutions & Business Services Company",
    // subtitle: "Empowering Digital Transformation",
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

  const [partners, setPartners] = useState([]);
  const [partnersLoading, setPartnersLoading] =
    useState(true);

  // Pilih gambar berdasarkan mode
  const buildingImage = isDarkMode
    ? buildingHero
    : buildingHeroLight;

  useEffect(() => {
    fetchPartners().then((data) => {
      console.log("Fetched partners:", data);
      setPartners(data || []);
      setPartnersLoading(false);
    });
  }, []);

  // Early return setelah semua hooks
  if (!heroData) return null;

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden transition-all duration-700">
        {/* Desktop Layout */}
        <div className="absolute inset-0 hidden lg:flex">
          <div className="w-full transition-all duration-700 lg:w-3/5">
            <div className="absolute inset-0 opacity-30"></div>
          </div>

          <div className="relative lg:block lg:w-2/5">
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
              style={{
                backgroundImage: `url(${buildingImage})`,
              }}
            ></div>
          </div>
        </div>

        <div className="absolute inset-0 lg:hidden">
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
            style={{
              backgroundImage: `url(${buildingImage})`,
            }}
          ></div>
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? "bg-gradient-to-br from-black/70 via-black/50 to-black/70"
                : "bg-gradient-to-br from-white/70 via-white/50 to-white/70"
            }`}
          ></div>
        </div>

        <section className="relative flex w-full items-center justify-start px-4 pt-28 sm:px-8 lg:px-20">
          <div className="relative z-10 w-full">
            <div className="grid items-center gap-12">
              <div className="space-y-8">
                {subtitle && (
                  <div className="flex justify-start">
                    <span
                      className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-500 hover:scale-105 sm:px-6 sm:py-3 sm:text-sm ${
                        isDarkMode
                          ? "border-white/20 bg-white/10 text-gray-200"
                          : "border-gray-300/50 bg-white/60 text-gray-700"
                      }`}
                    >
                      <span
                        className={`mr-2 h-2 w-2 animate-pulse rounded-full sm:mr-3 sm:h-2.5 sm:w-2.5 ${
                          isDarkMode
                            ? "bg-blue-400"
                            : "bg-blue-600"
                        }`}
                      ></span>
                      {subtitle}
                    </span>
                  </div>
                )}

                <div className="w-full">
                  <h1
                    className={`font-dosis text-3xl font-bold leading-tight text-gray-900 transition-all duration-700 dark:text-white sm:text-4xl md:text-5xl lg:w-[70%] lg:text-6xl xl:text-7xl`}
                  >
                    {title}
                  </h1>
                </div>

                {Array.isArray(description) && (
                  <div className="max-w-full lg:max-w-2xl">
                    {description.map((block, index) => (
                      <p
                        key={index}
                        className={`text-base font-light leading-relaxed transition-colors duration-700 sm:text-lg lg:text-xl ${
                          isDarkMode
                            ? "text-gray-300"
                            : "text-[#1b1b1b]"
                        }`}
                      >
                        {block.children
                          ?.map((child) => child.text)
                          .join("")}
                      </p>
                    ))}
                  </div>
                )}

                <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                  <button className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-bold text-white transition-all duration-500 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-blue-500/40 sm:w-auto sm:px-8 sm:py-4">
                    <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0 transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
                    <span className="relative flex items-center justify-center">
                      Start Consultation
                      <svg
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>

                  <button
                    className={`group relative w-full overflow-hidden rounded-2xl border-2 px-6 py-3 font-bold backdrop-blur-md transition-all duration-500 hover:scale-105 sm:w-auto sm:px-8 sm:py-4 ${
                      isDarkMode
                        ? "border-white/30 bg-white/10 text-gray-200 hover:border-white/50 hover:bg-white/20 hover:text-white"
                        : "border-gray-400/50 bg-white/70 text-gray-800 hover:border-gray-500/70 hover:bg-white/90 hover:text-gray-900"
                    }`}
                  >
                    <span className="relative flex items-center justify-center">
                      Explore Solutions
                      <svg
                        className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
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
              </div>
            </div>

            {/* Partners Section */}
            <div className="mt-12 flex w-full items-start justify-start lg:mt-20">
              <div className="w-full lg:max-w-4xl">
                <p
                  className={`mb-6 text-center text-xs font-medium uppercase tracking-wide transition-colors duration-300 lg:text-left ${
                    isDarkMode
                      ? "text-gray-400"
                      : "text-[#1b1b1b]"
                  }`}
                >
                  Trusted by Industry Leaders
                </p>

                <div className="transform transition-all duration-500">
                  <Partners
                    partners={partners}
                    partnersLoading={partnersLoading}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
