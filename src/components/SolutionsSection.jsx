import { useState, useEffect } from "react";
import {
  Cloud,
  Code,
  Database,
  Cog,
  User,
} from "lucide-react";
import { fetchSolutionsSection } from "../utils/api";

const SolutionsSection = ({ isDarkMode }) => {
  const [solutionsData, setSolutionsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSolutionsData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchSolutionsSection();
        console.log(
          "Solutions section data from Strapi:",
          data
        );

        if (data) {
          setSolutionsData(data);
        } else {
          setError("No data returned from Strapi CMS");
        }
      } catch (err) {
        console.error(
          "Error loading solutions section:",
          err
        );
        setError(`API Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadSolutionsData();
  }, []);

  // Retry function
  const retryLoad = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchSolutionsSection();
      console.log("Retry - Solutions section data:", data);

      if (data) {
        setSolutionsData(data);
      } else {
        setError("No data returned from Strapi CMS");
      }
    } catch (err) {
      console.error("Retry error:", err);
      setError(`API Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

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

  // Loading state
  if (loading) {
    return (
      <section
        id="services"
        className="relative py-20 transition-colors duration-500 lg:py-32"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div
                className={`mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 ${
                  isDarkMode
                    ? "border-white"
                    : "border-gray-900"
                }`}
              ></div>
              <p
                className={`${
                  isDarkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                Loading solutions from Strapi...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !solutionsData) {
    return (
      <section
        id="services"
        className="relative py-20 transition-colors duration-500 lg:py-32"
      >
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center py-20">
            <div className="max-w-md text-center">
              <div
                className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                  isDarkMode
                    ? "bg-red-900/20 text-red-400"
                    : "bg-red-100 text-red-600"
                }`}
              >
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3
                className={`mb-2 text-xl font-semibold ${
                  isDarkMode
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                Failed to Load Solutions
              </h3>
              <p
                className={`mb-4 text-sm ${
                  isDarkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                {error ||
                  "No data available from Strapi CMS"}
              </p>
              <button
                onClick={retryLoad}
                disabled={loading}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isDarkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-600"
                    : "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400"
                } disabled:cursor-not-allowed`}
              >
                {loading ? "Retrying..." : "Try Again"}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Success state
  const { title, subtitle, description, businessLines } =
    solutionsData;

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
                className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium uppercase tracking-wide backdrop-blur-sm transition-colors duration-300 sm:px-4 sm:py-2 sm:text-sm ${
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
            className={`mb-6 font-dosis text-3xl font-bold leading-tight transition-all duration-300 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl ${
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

          {/* Description */}
          {description && (
            <div className="mx-auto max-w-4xl">
              {Array.isArray(description) ? (
                description.map((block, index) => (
                  <p
                    key={index}
                    className={`text-lg font-light leading-relaxed transition-colors duration-300 md:text-xl ${
                      isDarkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {block.children
                      ?.map((child) => child.text)
                      .join("")}
                  </p>
                ))
              ) : (
                <p
                  className={`text-lg font-light leading-relaxed transition-colors duration-300 md:text-xl ${
                    isDarkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {description}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Business Lines Grid */}
        {businessLines && businessLines.length > 0 && (
          <div className="space-y-8">
            {/* Top Row - First 3 Cards */}
            {businessLines.length > 0 && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {businessLines
                  .slice(0, 3)
                  .map((line, index) => {
                    const IconComponent = getIcon(
                      line.icon
                    );
                    const colors = getColors(
                      line.color,
                      isDarkMode
                    );

                    return (
                      <div
                        key={line.id || index}
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
                          className={`mb-3 text-lg font-semibold leading-tight transition-colors duration-300 lg:mb-4 lg:text-xl ${
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
                        {line.features &&
                          line.features.length > 0 && (
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
                                      className={`mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full lg:h-1.5 lg:w-1.5 ${
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
                          )}

                        {/* Hover effect overlay */}
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                            colors.overlay
                          }`}
                        ></div>
                      </div>
                    );
                  })}
              </div>
            )}

            {/* Bottom Row - Remaining Cards Centered */}
            {businessLines.length > 3 && (
              <div className="flex justify-center">
                <div
                  className={`grid w-full gap-6 lg:gap-8 ${
                    businessLines.slice(3).length === 1
                      ? "max-w-md grid-cols-1"
                      : businessLines.slice(3).length === 2
                        ? "max-w-2xl grid-cols-1 sm:grid-cols-2"
                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  }`}
                >
                  {businessLines
                    .slice(3)
                    .map((line, index) => {
                      const IconComponent = getIcon(
                        line.icon
                      );
                      const colors = getColors(
                        line.color,
                        isDarkMode
                      );

                      return (
                        <div
                          key={line.id || index + 3}
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
                            className={`mb-3 text-lg font-semibold leading-tight transition-colors duration-300 lg:mb-4 lg:text-xl ${
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
                          {line.features &&
                            line.features.length > 0 && (
                              <ul className="mb-4 space-y-2 lg:mb-6">
                                {line.features.map(
                                  (
                                    feature,
                                    featureIndex
                                  ) => (
                                    <li
                                      key={featureIndex}
                                      className={`flex items-start text-xs transition-colors duration-300 lg:text-sm ${
                                        isDarkMode
                                          ? "text-gray-400"
                                          : "text-gray-600"
                                      }`}
                                    >
                                      <div
                                        className={`mr-2 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full lg:h-1.5 lg:w-1.5 ${
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
                            )}

                          {/* Hover effect overlay */}
                          <div
                            className={`absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                              colors.overlay
                            }`}
                          ></div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Call to Action */}
        {/* <div className="mt-16 text-center lg:mt-20">
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
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SolutionsSection;
