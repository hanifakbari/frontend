// Get BASE_URL from environment variable or fallback to localhost for development
const BASE_URL = `${process.env.REACT_APP_STRAPI_URL || "http://localhost:1337"}/api`;
console.log("API Base URL:", BASE_URL);
// Get base URL for images (without /api suffix)
const IMAGE_BASE_URL =
  process.env.REACT_APP_STRAPI_URL ||
  "http://localhost:1337";

/**
 * Fetch home page content with hero section and social links
 */
export const fetchHeroSection = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/hero-section?populate=*`
    );
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(
        `Failed to fetch hero section: ${res.status} ${errText}`
      );
    }
    const data = await res.json();

    const heroData = data.data;
    if (!heroData) return null;

    // Function to extract text from rich text description
    const extractDescriptionText = (description) => {
      if (!description) return "";

      if (typeof description === "string") {
        return description;
      }

      if (Array.isArray(description)) {
        return description
          .map((block) => {
            if (block.children) {
              return block.children
                .map((child) => child.text || "")
                .join("");
            }
            return "";
          })
          .join(" ")
          .trim();
      }

      return "";
    };

    const processedDescription = extractDescriptionText(
      heroData.description
    );

    const hasContent =
      heroData.title ||
      heroData.subtitle ||
      processedDescription;

    if (!hasContent) return null;

    return {
      title: heroData.title || "",
      subtitle: heroData.subtitle || "",
      description: processedDescription,
    };
  } catch (error) {
    console.error("Error fetching hero section:", error);
    return null;
  }
};

/**
 * Submit contact form data to Strapi
 */
export async function submitContactForm(data) {
  try {
    const res = await fetch(`${BASE_URL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });

    if (!res.ok) {
      const errorBody = await res.json();
      console.error("Server error response:", errorBody);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const result = await res.json();
    console.log("✅ Contact form submitted:", result);
    return result;
  } catch (error) {
    console.error(
      "❌ Failed to submit contact form:",
      error
    );
    throw error;
  }
}

/**
 * Fetch all partners with their images
 */
export async function fetchPartners() {
  try {
    const res = await fetch(
      `${BASE_URL}/partners?populate=image`
    );

    if (!res.ok) {
      if (res.status === 403) {
        console.error(
          "❌ 403 Forbidden - Check Strapi permissions:"
        );
        console.error(
          "Go to Settings → Roles → Public → Partner"
        );
        console.error(
          "Enable 'find' and 'findOne' permissions"
        );
      }
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    console.log("Partners API response:", json);

    // Return the data array, or empty array if no data
    return json.data || [];
  } catch (error) {
    console.error("❌ Failed to fetch partners:", error);
    return [];
  }
}

/**
 * Fetch single partner by ID
 */
export async function fetchPartner(id) {
  try {
    const res = await fetch(
      `${BASE_URL}/partners/${id}?populate=image`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    console.log(`Partner ${id} API response:`, json);
    return json.data;
  } catch (error) {
    console.error(
      `❌ Failed to fetch partner ${id}:`,
      error
    );
    return null;
  }
}

/**
 * Utility function to get full image URL from Strapi
 */
export function getImageUrl(
  image,
  baseUrl = IMAGE_BASE_URL
) {
  if (!image) return null;

  // Handle different image object structures
  if (image.url) {
    return image.url.startsWith("http")
      ? image.url
      : `${baseUrl}${image.url}`;
  }

  if (image.data?.attributes?.url) {
    return `${baseUrl}${image.data.attributes.url}`;
  }

  return null;
}

/**
 * Utility function to format date
 */
export function formatDate(dateString, locale = "en-US") {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
}

/**
 * Check if URL is valid
 */
export function isValidUrl(url) {
  if (!url || typeof url !== "string") return false;

  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Fetch About section data from Strapi
 */
export const fetchAboutSection = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/about-sections?populate[vision]=*&populate[mission]=*&populate[commitments]=*`
    );
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(
        `Failed to fetch about section: ${res.status} ${errText}`
      );
    }
    const data = await res.json();

    // Get first item from array (since it's a collection)
    const aboutData = data.data?.[0];
    if (!aboutData) return null;

    // Process description if it's rich text
    let processedDescription = aboutData.description;
    if (Array.isArray(aboutData.description)) {
      processedDescription = aboutData.description;
    }

    const result = {
      title: aboutData.title || "",
      subtitle: aboutData.subtitle || "",
      description: processedDescription,
      vision: aboutData.vision
        ? {
            title: aboutData.vision.title || "",
            description: aboutData.vision.description || "",
          }
        : null,
      mission: aboutData.mission
        ? {
            title: aboutData.mission.title || "",
            description:
              aboutData.mission.description || "",
          }
        : null,
      commitments:
        aboutData.commitments &&
        Array.isArray(aboutData.commitments)
          ? aboutData.commitments.map((commitment) => ({
              title: commitment.title || "",
              description: commitment.description || "",
              icon: commitment.icon || "check",
            }))
          : [],
    };

    return result;
  } catch (error) {
    console.error("Error fetching about section:", error);
    return null;
  }
};

/**
 * Fetch Solutions section data from Strapi
 */
export const fetchSolutionsSection = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/solutions-sections?populate[businessLines]=*`
    );
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(
        `Failed to fetch solutions section: ${res.status} ${errText}`
      );
    }
    const data = await res.json();

    // Get first item from array (since it's a collection)
    const solutionsData = data.data?.[0];
    if (!solutionsData) return null;

    // Function to extract text from rich text
    const extractRichText = (richTextArray) => {
      if (!richTextArray) return "";

      if (typeof richTextArray === "string") {
        return richTextArray;
      }

      if (Array.isArray(richTextArray)) {
        return richTextArray
          .map((block) => {
            if (block.children) {
              return block.children
                .map((child) => child.text || "")
                .join("");
            }
            return "";
          })
          .join(" ")
          .trim();
      }

      return "";
    };

    const result = {
      title: solutionsData.title || "",
      subtitle: solutionsData.subtitle || "",
      description: solutionsData.description || [],
      businessLines:
        solutionsData.businessLines &&
        Array.isArray(solutionsData.businessLines)
          ? solutionsData.businessLines.map((line) => ({
              id: line.id || 0,
              title: line.title || "",
              description:
                extractRichText(line.description) ||
                line.description ||
                "",
              icon: line.icon || "code",
              color: line.color || "blue",
              features:
                line.features &&
                Array.isArray(line.features)
                  ? line.features.map(
                      (feature) => feature.name || feature
                    )
                  : [],
            }))
          : [],
    };

    return result;
  } catch (error) {
    console.error(
      "Error fetching solutions section:",
      error
    );
    return null;
  }
};

/**
 * Fetch Portfolio section data from Strapi
 */
export const fetchPortfolioSection = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/portfolio-sections?populate[projects][populate]=image`
    );

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(
        `Failed to fetch portfolio section: ${res.status} ${errText}`
      );
    }

    const data = await res.json();

    // Get first item from array (since it's a collection)
    const portfolioData = data.data?.[0];
    if (!portfolioData) return null;

    // Function to get image URL from Strapi format
    const getImageUrl = (image) => {
      if (!image) return null;

      // If image is string (direct URL)
      if (typeof image === "string") {
        return image.startsWith("http")
          ? image
          : `${BASE_URL.replace("/api", "")}${image}`;
      }

      // Format Strapi v4: Direct object dengan url property
      if (image.url) {
        const baseUrl = BASE_URL.replace("/api", ""); // Remove /api from base URL
        return image.url.startsWith("http")
          ? image.url
          : `${baseUrl}${image.url}`;
      }

      // Format lama: Nested data.attributes (backup)
      if (
        image.data &&
        image.data.attributes &&
        image.data.attributes.url
      ) {
        const url = image.data.attributes.url;
        const baseUrl = BASE_URL.replace("/api", ""); // Remove /api from base URL
        return url.startsWith("http")
          ? url
          : `${baseUrl}${url}`;
      }

      console.log("Unknown image format:", image);
      return null;
    };

    // Function to extract text from rich text
    const extractRichText = (richTextArray) => {
      if (!richTextArray) return "";

      if (typeof richTextArray === "string") {
        return richTextArray;
      }

      if (Array.isArray(richTextArray)) {
        return richTextArray
          .map((block) => {
            if (block.children) {
              return block.children
                .map((child) => child.text || "")
                .join("");
            }
            return "";
          })
          .join(" ")
          .trim();
      }

      return "";
    };

    const result = {
      title: portfolioData.title || "",
      subtitle: portfolioData.subtitle || "",
      description:
        extractRichText(portfolioData.description) ||
        portfolioData.description ||
        "",
      projects:
        portfolioData.projects &&
        Array.isArray(portfolioData.projects)
          ? portfolioData.projects.map((project) => {
              const imageUrl = getImageUrl(project.image);

              // Debug log untuk cek image
              if (project.image) {
                console.log(
                  "Processing project image:",
                  project.image
                );
                console.log(
                  "Generated image URL:",
                  imageUrl
                );
              }

              return {
                id: project.id || 0,
                title: project.title || "",
                description:
                  extractRichText(project.description) ||
                  project.description ||
                  "",
                category: project.category || "",
                duration: project.duration || "",
                teamSize: project.teamSize || "",
                statuss: project.statuss || "completed",
                completedDate: project.completedDate || "",
                image: imageUrl,
                technologies:
                  project.technologies &&
                  Array.isArray(project.technologies)
                    ? project.technologies.map(
                        (tech) => tech.name || tech
                      )
                    : [],
                keyResults:
                  project.keyResults &&
                  Array.isArray(project.keyResults)
                    ? project.keyResults.map((result) => ({
                        title: result.title || "",
                        description:
                          result.description || "",
                      }))
                    : [],
              };
            })
          : [],
    };

    console.log("Final processed result:", result);
    return result;
  } catch (error) {
    console.error(
      "Error fetching portfolio section:",
      error
    );
    return null;
  }
};

/**
 * Development helper - test hero section API specifically
 */
export async function testHeroSectionAPI() {
  console.log(
    "🧪 Testing Hero Section API specifically..."
  );
  console.log(
    `🌐 Using API URL: ${BASE_URL}/hero-section?populate=*`
  );

  try {
    const data = await fetchHeroSection();
    console.log(
      "📊 Hero Section Test Result:",
      data ? "✅ Success" : "❌ Failed"
    );

    if (data) {
      console.log("📝 Retrieved fields:", {
        hasTitle: !!data.title,
        hasSubtitle: !!data.subtitle,
        hasDescription: !!data.description,
        title: data.title || "(empty)",
        subtitle: data.subtitle || "(empty)",
        description: data.description
          ? `${data.description.substring(0, 50)}...`
          : "(empty)",
      });
    }
  } catch (error) {
    console.error("❌ Hero Section test failed:", error);
  }
}

/**
 * Development helper - test all API endpoints
 */
export async function testAllAPIs() {
  if (process.env.NODE_ENV !== "development") {
    console.warn(
      "testAllAPIs should only be used in development"
    );
    return;
  }

  console.log("🧪 Testing all API endpoints...");
  console.log(`🌐 Using API Base URL: ${BASE_URL}`);
  console.log(`🖼️ Using Image Base URL: ${IMAGE_BASE_URL}`);

  // Test hero section specifically
  await testHeroSectionAPI();

  // Test partners
  console.log("\n🤝 Testing Partners API...");
  const partnersData = await fetchPartners();
  console.log(
    `Partners result: ${partnersData.length > 0 ? "✅ Success" : "❌ Failed"} (${partnersData.length} partners)`
  );

  // Test single partner if any exist
  if (partnersData.length > 0) {
    console.log("\n👤 Testing Single Partner API...");
    const singlePartner = await fetchPartner(
      partnersData[0].id
    );
    console.log(
      "Single partner result:",
      singlePartner ? "✅ Success" : "❌ Failed"
    );
  }

  console.log("\n🎉 API testing complete!");
}

/**
 * Production helper - check API health
 */
export async function checkAPIHealth() {
  try {
    const res = await fetch(
      `${BASE_URL.replace("/api", "")}/admin/init`
    );

    if (res.ok) {
      console.log("✅ Strapi API is healthy");
      return true;
    } else {
      console.log("⚠️ Strapi API returned non-200 status");
      return false;
    }
  } catch (error) {
    console.error(
      "❌ Strapi API health check failed:",
      error
    );
    return false;
  }
}

// Export for browser console testing
if (typeof window !== "undefined") {
  window.testAllAPIs = testAllAPIs;
  window.testHeroSectionAPI = testHeroSectionAPI;
  window.checkAPIHealth = checkAPIHealth;

  // Add debug info to window for production troubleshooting
  window.strapiConfig = {
    baseUrl: BASE_URL,
    imageBaseUrl: IMAGE_BASE_URL,
    environment: process.env.NODE_ENV,
    strapiUrl: process.env.REACT_APP_STRAPI_URL,
  };
}
