// tailwind.config.js
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         // Menggunakan CSS custom properties untuk dynamic images
//         "building-hero": "var(--building-hero-bg)",
//         "building-pattern":
//           'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><pattern id="windows" patternUnits="userSpaceOnUse" width="25" height="25"><rect width="25" height="25" fill="%23f8f9fa"/><rect x="3" y="3" width="19" height="19" fill="%23374151" opacity="0.1"/><rect x="3" y="3" width="19" height="8" fill="%231f2937" opacity="0.05"/></pattern></defs><rect width="400" height="600" fill="url(%23windows)"/><polygon points="0,0 400,120 400,600 0,600" fill="%23e5e7eb" opacity="0.2"/><rect x="350" y="100" width="50" height="500" fill="%23d1d5db" opacity="0.3"/></svg>\')',

//         // Gradient backgrounds
//         "hero-light":
//           "linear-gradient(135deg, rgb(248 250 252) 0%, rgb(219 234 254) 50%, rgb(243 244 246) 100%)",
//         "hero-dark":
//           "linear-gradient(135deg, rgb(17 24 39) 0%, rgb(30 41 59) 50%, rgb(31 41 55) 100%)",

//         // Alternative patterns jika gambar tidak tersedia
//         "building-fallback":
//           'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23f3f4f6;stop-opacity:1" /><stop offset="100%" style="stop-color:%23d1d5db;stop-opacity:1" /></linearGradient><pattern id="windowPattern" patternUnits="userSpaceOnUse" width="30" height="30"><rect width="30" height="30" fill="%23f9fafb"/><rect x="5" y="5" width="20" height="20" fill="%23374151" opacity="0.1"/><rect x="5" y="5" width="20" height="10" fill="%231f2937" opacity="0.08"/></pattern></defs><rect width="400" height="600" fill="url(%23buildingGrad)"/><rect width="400" height="600" fill="url(%23windowPattern)" opacity="0.6"/><polygon points="0,50 400,150 400,600 0,600" fill="%23e5e7eb" opacity="0.4"/></svg>\')',
//       },
//       fontFamily: {
//         dosis: ["Dosis", "sans-serif"],
//       },
//       animation: {
//         float: "float 6s ease-in-out infinite",
//         "pulse-slow":
//           "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//         "fade-in": "fadeIn 1s ease-out",
//       },
//       keyframes: {
//         float: {
//           "0%, 100%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-20px)" },
//         },
//         fadeIn: {
//           "0%": {
//             opacity: "0",
//             transform: "translateY(20px)",
//           },
//           "100%": {
//             opacity: "1",
//             transform: "translateY(0)",
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
//   darkMode: "class",
// };

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // CSS custom properties untuk dynamic images
        "building-hero": "var(--building-hero-bg)",

        // Enhanced gradient backgrounds
        "hero-light":
          "linear-gradient(135deg, rgb(255 255 255) 0%, rgb(240 249 255) 30%, rgb(219 234 254) 70%, rgb(191 219 254) 100%)",
        "hero-dark":
          "linear-gradient(135deg, rgb(3 7 18) 0%, rgb(15 23 42) 30%, rgb(30 41 59) 70%, rgb(51 65 85) 100%)",

        // Building overlay gradients
        "building-overlay-light":
          "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)",
        "building-overlay-dark":
          "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.2) 50%, rgba(236, 72, 153, 0.2) 100%)",
      },
      fontFamily: {
        dosis: ["Dosis", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-slow":
          "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 1.2s ease-out",
        "slide-up": "slideUp 1s ease-out",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-25px) rotate(1deg)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
          },
          "100%": {
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.4)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
