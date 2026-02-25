import React from "react";
import { Instagram, Facebook } from "lucide-react";
import { BsTiktok } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* BRAND */}
          <div className="flex flex-col flex-1">
            <span className="text-2xl font-bold mb-4">
              Aura Auto Care
            </span>

            <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
              Aura AutoCare brings top-tier automotive care directly to your doorstep. Whether you're at home, at work, or on the go, our fully equipped mobile units deliver professional detailing services with convenience and precision.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-auto">
              <a href="https://www.instagram.com/aura.autocare/" target="_blank" className="hover:text-pink-500 transition text-2xl">
                <Instagram />
              </a>
              <a href="https://www.tiktok.com/@auraautocare" target="_blank" className="hover:text-[#e80202] transition text-2xl">
                <BsTiktok />
              </a>
            </div>
          </div>

          {/* PAGES */}
          <div className="flex flex-col flex-1 md:items-center">
            <h4 className="text-lg font-semibold mb-6">Pages</h4>
            <ul className="space-y-4 text-gray-300 md:text-center">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/service" className="hover:text-white transition">Service</a></li>
            </ul>
          </div>

          {/* OPENING HOURS - NEW SECTION */}
          <div className="flex flex-col flex-1 md:items-center">
            <h4 className="text-lg font-semibold mb-6">Opening Hours</h4>
            <ul className="space-y-2 text-gray-300 md:text-center text-sm">
              <li>Mon - Sun: 	9 AM – 7:30 PM</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col flex-1 md:items-end items-start">
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-300 md:text-right">
              {/* Clickable phone */}
              <li>
                <a href="tel: +447305794353" className="hover:text-white transition-colors">
                  +44 7305 794353
                </a>
              </li>

              {/* Clickable email */}
              <li>
                <a href="mailto:auraautocare1@gmail.com" className="hover:text-white transition-colors">
                  auraautocare1@gmail.com
                </a>
              </li>

              {/* Clickable address (Google Maps link) */}
              <li>
                <a
                  href="https://maps.app.goo.gl/e1S2etqinvH3EkZr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Nottingham
                  <br />
                  East midlands
                  <br />
                  United Kingdom
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20" />

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Aura Auto Care. All rights reserved.
        </div>

        <div>Powered by <a href="https://www.ansely.co.uk/" className="hover:underline hover:text-[#F21B23]">Ansely</a></div>

        <div className="flex gap-6">
          <Link to="/privacy" className="underline hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms" className="underline hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;