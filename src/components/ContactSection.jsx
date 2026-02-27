import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HOURS = [
  { day: "Monday - Sunday", time: "9:00 AM – 7:30 PM" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_REGEX =
  /^(?:\+?44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^[0-9+\-\s()]{7,}$/;

const WHATSAPP_NUMBER = "447305794353"; // +44 7305 794353

// Helper: return AOS props only on desktop (>= 1024px)
const aosProps = (aosType, delay) => {
  if (typeof window !== "undefined" && window.innerWidth >= 1024) {
    return {
      "data-aos": aosType,
      ...(delay ? { "data-aos-delay": String(delay) } : {}),
    };
  }
  return {};
};

export default function ContactSection() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    car_registration: "",
    make_model: "",
    location: "",
    message: "",
    website: "", // honeypot
  });
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: "idle", message: "" });

  useEffect(() => {
    // Disable AOS animations on mobile (screens smaller than 1024px)
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) {
      AOS.init({ duration: 1000 });
    }
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value?.trim()) return "Please enter your name.";
        if (value.trim().length < 2) return "Name looks too short.";
        return "";
      case "email":
        if (!value?.trim()) return "Please enter your email.";
        if (!EMAIL_REGEX.test(value.trim())) return "Enter a valid email address.";
        return "";
      case "phone":
        if (!value) return "";
        if (!PHONE_REGEX.test(value.trim())) return "Enter a valid UK phone number.";
        return "";
      case "message":
        if (!value?.trim()) return "Please tell us a bit about the issue.";
        if (value.trim().length < 10) return "Message should be at least 10 characters.";
        return "";
      default:
        return "";
    }
  };

  const validateAll = () => {
    const newErrors = {};
    ["name", "email", "phone", "message"].forEach((f) => {
      const msg = validateField(f, fields[f]);
      if (msg) newErrors[f] = msg;
    });
    if (fields.website) newErrors.website = "Bot detected.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true, phone: true, message: true });

    if (!validateAll()) {
      setStatus({ state: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    if (fields.website) {
      setStatus({ state: "error", message: "Submission blocked." });
      return;
    }

    const lines = [
      `New Enquiry from Website`,
      ``,
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      fields.phone ? `Phone: ${fields.phone}` : null,
      fields.car_registration ? `Registration: ${fields.car_registration}` : null,
      fields.make_model ? `Make & Model: ${fields.make_model}` : null,
      fields.location ? `Location: ${fields.location}` : null,
      ``,
      `Message:`,fields.message,
    ]
      .filter((l) => l !== null)
      .join("\n");

    const encoded = encodeURIComponent(lines);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setStatus({
      state: "success",
      message: "WhatsApp opened! Send the pre-filled message and we'll get back to you shortly.",
    });

    setFields({
      name: "",
      email: "",
      phone: "",
      car_registration: "",
      make_model: "",
      location: "",
      message: "",
      website: "",
    });
    setTouched({});
    setErrors({});
  };

  const isSending = status.state === "sending";

  return (
    <section
      id="contact"
      className="py-12 scroll-m-10 px-4 transition-colors duration-300"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          {...aosProps("fade-up")}
          className="text-center text-2xl md:text-3xl font-bold"
          style={{ color: "#e80202" }}
        >
          Ready to Restore Your Car's Look?
        </h2>
        <p
          {...aosProps("fade-up")}
          className="text-center mt-2 max-w-2xl mx-auto"
          style={{ color: "#a3a3a3" }}
        >
          Contact us today to book our services, ask questions, or
          request a free quote. Our expert team is here to bring your vehicle
          back to flawless condition.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Left Side – Info */}
          <div
            {...aosProps("fade-right")}
            className="rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300"
            style={{ backgroundColor: "#111111" }}
          >
            <h3 className="text-lg font-semibold" style={{ color: "#f5f5f5" }}>
              Contact Information
            </h3>
            <div className="mt-4 space-y-6" style={{ color: "#a3a3a3" }}>
              <div>
                <p className="font-medium" style={{ color: "#e5e5e5" }}>Address</p>
                <address className="not-italic">
                  Nottingham, East midlands, United Kingdom
                </address>
              </div>

              <div>
                <p className="font-medium" style={{ color: "#e5e5e5" }}>Phone</p>
                <a
                  href="tel:+447305794353"
                  style={{ color: "#e80202" }}
                  className="hover:underline"
                >
                  +44 7305 794353
                </a>
                <div className="mt-1">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#e80202" }}
                    className="hover:underline"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              <div>
                <p className="font-medium" style={{ color: "#e5e5e5" }}>Opening Hours</p>
                <ul
                  className="mt-2 divide-y rounded-lg overflow-hidden border"
                  style={{ borderColor: "#2a2a2a", divideColor: "#2a2a2a" }}
                >
                  {HOURS.map(({ day, time }) => (
                    <li
                      key={day}
                      className="grid grid-cols-2 gap-4 px-4 py-2 text-sm md:text-base"
                      style={{ borderColor: "#2a2a2a" }}
                    >
                      <span style={{ color: "#d4d4d4" }}>{day}</span>
                      <span
                        className="text-right font-medium"
                        style={{ color: time === "Closed" ? "#e80202" : "#f5f5f5" }}
                      >
                        {time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side – Form */}
          <div
            {...aosProps("fade-left")}
            className="rounded-2xl shadow-lg p-6 md:p-8 transition-colors duration-300"
            style={{ backgroundColor: "#111111" }}
          >
            <div className="mb-4" role="status" aria-live="polite">
              {status.state === "success" && (
                <div className="rounded-md border border-green-700 bg-green-950 px-4 py-3 text-green-300">
                  {status.message}
                </div>
              )}
              {status.state === "error" && (
                <div className="rounded-md border border-red-700 bg-red-950 px-4 py-3 text-red-300">
                  {status.message}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
                value={fields.website}
                onChange={handleChange}
              />

              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name*"
                  value={fields.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#1a1a1a",
                    color: "#f5f5f5",
                    border: errors.name && touched.name ? "1px solid #e80202" : "1px solid #333",
                    "--tw-ring-color": "#e80202",
                  }}
                />
                {errors.name && touched.name && (
                  <p className="text-sm mt-1" style={{ color: "#e80202" }}>{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email*"
                  value={fields.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#1a1a1a",
                    color: "#f5f5f5",
                    border: errors.email && touched.email ? "1px solid #e80202" : "1px solid #333",
                  }}
                />
                {errors.email && touched.email && (
                  <p className="text-sm mt-1" style={{ color: "#e80202" }}>{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Phone Number*"
                  value={fields.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#1a1a1a",
                    color: "#f5f5f5",
                    border: errors.phone && touched.phone ? "1px solid #e80202" : "1px solid #333",
                  }}
                />
                {errors.phone && touched.phone && (
                  <p className="text-sm mt-1" style={{ color: "#e80202" }}>{errors.phone}</p>
                )}
              </div>

              {/* Car details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "car_registration", placeholder: "Car Registration*" },
                  { name: "make_model", placeholder: "Make and Model*" },
                  { name: "location", placeholder: "Location*" },
                ].map(({ name, placeholder }) => (
                  <input
                    key={name}
                    type="text"
                    name={name}
                    placeholder={placeholder}
                    value={fields[name]}
                    onChange={handleChange}
                    className="rounded-lg p-3 focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: "#1a1a1a",
                      color: "#f5f5f5",
                      border: "1px solid #333",
                    }}
                  />
                ))}
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="how can we help you today?"
                  rows="4"
                  value={fields.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="w-full rounded-lg p-3 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: "#1a1a1a",
                    color: "#f5f5f5",
                    border:
                      errors.message && touched.message ? "1px solid #e80202" : "1px solid #333",
                  }}
                />
                {errors.message && touched.message && (
                  <p className="text-sm mt-1" style={{ color: "#e80202" }}>{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition"
                style={{
                  backgroundColor: "#e80202",
                  opacity: isSending ? 0.7 : 1,
                  cursor: isSending ? "not-allowed" : "pointer",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>

              <p className="text-xs text-center" style={{ color: "#737373" }}>
                By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}