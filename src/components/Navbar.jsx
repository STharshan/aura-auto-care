import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationOpen, setMobileLocationOpen] = useState(false);

  const servicesDropdownRef = useRef(null);
  const locationDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setShowServicesDropdown(false);
      }
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(event.target)
      ) {
        setShowLocationDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMobileMenuClick = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileLocationOpen(false);
  };

  const services = [
    { name: "Valeting", path: "/services/valeting" },
    { name: "Ceramic Coating", path: "/services/ceramic-coating" },
    { name: "Paint Correction", path: "/services/paint-correction" },
    { name: "Deep Restoration", path: "/services/deep-restoration" },
    { name: "Maintenance Plan", path: "/services/maintenance-plan" },
    { name: "Car Protection", path: "/services/car-protection" },
  ];

  const locations = [
    { name: "Leicester", path: "/locations/leicester" },
    { name: "Nottingham", path: "/locations/nottingham" },
    { name: "Derby", path: "/locations/derby" },
    { name: "Mansfield", path: "/locations/mansfield" },
    { name: "Grantham", path: "/locations/grantham" },
    { name: "Loughborough", path: "/locations/loughborough" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-9999 transition-all duration-500 ${
        scrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo-white.png"
            alt="aura Logo"
            className="h-18 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-8 font-semibold relative">
          <HashLink to="/#" className="hover:text-[#e80202] transition">
            Home
          </HashLink>
          <HashLink to="/#about" className="hover:text-[#e80202] transition">
            About Us
          </HashLink>

          {/* Services Dropdown */}
          <div className="relative" ref={servicesDropdownRef}>
            <button
              onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              className="flex items-center gap-1 hover:text-[#e80202] transition focus:outline-none"
            >
              Services
              <FiChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  showServicesDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
            {showServicesDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-black border border-gray-700 rounded-md shadow-lg w-48 py-2 z-50">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#e80202]/80 transition"
                    onClick={() => setShowServicesDropdown(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Location Dropdown */}
          <div className="relative" ref={locationDropdownRef}>
            <button
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              className="flex items-center gap-1 hover:text-[#e80202] transition focus:outline-none"
            >
              Location
              <FiChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  showLocationDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
            {showLocationDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-black border border-gray-700 rounded-md shadow-lg w-48 py-2 z-50">
                {locations.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#e80202]/80 transition"
                    onClick={() => setShowLocationDropdown(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <HashLink to="/#testimonials" className="hover:text-[#e80202] transition">
            Testimonials
          </HashLink>
          <HashLink to="/review" className="hover:text-[#e80202] transition">
            Review
          </HashLink>
          {/* Contact Us added here */}
          <HashLink to="/#contact" className="hover:text-[#e80202] transition">
            Contact Us
          </HashLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center">
          <HashLink to="/#contact">
            <button className="px-7 py-2.5 bg-linear-to-br from-[#e80202] to-[#a80000] cursor-pointer hover:bg-[#e73030] text-white font-medium text-base rounded-lg border-2 border-white/15 shadow-[0_6px_25px_rgba(255,0,0,0.4)] transition-all duration-300">
              Get In Touch
            </button>
          </HashLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full px-6 py-6 space-y-4 backdrop-blur-lg bg-black/95 text-white transition-all duration-300 border-t border-gray-800 max-h-[90vh] overflow-y-auto">
          <HashLink to="/#" className="block text-lg font-medium" onClick={handleMobileMenuClick}>
            Home
          </HashLink>
          <HashLink to="/#about" className="block text-lg font-medium" onClick={handleMobileMenuClick}>
            About Us
          </HashLink>

          {/* Mobile Services Accordion */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex justify-between w-full items-center text-lg font-medium"
            >
              Services
              <FiChevronDown
                size={20}
                className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-3 mt-2 border-l-2 border-[#e80202]">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-gray-400 hover:text-white text-base"
                    onClick={handleMobileMenuClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Location Accordion */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileLocationOpen(!mobileLocationOpen)}
              className="flex justify-between w-full items-center text-lg font-medium"
            >
              Location
              <FiChevronDown
                size={20}
                className={`transition-transform duration-300 ${mobileLocationOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileLocationOpen && (
              <div className="pl-4 space-y-3 mt-2 border-l-2 border-[#e80202]">
                {locations.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block text-gray-400 hover:text-white text-base"
                    onClick={handleMobileMenuClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <HashLink to="/#package" className="block text-lg font-medium" onClick={handleMobileMenuClick}>
            Package
          </HashLink>
          <HashLink to="/#testimonials" className="block text-lg font-medium" onClick={handleMobileMenuClick}>
            Testimonials
          </HashLink>
          <HashLink to="/review" className="block text-lg font-medium" onClick={handleMobileMenuClick}>
            Review
          </HashLink>
          {/* Contact Us added here */}
          <HashLink to="/#contact" className="block text-lg font-medium" onClick={handleMobileMenuClick}>
            Contact Us
          </HashLink>

          <div className="pt-4">
            <HashLink to="/#contact" onClick={handleMobileMenuClick}>
              <button className="w-full px-7 py-3 bg-linear-to-br from-[#e80202] to-[#a80000] text-white font-bold rounded-lg">
                Get a Quote
              </button>
            </HashLink>
          </div>
        </div>
      )}
    </header>
  );
}