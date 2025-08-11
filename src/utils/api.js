const BASE_URL = "http://localhost:1337/api";

/**
 * Fetch home page content with hero section and social links
 */
export async function fetchHomeContent() {
  try {
    const res = await fetch(
      `${BASE_URL}/home?populate[hero][populate][0]=image&populate[hero][populate][1]=social_links.icon`
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    console.log("Home API response:", json);
    return json.data;
  } catch (error) {
    console.error(
      "❌ Failed to fetch home content:",
      error
    );
    return null;
  }
}

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
    throw error; // Re-throw so component can handle it
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
  baseUrl = "http://localhost:1337"
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

  // Test home content
  console.log("\n📱 Testing Home API...");
  const homeData = await fetchHomeContent();
  console.log(
    "Home result:",
    homeData ? "✅ Success" : "❌ Failed"
  );

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

// Export for browser console testing
if (typeof window !== "undefined") {
  window.testAllAPIs = testAllAPIs;
}
