import {
  Mail,
  Phone,
  MapPin,
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

    newsletter: {
      title: "Stay Updated",
      description:
        "Subscribe to our newsletter for the latest updates on IT trends and solutions.",
    },
  };

  const footerData = data || defaultData;
  const { company, contact, links } = footerData;

  const linkSections = [
    { title: "Services", links: links.services },
    { title: "Company", links: links.company },
  ];

  return (
    <footer className="relative bg-white/[1%] py-4 backdrop-blur-lg transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        ></div>
        <div
          className={`absolute -left-20 top-1/2 h-60 w-60 rounded-full opacity-10 blur-3xl ${
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
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
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
            </div>

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
