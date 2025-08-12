// import React, { useState } from "react";
// import {
//   Building2,
//   Network,
//   Mail,
//   Server,
// } from "lucide-react";

// const PortfolioSection = ({ data, isDarkMode }) => {
//   const [activeTab, setActiveTab] = useState(0);

//   const defaultData = {
//     title: "Our Portfolio",
//     subtitle: "Proven Track Record",
//     description: [
//       {
//         children: [
//           {
//             text: "Dengan pengalaman lebih dari satu dekade, PT Asta telah berhasil menyelesaikan berbagai proyek IT infrastructure untuk klien dari berbagai sektor industri.",
//           },
//         ],
//       },
//     ],
//     portfolioSectors: [
//       {
//         id: 1,
//         title:
//           "Consultant Infrastructure Area and Head Office",
//         icon: "building",
//         color: "blue",
//         companies: [
//           {
//             name: "PT. Exspan Petrogas Intranusa",
//             industry: "Manufacturing",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText: "Global Manufacturing Logo",
//             },
//             completionYear: "2024",
//           },
//         ],
//       },
//       {
//         id: 2,
//         title: "Infrastructure Site Area and Head Office",
//         icon: "network",
//         color: "green",
//         companies: [
//           {
//             name: "Alfikom Multi System",
//             industry: "Industrial",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText: "Energy Sustainable Logo",
//             },
//             completionYear: "2024",
//           },
//           {
//             name: "PT. Jada Energy Nusantara",
//             industry: "Energy",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText: "Mining Operations Logo",
//             },
//             completionYear: "2023",
//           },
//         ],
//       },
//       {
//         id: 3,
//         title: "Mail System & Anti Spam",
//         icon: "mail",
//         color: "purple",
//         companies: [
//           {
//             name: "Klinik Metacate",
//             industry: "Healthcare",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText: "Financial Services Logo",
//             },
//             completionYear: "2024",
//           },
//           {
//             name: "Medco Agro",
//             industry: "Agriculture",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText: "Healthcare Solutions Logo",
//             },
//             completionYear: "2023",
//           },
//           {
//             name: "Multifab",
//             industry: "Manufacturing",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText: "Education Excellence Logo",
//             },
//             completionYear: "2023",
//           },
//         ],
//       },
//       {
//         id: 4,
//         title: "Infrastructure Head Office",
//         icon: "server",
//         color: "orange",
//         companies: [
//           {
//             name: "Mall Pondok Indah",
//             industry: "Retail",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText: "Retail Chain Logo",
//             },
//             completionYear: "2024",
//           },
//           {
//             name: "Axion Healthindo",
//             industry: "Healthcare",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText: "Logistics Express Logo",
//             },
//             completionYear: "2024",
//           },
//           {
//             name: "Berita Jakarta",
//             industry: "Media",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText: "Automotive Parts Logo",
//             },
//             completionYear: "2023",
//           },
//           {
//             name: "SII",
//             industry: "Industry",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText:
//                 "Pharmaceutical Research Logo",
//             },
//             completionYear: "2023",
//           },
//           {
//             name: "TVRI Lampung",
//             industry: "Media",
//             logo: {
//               url: "/api/placeholder/120/60",
//               alternativeText: "Technology Startup Logo",
//             },
//             completionYear: "2023",
//           },
//         ],
//       },
//     ],
//   };

//   const portfolioData = data || defaultData;
//   const { title, subtitle, description, portfolioSectors } =
//     portfolioData;

//   // Icon mapping
//   const getIcon = (iconName) => {
//     const icons = {
//       building: Building2,
//       network: Network,
//       mail: Mail,
//       server: Server,
//     };
//     return icons[iconName] || Building2;
//   };

//   // Color mapping
//   const getColors = (color, isDarkMode) => {
//     const colorMap = {
//       blue: {
//         tabActive: isDarkMode
//           ? "bg-blue-500/20 text-blue-300 border-blue-400/50"
//           : "bg-blue-100 text-blue-700 border-blue-300",
//       },
//       green: {
//         tabActive: isDarkMode
//           ? "bg-green-500/20 text-green-300 border-green-400/50"
//           : "bg-green-100 text-green-700 border-green-300",
//       },
//       purple: {
//         tabActive: isDarkMode
//           ? "bg-purple-500/20 text-purple-300 border-purple-400/50"
//           : "bg-purple-100 text-purple-700 border-purple-300",
//       },
//       orange: {
//         tabActive: isDarkMode
//           ? "bg-orange-500/20 text-orange-300 border-orange-400/50"
//           : "bg-orange-100 text-orange-700 border-orange-300",
//       },
//     };

//     return colorMap[color] || colorMap.blue;
//   };

//   const activeSector = portfolioSectors[activeTab];
//   // const colors = getColors(activeSector.color, isDarkMode);

//   const getGridCols = (count) => {
//     if (count === 1) return "grid-cols-1 max-w-md mx-auto";
//     if (count === 2) return "grid-cols-1 sm:grid-cols-2";
//     if (count === 3)
//       return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
//     if (count === 4)
//       return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
//     return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3";
//   };

//   return (
//     <section
//       id="portfolio"
//       className="relative py-10 transition-colors duration-500"
//     >
//       <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="mb-16 text-center lg:mb-20">
//           {subtitle && (
//             <div className="mb-4 md:mb-6">
//               <span
//                 className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium tracking-wide uppercase backdrop-blur-sm transition-colors duration-300 sm:px-4 sm:py-2 sm:text-sm ${
//                   isDarkMode
//                     ? "border-blue-500/30 bg-gradient-to-r from-blue-500/20 via-orange-500/20 to-yellow-500/20 text-blue-200"
//                     : "border-blue-300/40 bg-gradient-to-r from-blue-100/80 via-orange-100/60 to-yellow-100/80 text-blue-700"
//                 }`}
//               >
//                 <span
//                   className={`mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full sm:mr-2 sm:h-2 sm:w-2 ${
//                     isDarkMode
//                       ? "bg-blue-400"
//                       : "bg-blue-500"
//                   }`}
//                 ></span>
//                 {subtitle}
//               </span>
//             </div>
//           )}

//           <h2
//             className={`font-dosis mb-6 text-3xl leading-tight font-bold transition-all duration-300 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl ${
//               isDarkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             {title}
//           </h2>

//           {/* Glowing underline */}
//           <div
//             className={`mx-auto mb-8 h-1 w-24 rounded-full shadow-lg transition-all duration-300 ${
//               isDarkMode
//                 ? "bg-gradient-to-r from-blue-500 via-orange-500 to-yellow-500 shadow-blue-500/50"
//                 : "bg-gradient-to-r from-blue-600 via-orange-600 to-yellow-600 shadow-blue-400/40"
//             }`}
//           ></div>

//           {Array.isArray(description) && (
//             <div className="mx-auto max-w-4xl">
//               {description.map((block, index) => (
//                 <p
//                   key={index}
//                   className={`text-lg leading-relaxed font-light transition-colors duration-300 md:text-xl ${
//                     isDarkMode
//                       ? "text-gray-300"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   {block.children
//                     ?.map((child) => child.text)
//                     .join("")}
//                 </p>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Portfolio Tabs */}
//         <div className="mb-12">
//           <div className="flex flex-wrap justify-center gap-4">
//             {portfolioSectors.map((sector, index) => {
//               const IconComponent = getIcon(sector.icon);
//               const sectorColors = getColors(
//                 sector.color,
//                 isDarkMode
//               );
//               const isActive = activeTab === index;

//               return (
//                 <button
//                   key={sector.id}
//                   onClick={() => setActiveTab(index)}
//                   className={`group flex items-center space-x-3 rounded-xl border px-6 py-3 transition-all duration-300 ${
//                     isActive
//                       ? sectorColors.tabActive
//                       : isDarkMode
//                         ? "border-gray-700/30 bg-gray-900/20 text-gray-300 hover:border-gray-600/50 hover:bg-gray-800/30"
//                         : "border-gray-300/30 bg-white/20 text-gray-700 hover:border-gray-400/50 hover:bg-white/40"
//                   }`}
//                 >
//                   <IconComponent size={20} />
//                   <span className="text-sm font-medium lg:text-base">
//                     {sector.title}
//                   </span>
//                   <span
//                     className={`rounded-full px-2 py-1 text-xs ${
//                       isActive
//                         ? "bg-white/20"
//                         : "bg-gray-500/20"
//                     }`}
//                   >
//                     {sector.companies.length}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* Active Sector Companies Grid */}
//         <div
//           className={`grid gap-8 ${getGridCols(activeSector.companies.length)}`}
//         >
//           {activeSector.companies.map((company, index) => (
//             <div
//               key={index}
//               className={`group rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${
//                 isDarkMode
//                   ? "border-gray-700/30 bg-gray-900/20 hover:border-gray-600/50"
//                   : "border-gray-300/30 bg-white/20 hover:border-gray-400/50"
//               }`}
//             >
//               {/* Company Logo */}
//               <div
//                 className={`mb-6 flex h-20 w-full items-center justify-center rounded-lg border p-4 ${
//                   isDarkMode
//                     ? "border-gray-700/30 bg-gray-800/20"
//                     : "border-gray-300/30 bg-white/50"
//                 }`}
//               >
//                 {company.logo?.url ? (
//                   <img
//                     src={company.logo.url}
//                     alt={
//                       company.logo.alternativeText ||
//                       company.name
//                     }
//                     className={`max-h-full max-w-full object-contain transition-all duration-300 ${
//                       isDarkMode
//                         ? "opacity-80 brightness-0 invert filter"
//                         : "opacity-70"
//                     }`}
//                   />
//                 ) : (
//                   <div
//                     className={`text-center transition-colors duration-300 ${
//                       isDarkMode
//                         ? "text-gray-400"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     <div className="text-sm font-medium">
//                       {company.name
//                         .split(" ")
//                         .slice(0, 3)
//                         .join(" ")}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Company Info */}
//               <h3
//                 className={`mb-2 text-xl font-bold transition-colors duration-300 ${
//                   isDarkMode
//                     ? "text-white"
//                     : "text-gray-900"
//                 }`}
//               >
//                 {company.name}
//               </h3>

//               <div className="flex items-center justify-between">
//                 <span
//                   className={`text-sm transition-colors duration-300 ${
//                     isDarkMode
//                       ? "text-gray-400"
//                       : "text-gray-600"
//                   }`}
//                 >
//                   {company.industry}
//                 </span>

//                 <span
//                   className={`rounded-full px-3 py-1 text-xs font-medium ${
//                     isDarkMode
//                       ? "bg-green-500/20 text-green-400"
//                       : "bg-green-100 text-green-700"
//                   }`}
//                 >
//                   Completed {company.completionYear}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;

import React, { useState } from "react";
import {
  Building2,
  Network,
  Mail,
  Server,
  // ChevronRight,
  Users,
  Calendar,
  CheckCircle,
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
            text: "Dengan pengalaman lebih dari satu dekade, PT Asta telah berhasil menyelesaikan berbagai proyek IT infrastructure untuk klien dari berbagai sektor industri. Berikut adalah highlight dari portfolio project kami yang telah memberikan dampak signifikan bagi operasional bisnis klien.",
          },
        ],
      },
    ],
    portfolioSectors: [
      {
        id: 1,
        title:
          "Consultant Infrastructure Area and Head Office",
        description:
          "Konsultasi dan implementasi infrastruktur IT komprehensif untuk area operasional dan kantor pusat",
        icon: "building",
        projectCount: 1,
        color: "blue",
        projects: [
          {
            clientName:
              "PT. Global Manufacturing Indonesia",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Global Manufacturing Indonesia Logo",
            },
            industry: "Manufacturing",
            duration: "8 Months",
            teamSize: "12 Specialists",
            completionDate: "March 2024",
            description:
              "Comprehensive IT infrastructure consulting and implementation for manufacturing facility and head office integration.",
            technologies: [
              "VMware vSphere",
              "Cisco Networking",
              "Microsoft Active Directory",
              "Backup Solutions",
            ],
            results: [
              "99.9% system uptime achieved",
              "40% improvement in network performance",
              "Centralized management system implemented",
              "Disaster recovery plan established",
            ],
          },
        ],
      },
      {
        id: 2,
        title: "Infrastructure Site Area and Head Office",
        description:
          "Pengembangan dan maintenance infrastruktur jaringan untuk integrasi site area dengan kantor pusat",
        icon: "network",
        projectCount: 2,
        color: "green",
        projects: [
          {
            clientName: "PT. Energy Sustainable Indonesia",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Energy Sustainable Indonesia Logo",
            },
            industry: "Energy",
            duration: "6 Months",
            teamSize: "8 Engineers",
            completionDate: "January 2024",
            description:
              "Infrastructure development connecting multiple site locations with centralized head office management.",
            technologies: [
              "SD-WAN",
              "Fiber Optic Network",
              "MPLS",
              "Network Security",
            ],
            results: [
              "50% reduction in network latency",
              "Seamless connectivity across 15 sites",
              "Enhanced security protocols implemented",
              "Real-time monitoring system deployed",
            ],
          },
          {
            clientName: "PT. Mining Operations Nusantara",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Mining Operations Nusantara Logo",
            },
            industry: "Mining",
            duration: "10 Months",
            teamSize: "15 Specialists",
            completionDate: "November 2023",
            description:
              "Complete infrastructure overhaul for mining operations connecting remote sites to head office.",
            technologies: [
              "Satellite Communication",
              "Wireless Network",
              "Edge Computing",
              "IoT Integration",
            ],
            results: [
              "24/7 operational connectivity achieved",
              "Real-time data transmission implemented",
              "30% increase in operational efficiency",
              "Robust backup communication systems",
            ],
          },
        ],
      },
      {
        id: 3,
        title: "Mail System & Anti Spam",
        description:
          "Implementasi sistem email enterprise dan solusi keamanan anti-spam untuk perlindungan komunikasi bisnis",
        icon: "mail",
        projectCount: 3,
        color: "purple",
        projects: [
          {
            clientName: "PT. Financial Services Mandiri",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Financial Services Mandiri Logo",
            },
            industry: "Financial Services",
            duration: "4 Months",
            teamSize: "6 Specialists",
            completionDate: "February 2024",
            description:
              "Enterprise email system implementation with advanced anti-spam and security features for financial institution.",
            technologies: [
              "Microsoft Exchange",
              "Barracuda Email Security",
              "Office 365",
              "Multi-Factor Authentication",
            ],
            results: [
              "99.5% spam filtering accuracy",
              "Zero security breaches recorded",
              "500+ user accounts migrated seamlessly",
              "Compliance with financial regulations achieved",
            ],
          },
          {
            clientName:
              "PT. Healthcare Solutions Indonesia",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Healthcare Solutions Indonesia Logo",
            },
            industry: "Healthcare",
            duration: "3 Months",
            teamSize: "5 Engineers",
            completionDate: "December 2023",
            description:
              "Secure email communication system for healthcare provider with HIPAA compliance features.",
            technologies: [
              "Google Workspace",
              "Proofpoint Email Protection",
              "Encryption Services",
              "Backup Solutions",
            ],
            results: [
              "HIPAA compliance achieved",
              "End-to-end email encryption implemented",
              "95% reduction in spam emails",
              "Automated backup and archiving system",
            ],
          },
          {
            clientName:
              "PT. Education Excellence Foundation",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Education Excellence Foundation Logo",
            },
            industry: "Education",
            duration: "2 Months",
            teamSize: "4 Specialists",
            completionDate: "October 2023",
            description:
              "Educational institution email system with student and staff communication management.",
            technologies: [
              "Office 365 Education",
              "Microsoft Defender",
              "SharePoint Integration",
              "Teams Integration",
            ],
            results: [
              "1000+ student accounts created",
              "Integrated learning management system",
              "Enhanced collaboration tools deployed",
              "Centralized communication platform established",
            ],
          },
        ],
      },
      {
        id: 4,
        title: "Infrastructure Head Office",
        description:
          "Pengembangan dan upgrade infrastruktur IT kantor pusat untuk mendukung operasional bisnis yang efisien",
        icon: "server",
        projectCount: 5,
        color: "orange",
        projects: [
          {
            clientName: "PT. Retail Chain Indonesia",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Retail Chain Indonesia Logo",
            },
            industry: "Retail",
            duration: "5 Months",
            teamSize: "10 Engineers",
            completionDate: "March 2024",
            description:
              "Complete head office infrastructure upgrade supporting nationwide retail operations.",
            technologies: [
              "Hyper-V Virtualization",
              "SAN Storage",
              "Load Balancers",
              "Monitoring Systems",
            ],
            results: [
              "50% improvement in system performance",
              "Centralized inventory management system",
              "Real-time reporting capabilities",
              "Scalable infrastructure for expansion",
            ],
          },
          {
            clientName: "PT. Logistics Express Nusantara",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Logistics Express Nusantara Logo",
            },
            industry: "Logistics",
            duration: "6 Months",
            teamSize: "12 Specialists",
            completionDate: "January 2024",
            description:
              "Infrastructure modernization for logistics company head office with tracking system integration.",
            technologies: [
              "Cloud Infrastructure",
              "API Gateway",
              "Database Clustering",
              "Security Appliances",
            ],
            results: [
              "Real-time package tracking implemented",
              "99.8% system availability achieved",
              "Integration with 50+ delivery partners",
              "Automated reporting and analytics",
            ],
          },
          {
            clientName:
              "PT. Automotive Parts Manufacturing",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Automotive Parts Manufacturing Logo",
            },
            industry: "Automotive",
            duration: "7 Months",
            teamSize: "14 Engineers",
            completionDate: "November 2023",
            description:
              "Head office infrastructure supporting automotive manufacturing and supply chain management.",
            technologies: [
              "ERP Integration",
              "Network Redundancy",
              "Backup Systems",
              "Security Infrastructure",
            ],
            results: [
              "ERP system integration completed",
              "Zero downtime during migration",
              "Supply chain visibility improved",
              "Disaster recovery plan implemented",
            ],
          },
          {
            clientName: "PT. Pharmaceutical Research Indo",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Pharmaceutical Research Indo Logo",
            },
            industry: "Pharmaceutical",
            duration: "4 Months",
            teamSize: "8 Specialists",
            completionDate: "September 2023",
            description:
              "Secure infrastructure for pharmaceutical research facility with compliance requirements.",
            technologies: [
              "Secure Network Design",
              "Data Encryption",
              "Access Control",
              "Audit Systems",
            ],
            results: [
              "FDA compliance standards met",
              "Secure research data management",
              "Role-based access control implemented",
              "Comprehensive audit trail system",
            ],
          },
          {
            clientName:
              "PT. Technology Startup Accelerator",
            clientLogo: {
              url: "/api/placeholder/120/60",
              alternativeText:
                "PT. Technology Startup Accelerator Logo",
            },
            industry: "Technology",
            duration: "3 Months",
            teamSize: "6 Engineers",
            completionDate: "August 2023",
            description:
              "Modern infrastructure setup for technology startup accelerator program management.",
            technologies: [
              "Cloud-Native Architecture",
              "DevOps Pipeline",
              "Collaboration Tools",
              "Scalable Infrastructure",
            ],
            results: [
              "100% cloud-based infrastructure",
              "Automated deployment pipeline",
              "Support for 20+ startup companies",
              "Flexible scaling capabilities",
            ],
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
        tab: isDarkMode ? "text-blue-400" : "text-blue-600",
        tabActive: isDarkMode
          ? "bg-blue-500/20 text-blue-300 border-blue-400/50"
          : "bg-blue-100 text-blue-700 border-blue-300",
        icon: isDarkMode
          ? "bg-blue-500/20 text-blue-400"
          : "bg-blue-100 text-blue-600",
        accent: isDarkMode
          ? "text-blue-400"
          : "text-blue-600",
      },
      green: {
        tab: isDarkMode
          ? "text-green-400"
          : "text-green-600",
        tabActive: isDarkMode
          ? "bg-green-500/20 text-green-300 border-green-400/50"
          : "bg-green-100 text-green-700 border-green-300",
        icon: isDarkMode
          ? "bg-green-500/20 text-green-400"
          : "bg-green-100 text-green-600",
        accent: isDarkMode
          ? "text-green-400"
          : "text-green-600",
      },
      purple: {
        tab: isDarkMode
          ? "text-purple-400"
          : "text-purple-600",
        tabActive: isDarkMode
          ? "bg-purple-500/20 text-purple-300 border-purple-400/50"
          : "bg-purple-100 text-purple-700 border-purple-300",
        icon: isDarkMode
          ? "bg-purple-500/20 text-purple-400"
          : "bg-purple-100 text-purple-600",
        accent: isDarkMode
          ? "text-purple-400"
          : "text-purple-600",
      },
      orange: {
        tab: isDarkMode
          ? "text-orange-400"
          : "text-orange-600",
        tabActive: isDarkMode
          ? "bg-orange-500/20 text-orange-300 border-orange-400/50"
          : "bg-orange-100 text-orange-700 border-orange-300",
        icon: isDarkMode
          ? "bg-orange-500/20 text-orange-400"
          : "bg-orange-100 text-orange-600",
        accent: isDarkMode
          ? "text-orange-400"
          : "text-orange-600",
      },
    };

    return colorMap[color] || colorMap.blue;
  };

  const activeSector = portfolioSectors[activeTab];
  const colors = getColors(activeSector.color, isDarkMode);

  return (
    <section className="relative py-20 transition-colors duration-500 lg:py-32">
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

          {Array.isArray(description) && (
            <div className="mx-auto max-w-4xl">
              {description.map((block, index) => (
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
                    {sector.projectCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Sector Content */}
        <div className="space-y-8">
          {activeSector.projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                isDarkMode
                  ? "border-gray-700/30 bg-gray-900/20 hover:border-gray-600/50"
                  : "border-gray-300/30 bg-white/20 hover:border-gray-400/50"
              }`}
            >
              {/* Project Header */}
              <div className="mb-6 flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex flex-1 items-start space-x-6">
                  {/* Client Logo */}
                  <div
                    className={`flex h-12 w-24 flex-shrink-0 items-center justify-center rounded-lg border p-2 lg:h-16 lg:w-32 ${
                      isDarkMode
                        ? "border-gray-700/30 bg-gray-800/20"
                        : "border-gray-300/30 bg-white/50"
                    }`}
                  >
                    {project.clientLogo?.url ? (
                      <img
                        src={project.clientLogo.url}
                        alt={
                          project.clientLogo
                            .alternativeText ||
                          project.clientName
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
                        <div className="text-xs font-medium">
                          {project.clientName
                            .split(" ")
                            .slice(0, 2)
                            .join(" ")}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="flex-1">
                    <h3
                      className={`mb-2 text-xl font-bold transition-colors duration-300 lg:text-2xl ${
                        isDarkMode
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {project.clientName}
                    </h3>
                    <p
                      className={`mb-4 text-base transition-colors duration-300 lg:text-lg ${
                        isDarkMode
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-4 lg:ml-8 lg:mt-0">
                  <div className="flex items-center space-x-2">
                    <Building2
                      size={16}
                      className={colors.accent}
                    />
                    <span
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {project.industry}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar
                      size={16}
                      className={colors.accent}
                    />
                    <span
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {project.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users
                      size={16}
                      className={colors.accent}
                    />
                    <span
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {project.teamSize}
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4
                  className={`mb-3 text-lg font-semibold ${
                    isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(
                    (tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`rounded-full border px-3 py-1 text-sm ${
                          isDarkMode
                            ? "border-gray-600/30 bg-gray-800/50 text-gray-300"
                            : "border-gray-300/50 bg-gray-100/80 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Results */}
              <div>
                <h4
                  className={`mb-3 text-lg font-semibold ${
                    isDarkMode
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  Key Results
                </h4>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {project.results.map(
                    (result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle
                          size={20}
                          className={`${colors.accent} mt-0.5 flex-shrink-0`}
                        />
                        <span
                          className={`text-sm ${
                            isDarkMode
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          {result}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Completion Badge */}
              <div className="mt-6 flex justify-end">
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${
                    isDarkMode
                      ? "bg-green-500/20 text-green-400"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  <CheckCircle size={16} className="mr-2" />
                  Completed {project.completionDate}
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
