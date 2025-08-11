import React, { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Assets } from "../assets";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDarkModeToggle = () => {
    setIsRotating(true);
    toggleDarkMode();

    // Reset rotation state after animation completes
    setTimeout(() => {
      setIsRotating(false);
    }, 300);
  };

  return (
    <nav className="fixed top-0 z-50 w-full px-4 py-2">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex h-20 w-20 items-center lg:h-32 lg:w-32">
          <img
            src={
              isDarkMode ? Assets.AstaWhite : Assets.Asta
            }
            alt="Asta Logo"
            className="transition-all duration-300"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden items-center space-x-8 rounded-full border border-white px-8 py-3 backdrop-blur-md md:flex dark:border-white/30 ${
            isDarkMode
              ? "bg-backdrop-blur-sm bg-white/15"
              : "bg-white/40 backdrop-blur-sm"
          } border-transparent`}
        >
          <a
            href=" #"
            className={`font-semibold transition-colors hover:text-orange-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Home
          </a>
          <a
            href=" #"
            className={`font-semibold transition-colors hover:text-orange-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            About
          </a>
          <a
            href=" #"
            className={`font-semibold transition-colors hover:text-orange-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Services
          </a>
          <a
            href=" #"
            className={`font-semibold transition-colors hover:text-orange-500 ${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Contact
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden gap-6 md:flex">
          <button
            onClick={handleDarkModeToggle}
            className={`transition-all duration-300 ${
              !isRotating ? "hover:scale-105" : ""
            } ${
              isDarkMode
                ? "text-white hover:text-yellow-300"
                : "text-gray-900 hover:text-blue-600"
            } ${isRotating ? "animate-spin" : ""}`}
          >
            {isDarkMode ? (
              <Sun
                size={24}
                className="transition-transform duration-300"
              />
            ) : (
              <Moon
                size={24}
                className="transition-transform duration-300"
              />
            )}
          </button>
          <button className="transform rounded-[10px] bg-[#2563EB] px-6 py-2 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#1d4ed8] hover:shadow-xl">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={handleDarkModeToggle}
            className={`transition-all duration-300 ${
              !isRotating ? "hover:scale-110" : ""
            } ${
              isDarkMode
                ? "text-white hover:text-yellow-300"
                : "text-gray-600 hover:text-blue-600"
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
            onClick={toggleMenu}
            className={`p-2 transition-all duration-300 hover:scale-110 ${isDarkMode ? "text-white" : "text-gray-900"}`}
          >
            {isMenuOpen ? (
              <X
                size={24}
                className="transition-transform duration-300"
              />
            ) : (
              <Menu
                size={24}
                className="transition-transform duration-300"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`mt-4 transform pb-4 backdrop-blur-md transition-all duration-300 ease-out md:hidden ${
            isDarkMode ? "bg-gray-800/20" : "bg-white/10"
          } rounded-2xl border border-white/20 shadow-xl`}
        >
          <div className="flex flex-col space-y-4 px-4 py-4">
            <a
              href=" #"
              className={`font-semibold transition-colors hover:text-orange-500 ${
                isDarkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              Home
            </a>

            <a
              href=" #"
              className={`font-semibold transition-colors hover:text-orange-500 ${
                isDarkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              About
            </a>
            <a
              href=" #"
              className={`font-semibold transition-colors hover:text-orange-500 ${
                isDarkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              Services
            </a>
            <a
              href=" #"
              className={`font-semibold transition-colors hover:text-orange-500 ${
                isDarkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
