import React from "react";
import Marquee from "react-fast-marquee";

const Partners = ({ partners, partnersLoading }) => {
  return (
    <section className="transition-colors duration-300">
      {/* <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> */}
      <div className="mx-auto max-w-7xl">
        {partnersLoading ? (
          // Loading State
          <div className="py-12 text-center">
            <div className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-gray-500 transition-colors duration-300 dark:text-gray-400">
              <svg
                className="-ml-1 mr-3 h-5 w-5 animate-spin text-gray-500 transition-colors duration-300 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Loading partners...
            </div>
          </div>
        ) : partners.length === 0 ? (
          // Empty State
          <div className="py-12 text-center">
            <div className="text-gray-500 transition-colors duration-300 dark:text-gray-400">
              <svg
                className="mx-auto h-12 w-12 text-gray-300 transition-colors duration-300 dark:text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <p className="mt-2 transition-colors duration-300">
                No partners available at the moment.
              </p>
            </div>
          </div>
        ) : (
          // Single Row Marquee - Very Slow
          <div className="py-4">
            <Marquee
              gradient={false}
              speed={15}
              pauseOnHover={true}
            >
              {partners.map((partner, index) => (
                <PartnerLogo
                  key={`${partner.id}-${index}`}
                  partner={partner}
                />
              ))}
            </Marquee>
          </div>
        )}
      </div>
    </section>
  );
};

const PartnerLogo = ({ partner }) => {
  const { name, url, image } = partner;
  const imageUrl = image?.url
    ? `http://localhost:1337${image.url}`
    : null;
  const imageAlt =
    image?.alternativeText || name || "Partner logo";
  const hasValidUrl =
    url && url.trim() !== "" && url !== null;

  const LogoContent = () => (
    <div className="group mx-6 flex items-center justify-center">
      <div className="relative flex h-16 w-36 cursor-pointer items-center justify-center rounded-[10px] bg-transparent p-4 transition-all duration-300">
        {/* <div className="relative flex h-16 w-36 cursor-pointer items-center justify-center rounded-[10px] bg-transparent p-4 backdrop-blur-sm transition-all duration-300 dark:border dark:border-white/20 dark:bg-white/15 dark:backdrop-blur-sm"> */}
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="max-h-full max-w-full object-contain transition-all duration-300"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : (
            <div className="text-center">
              <div className="text-xs font-medium text-gray-600 dark:text-gray-300">
                {name}
              </div>
            </div>
          )}

          <div
            className="flex h-10 w-16 items-center justify-center rounded-[10px] border border-white/50 bg-white/40 backdrop-blur-sm dark:border-white/30 dark:bg-white/30"
            style={{
              display: imageUrl ? "none" : "flex",
            }}
          >
            <svg
              className="h-6 w-6 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        {/* Soft shadow behind card */}
        <div className="absolute inset-0 -z-10 scale-95 transform rounded-[10px] bg-white/20 opacity-0 blur-md transition-all duration-300 dark:bg-white/20"></div>
      </div>
    </div>
  );

  if (hasValidUrl) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={`Visit ${name} website`}
        className="inline-block"
      >
        <LogoContent />
      </a>
    );
  }

  return <LogoContent />;
};

export default Partners;
