import React from "react";
import {
  Cloud,
  Code,
  Database,
  Cog,
  User,
  ArrowRight,
} from "lucide-react";

const SolutionsSection = ({ data, isDarkMode }) => {
  const defaultData = {
    title: "Our Solutions",
    subtitle: "Comprehensive IT Services",
    description: [
      {
        children: [
          {
            text: "PT Asta menghadirkan solusi 'Boutique Style' yang disesuaikan dengan proses bisnis pelanggan berdasarkan perkembangan teknologi terkini. Layanan Managed Service kami meningkatkan efisiensi, mengurangi risiko, dan memungkinkan bisnis fokus pada core business. Solusi adaptif ini dapat diimplementasikan oleh berbagai sektor seperti Korporasi, Pendidikan, dan Pemerintahan.",
          },
        ],
      },
    ],
    businessLines: [
      {
        id: 1,
        title: "Software Solutions",
        description:
          "Pengembangan dan implementasi software custom yang disesuaikan dengan kebutuhan spesifik bisnis dan workflow perusahaan.",
        icon: "code",
        features: [
          "Custom Application Development",
          "Enterprise Software Solutions",
          "System Integration",
          "Software Maintenance & Support",
        ],
        color: "blue",
      },
      {
        id: 2,
        title: "Hardware Solutions",
        description:
          "Penyediaan dan implementasi infrastruktur hardware yang reliable dan scalable untuk mendukung operasional IT perusahaan.",
        icon: "cog",
        features: [
          "Server & Storage Solutions",
          "Network Equipment",
          "Hardware Procurement",
          "Infrastructure Upgrade",
        ],
        color: "red",
      },
      {
        id: 3,
        title: "Network Solutions",
        description:
          "Desain, implementasi, dan maintenance jaringan yang secure dan high-performance untuk connectivity optimal.",
        icon: "cloud",
        features: [
          "Network Design & Implementation",
          "WiFi & LAN Solutions",
          "Network Security",
          "Network Monitoring & Management",
        ],
        color: "green",
      },
      {
        id: 4,
        title: "IT Consultant",
        description:
          "Layanan konsultasi strategis untuk optimalisasi infrastruktur IT dan digital transformation roadmap perusahaan.",
        icon: "database",
        features: [
          "IT Strategy Planning",
          "Digital Transformation Consulting",
          "Technology Assessment",
          "IT Governance & Compliance",
        ],
        color: "purple",
      },
      {
        id: 5,
        title: "Workforce Solutions",
        description:
          "Penyediaan tenaga ahli IT yang berkualitas dan berpengalaman untuk mendukung kebutuhan SDM teknologi perusahaan.",
        icon: "users",
        features: [
          "IT Staff Augmentation",
          "Project-based Team",
          "Technical Training",
          "Skill Development Programs",
        ],
        color: "orange",
      },
    ],
  };

  const solutionsData = data || defaultData;
  const { title, subtitle, description, businessLines } =
    solutionsData;

  // Icon mapping
  const getIcon = (iconName) => {
    const icons = {
      cloud: Cloud,
      code: Code,
      database: Database,
      cog: Cog,
      users: User,
    };
    return icons[iconName] || Code;
  };

  // Color mapping for different business lines
  const getColors = (color, isDarkMode) => {
    const colorMap = {
      blue: {
        icon: isDarkMode
          ? "bg-blue-500/20 text-blue-400"
          : "bg-blue-100/80 text-blue-600",
        iconHover: isDarkMode
          ? "group-hover:bg-blue-500/30"
          : "group-hover:bg-blue-200/80",
        overlay: isDarkMode
          ? "from-blue-600/5 to-cyan-600/5"
          : "from-blue-500/5 to-cyan-500/5",
      },
      red: {
        icon: isDarkMode
          ? "bg-red-500/20 text-red-400"
          : "bg-red-100/80 text-red-600",
        iconHover: isDarkMode
          ? "group-hover:bg-red-500/30"
          : "group-hover:bg-red-200/80",
        overlay: isDarkMode
          ? "from-red-600/5 to-pink-600/5"
          : "from-red-500/5 to-pink-500/5",
      },
      green: {
        icon: isDarkMode
          ? "bg-green-500/20 text-green-400"
          : "bg-green-100/80 text-green-600",
        iconHover: isDarkMode
          ? "group-hover:bg-green-500/30"
          : "group-hover:bg-green-200/80",
        overlay: isDarkMode
          ? "from-green-600/5 to-emerald-600/5"
          : "from-green-500/5 to-emerald-500/5",
      },
      purple: {
        icon: isDarkMode
          ? "bg-purple-500/20 text-purple-400"
          : "bg-purple-100/80 text-purple-600",
        iconHover: isDarkMode
          ? "group-hover:bg-purple-500/30"
          : "group-hover:bg-purple-200/80",
        overlay: isDarkMode
          ? "from-purple-600/5 to-violet-600/5"
          : "from-purple-500/5 to-violet-500/5",
      },
      orange: {
        icon: isDarkMode
          ? "bg-orange-500/20 text-orange-400"
          : "bg-orange-100/80 text-orange-600",
        iconHover: isDarkMode
          ? "group-hover:bg-orange-500/30"
          : "group-hover:bg-orange-200/80",
        overlay: isDarkMode
          ? "from-orange-600/5 to-yellow-600/5"
          : "from-orange-500/5 to-yellow-500/5",
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  return (
    <section
      id="services"
      className="relative py-20 transition-colors duration-500 lg:py-32"
    >
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

        {/* Business Lines Grid */}
        <div className="space-y-8">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {businessLines
              .slice(0, 3)
              .map((line, index) => {
                const IconComponent = getIcon(line.icon);
                const colors = getColors(
                  line.color,
                  isDarkMode
                );

                return (
                  <div
                    key={line.id}
                    className={`group relative flex min-h-[320px] flex-col rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl lg:p-8 ${
                      isDarkMode
                        ? "border-gray-700/30 bg-gray-900/20 hover:border-gray-600/50 hover:bg-gray-800/30"
                        : "border-gray-300/30 bg-white/20 hover:border-gray-400/50 hover:bg-white/40"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 lg:mb-6 lg:h-14 lg:w-14 ${
                        colors.icon
                      } ${colors.iconHover}`}
                    >
                      <IconComponent
                        size={24}
                        className="lg:h-7 lg:w-7"
                      />
                    </div>

                    {/* Content */}
                    <h3
                      className={`mb-3 text-lg leading-tight font-semibold transition-colors duration-300 lg:mb-4 lg:text-xl ${
                        isDarkMode
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {line.title}
                    </h3>

                    <p
                      className={`mb-4 flex-grow text-sm leading-relaxed transition-colors duration-300 lg:mb-6 ${
                        isDarkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      {line.description}
                    </p>

                    {/* Features List */}
                    <ul className="mb-4 space-y-2 lg:mb-6">
                      {line.features.map(
                        (feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className={`flex items-start text-xs transition-colors duration-300 lg:text-sm ${
                              isDarkMode
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            <div
                              className={`mt-1.5 mr-2 h-1 w-1 flex-shrink-0 rounded-full lg:h-1.5 lg:w-1.5 ${
                                isDarkMode
                                  ? "bg-blue-400"
                                  : "bg-blue-500"
                              }`}
                            ></div>
                            <span className="leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        )
                      )}
                    </ul>

                    {/* Learn More Button */}
                    <button
                      className={`group/btn mt-auto flex items-center text-xs font-medium transition-all duration-300 lg:text-sm ${
                        isDarkMode
                          ? "text-blue-400 hover:text-blue-300"
                          : "text-blue-600 hover:text-blue-700"
                      }`}
                    >
                      Learn More
                      <ArrowRight
                        size={14}
                        className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 lg:h-4 lg:w-4"
                      />
                    </button>

                    {/* Hover effect overlay */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                        isDarkMode
                          ? colors.overlay
                          : colors.overlay
                      }`}
                    ></div>
                  </div>
                );
              })}
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="flex justify-center">
            <div className="grid w-full max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {businessLines
                .slice(3, 5)
                .map((line, index) => {
                  const IconComponent = getIcon(line.icon);
                  const colors = getColors(
                    line.color,
                    isDarkMode
                  );

                  return (
                    <div
                      key={line.id}
                      className={`group relative flex min-h-[320px] flex-col rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl lg:p-8 ${
                        isDarkMode
                          ? "border-gray-700/30 bg-gray-900/20 hover:border-gray-600/50 hover:bg-gray-800/30"
                          : "border-gray-300/30 bg-white/20 hover:border-gray-400/50 hover:bg-white/40"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 lg:mb-6 lg:h-14 lg:w-14 ${
                          colors.icon
                        } ${colors.iconHover}`}
                      >
                        <IconComponent
                          size={24}
                          className="lg:h-7 lg:w-7"
                        />
                      </div>

                      {/* Content */}
                      <h3
                        className={`mb-3 text-lg leading-tight font-semibold transition-colors duration-300 lg:mb-4 lg:text-xl ${
                          isDarkMode
                            ? "text-white"
                            : "text-gray-900"
                        }`}
                      >
                        {line.title}
                      </h3>

                      <p
                        className={`mb-4 flex-grow text-sm leading-relaxed transition-colors duration-300 lg:mb-6 ${
                          isDarkMode
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {line.description}
                      </p>

                      {/* Features List */}
                      <ul className="mb-4 space-y-2 lg:mb-6">
                        {line.features.map(
                          (feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className={`flex items-start text-xs transition-colors duration-300 lg:text-sm ${
                                isDarkMode
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              <div
                                className={`mt-1.5 mr-2 h-1 w-1 flex-shrink-0 rounded-full lg:h-1.5 lg:w-1.5 ${
                                  isDarkMode
                                    ? "bg-blue-400"
                                    : "bg-blue-500"
                                }`}
                              ></div>
                              <span className="leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          )
                        )}
                      </ul>

                      {/* Learn More Button */}
                      <button
                        className={`group/btn mt-auto flex items-center text-xs font-medium transition-all duration-300 lg:text-sm ${
                          isDarkMode
                            ? "text-blue-400 hover:text-blue-300"
                            : "text-blue-600 hover:text-blue-700"
                        }`}
                      >
                        Learn More
                        <ArrowRight
                          size={14}
                          className="ml-2 transition-transform duration-300 group-hover/btn:translate-x-1 lg:h-4 lg:w-4"
                        />
                      </button>

                      {/* Hover effect overlay */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                          isDarkMode
                            ? colors.overlay
                            : colors.overlay
                        }`}
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center lg:mt-20">
          <div className="mb-6">
            <h3
              className={`text-2xl font-semibold transition-colors duration-300 ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Transform Your Business?
            </h3>
            <p
              className={`mt-2 text-lg transition-colors duration-300 ${
                isDarkMode
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              Konsultasikan kebutuhan IT Anda dengan tim
              expert kami
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="transform rounded-[10px] bg-[#2563EB] px-10 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-[#1d4ed8] hover:shadow-xl">
              Get Free Consultation
            </button>

            <button
              className={`group transform rounded-[10px] border-2 px-10 py-4 font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                isDarkMode
                  ? "border-white/20 bg-white/15 text-gray-300 hover:border-gray-400/50 hover:text-white"
                  : "border-gray-400/50 bg-white/30 text-gray-700 hover:border-gray-500/60 hover:text-gray-900"
              }`}
            >
              <span className="flex items-center">
                View All Solutions
                <ArrowRight
                  size={20}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
