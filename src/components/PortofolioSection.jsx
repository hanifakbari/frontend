import React, { useState } from "react";
import {
  Building2,
  Network,
  Mail,
  Server,
} from "lucide-react";

const PortfolioSection = ({ data, isDarkMode }) => {
  const [activeTab, setActiveTab] = useState(0);

  const defaultData = {
    title: "Our Portfolio",
    subtitle: "Proven Track Record",
    description: [
      {
        children: [
          {
            text: "Dengan pengalaman lebih dari satu dekade, PT Asta telah berhasil menyelesaikan berbagai proyek IT infrastructure untuk klien dari berbagai sektor industri.",
          },
        ],
      },
    ],
    portfolioSectors: [
      {
        id: 1,
        title:
          "Consultant Infrastructure Area and Head Office",
        icon: "building",
        color: "blue",
        companies: [
          {
            name: "PT. Global Manufacturing Indonesia",
            industry: "Manufacturing",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText: "Global Manufacturing Logo",
            },
            completionYear: "2024",
          },
        ],
      },
      {
        id: 2,
        title: "Infrastructure Site Area and Head Office",
        icon: "network",
        color: "green",
        companies: [
          {
            name: "PT. Energy Sustainable Indonesia",
            industry: "Energy",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText: "Energy Sustainable Logo",
            },
            completionYear: "2024",
          },
          {
            name: "PT. Mining Operations Nusantara",
            industry: "Mining",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText: "Mining Operations Logo",
            },
            completionYear: "2023",
          },
        ],
      },
      {
        id: 3,
        title: "Mail System & Anti Spam",
        icon: "mail",
        color: "purple",
        companies: [
          {
            name: "PT. Financial Services Mandiri",
            industry: "Financial Services",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText: "Financial Services Logo",
            },
            completionYear: "2024",
          },
          {
            name: "PT. Healthcare Solutions Indonesia",
            industry: "Healthcare",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText: "Healthcare Solutions Logo",
            },
            completionYear: "2023",
          },
          {
            name: "PT. Education Excellence Foundation",
            industry: "Education",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText: "Education Excellence Logo",
            },
            completionYear: "2023",
          },
        ],
      },
      {
        id: 4,
        title: "Infrastructure Head Office",
        icon: "server",
        color: "orange",
        companies: [
          {
            name: "PT. Retail Chain Indonesia",
            industry: "Retail",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText: "Retail Chain Logo",
            },
            completionYear: "2024",
          },
          {
            name: "PT. Logistics Express Nusantara",
            industry: "Logistics",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText: "Logistics Express Logo",
            },
            completionYear: "2024",
          },
          {
            name: "PT. Automotive Parts Manufacturing",
            industry: "Automotive",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText: "Automotive Parts Logo",
            },
            completionYear: "2023",
          },
          {
            name: "PT. Pharmaceutical Research Indo",
            industry: "Pharmaceutical",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "Pharmaceutical Research Logo",
            },
            completionYear: "2023",
          },
          {
            name: "PT. Technology Startup Accelerator",
            industry: "Technology",
            logo: {
              url: "/api/placeholder/120/60",
              alternativeText: "Technology Startup Logo",
            },
            completionYear: "2023",
          },
        ],
      },
    ],
  };

  const portfolioData = data || defaultData;
  const { title, subtitle, description, portfolioSectors } =
    portfolioData;

  // Icon mapping
  const getIcon = (iconName) => {
    const icons = {
      building: Building2,
      network: Network,
      mail: Mail,
      server: Server,
    };
    return icons[iconName] || Building2;
  };

  // Color mapping
  const getColors = (color, isDarkMode) => {
    const colorMap = {
      blue: {
        tabActive: isDarkMode
          ? "bg-blue-500/20 text-blue-300 border-blue-400/50"
          : "bg-blue-100 text-blue-700 border-blue-300",
      },
      green: {
        tabActive: isDarkMode
          ? "bg-green-500/20 text-green-300 border-green-400/50"
          : "bg-green-100 text-green-700 border-green-300",
      },
      purple: {
        tabActive: isDarkMode
          ? "bg-purple-500/20 text-purple-300 border-purple-400/50"
          : "bg-purple-100 text-purple-700 border-purple-300",
      },
      orange: {
        tabActive: isDarkMode
          ? "bg-orange-500/20 text-orange-300 border-orange-400/50"
          : "bg-orange-100 text-orange-700 border-orange-300",
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  const activeSector = portfolioSectors[activeTab];
  // const colors = getColors(activeSector.color, isDarkMode);

  const getGridCols = (count) => {
    if (count === 1) return "grid-cols-1 max-w-md mx-auto";
    if (count === 2) return "grid-cols-1 sm:grid-cols-2";
    if (count === 3)
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    if (count === 4)
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3";
  };

  return (
    <section className="relative py-10 transition-colors duration-500">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-20">
          {subtitle && (
            <div className="mb-4 md:mb-6">
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide uppercase backdrop-blur-sm transition-colors duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                  isDarkMode
                    ? "border-blue-500/30 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-yellow-500/20 text-blue-200"
                    : "border-blue-300/40 bg-gradient-to-r from-blue-100/80 via-orange-100/60 to-yellow-100/80 text-blue-700"
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

          <h2
            className={`font-dosis mb-6 text-3xl leading-tight font-bold transition-all duration-300 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
          </h2>

          {/* Glowing underline */}
          <div
            className={`mx-auto mb-8 h-1 w-24 rounded-full shadow-lg transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 via-orange-500 to-yellow-500 shadow-blue-500/50"
                : "bg-gradient-to-r from-blue-600 via-orange-600 to-yellow-600 shadow-blue-400/40"
            }`}
          ></div>

          {Array.isArray(description) && (
            <div className="mx-auto max-w-4xl">
              {description.map((block, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed font-light transition-colors duration-300 md:text-xl ${
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
        </div>

        {/* Portfolio Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioSectors.map((sector, index) => {
              const IconComponent = getIcon(sector.icon);
              const sectorColors = getColors(
                sector.color,
                isDarkMode
              );
              const isActive = activeTab === index;

              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveTab(index)}
                  className={`group flex items-center space-x-3 rounded-xl border px-6 py-3 transition-all duration-300 ${
                    isActive
                      ? sectorColors.tabActive
                      : isDarkMode
                        ? "border-gray-700/30 bg-gray-900/20 text-gray-300 hover:border-gray-600/50 hover:bg-gray-800/30"
                        : "border-gray-300/30 bg-white/20 text-gray-700 hover:border-gray-400/50 hover:bg-white/40"
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="text-sm font-medium lg:text-base">
                    {sector.title}
                  </span>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${
                      isActive
                        ? "bg-white/20"
                        : "bg-gray-500/20"
                    }`}
                  >
                    {sector.companies.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Sector Companies Grid */}
        <div
          className={`grid gap-8 ${getGridCols(activeSector.companies.length)}`}
        >
          {activeSector.companies.map((company, index) => (
            <div
              key={index}
              className={`group rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDarkMode
                  ? "border-gray-700/30 bg-gray-900/20 hover:border-gray-600/50"
                  : "border-gray-300/30 bg-white/20 hover:border-gray-400/50"
              }`}
            >
              {/* Company Logo */}
              <div
                className={`mb-6 flex h-20 w-full items-center justify-center rounded-lg border p-4 ${
                  isDarkMode
                    ? "border-gray-700/30 bg-gray-800/20"
                    : "border-gray-300/30 bg-white/50"
                }`}
              >
                {company.logo?.url ? (
                  <img
                    src={company.logo.url}
                    alt={
                      company.logo.alternativeText ||
                      company.name
                    }
                    className={`max-h-full max-w-full object-contain transition-all duration-300 ${
                      isDarkMode
                        ? "opacity-80 brightness-0 invert filter"
                        : "opacity-70"
                    }`}
                  />
                ) : (
                  <div
                    className={`text-center transition-colors duration-300 ${
                      isDarkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    <div className="text-sm font-medium">
                      {company.name
                        .split(" ")
                        .slice(0, 3)
                        .join(" ")}
                    </div>
                  </div>
                )}
              </div>

              {/* Company Info */}
              <h3
                className={`mb-2 text-xl font-bold transition-colors duration-300 ${
                  isDarkMode
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                {company.name}
              </h3>

              <div className="flex items-center justify-between">
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {company.industry}
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    isDarkMode
                      ? "bg-green-500/20 text-green-400"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  Completed {company.completionYear}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
