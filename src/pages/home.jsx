import { useEffect, useState } from "react";
import { fetchHomeContent } from "../utils/api";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SolutionsSection from "../components/SolutionsSection";
import PortfolioSection from "../components/PortofolioSection";
import ContactSection from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
  const [home, setHome] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const initializeDarkMode = () => {
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const shouldBeDark =
        savedTheme === "dark" ||
        (!savedTheme && prefersDark);

      setIsDarkMode(shouldBeDark);

      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    initializeDarkMode();

    fetchHomeContent().then((data) => {
      setHome(data);
    });
  }, []);

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

  if (!home)
    return (
      <div className="flex min-h-screen items-center justify-center bg-white transition-colors duration-300 dark:bg-gray-900">
        <div className="animate-pulse text-center [animation-duration:5s]">
          {/* Spinning Loader */}
          <div className="mb-4 flex justify-center">
            <div className="h-16 w-16 animate-spin rounded-full border-8 border-gray-200 border-t-green-500 dark:border-gray-700 dark:border-t-green-400"></div>
          </div>

          {/* Loading Text */}
          <div className="text-gray-900 transition-colors duration-300 dark:text-white">
            Loading
            <span className="ml-1 inline-block animate-bounce">
              .
            </span>
            <span className="ml-1 inline-block animate-bounce [animation-delay:0.1s]">
              .
            </span>
            <span className="ml-1 inline-block animate-bounce [animation-delay:0.2s]">
              .
            </span>
          </div>
        </div>
      </div>
    );

  return (
    <div
      className={`relative h-full overflow-hidden transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-blue-950 to-gray-900 text-slate-100"
          : "bg-gradient-to-br from-slate-50 via-blue-50 to-gray-100 text-slate-900"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-35">
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-br from-blue-900/20 via-purple-900/12 to-cyan-900/20"
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
          data={home.hero}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <AboutSection
          data={home.about}
          isDarkMode={isDarkMode}
        />
        <SolutionsSection
          data={home.solutions}
          isDarkMode={isDarkMode}
        />
        <PortfolioSection
          data={home.portfolio}
          isDarkMode={isDarkMode}
        />
        <ContactSection
          data={home.contact}
          isDarkMode={isDarkMode}
        />
        <Footer
          data={home.footer}
          isDarkMode={isDarkMode}
        />
      </main>
    </div>
  );
};

export default Home;
