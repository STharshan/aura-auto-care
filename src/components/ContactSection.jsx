
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "447783367501"; // your WhatsApp number (no +)

    const message = `New enquiry from TT Autos Website

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interested: ${formData.service || "Not specified"}
Message: ${formData.message}

Please follow up with this customer.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };


  return (
    <section
      id="contact"
      className="scroll-m-10 bg-black text-white py-20 px-6 lg:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#861918]">Get In Touch</h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <span className="font-semibold text-white">General inquiries:</span>{" "}
              <a href="tel:+441162530770" className="hover:underline text-[#861918]">
                +44 116 253 0770
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a href="mailto:ttautosgarage@gmail.com" className="hover:underline font-sans text-[#861918]">
                ttautosgarage@gmail.com
              </a>
            </li>
            {/* <li>
              <span className="font-semibold text-white">Website:</span>{" "}
              <a
                href="https://www.ttauto.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#861918]"
              >
                www.sample.co.uk
              </a>
            </li> */}
            <li>
              <span className="font-semibold text-white">Address:</span>{" "}
              <a
                href="https://maps.app.goo.gl/4ytEwh7M5M9Cn73U9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#861918]"
              >
                Unit 1, 76 Nedham St, Leicester LE2 0HA, United Kingdom
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Opening Hours:</span>{" "}
              9:00 AM – 5:00 PM (Mon–Fri)
            </li>
          </ul>
        </div>

        {/* RIGHT COLUMN - FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#111] p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#1A1A1A] text-gray-200 border border-gray-700 focus:border-[#861918] outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#1A1A1A] text-gray-200 border border-gray-700 focus:border-[#861918] outline-none"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#1A1A1A] text-gray-200 border border-gray-700 focus:border-[#861918] outline-none"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#1A1A1A] text-gray-200 border border-gray-700 focus:border-[#861918] outline-none"
            >
              <option value="">Select a Service</option>
              <option value="MOT Testing">MOT Testing – Road Safety & Compliance</option>
              <option value="Brake Services">Brake Services – Precision Repair</option>
              <option value="Timing Belts">Timing Belts – Reliable Performance</option>
              <option value="Batteries">Batteries – Power & Reliability</option>
              <option value="Suspension">Suspension – Ride Comfort & Control</option>
              <option value="Servicing">Servicing – Full Vehicle Maintenance</option>
              <option value="Clutches">Clutches – Smooth Gear Transition</option>
              <option value="Diagnostics">Diagnostics – Smart Problem Detection</option>
              <option value="Air Conditioning">Air Conditioning – Cooling & Efficiency</option>
              <option value="Customisation">Customisation – Performance & Style</option>
            </select>

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us more about your vehicle or issue..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-md bg-[#1A1A1A] text-gray-200 border border-gray-700 focus:border-[#861918] outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#861918] text-black font-semibold py-3 px-6 rounded-md hover:bg-[#700e12] transition w-full"
            >
              Send via WhatsApp
            </button>
          </div>
          <p className="text-xs mt-5 text-center dark:text-gray-300">By submitting this form, you agree to us processing your details to respond to your enquiry. Your information is handled securely and in line with our Privacy Policy.</p>
        </form>
      </div>
    </section>
  );
}
