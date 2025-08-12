import {
  // useEffect,
  useState,
  // useCallback,
  // useRef,
} from "react";
// import { fetchHomeContent } from "../utils/api";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SolutionsSection from "../components/SolutionsSection";
import PortfolioSection from "../components/PortofolioSection";
import ContactSection from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  // const [home, setHome] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [retryCount, setRetryCount] = useState(0);

  // const [isMonitoring, setIsMonitoring] = useState(false);

  // const monitoringRef = useRef(null);
  // const timeoutRef = useRef(null);

  // const MAX_RETRIES = 3;
  // const RETRY_DELAY = 3000;
  // const MONITOR_INTERVAL = 4000;
  // const MONITOR_TIMEOUT = 300000;

  // const isConnectionError = (error) => {
  //   return (
  //     error.message.includes("Failed to fetch") ||
  //     error.message.includes("ERR_CONNECTION_REFUSED") ||
  //     error.message.includes("NetworkError") ||
  //     error.message.includes("TypeError: Failed to fetch")
  //   );
  // };

  // const checkStrapiStatus = async () => {
  //   try {
  //     console.log("🔍 Checking Strapi status...");
  //     const response = await fetch(
  //       "http://localhost:1337/api/home?populate=*",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         signal: AbortSignal.timeout(5000),
  //       }
  //     );

  //     if (response.ok) {
  //       const data = await response.json();
  //       return { ready: true, data: data.data };
  //     }

  //     return { ready: false, data: null };
  //   } catch (error) {
  //     return { ready: false, data: null };
  //   }
  // };

  // const stopMonitoring = useCallback(() => {
  //   setIsMonitoring(false);

  //   if (monitoringRef.current) {
  //     clearInterval(monitoringRef.current);
  //     monitoringRef.current = null;
  //   }

  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //     timeoutRef.current = null;
  //   }
  // }, []);

  // const startMonitoring = useCallback(() => {
  //   if (isMonitoring || home) {
  //     return;
  //   }

  //   setIsMonitoring(true);

  //   const monitorStrapi = async () => {
  //     try {
  //       const status = await checkStrapiStatus();

  //       if (status.ready && status.data) {
  //         setHome(status.data);
  //         setError(null);
  //         setLoading(false);
  //         setRetryCount(0);

  //         setIsMonitoring(false);
  //         if (monitoringRef.current) {
  //           clearInterval(monitoringRef.current);
  //           monitoringRef.current = null;
  //         }
  //         if (timeoutRef.current) {
  //           clearTimeout(timeoutRef.current);
  //           timeoutRef.current = null;
  //         }

  //         return true;
  //       }

  //       return false;
  //     } catch (error) {
  //       console.log(
  //         "❌ Error during monitoring:",
  //         error.message
  //       );
  //       return false;
  //     }
  //   };

  //   monitorStrapi().then((shouldStop) => {
  //     if (shouldStop) return;

  //     monitoringRef.current = setInterval(async () => {
  //       const shouldStop = await monitorStrapi();
  //       if (shouldStop) {
  //         setIsMonitoring(false);
  //         if (monitoringRef.current) {
  //           clearInterval(monitoringRef.current);
  //           monitoringRef.current = null;
  //         }
  //       }
  //     }, MONITOR_INTERVAL);

  //     timeoutRef.current = setTimeout(() => {
  //       console.log("Stopped monitoring Strapi (timeout)");
  //       setIsMonitoring(false);
  //       if (monitoringRef.current) {
  //         clearInterval(monitoringRef.current);
  //         monitoringRef.current = null;
  //       }
  //     }, MONITOR_TIMEOUT);
  //   });
  // }, [isMonitoring, home]);

  // const loadData = useCallback(
  //   async (attempt = 1) => {
  //     try {
  //       setLoading(true);
  //       setError(null);

  //       if (monitoringRef.current) {
  //         clearInterval(monitoringRef.current);
  //         monitoringRef.current = null;
  //       }
  //       if (timeoutRef.current) {
  //         clearTimeout(timeoutRef.current);
  //         timeoutRef.current = null;
  //       }
  //       setIsMonitoring(false);

  //       const data = await fetchHomeContent();

  //       if (!data) {
  //         throw new Error("No data received from Strapi");
  //       }

  //       setHome(data);
  //       setRetryCount(0);
  //       setLoading(false);
  //       setError(null);
  //     } catch (err) {
  //       let errorMessage = err.message;
  //       if (isConnectionError(err)) {
  //         errorMessage =
  //           "Cannot connect to Strapi server. Monitoring for reconnection...";
  //       }

  //       setError(errorMessage);

  //       if (attempt < MAX_RETRIES) {
  //         setRetryCount(attempt);

  //         setTimeout(() => {
  //           loadData(attempt + 1);
  //         }, RETRY_DELAY);
  //       } else {
  //         setLoading(false);
  //         setRetryCount(MAX_RETRIES);

  //         if (isConnectionError(err)) {
  //           startMonitoring();
  //         }
  //       }
  //     }
  //   },
  //   [startMonitoring]
  // );

  // useEffect(() => {
  //   const initializeDarkMode = () => {
  //     const savedTheme = localStorage.getItem("theme");
  //     const prefersDark = window.matchMedia(
  //       "(prefers-color-scheme: dark)"
  //     ).matches;

  //     const shouldBeDark =
  //       savedTheme === "dark" ||
  //       (!savedTheme && prefersDark);
  //     setIsDarkMode(shouldBeDark);

  //     if (shouldBeDark) {
  //       document.documentElement.classList.add("dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //     }
  //   };

  //   initializeDarkMode();
  //   loadData();

  //   return () => {
  //     if (monitoringRef.current) {
  //       clearInterval(monitoringRef.current);
  //       monitoringRef.current = null;
  //     }
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current);
  //       timeoutRef.current = null;
  //     }
  //     setIsMonitoring(false);
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // useEffect(() => {
  //   if (
  //     error &&
  //     isConnectionError({ message: error }) &&
  //     retryCount >= MAX_RETRIES &&
  //     !home &&
  //     !loading &&
  //     !isMonitoring
  //   ) {
  //     startMonitoring();
  //   }

  //   if (home && isMonitoring) {
  //     stopMonitoring();
  //   }
  // }, [
  //   error,
  //   retryCount,
  //   home,
  //   loading,
  //   isMonitoring,
  //   startMonitoring,
  //   stopMonitoring,
  // ]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // const handleManualRefresh = () => {
  //   setRetryCount(0);

  //   setIsMonitoring(false);
  //   if (monitoringRef.current) {
  //     clearInterval(monitoringRef.current);
  //     monitoringRef.current = null;
  //   }
  //   if (timeoutRef.current) {
  //     clearTimeout(timeoutRef.current);
  //     timeoutRef.current = null;
  //   }
  //   loadData();
  // };

  // if (loading) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-white transition-colors duration-300 dark:bg-gray-900">
  //       <div className="animate-pulse text-center">
  //         {/* Spinning Loader */}
  //         <div className="mb-4 flex justify-center">
  //           <div className="h-16 w-16 animate-spin rounded-full border-8 border-gray-200 border-t-green-500 dark:border-gray-700 dark:border-t-green-400"></div>
  //         </div>

  //         {/* Loading Text */}
  //         <div className="text-gray-900 transition-colors duration-300 dark:text-white">
  //           {retryCount > 0 ? (
  //             <>
  //               Retrying... ({retryCount}/{MAX_RETRIES})
  //               <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
  //                 Auto refresh in progress
  //               </div>
  //             </>
  //           ) : (
  //             <>
  //               Loading
  //               <span className="ml-1 inline-block animate-bounce">
  //                 .
  //               </span>
  //               <span className="ml-1 inline-block animate-bounce [animation-delay:0.1s]">
  //                 .
  //               </span>
  //               <span className="ml-1 inline-block animate-bounce [animation-delay:0.2s]">
  //                 .
  //               </span>
  //             </>
  //           )}
  //         </div>

  //         <button
  //           onClick={handleManualRefresh}
  //           className="mt-4 rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
  //         >
  //           Refresh Now
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  // if (error && retryCount >= MAX_RETRIES) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-white transition-colors duration-300 dark:bg-gray-900">
  //       <div className="mx-auto max-w-md p-6 text-center">
  //         <div className="mb-4">
  //           <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
  //             {isMonitoring ? (
  //               <div className="h-8 w-8 animate-pulse rounded-full bg-yellow-500"></div>
  //             ) : (
  //               <svg
  //                 className="h-8 w-8 text-red-600 dark:text-red-400"
  //                 fill="none"
  //                 stroke="currentColor"
  //                 viewBox="0 0 24 24"
  //               >
  //                 <path
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                   strokeWidth={2}
  //                   d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
  //                 />
  //               </svg>
  //             )}
  //           </div>
  //         </div>

  //         <h2 className="mb-2 text-xl font-semibold text-red-600 dark:text-red-400">
  //           {isMonitoring
  //             ? "Monitoring Connection"
  //             : "Failed to Load Data"}
  //         </h2>

  //         <p className="mb-4 text-gray-600 dark:text-gray-300">
  //           {error}
  //         </p>

  //         {isMonitoring && (
  //           <div className="mb-4 text-sm text-blue-600 dark:text-blue-400">
  //             🔄 Auto-monitoring for Strapi reconnection...
  //           </div>
  //         )}

  //         <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
  //           Tried {MAX_RETRIES} times with auto refresh
  //         </div>

  //         <div className="flex justify-center gap-3">
  //           <button
  //             onClick={handleManualRefresh}
  //             className="rounded-lg bg-blue-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
  //           >
  //             Try Again
  //           </button>

  //           <button
  //             onClick={() => window.location.reload()}
  //             className="rounded-lg bg-gray-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-gray-600"
  //           >
  //             Hard Refresh
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // if (!home) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-white transition-colors duration-300 dark:bg-gray-900">
  //       <div className="text-center">
  //         <h2 className="mb-4 text-xl text-gray-600 dark:text-gray-300">
  //           No Data Available
  //         </h2>
  //         {isMonitoring && (
  //           <div className="mb-4 text-sm text-blue-600 dark:text-blue-400">
  //             Monitoring for connection...
  //           </div>
  //         )}
  //         <button
  //           onClick={handleManualRefresh}
  //           className="rounded-lg bg-blue-500 px-6 py-2 text-white transition-colors duration-200 hover:bg-blue-600"
  //         >
  //           Refresh
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    // <div
    //   className={`relative h-full overflow-hidden transition-colors duration-500 ${
    //     isDarkMode
    //       ? "bg-gradient-to-br from-slate-900 via-blue-950 to-gray-900 text-slate-100"
    //       : "bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 text-slate-900"
    //   }`}
    //   <div
    // className={`relative h-full overflow-hidden transition-colors duration-500 ${
    //   isDarkMode
    //     ? "bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 text-gray-100"
    //     : "bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 text-slate-900"
    // }`}
    // <div
    //   className={`relative h-full overflow-hidden transition-colors duration-500 ${
    //     isDarkMode
    //       ? "bg-gradient-to-br from-zinc-900 via-neutral-900 to-stone-900 text-zinc-100"
    //       : "bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 text-slate-900"
    //   }`}
    // <div
    //   className={`relative h-full overflow-hidden transition-colors duration-500 ${
    //     isDarkMode
    //       ? "bg-gradient-to-br from-slate-950 via-gray-900 to-zinc-950 text-slate-200"
    //       : "bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 text-slate-900"
    //   }`}
    <div
      className={`relative h-full overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-neutral-950 via-zinc-900 to-gray-950 text-neutral-200"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 text-slate-900"
      }`}
    >
      <div className="absolute inset-0 opacity-35">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "via-purple-900/12 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"
              : "bg-gradient-to-br from-blue-100/35 via-indigo-100/25 to-cyan-100/35"
          }`}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(${isDarkMode ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.2)"} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.2)"} 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(${isDarkMode ? "rgba(147, 197, 253, 0.05)" : "rgba(147, 197, 253, 0.1)"} 1px, transparent 1px),
            linear-gradient(90deg, ${isDarkMode ? "rgba(147, 197, 253, 0.05)" : "rgba(147, 197, 253, 0.1)"} 1px, transparent 1px)
          `,
            backgroundSize: "200px 200px",
          }}
        ></div>
      </div>

      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="relative h-full w-full">
        <HeroSection
          // data={home.hero}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <AboutSection
          // data={home.about}
          isDarkMode={isDarkMode}
        />
        <SolutionsSection
          // data={home.solutions}
          isDarkMode={isDarkMode}
        />
        <PortfolioSection
          // data={home.portfolio}
          isDarkMode={isDarkMode}
        />
        <ContactSection
          // data={home.contact}
          isDarkMode={isDarkMode}
        />
        <Footer
          // data={home.footer}
          isDarkMode={isDarkMode}
        />
      </main>
    </div>
  );
};

export default Home;
