import React from "react";
import { HashLink } from "react-router-hash-link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Sparkles, Shield, Droplets, Zap, ShieldCheck } from "lucide-react";

const iconMap = {
  Phone: <FiPhone size={20} />,
  Mail: <FiMail size={20} />,
  MapPin: <FiMapPin size={20} />,
};

const contentData = {
  detail: {
    tittle: "Car Protection",
    desc: "Ceramic Protection Full-Vehicle Ceramic Protection Packages",
  },

  contactLinks: [
    { title: "07305794353", href: "tel:07305794353", icon: "Phone" },
    { title: "Get a Quote", href: "mailto:auraautocare1@gmail.com", icon: "Mail" },
    { title: "Our Location", href: "https://maps.app.goo.gl/9gr6V6e4gwPqKxS18", icon: "MapPin" },
  ],

  packages: [
    {
      type: "ESSENTIAL 3 YEAR PROTECTION PACKAGE",
      price: "£450",
      btnText: "Book Essential Package",
      bgColor: "bg-red-900/10",
      borderColor: "border-red-900/20",
      iconColor: "text-[#e80202]",
      features: [
        {
          icon: <Droplets size={18} />,
          title: "Full Preparation:",
          description:
            "Complete exterior wash, decontamination, iron & tar removal, and clay bar treatment.",
        },
        {
          icon: <Sparkles size={18} />,
          title: "Paint Enhancement:",
          description:
            "Single-stage machine polish to restore gloss and clarity before coating.",
        },
        {
          icon: <Shield size={18} />,
          title: "Full Surface Coverage:",
          description:
            "Ceramic coating applied to paintwork, wheels, glass and exterior trims.",
        },
      ],
    },

    {
      type: "ADVANCED 5 YEAR PROTECTION PACKAGE",
      price: "£600",
      btnText: "Book Advanced Package",
      bgColor: "bg-red-900/10",
      borderColor: "border-red-900/20",
      iconColor: "text-[#e80202]",
      features: [
        {
          icon: <Droplets size={18} />,
          title: "Multi-Stage Preparation:",
          description:
            "Full interior and exterior wash with complete decontamination.",
        },
        {
          icon: <Zap size={18} />,
          title: "Paint Correction:",
          description:
            "1–2 stage correction for improved clarity, depth and swirl removal.",
        },
        {
          icon: <ShieldCheck size={18} />,
          title: "Premium Coating System:",
          description:
            "Carbon Collective Nero Self-Healing Coating on paintwork, wheels, glass and trims.",
        },
      ],
    },

    {
      type: "SIGNATURE 7 YEAR PROTECTION PACKAGE",
      price: "£750",
      btnText: "Book Signature Package",
      bgColor: "bg-red-900/10",
      borderColor: "border-red-900/20",
      iconColor: "text-[#e80202]",
      features: [
        {
          icon: <Sparkles size={18} />,
          title: "Complete Preparation:",
          description:
            "Multi-stage wash, full decontamination and paint correction for mirror clarity.",
        },
        {
          icon: <ShieldCheck size={18} />,
          title: "Ultimate Coating System:",
          description:
            "Molecule 9H topped with Nero Self-Healing Coating for maximum durability and depth.",
        },
        {
          icon: <Shield size={18} />,
          title: "Total Vehicle Protection:",
          description:
            "Full exterior and interior protection including trims, glass, wheels, calipers, seats and leather.",
        },
      ],
    },
  ],
};

export default function CarProtectionPackage() {
  const { contactLinks, packages, detail } = contentData;

  return (
    <section
      id="package"
      className="scroll-m-10 bg-linear-to-b from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr] gap-12">

        {/* LEFT COLUMN */}
        <div className="lg:sticky lg:top-24 lg:h-fit self-start lg:space-y-8">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 w-12 bg-[#e80202]"></div>
              <h6 className="text-xs sm:text-sm font-semibold text-[#e80202] uppercase tracking-wider">
                {detail.tittle}
              </h6>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              {detail.desc}
            </h2>
          </div>

          <div className="hidden lg:block space-y-3 mt-8">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-white/10 rounded-xl p-4 bg-[#111]/70 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-10 w-10 text-[#e80202]">
                  {iconMap[link.icon]}
                </div>

                <h6 className="text-base font-semibold group-hover:text-[#e80202] transition-colors">
                  {link.title}
                </h6>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-10 mt-10 lg:mt-0">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-2xl bg-linear-to-br from-[#151515] to-[#0b0b0b] backdrop-blur-lg p-6 sm:p-8 hover:border-[#e80202]/40 hover:shadow-[0_0_25px_rgba(134,25,24,0.15)] transition-all duration-500"
            >
              <h6 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
                {pkg.type}
              </h6>

              <div className="border border-white/10 rounded-lg p-5 mb-6 flex justify-between bg-[#111]">
                <h3 className="text-4xl sm:text-5xl font-bold text-[#e80202]">
                  {pkg.price}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex gap-4 border border-white/10 rounded-lg p-3 sm:p-4 items-start hover:bg-white/5 transition-all duration-300"
                  >
                    <div
                      className={`shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-full ${pkg.bgColor} flex items-center justify-center border ${pkg.borderColor}`}
                    >
                      <div className={pkg.iconColor}>{feature.icon}</div>
                    </div>

                    <div className="text-gray-300 text-sm leading-relaxed">
                      <span className="text-white font-semibold block sm:inline">
                        {feature.title}
                      </span>{" "}
                      {feature.description}
                    </div>
                  </div>
                ))}
              </div>

              <HashLink
                to="/#contact"
                smooth
                className="w-full block bg-[#e80202] hover:bg-[#a51f1e] text-white font-semibold py-3 rounded-full transition-all duration-300 border-2 border-[#e80202] hover:border-[#a51f1e] shadow-lg text-center uppercase tracking-wider"
              >
                {pkg.btnText}
              </HashLink>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}