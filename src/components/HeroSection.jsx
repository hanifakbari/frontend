import { useState, useEffect } from "react";

import { fetchPartners } from "../utils/api";
import Partners from "./Partners";

const HeroSection = ({
  data,
  aboutData,
  isDarkMode,
  toggleDarkMode,
}) => {
  const defaultData = {
    title: "Next-Generation IT Solutions",
    subtitle: "Empowering Digital Transformation",
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

  useEffect(() => {
    fetchPartners().then((data) => {
      console.log("Fetched partners:", data);
      setPartners(data || []);
      setPartnersLoading(false);
    });
  }, []);

  if (!heroData) return null;

  return (
    <div className="h-ful relative flex w-full flex-col items-center justify-center transition-colors duration-300">
      {/* Hero Content */}
      <section className="relative flex min-h-screen w-full items-center justify-center pt-24">
        <div className="relative z-10 mx-auto flex max-w-sm flex-col items-center justify-center px-4 text-center lg:max-w-5xl">
          {subtitle && (
            <div className="mb-4 md:mb-6">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide uppercase backdrop-blur-sm transition-colors duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                  isDarkMode
                    ? "border-blue-500/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200"
                    : "border-blue-300/40 bg-gradient-to-r from-blue-100/80 to-purple-100/80 text-blue-700"
                }`}
              >
                <span
                  className={`mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full sm:mr-2 sm:h-2 sm:w-2 ${
                    isDarkMode
                      ? "bg-blue-400"
                      : "bg-blue-500"
                  }`}
                ></span>
                {subtitle}
              </span>
            </div>
          )}

          <div className="w-[90%] sm:w-[80%] md:w-[70%]">
            <h1
              className={`font-dosis mb-6 text-3xl leading-tight font-bold transition-all duration-300 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl xl:text-7xl ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h1>
          </div>

          {Array.isArray(description) && (
            <div className="mx-auto mb-12 max-w-3xl">
              {description.map((block, index) => (
                <p
                  key={index}
                  className={`text-sm leading-relaxed font-light transition-colors duration-300 lg:text-xl ${
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
            <button className="transform rounded-[10px] bg-[#2563EB] px-10 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-xl">
              Start Consultation
            </button>

            <button
              className={`group transform rounded-[10px] border-2 px-10 py-4 font-semibold backdrop-blur-sm transition-all duration-300 ${
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

          {/* Partners Section */}
          <div className="w-full">
            <div className="mx-auto max-w-6xl px-4">
              <p
                className={`text-[10px] font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isDarkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                Trusted by Industry Leaders
              </p>
              <Partners
                partners={partners}
                partnersLoading={partnersLoading}
              />
              <div className="text-center">
                {/* Trust indicators */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-400"></div>
                    <span
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                      99.9% Uptime
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-blue-400 delay-300"></div>
                    <span
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                      SOC 2 Compliant
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400 delay-600"></div>
                    <span
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                      24/7 Support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
    </div>
  );
};

export default HeroSection;
