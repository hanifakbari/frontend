import { useForm } from "react-hook-form";
import { submitContactForm } from "../utils/api";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  User,
  MessageSquare,
} from "lucide-react";

const ContactForm = ({ isDarkMode = false }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange", // Real-time validation
  });

  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await submitContactForm(data);
      if (response) {
        setSuccess(true);
        reset();
        // Hide success message after 5 seconds
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // You can add error handling here
    }
  };

  // Helper function to get input classes
  const getInputClasses = (hasError) => {
    const baseClasses =
      "w-full rounded-lg border px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2";

    if (hasError) {
      return `${baseClasses} border-red-500 focus:ring-red-500/50`;
    }

    return isDarkMode
      ? `${baseClasses} border-gray-600/30 bg-gray-800/50 text-white placeholder-gray-400 focus:border-blue-500/50 focus:ring-blue-500/50`
      : `${baseClasses} border-gray-300/50 bg-white/50 text-gray-900 placeholder-gray-500 focus:border-blue-500/50 focus:ring-blue-500/50`;
  };

  const getLabelClasses = () => {
    return `mb-2 flex items-center space-x-2 text-sm font-medium transition-colors duration-300 ${
      isDarkMode ? "text-gray-300" : "text-gray-700"
    }`;
  };

  return (
    <section className="relative py-10 transition-colors duration-500">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-20">
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
                  isDarkMode ? "bg-blue-400" : "bg-blue-500"
                }`}
              ></span>
              Get In Touch
            </span>
          </div>

          <h2
            className={`font-dosis mb-6 text-3xl leading-tight font-bold transition-all duration-300 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Contact Us
          </h2>

          {/* Glowing underline */}
          <div
            className={`mx-auto mb-8 h-1 w-24 rounded-full shadow-lg transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-r from-blue-500 via-orange-500 to-yellow-500 shadow-blue-500/50"
                : "bg-gradient-to-r from-blue-600 via-orange-600 to-yellow-600 shadow-blue-400/40"
            }`}
          ></div>

          <p
            className={`mx-auto max-w-4xl text-lg leading-relaxed font-light transition-colors duration-300 md:text-xl ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Mari diskusikan kebutuhan IT infrastructure
            Anda. Tim ahli kami siap membantu memberikan
            solusi terbaik untuk bisnis Anda.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3
                className={`mb-6 text-2xl font-semibold transition-colors duration-300 ${
                  isDarkMode
                    ? "text-white"
                    : "text-gray-900"
                }`}
              >
                Get in Touch
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    value: "info@ptasta.com",
                    description: "Send us an email",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    value: "+62 21 1234 5678",
                    description: "Call us directly",
                  },
                  {
                    icon: MapPin,
                    title: "Office",
                    value: "Jakarta, Indonesia",
                    description: "Visit our office",
                  },
                ].map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-start space-x-4 rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 ${
                        isDarkMode
                          ? "border-gray-700/30 bg-gray-900/20"
                          : "border-gray-300/30 bg-white/20"
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                          isDarkMode
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h4
                          className={`text-lg font-semibold transition-colors duration-300 ${
                            isDarkMode
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          {info.title}
                        </h4>
                        <p
                          className={`text-base font-medium transition-colors duration-300 ${
                            isDarkMode
                              ? "text-blue-400"
                              : "text-blue-600"
                          }`}
                        >
                          {info.value}
                        </p>
                        <p
                          className={`text-sm transition-colors duration-300 ${
                            isDarkMode
                              ? "text-gray-400"
                              : "text-gray-600"
                          }`}
                        >
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`rounded-2xl border p-8 backdrop-blur-sm transition-all duration-300 ${
              isDarkMode
                ? "border-gray-700/30 bg-gray-900/20"
                : "border-gray-300/30 bg-white/20"
            }`}
          >
            {/* Success Message */}
            {success && (
              <div
                className={`mb-6 flex items-center space-x-3 rounded-lg border p-4 ${
                  isDarkMode
                    ? "border-green-500/30 bg-green-500/10 text-green-400"
                    : "border-green-300 bg-green-50 text-green-700"
                }`}
              >
                <CheckCircle size={20} />
                <span className="text-sm font-medium">
                  Your message has been sent successfully!
                </span>
              </div>
            )}

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className={getLabelClasses()}
                >
                  <User size={16} />
                  <span>Name *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message:
                        "Name must be at least 2 characters",
                    },
                  })}
                  className={getInputClasses(errors.name)}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className={getLabelClasses()}
                >
                  <Mail size={16} />
                  <span>Email *</span>
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message:
                        "Please enter a valid email address",
                    },
                  })}
                  className={getInputClasses(errors.email)}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className={`mb-2 block text-sm font-medium transition-colors duration-300 ${
                    isDarkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: {
                      value: 5,
                      message:
                        "Subject must be at least 5 characters",
                    },
                  })}
                  className={getInputClasses(
                    errors.subject
                  )}
                  placeholder="What can we help you with?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className={getLabelClasses()}
                >
                  <Phone size={16} />
                  <span>Phone</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    pattern: {
                      value: /^[+]?[0-9\s\-()]{10,}$/,
                      message:
                        "Please enter a valid phone number",
                    },
                  })}
                  className={getInputClasses(errors.phone)}
                  placeholder="+62 xxx xxxx xxxx"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className={getLabelClasses()}
                >
                  <MessageSquare size={16} />
                  <span>Message *</span>
                </label>
                <textarea
                  id="message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message:
                        "Message must be at least 10 characters",
                    },
                  })}
                  rows={4}
                  className={`${getInputClasses(errors.message)} resize-none`}
                  placeholder="Tell us about your project requirements..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex w-full items-center justify-center space-x-2 rounded-lg px-6 py-3 font-semibold text-white transition-all duration-300 ${
                  isSubmitting
                    ? "cursor-not-allowed bg-gray-400"
                    : "bg-blue-600 hover:scale-[1.02] hover:bg-blue-700 focus:ring-2 focus:ring-blue-500/50 focus:outline-none"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
