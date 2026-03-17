import React, { useState } from "react";

const HOURS = [
  { day: "Monday - Sunday", time: "9:00 AM – 7:30 PM" },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_REGEX = /^(?:\+?44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$|^[0-9+\-\s()]{7,}$/;

const WHATSAPP_NUMBER = "447305794353"; 

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
        if (!value?.trim()) return "Please enter your phone number.";
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
      setStatus({ state: "error", message: "Please fix the highlighted fields." });
      return;
    }

    if (fields.website) return; // Silent block for bots

    const lines = [
      `*New Enquiry from Website*`,
      ``,
      `*Name:* ${fields.name}`,
      `*Email:* ${fields.email}`,
      `*Phone:* ${fields.phone}`,
      fields.car_registration ? `*Registration:* ${fields.car_registration}` : null,
      fields.make_model ? `*Make & Model:* ${fields.make_model}` : null,
      fields.location ? `*Location:* ${fields.location}` : null,
      ``,
      `*Message:*`,
      fields.message,
    ].filter(Boolean).join("\n");

    const encoded = encodeURIComponent(lines);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");

    setStatus({ state: "success", message: "WhatsApp opened! Please send the message." });
    setFields({ name: "", email: "", phone: "", car_registration: "", make_model: "", location: "", message: "", website: "" });
    setTouched({});
  };

  return (
    <section id="contact" className="py-12 scroll-m-10 px-4" style={{ backgroundColor: "#000000" }}>
      <div className="max-w-6xl mx-auto">
        <h2 data-aos="fade-up" className="text-center text-2xl md:text-3xl font-bold" style={{ color: "#e80202" }}>
          Ready to Restore Your Car's Look?
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-center mt-2 max-w-2xl mx-auto" style={{ color: "#a3a3a3" }}>
          Contact us today to book our services, ask questions, or request a free quote. Our expert team is here to bring your vehicle back to flawless condition.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Info Card */}
          <div data-aos="fade-right" className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#111111" }}>
            <h3 className="text-lg font-semibold text-white">Contact Information</h3>
            <div className="mt-6 space-y-6" style={{ color: "#a3a3a3" }}>
              <div>
                <p className="font-medium text-gray-200">Address</p>
                <address className="not-italic">Nottingham, East Midlands, United Kingdom</address>
              </div>
              <div>
                <p className="font-medium text-gray-200">Phone</p>
                <a href="tel:+447305794353" className="hover:underline" style={{ color: "#e80202" }}>+44 7305 794353</a>
              </div>
              <div>
                <p className="font-medium text-gray-200">Opening Hours</p>
                <ul className="mt-2 border rounded-lg overflow-hidden" style={{ borderColor: "#2a2a2a" }}>
                  {HOURS.map(({ day, time }) => (
                    <li key={day} className="grid grid-cols-2 gap-4 px-4 py-2 text-sm">
                      <span className="text-gray-400">{day}</span>
                      <span className="text-right text-white font-medium">{time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div data-aos="fade-left" className="rounded-2xl p-6 md:p-8" style={{ backgroundColor: "#111111" }}>
            {status.message && (
              <div className={`mb-4 p-3 rounded text-sm ${status.state === "success" ? "bg-green-900 text-green-200" : "bg-red-900 text-red-200"}`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <input type="text" name="website" tabIndex="-1" autoComplete="off" className="hidden" value={fields.website} onChange={handleChange} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full">
                  <input type="text" name="name" placeholder="Name*" value={fields.name} onChange={handleChange} onBlur={handleBlur} className="w-full rounded-lg p-3 bg-[#1a1a1a] text-white border border-[#333] focus:ring-2 focus:ring-[#e80202] outline-none" />
                  {errors.name && touched.name && <p className="text-xs text-[#e80202] mt-1">{errors.name}</p>}
                </div>
                <div className="w-full">
                  <input type="email" name="email" placeholder="Email*" value={fields.email} onChange={handleChange} onBlur={handleBlur} className="w-full rounded-lg p-3 bg-[#1a1a1a] text-white border border-[#333] focus:ring-2 focus:ring-[#e80202] outline-none" />
                  {errors.email && touched.email && <p className="text-xs text-[#e80202] mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <input type="tel" name="phone" placeholder="Phone Number*" value={fields.phone} onChange={handleChange} onBlur={handleBlur} className="w-full rounded-lg p-3 bg-[#1a1a1a] text-white border border-[#333] focus:ring-2 focus:ring-[#e80202] outline-none" />
                {errors.phone && touched.phone && <p className="text-xs text-[#e80202] mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input type="text" name="car_registration" placeholder="Reg*" value={fields.car_registration} onChange={handleChange} className="rounded-lg p-3 bg-[#1a1a1a] text-white border border-[#333] outline-none" />
                <input type="text" name="make_model" placeholder="Model*" value={fields.make_model} onChange={handleChange} className="rounded-lg p-3 bg-[#1a1a1a] text-white border border-[#333] outline-none" />
                <input type="text" name="location" placeholder="Location*" value={fields.location} onChange={handleChange} className="rounded-lg p-3 bg-[#1a1a1a] text-white border border-[#333] outline-none" />
              </div>

              <div>
                <textarea name="message" placeholder="How can we help today?" rows="4" value={fields.message} onChange={handleChange} onBlur={handleBlur} className="w-full rounded-lg p-3 bg-[#1a1a1a] text-white border border-[#333] focus:ring-2 focus:ring-[#e80202] outline-none" />
                {errors.message && touched.message && <p className="text-xs text-[#e80202] mt-1">{errors.message}</p>}
              </div>

              <button type="submit" className="w-full text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 hover:brightness-125 transition" style={{ backgroundColor: "#e80202" }}>
                Send via WhatsApp
              </button>
              <p className="text-white text-xs text-center">By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}