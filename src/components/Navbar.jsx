import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Assets } from "../assets";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDarkModeToggle = () => {
    setIsRotating(true);
    toggleDarkMode();

    setTimeout(() => {
      setIsRotating(false);
    }, 300);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 120;
      const elementPosition =
        element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-4 transition-all duration-300 ${
        isScrolled
          ? isDarkMode
            ? "border-b border-white/10 bg-black/20 backdrop-blur-xl"
            : "border-b border-black/10 bg-white/20 backdrop-blur-xl"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex h-28 w-28 items-center">
          <img
            src={
              isDarkMode ? Assets.AstaWhite : Assets.Asta
            }
            alt="Asta Logo"
            className="cursor-pointer transition-all duration-300"
            onClick={() => scrollToSection("home")}
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        </div>

        {/* Navigation Menu - Transparent saat scroll */}
        <div
          className={`hidden items-center space-x-8 rounded-full border px-8 py-3 transition-all duration-300 md:flex ${
            isScrolled
              ? "border-transparent bg-transparent shadow-none"
              : isDarkMode
                ? "border-white/5 bg-gradient-to-t from-white/10 to-white/[1%] shadow-lg backdrop-blur-xl"
                : "to-white/2 border-white/30 bg-gradient-to-r from-white/20 via-white/5 shadow-lg shadow-gray-300/30 backdrop-blur-xl"
          }`}
        >
          <button
            onClick={() => scrollToSection("home")}
            className={`font-semibold transition-all duration-300 hover:scale-105 hover:text-orange-500 ${
              isDarkMode
                ? "text-gray-200 hover:text-orange-400"
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`font-semibold transition-all duration-300 hover:scale-105 hover:text-orange-500 ${
              isDarkMode
                ? "text-gray-200 hover:text-orange-400"
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className={`font-semibold transition-all duration-300 hover:scale-105 hover:text-orange-500 ${
              isDarkMode
                ? "text-gray-200 hover:text-orange-400"
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className={`font-semibold transition-all duration-300 hover:scale-105 hover:text-orange-500 ${
              isDarkMode
                ? "text-gray-200 hover:text-orange-400"
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`font-semibold transition-all duration-300 hover:scale-105 hover:text-orange-500 ${
              isDarkMode
                ? "text-gray-200 hover:text-orange-400"
                : "text-gray-700 hover:text-orange-600"
            }`}
          >
            Contact
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="hidden gap-6 md:flex">
          <button
            onClick={handleDarkModeToggle}
            className={`cursor-pointer rounded-full p-2 backdrop-blur-md transition-all duration-300 ${
              !isRotating ? "hover:scale-110" : ""
            } ${
              isDarkMode
                ? "text-white hover:text-yellow-300"
                : "text-gray-900 hover:text-blue-600"
            } ${isRotating ? "animate-spin" : ""}`}
          >
            {isDarkMode ? (
              <Sun
                size={20}
                className="transition-transform duration-300"
              />
            ) : (
              <Moon
                size={20}
                className="transition-transform duration-300"
              />
            )}
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="transform rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={handleDarkModeToggle}
            className={`rounded-full p-2 backdrop-blur-md transition-all duration-300 ${
              !isRotating ? "hover:scale-110" : ""
            } ${
              isDarkMode
                ? "text-white hover:text-yellow-300"
                : "text-gray-600 hover:text-blue-600"
            } ${isRotating ? "animate-spin" : ""}`}
          >
            {isDarkMode ? (
              <Sun
                size={28}
                className="transition-transform duration-300"
              />
            ) : (
              <Moon
                size={28}
                className="transition-transform duration-300"
              />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className={`rounded-full p-2 backdrop-blur-md transition-all duration-300 hover:scale-110 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {isMenuOpen ? (
              <X
                size={28}
                className="transition-transform duration-300"
              />
            ) : (
              <Menu
                size={28}
                className="transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`mt-4 transform rounded-2xl border shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${
            isDarkMode
              ? "border-white/20 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 shadow-black/50"
              : "border-gray-200/30 bg-gradient-to-br from-white/80 via-white/60 to-white/80 shadow-gray-400/30"
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 py-6">
            <button
              onClick={() => scrollToSection("home")}
              className={`text-left font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:text-orange-500 ${
                isDarkMode
                  ? "text-gray-200 hover:text-orange-400"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className={`text-left font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:text-orange-500 ${
                isDarkMode
                  ? "text-gray-200 hover:text-orange-400"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`text-left font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:text-orange-500 ${
                isDarkMode
                  ? "text-gray-200 hover:text-orange-400"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className={`text-left font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:text-orange-500 ${
                isDarkMode
                  ? "text-gray-200 hover:text-orange-400"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-left font-semibold transition-all duration-300 hover:translate-x-2 hover:scale-105 hover:text-orange-500 ${
                isDarkMode
                  ? "text-gray-200 hover:text-orange-400"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              Contact
            </button>

            {/* Mobile Get Started Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-4 transform rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
