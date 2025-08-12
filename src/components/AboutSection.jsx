import {
  CheckCircle,
  Users,
  Award,
  Target,
  Eye,
  Compass,
  Heart,
  Handshake,
} from "lucide-react";

const AboutSection = ({ data, isDarkMode }) => {
  const defaultData = {
    title: "About Our Company",
    subtitle: "Who We Are",
    description: [
      {
        children: [
          {
            text: "PT Asta Lintas Indonesia Solution adalah perusahaan one stop IT solution terpercaya di Indonesia. Perkembangan teknologi dan digitalisasi yang semakin kompleks mendorong kami untuk terus berinovasi guna memberikan solusi teknologi informasi yang inklusif.",
          },
        ],
      },
    ],
    vision: {
      title: "Our Vision",
      description:
        "Menjadi salah satu perusahaan konsultan IT, Komunikasi dan system integrator teknologi informasi yang termuka dan profitable di Indonesia",
      icon: "eye",
    },
    mission: {
      title: "Our Mission",
      description:
        "Menjadi perusahaan penyedia jasa teknologi informasi terkemuka di Indonesia untuk berkontribusi bagi kemajuan bangsa",
      icon: "compass",
    },
    commitments: [
      {
        title: "Innovation Excellence",
        description:
          "Inovasi adalah bagian dari solusi kami Merupakan nilai solusi kami untuk menyediakan produk dan layanan dengan teknologi terkini bagi klien kami",
        icon: "award",
      },
      {
        title: "Customer Satisfaction",
        description:
          "Produk kami akan terus berevolusi bersama pertumbuhan bisnis Anda, memastikan teknologi yang kami sediakan selalu menjadi competitive edge di industri Anda.",
        icon: "heart",
      },
      {
        title: "Professional Partnership",
        description:
          "Kami, memahami bahwa setiap bisnis memiliki kebutuhan unik. Itulah mengapa solusi IT kami tidak hanya menjadi plug-and-play, tapi must-have infrastructure yang disesuaikan dengan DNA perusahaan Anda.",
        icon: "handshake",
      },
    ],
  };

  const aboutData = data || defaultData;
  const {
    title,
    subtitle,
    description,
    vision,
    mission,
    commitments,
  } = aboutData;

  // Icon mapping
  const getIcon = (iconName) => {
    const icons = {
      users: Users,
      award: Award,
      target: Target,
      check: CheckCircle,
      eye: Eye,
      compass: Compass,
      heart: Heart,
      handshake: Handshake,
    };
    return icons[iconName] || CheckCircle;
  };

  return (
    <section
      id="about"
      className="relative py-20 transition-colors duration-500"
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
            <div className="mx-auto max-w-3xl">
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

        {/* Vision & Mission Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Vision */}
            {vision && (
              <div
                className={`group cursor-pointer rounded-2xl border p-8 text-center backdrop-blur-sm transition-all duration-300 hover:shadow-md ${
                  isDarkMode
                    ? "border-gray-700/30 bg-gray-900/20 hover:border-gray-600/50 hover:bg-gray-800/30"
                    : "border-gray-300/30 bg-white/20 hover:border-gray-400/50 hover:bg-white/40"
                }`}
              >
                <div
                  className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30"
                      : "bg-blue-100/80 text-blue-600 group-hover:bg-blue-200/80"
                  }`}
                >
                  <Eye size={32} />
                </div>

                <h3
                  className={`mb-4 text-2xl font-semibold transition-colors duration-300 ${
                    isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {vision.title}
                </h3>

                <p
                  className={`leading-relaxed transition-colors duration-300 ${
                    isDarkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {vision.description}
                </p>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    isDarkMode
                      ? "bg-gradient-to-br from-blue-600/5 to-cyan-600/5"
                      : "bg-gradient-to-br from-blue-500/5 to-cyan-500/5"
                  }`}
                ></div>
              </div>
            )}

            {mission && (
              <div
                className={`group cursor-pointer rounded-2xl border p-8 text-center backdrop-blur-sm transition-all duration-300 hover:shadow-md ${
                  isDarkMode
                    ? "border-gray-700/30 bg-gray-900/20 hover:border-gray-600/50 hover:bg-gray-800/30"
                    : "border-gray-300/30 bg-white/20 hover:border-gray-400/50 hover:bg-white/40"
                }`}
              >
                {/* Mission Icon */}
                <div
                  className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30"
                      : "bg-orange-100/80 text-orange-600 group-hover:bg-orange-200/80"
                  }`}
                >
                  <Compass size={32} />
                </div>

                <h3
                  className={`mb-4 text-2xl font-semibold transition-colors duration-300 ${
                    isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {mission.title}
                </h3>

                <p
                  className={`leading-relaxed transition-colors duration-300 ${
                    isDarkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {mission.description}
                </p>

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                    isDarkMode
                      ? "bg-gradient-to-br from-orange-600/5 to-yellow-600/5"
                      : "bg-gradient-to-br from-orange-500/5 to-yellow-500/5"
                  }`}
                ></div>
              </div>
            )}
          </div>
        </div>

        {/* Company Commitments Section */}
        {commitments && (
          <div className="mb-20">
            <div className="mb-12 text-center">
              <h3
                className={`font-dosis text-3xl font-bold transition-colors duration-300 sm:text-4xl md:text-5xl ${
                  isDarkMode
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                Our Commitments
              </h3>
              <div
                className={`mx-auto mt-4 h-1 w-20 rounded-full transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-500 to-orange-500"
                    : "bg-gradient-to-r from-blue-600 to-orange-600"
                }`}
              ></div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-3">
              {commitments.map((commitment, index) => {
                const IconComponent = getIcon(
                  commitment.icon
                );
                const colors = [
                  {
                    dark: "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30",
                    light:
                      "bg-blue-100/80 text-blue-600 group-hover:bg-blue-200/80",
                    overlay: {
                      dark: "bg-gradient-to-br from-blue-600/5 to-blue-400/5",
                      light:
                        "bg-gradient-to-br from-blue-500/5 to-blue-300/5",
                    },
                  },
                  {
                    dark: "bg-orange-500/20 text-orange-400 group-hover:bg-orange-500/30",
                    light:
                      "bg-orange-100/80 text-orange-600 group-hover:bg-orange-200/80",
                    overlay: {
                      dark: "bg-gradient-to-br from-orange-600/5 to-orange-400/5",
                      light:
                        "bg-gradient-to-br from-orange-500/5 to-orange-300/5",
                    },
                  },
                  {
                    dark: "bg-yellow-500/20 text-yellow-400 group-hover:bg-yellow-500/30",
                    light:
                      "bg-yellow-100/80 text-yellow-600 group-hover:bg-yellow-200/80",
                    overlay: {
                      dark: "bg-gradient-to-br from-yellow-600/5 to-yellow-400/5",
                      light:
                        "bg-gradient-to-br from-yellow-500/5 to-yellow-300/5",
                    },
                  },
                  {
                    dark: "bg-green-500/20 text-green-400 group-hover:bg-green-500/30",
                    light:
                      "bg-green-100/80 text-green-600 group-hover:bg-green-200/80",
                    overlay: {
                      dark: "bg-gradient-to-br from-green-600/5 to-green-400/5",
                      light:
                        "bg-gradient-to-br from-green-500/5 to-green-300/5",
                    },
                  },
                ];

                const colorSet =
                  colors[index % colors.length];

                return (
                  <div
                    key={index}
                    className={`group relative cursor-pointer rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-md ${
                      isDarkMode
                        ? "border-gray-700/30 bg-gray-900/20 hover:border-gray-600/50 hover:bg-gray-800/30"
                        : "border-gray-300/30 bg-white/20 hover:border-gray-400/50 hover:bg-white/40"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                        isDarkMode
                          ? colorSet.dark
                          : colorSet.light
                      }`}
                    >
                      <IconComponent size={24} />
                    </div>

                    {/* Content */}
                    <h4
                      className={`mb-4 text-xl font-semibold transition-colors duration-300 ${
                        isDarkMode
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {commitment.title}
                    </h4>

                    <p
                      className={`text-sm leading-relaxed transition-colors duration-300 ${
                        isDarkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      {commitment.description}
                    </p>

                    {/* Hover effect overlay */}
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                        isDarkMode
                          ? colorSet.overlay.dark
                          : colorSet.overlay.light
                      }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
