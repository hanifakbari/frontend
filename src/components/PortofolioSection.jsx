import { useState, useEffect } from "react";
import {
  CheckCircle,
  Calendar,
  Users,
  Building,
} from "lucide-react";
import { fetchPortfolioSection } from "../utils/api";

const PortfolioSection = ({ isDarkMode }) => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchPortfolioSection();
        console.log(
          "Portfolio section data from Strapi:",
          data
        );

        if (data) {
          setPortfolioData(data);
        } else {
          setError("No data returned from Strapi CMS");
        }
      } catch (err) {
        console.error(
          "Error loading portfolio section:",
          err
        );
        setError(`API Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  // Retry function
  const retryLoad = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchPortfolioSection();
      console.log("Retry - Portfolio section data:", data);

      if (data) {
        setPortfolioData(data);
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

  // Generate dynamic categories with count from projects
  const getDynamicCategories = (projects) => {
    if (!projects || projects.length === 0) return [];

    // Count projects by category
    const categoryCount = {};
    projects.forEach((project) => {
      const category = project.category;
      if (category) {
        categoryCount[category] =
          (categoryCount[category] || 0) + 1;
      }
    });

    // Convert to array format
    return Object.entries(categoryCount).map(
      ([name, count]) => ({
        name,
        count,
      })
    );
  };

  // Function to get category colors
  const getCategoryColor = (categoryName, index) => {
    const name = categoryName?.toLowerCase() || "";

    // Define color mapping
    const colorMap = {
      blue: {
        tab: isDarkMode ? "text-blue-400" : "text-blue-600",
        tabActive: isDarkMode
          ? "bg-blue-500/20 text-blue-300 border-blue-400/50"
          : "bg-blue-100 text-blue-700 border-blue-300",
        tabInactive: isDarkMode
          ? "bg-blue-800/30 text-blue-400 hover:bg-blue-700/40"
          : "bg-blue-50/50 text-blue-600 hover:bg-blue-100/70",
        badge: isDarkMode
          ? "bg-blue-600/30"
          : "bg-blue-200",
        badgeActive: "bg-white/20",
        shadow: "shadow-blue-500/25",
      },
      green: {
        tab: isDarkMode
          ? "text-green-400"
          : "text-green-600",
        tabActive: isDarkMode
          ? "bg-green-500/20 text-green-300 border-green-400/50"
          : "bg-green-100 text-green-700 border-green-300",
        tabInactive: isDarkMode
          ? "bg-green-800/30 text-green-400 hover:bg-green-700/40"
          : "bg-green-50/50 text-green-600 hover:bg-green-100/70",
        badge: isDarkMode
          ? "bg-green-600/30"
          : "bg-green-200",
        badgeActive: "bg-white/20",
        shadow: "shadow-green-500/25",
      },
      purple: {
        tab: isDarkMode
          ? "text-purple-400"
          : "text-purple-600",
        tabActive: isDarkMode
          ? "bg-purple-500/20 text-purple-300 border-purple-400/50"
          : "bg-purple-100 text-purple-700 border-purple-300",
        tabInactive: isDarkMode
          ? "bg-purple-800/30 text-purple-400 hover:bg-purple-700/40"
          : "bg-purple-50/50 text-purple-600 hover:bg-purple-100/70",
        badge: isDarkMode
          ? "bg-purple-600/30"
          : "bg-purple-200",
        badgeActive: "bg-white/20",
        shadow: "shadow-purple-500/25",
      },
      orange: {
        tab: isDarkMode
          ? "text-orange-400"
          : "text-orange-600",
        tabActive: isDarkMode
          ? "bg-orange-500/20 text-orange-300 border-orange-400/50"
          : "bg-orange-100 text-orange-700 border-orange-300",
        tabInactive: isDarkMode
          ? "bg-orange-800/30 text-orange-400 hover:bg-orange-700/40"
          : "bg-orange-50/50 text-orange-600 hover:bg-orange-100/70",
        badge: isDarkMode
          ? "bg-orange-600/30"
          : "bg-orange-200",
        badgeActive: "bg-white/20",
        shadow: "shadow-orange-500/25",
      },
    };

    let colorKey = "blue";

    if (
      name.includes("consultant") ||
      name.includes("infrastructure") ||
      name.includes("manufacturing")
    ) {
      colorKey = "blue";
    } else if (
      name.includes("site") ||
      name.includes("development")
    ) {
      colorKey = "green";
    } else if (
      name.includes("mail") ||
      name.includes("security") ||
      name.includes("spam")
    ) {
      colorKey = "purple";
    } else if (
      name.includes("office") ||
      name.includes("corporate")
    ) {
      colorKey = "orange";
    }

    return colorMap[colorKey];
  };

  // Loading state
  if (loading) {
    return (
      <section
        id="portfolio"
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
                Loading portfolio from Strapi...
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !portfolioData) {
    return (
      <section
        id="portfolio"
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
                Failed to Load Portfolio
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
  const { title, subtitle, description, projects } =
    portfolioData;

  const dynamicCategories = getDynamicCategories(projects);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory
        );

  return (
    <section
      id="portfolio"
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

          {description && (
            <div className="mx-auto max-w-4xl">
              <p
                className={`text-lg font-light leading-relaxed transition-colors duration-300 md:text-xl ${
                  isDarkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {Array.isArray(description)
                  ? description[0]?.children[0]?.text
                  : description}
              </p>
            </div>
          )}
        </div>

        {/* Category Filter */}
        {dynamicCategories &&
          dynamicCategories.length > 0 && (
            <div className="mb-12 flex flex-wrap justify-center gap-4">
              {/* All Projects Button */}
              <button
                onClick={() => setSelectedCategory("all")}
                className={`rounded-[12px] px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === "all"
                    ? isDarkMode
                      ? "border-blue-400/50 bg-blue-500/20 text-blue-300 shadow-sm shadow-blue-500/25"
                      : "border-blue-300 bg-blue-100 text-blue-700 shadow-sm shadow-blue-500/25"
                    : isDarkMode
                      ? "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                      : "bg-gray-100/50 text-gray-600 hover:bg-gray-200/50"
                }`}
              >
                All Projects
                <span
                  className={`ml-2 rounded-full px-2 py-1 text-xs ${
                    selectedCategory === "all"
                      ? "bg-white/20"
                      : isDarkMode
                        ? "bg-gray-700/50"
                        : "bg-gray-200/50"
                  }`}
                >
                  {projects?.length || 0}
                </span>
              </button>

              {/* Dynamic Category Buttons */}
              {dynamicCategories.map((category, index) => {
                const colors = getCategoryColor(
                  category.name,
                  index
                );
                const isActive =
                  selectedCategory === category.name;

                return (
                  <button
                    key={category.name}
                    onClick={() =>
                      setSelectedCategory(category.name)
                    }
                    className={`flex items-center gap-2 rounded-[12px] border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? `${colors.tabActive} shadow-sm ${colors.shadow}`
                        : `${colors.tabInactive}`
                    }`}
                  >
                    {category.name}
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${
                        isActive
                          ? colors.badgeActive
                          : colors.badge
                      }`}
                    >
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

        {/* Projects Grid */}
        {filteredProjects &&
          filteredProjects.length > 0 && (
            <div className="grid gap-8 lg:grid-cols-1">
              {filteredProjects.map((project, index) => {
                // Debug image data
                console.log(
                  `Project ${index} image data:`,
                  project.image
                );

                const imageUrl = project.image;

                return (
                  <div
                    key={project.id || index}
                    className={`group relative rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                      isDarkMode
                        ? "border-gray-700/30 bg-gray-900/20 hover:border-gray-600/50 hover:bg-gray-800/30"
                        : "border-gray-300/30 bg-white/20 hover:border-gray-400/50 hover:bg-white/40"
                    }`}
                  >
                    {/* Project Header with Image */}
                    <div className="mb-6">
                      <div className="mb-4 flex flex-wrap items-start gap-4">
                        {/* Project Image - Compact */}
                        {imageUrl && (
                          <div className="flex-shrink-0">
                            <div className="h-20 w-full overflow-hidden rounded-lg">
                              <img
                                src={imageUrl}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                onError={(e) => {
                                  console.log(
                                    "Image failed to load:",
                                    imageUrl
                                  );
                                  e.target.style.display =
                                    "none";
                                }}
                              />
                            </div>
                          </div>
                        )}

                        {/* Project Title and Info */}
                        <div className="min-w-0 flex-1">
                          <h3
                            className={`mb-2 text-2xl font-bold transition-colors duration-300 ${
                              isDarkMode
                                ? "text-white"
                                : "text-gray-900"
                            }`}
                          >
                            {project.title}
                          </h3>

                          {/* Project Badges */}
                          <div className="flex flex-wrap gap-2">
                            {project.category && (
                              <span
                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                                  isDarkMode
                                    ? "bg-blue-500/20 text-blue-400"
                                    : "bg-blue-100 text-blue-600"
                                }`}
                              >
                                <Building className="mr-1 h-3 w-3" />
                                {project.category}
                              </span>
                            )}

                            {project.duration && (
                              <span
                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                                  isDarkMode
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-green-100 text-green-600"
                                }`}
                              >
                                <Calendar className="mr-1 h-3 w-3" />
                                {project.duration}
                              </span>
                            )}

                            {project.teamSize && (
                              <span
                                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                                  isDarkMode
                                    ? "bg-purple-500/20 text-purple-400"
                                    : "bg-purple-100 text-purple-600"
                                }`}
                              >
                                <Users className="mr-1 h-3 w-3" />
                                {project.teamSize}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Project Description */}
                      <p
                        className={`text-base leading-relaxed transition-colors duration-300 ${
                          isDarkMode
                            ? "text-gray-300"
                            : "text-gray-600"
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies Used */}
                    {project.technologies &&
                      project.technologies.length > 0 && (
                        <div className="mb-6">
                          <h4
                            className={`mb-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                              isDarkMode
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map(
                              (tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className={`rounded-lg px-3 py-1 text-sm font-medium transition-colors duration-300 ${
                                    isDarkMode
                                      ? "bg-gray-800/50 text-gray-300"
                                      : "bg-gray-200/50 text-gray-700"
                                  }`}
                                >
                                  {tech}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      )}

                    {/* Key Results */}
                    {project.keyResults &&
                      project.keyResults.length > 0 && (
                        <div className="mb-6">
                          <h4
                            className={`mb-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-300 ${
                              isDarkMode
                                ? "text-gray-400"
                                : "text-gray-600"
                            }`}
                          >
                            Key Results
                          </h4>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {project.keyResults.map(
                              (result, resultIndex) => (
                                <div
                                  key={resultIndex}
                                  className="flex items-start gap-3"
                                >
                                  <CheckCircle
                                    className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                                      isDarkMode
                                        ? "text-green-400"
                                        : "text-green-600"
                                    }`}
                                  />
                                  <div>
                                    <p
                                      className={`text-sm font-medium transition-colors duration-300 ${
                                        isDarkMode
                                          ? "text-white"
                                          : "text-gray-900"
                                      }`}
                                    >
                                      {result.title}
                                    </p>
                                    {result.description && (
                                      <p
                                        className={`text-xs transition-colors duration-300 ${
                                          isDarkMode
                                            ? "text-gray-400"
                                            : "text-gray-600"
                                        }`}
                                      >
                                        {result.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                    {/* Project Status & Completion */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        {project.statuss && (
                          <span
                            className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                              project.statuss ===
                              "completed"
                                ? isDarkMode
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-green-100 text-green-600"
                                : project.statuss ===
                                    "ongoing"
                                  ? isDarkMode
                                    ? "bg-yellow-500/20 text-yellow-400"
                                    : "bg-yellow-100 text-yellow-600"
                                  : isDarkMode
                                    ? "bg-gray-500/20 text-gray-400"
                                    : "bg-gray-100 text-gray-600"
                            }`}
                          >
                            {project.statuss ===
                              "completed" && "Completed"}
                            {project.statuss ===
                              "ongoing" && "Ongoing"}
                            {project.statuss ===
                              "planned" && "Planned"}
                          </span>
                        )}
                      </div>

                      {project.completedDate &&
                        project.statuss === "completed" && (
                          <span
                            className={`text-sm font-medium ${
                              isDarkMode
                                ? "text-green-400"
                                : "text-green-600"
                            }`}
                          >
                            Completed{" "}
                            {project.completedDate}
                          </span>
                        )}
                    </div>

                    {/* Hover effect overlay */}
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                        isDarkMode
                          ? "bg-gradient-to-br from-blue-600/5 to-purple-600/5"
                          : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          )}

        {/* Empty state when no projects match filter */}
        {filteredProjects &&
          filteredProjects.length === 0 && (
            <div className="py-12 text-center">
              <p
                className={`text-lg ${
                  isDarkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                No projects found for the selected category.
              </p>
            </div>
          )}
      </div>
    </section>
  );
};

export default PortfolioSection;
