import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  Heart,
} from "lucide-react";

const Footer = ({ data, isDarkMode = false }) => {
  const defaultData = {
    company: {
      name: "PT ASTA",
      description:
        "Leading IT infrastructure solutions provider in Indonesia. We deliver innovative technology solutions to help businesses grow and succeed in the digital era.",
      logo: "/logo.png",
    },
    contact: {
      email: "info@ptasta.com",
      phone: "+62 21 1234 5678",
      address: "Jakarta Selatan, DKI Jakarta, Indonesia",
    },
    links: {
      services: [
        {
          name: "Cloud Solutions",
          href: "/services/cloud",
        },
        {
          name: "Network Infrastructure",
          href: "/services/network",
        },
        {
          name: "Cybersecurity",
          href: "/services/security",
        },
        {
          name: "IT Consulting",
          href: "/services/consulting",
        },
        {
          name: "Managed Services",
          href: "/services/managed",
        },
      ],
      company: [
        { name: "About Us", href: "/about" },
        // { name: "Our Team", href: "/team" },
        // { name: "Careers", href: "/careers" },
        // { name: "News & Updates", href: "/news" },
        // { name: "Case Studies", href: "/case-studies" },
      ],
      // resources: [
      //   { name: "Documentation", href: "/docs" },
      //   { name: "API Reference", href: "/api" },
      //   { name: "Support Center", href: "/support" },
      //   { name: "Community", href: "/community" },
      //   { name: "Blog", href: "/blog" },
      // ],
      // legal: [
      //   { name: "Privacy Policy", href: "/privacy" },
      //   { name: "Terms of Service", href: "/terms" },
      //   { name: "Cookie Policy", href: "/cookies" },
      //   { name: "GDPR Compliance", href: "/gdpr" },
      // ],
    },
    social: [
      {
        name: "Facebook",
        icon: Facebook,
        href: "https://facebook.com/ptasta",
      },
      {
        name: "Twitter",
        icon: Twitter,
        href: "https://twitter.com/ptasta",
      },
      {
        name: "Instagram",
        icon: Instagram,
        href: "https://instagram.com/ptasta",
      },
      {
        name: "LinkedIn",
        icon: Linkedin,
        href: "https://linkedin.com/company/ptasta",
      },
      {
        name: "GitHub",
        icon: Github,
        href: "https://github.com/ptasta",
      },
    ],
    newsletter: {
      title: "Stay Updated",
      description:
        "Subscribe to our newsletter for the latest updates on IT trends and solutions.",
    },
  };

  const footerData = data || defaultData;
  const { company, contact, links, social, newsletter } =
    footerData;

  const [email, setEmail] = React.useState("");
  const [isSubscribing, setIsSubscribing] =
    React.useState(false);
  const [subscribeSuccess, setSubscribeSuccess] =
    React.useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);

    try {
      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );
      setSubscribeSuccess(true);
      setEmail("");
      setTimeout(() => setSubscribeSuccess(false), 3000);
    } catch (error) {
      console.error(
        "Newsletter subscription error:",
        error
      );
    } finally {
      setIsSubscribing(false);
    }
  };

  const linkSections = [
    { title: "Services", links: links.services },
    { title: "Company", links: links.company },
  ];

  return (
    <footer className="relative bg-white/[1%] py-4 backdrop-blur-lg transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-20 blur-3xl ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        ></div>
        <div
          className={`absolute top-1/2 -left-20 h-60 w-60 rounded-full opacity-10 blur-3xl ${
            isDarkMode
              ? "bg-gradient-to-r from-orange-500 to-yellow-500"
              : "bg-gradient-to-r from-orange-400 to-yellow-400"
          }`}
        ></div>
        <div
          className={`absolute bottom-10 left-1/2 h-32 w-32 rounded-full opacity-15 blur-2xl ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        ></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="mb-4 h-10 w-auto"
                  />
                ) : (
                  <h3
                    className={`mb-4 text-2xl font-bold transition-colors duration-300 ${
                      isDarkMode
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    {company.name}
                  </h3>
                )}

                <p
                  className={`mb-6 text-sm leading-relaxed transition-colors duration-300 ${
                    isDarkMode
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {company.description}
                </p>
              </div>

              {/* Contact Info */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isDarkMode
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <Mail size={16} />
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className={`text-sm transition-colors duration-300 hover:underline ${
                      isDarkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {contact.email}
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isDarkMode
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <Phone size={16} />
                  </div>
                  <a
                    href={`tel:${contact.phone}`}
                    className={`text-sm transition-colors duration-300 hover:underline ${
                      isDarkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {contact.phone}
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <div
                    className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg ${
                      isDarkMode
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    <MapPin size={16} />
                  </div>
                  <span
                    className={`text-sm transition-colors duration-300 ${
                      isDarkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {contact.address}
                  </span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4
                  className={`mb-4 text-sm font-semibold transition-colors duration-300 ${
                    isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  {social.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-300 hover:scale-110 ${
                          isDarkMode
                            ? "border border-gray-700/30 bg-gray-800/50 text-gray-400 hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-orange-500/20 hover:to-yellow-500/20 hover:text-blue-400"
                            : "border border-gray-300/30 bg-white/50 text-gray-600 hover:bg-gradient-to-r hover:from-blue-500 hover:via-orange-500 hover:to-yellow-500 hover:text-white"
                        }`}
                        aria-label={item.name}
                      >
                        <IconComponent size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Newsletter & Links Combined */}
            <div className="space-y-8 lg:col-span-1">
              {/* Links Sections */}
              <div className="grid gap-8 sm:grid-cols-2">
                {linkSections.map((section, index) => (
                  <div key={index}>
                    <h4
                      className={`mb-4 text-sm font-semibold transition-colors duration-300 ${
                        isDarkMode
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {section.title}
                    </h4>
                    <ul className="space-y-2">
                      {section.links.map(
                        (link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.href}
                              className={`group flex items-center text-sm transition-all duration-300 ${
                                isDarkMode
                                  ? "text-gray-400 hover:text-blue-400"
                                  : "text-gray-600 hover:text-blue-600"
                              }`}
                            >
                              <span className="transition-transform duration-300 group-hover:translate-x-1">
                                {link.name}
                              </span>
                              <ArrowRight
                                size={12}
                                className="ml-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                              />
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div
                className={`rounded-2xl border p-6 backdrop-blur-sm transition-all duration-300 ${
                  isDarkMode
                    ? "border-gray-700/30 bg-gray-900/20"
                    : "border-gray-300/30 bg-white/20"
                }`}
              >
                <h4
                  className={`mb-2 text-lg font-semibold transition-colors duration-300 ${
                    isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {newsletter.title}
                </h4>
                <p
                  className={`mb-4 text-sm transition-colors duration-300 ${
                    isDarkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  {newsletter.description}
                </p>

                {subscribeSuccess ? (
                  <div
                    className={`rounded-lg border p-3 text-center ${
                      isDarkMode
                        ? "border-green-500/30 bg-green-500/10 text-green-400"
                        : "border-green-300 bg-green-50 text-green-700"
                    }`}
                  >
                    <span className="text-sm font-medium">
                      Thanks for subscribing!
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={handleNewsletterSubmit}
                    className="space-y-3"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                      placeholder="Your email address"
                      className={`w-full rounded-lg border px-3 py-2 text-sm transition-all duration-300 focus:ring-2 focus:outline-none ${
                        isDarkMode
                          ? "border-gray-600/30 bg-gray-800/50 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-blue-500/50"
                          : "border-gray-300/50 bg-white/50 text-gray-900 placeholder-gray-500 focus:border-blue-500/50 focus:ring-blue-500/50"
                      }`}
                      required
                    />
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className={`flex w-full items-center justify-center space-x-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ${
                        isSubscribing
                          ? "cursor-not-allowed bg-gray-400"
                          : "bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:scale-[1.02] hover:from-blue-500 hover:via-orange-500 hover:to-yellow-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
                      }`}
                    >
                      {isSubscribing ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <Mail size={16} />
                          <span>Subscribe</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t transition-colors duration-300 ${
            isDarkMode
              ? "border-gray-700/30"
              : "border-gray-300/30"
          }`}
        >
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0">
              <div className="flex items-center space-x-2">
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  © 2025 {company.name}. Made with
                </span>
                <Heart
                  size={14}
                  className={`fill-current transition-colors duration-300 ${
                    isDarkMode
                      ? "text-red-400"
                      : "text-red-500"
                  }`}
                />
                <span
                  className={`text-sm transition-colors duration-300 ${
                    isDarkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  in Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
