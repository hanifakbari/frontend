import { useState, useEffect } from "react";
import {
  fetchPartners,
  fetchHeroSection,
} from "../utils/api";
import Partners from "./Partners";
import buildingHero from "../assets/images/building-hero.webp";
import buildingHeroLight from "../assets/images/building-hero-light.webp";

const HeroSection = ({ isDarkMode }) => {
  const [heroData, setHeroData] = useState(null);
  const [loadingHero, setLoadingHero] = useState(true);
  const [heroError, setHeroError] = useState(null);
  const [partners, setPartners] = useState([]);
  const [partnersLoading, setPartnersLoading] =
    useState(true);

  // Default fallback data
  const defaultHeroData = {
    title: "Empowering Digital Transformation",
    subtitle: "IT Infrastructure Solutions",
    description:
      "Kami menyediakan solusi infrastruktur IT terdepan untuk mendukung transformasi digital perusahaan Anda dengan teknologi terkini dan layanan profesional terpercaya.",
  };

  const buildingImage = isDarkMode
    ? buildingHero
    : buildingHeroLight;

  useEffect(() => {
    // Ambil Hero Section dengan error handling
    const loadHeroData = async () => {
      try {
        setLoadingHero(true);
        setHeroError(null);

        const data = await fetchHeroSection();

        if (data && typeof data === "object") {
          const hasTitle =
            data.title && data.title.trim() !== "";
          const hasSubtitle =
            data.subtitle && data.subtitle.trim() !== "";
          const hasDescription =
            data.description &&
            data.description.trim() !== "";

          if (hasTitle || hasSubtitle || hasDescription) {
            setHeroData({
              title: data.title || defaultHeroData.title,
              subtitle:
                data.subtitle || defaultHeroData.subtitle,
              description:
                data.description ||
                defaultHeroData.description,
            });
          } else {
            setHeroData(defaultHeroData);
            setHeroError(
              "API connected but no content found - using default"
            );
          }
        } else {
          setHeroData(defaultHeroData);
          setHeroError(
            "No data returned from CMS - using default content"
          );
        }
      } catch (error) {
        console.error(
          "Error fetching hero section:",
          error
        );
        setHeroData(defaultHeroData);
        setHeroError(`API Error: ${error.message}`);
      } finally {
        setLoadingHero(false);
      }
    };

    // Ambil Partners dengan error handling
    const loadPartnersData = async () => {
      try {
        setPartnersLoading(true);
        const data = await fetchPartners();
        setPartners(data || []);
      } catch (error) {
        console.error("Error fetching partners:", error);
        setPartners([]);
      } finally {
        setPartnersLoading(false);
      }
    };

    loadHeroData();
    loadPartnersData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Retry function untuk hero data
  const retryLoadHero = async () => {
    console.log("🔄 Retrying hero data load...");
    try {
      setLoadingHero(true);
      setHeroError(null);

      const data = await fetchHeroSection();
      console.log("📦 Retry - Hero section data:", data);

      if (data && typeof data === "object") {
        const hasTitle =
          data.title && data.title.trim() !== "";
        const hasSubtitle =
          data.subtitle && data.subtitle.trim() !== "";
        const hasDescription =
          data.description &&
          data.description.trim() !== "";

        if (hasTitle || hasSubtitle || hasDescription) {
          console.log(
            "✅ Retry successful - using API data"
          );
          setHeroData({
            title: data.title || defaultHeroData.title,
            subtitle:
              data.subtitle || defaultHeroData.subtitle,
            description:
              data.description ||
              defaultHeroData.description,
          });
        } else {
          console.warn(
            "⚠️ Retry - API data exists but fields are empty"
          );
          setHeroData(defaultHeroData);
          setHeroError(
            "API connected but no content found - using default"
          );
        }
      } else {
        console.warn("❌ Retry - No hero data from API");
        setHeroData(defaultHeroData);
        setHeroError(
          "No data returned from CMS - using default content"
        );
      }
    } catch (error) {
      console.error("❌ Retry error:", error);
      setHeroData(defaultHeroData);
      setHeroError(`API Error: ${error.message}`);
    } finally {
      setLoadingHero(false);
    }
  };

  // Loading state
  if (loadingHero) {
    return (
      <div className={`${isDarkMode ? "dark" : ""}`}>
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
          {/* Background tetap ditampilkan saat loading */}
          <div className="absolute inset-0 hidden lg:flex">
            <div className="w-full transition-all duration-700 lg:w-3/5">
              <div className="absolute inset-0 opacity-30"></div>
            </div>
            <div className="relative lg:block lg:w-2/5">
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
                style={{
                  backgroundImage: `url(${buildingImage})`,
                }}
              ></div>
            </div>
          </div>

          <div className="absolute inset-0 lg:hidden">
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
              style={{
                backgroundImage: `url(${buildingImage})`,
              }}
            ></div>
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-br from-black/70 via-black/50 to-black/70"
                  : "bg-gradient-to-br from-white/70 via-white/50 to-white/70"
              }`}
            ></div>
          </div>

          {/* Loading indicator */}
          <div className="relative z-10 text-center">
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
              Loading content...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Gunakan data yang ada (baik dari API atau fallback)
  const { title, subtitle, description } =
    heroData || defaultHeroData;

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      {/* Error indicator jika ada masalah dengan API */}
      {heroError && (
        <div
          className={`fixed right-4 top-4 z-50 max-w-sm rounded-lg p-3 text-sm ${
            isDarkMode
              ? "border border-yellow-700 bg-yellow-900/80 text-yellow-200"
              : "border border-yellow-300 bg-yellow-100 text-yellow-800"
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs">
              ⚠️ CMS Connection Issue
            </span>
            <button
              onClick={retryLoadHero}
              className="ml-2 text-xs underline hover:no-underline"
              disabled={loadingHero}
            >
              {loadingHero ? "..." : "Retry"}
            </button>
          </div>
          <p className="mt-1 text-xs opacity-75">
            {heroError}
          </p>
        </div>
      )}

      <div className="relative flex min-h-screen items-center justify-center overflow-hidden transition-all duration-700">
        {/* Background Desktop */}
        <div className="absolute inset-0 hidden lg:flex">
          <div className="w-full transition-all duration-700 lg:w-3/5">
            <div className="absolute inset-0 opacity-30"></div>
          </div>
          <div className="relative lg:block lg:w-2/5">
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
              style={{
                backgroundImage: `url(${buildingImage})`,
              }}
            ></div>
          </div>
        </div>

        {/* Background Mobile */}
        <div className="absolute inset-0 lg:hidden">
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-700"
            style={{
              backgroundImage: `url(${buildingImage})`,
            }}
          ></div>
          <div
            className={`absolute inset-0 ${
              isDarkMode
                ? "bg-gradient-to-br from-black/70 via-black/50 to-black/70"
                : "bg-gradient-to-br from-white/70 via-white/50 to-white/70"
            }`}
          ></div>
        </div>

        <section className="relative flex w-full items-center justify-start px-4 pt-28 sm:px-8 lg:px-20">
          <div className="relative z-10 w-full">
            <div className="grid items-center gap-12">
              <div className="space-y-8">
                {subtitle && (
                  <div className="flex justify-start">
                    <span
                      className={`inline-flex items-center rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-500 hover:scale-105 sm:px-6 sm:py-3 sm:text-sm ${
                        isDarkMode
                          ? "border-white/20 bg-white/10 text-gray-200"
                          : "border-gray-300/50 bg-white/60 text-gray-700"
                      }`}
                    >
                      {subtitle}
                    </span>
                  </div>
                )}

                <h1 className="font-dosis text-3xl font-bold leading-tight text-gray-900 transition-all duration-700 dark:text-white sm:text-4xl md:text-5xl lg:w-[70%] lg:text-6xl xl:text-7xl">
                  {title}
                </h1>

                {description && (
                  <p
                    className={`max-w-full text-base font-light leading-relaxed transition-colors duration-700 sm:text-lg lg:max-w-2xl lg:text-xl ${
                      isDarkMode
                        ? "text-gray-300"
                        : "text-[#1b1b1b]"
                    }`}
                  >
                    {description}
                  </p>
                )}
              </div>
            </div>

            {/* Partners Section */}
            <div className="mt-12 flex w-full items-start justify-start lg:mt-20">
              <div className="w-full lg:max-w-4xl">
                <p
                  className={`mb-6 text-center text-xs font-medium uppercase tracking-wide transition-colors duration-300 lg:text-left ${
                    isDarkMode
                      ? "text-gray-400"
                      : "text-[#1b1b1b]"
                  }`}
                >
                  Trusted by Industry Leaders
                </p>
                <Partners
                  partners={partners}
                  partnersLoading={partnersLoading}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
