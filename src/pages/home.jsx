import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SolutionsSection from "../components/SolutionsSection";
import PortfolioSection from "../components/PortofolioSection";
import ContactSection from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
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

  return (
    <div
      className={`relative h-full overflow-hidden bg-white transition-colors duration-500 dark:bg-[#131313]`}
    >
      <div className="absolute inset-0 opacity-35">
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
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <AboutSection isDarkMode={isDarkMode} />
        <SolutionsSection isDarkMode={isDarkMode} />
        <PortfolioSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </main>
    </div>
  );
};

export default Home;
