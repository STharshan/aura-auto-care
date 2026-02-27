import React from "react";
import { HashLink } from "react-router-hash-link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Sparkles, Shield, Droplets, Zap } from "lucide-react";

const iconMap = {
    Phone: <FiPhone size={20} />,
    Mail: <FiMail size={20} />,
    MapPin: <FiMapPin size={20} />,
};

// Data extracted directly from the provided flyer image
const contentData = {
    detail: {
        tittle: "Paint Correction",
        desc: "Exceptional gloss, swirl-free finish."
    },
    contactLinks: [
        { title: "07305794353", href: "tel:07305794353", icon: "Phone" },
        { title: "Get a Quote", href: "mailto:auraautocare1@gmail.com", icon: "Mail" },
        { title: "Our Location", href: "https://maps.app.goo.gl/e1S2etqinvH3EkZr7", icon: "MapPin" }
    ],
    packages: [
        {
            type: "PAINT CORRECTION",
            price: "Enquire",
            btnText: "Book Correction",
            bgColor: "bg-red-900/10",
            borderColor: "border-red-900/20",
            iconColor: "text-[#B62025] dark:text-[#FF4B4B]",
            features: [
                { icon: <Zap size={18} />, title: "Correction:", description: "Removes swirl marks and light/moderate scratches." },
                { icon: <Droplets size={18} />, title: "Preparation:", description: "Requires deep clean and clay bar decontamination." },
                { icon: <Sparkles size={18} />, title: "Finish:", description: "Machine polished for a safe, imperfection-free surface." }
            ]
        }
    ]
};

export default function PaintPackage() {
    // Using the internal contentData object
    const { contactLinks, packages, detail } = contentData;

    return (
        <section id="package" className="scroll-m-10 bg-linear-to-b from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr] gap-12">

                {/* LEFT COLUMN - STICKY HEADER & CONTACT */}
                <div className="space-y-8 lg:sticky lg:top-24 lg:h-fit self-start">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-0.5 w-12 bg-[#861918]"></div>
                            <h6 className="text-xs sm:text-sm font-semibold text-[#861918] uppercase tracking-wider">
                                {detail.tittle}
                            </h6>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                            {detail.desc}
                        </h2>
                    </div>

                    {/* Contact Links */}
                    <div className="space-y-3">
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 border border-white/10 rounded-xl p-4 bg-[#111]/70 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-center justify-center h-10 w-10 text-[#861918]">
                                    {iconMap[link.icon]}
                                </div>
                                <div>
                                    <h6 className="text-base font-semibold group-hover:text-[#861918] transition-colors">
                                        {link.title}
                                    </h6>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-2 text-gray-500 text-sm">
                        <svg className="h-4 w-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span>Scroll down to see all packages</span>
                    </div>
                </div>

                {/* RIGHT COLUMN - SCROLLABLE PACKAGES */}
                <div className="flex flex-col gap-10 mt-10 lg:mt-0">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className="border border-white/10 rounded-2xl bg-linear-to-br from-[#151515] to-[#0b0b0b] backdrop-blur-lg p-6 sm:p-8 hover:border-[#861918]/40 hover:shadow-[0_0_25px_rgba(134,25,24,0.15)] transition-all duration-500"
                        >
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <h6 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{pkg.type}</h6>
                            </div>

                            <div className="border border-white/10 rounded-lg p-5 mb-6 flex flex-wrap items-center justify-between bg-[#111]">
                                <h3 className="text-4xl sm:text-5xl font-bold text-[#861918]">{pkg.price}</h3>
                            </div>

                            <div className="space-y-3 mb-6">
                                {pkg.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-4 border border-white/10 rounded-lg p-3 sm:p-4 items-start hover:bg-white/5 transition-all duration-300"
                                    >
                                        <div className={`shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-full ${pkg.bgColor} flex items-center justify-center border ${pkg.borderColor}`}>
                                            <div className={pkg.iconColor}>{feature.icon}</div>
                                        </div>
                                        <p className="text-gray-300 text-sm leading-relaxed">
                                            <span className="text-white font-semibold block sm:inline">{feature.title}</span> {feature.description}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <HashLink
                                to="/#contact"
                                smooth
                                className="w-full block bg-[#861918] hover:bg-[#a51f1e] text-white font-semibold py-3 rounded-full transition-all duration-300 border-2 border-[#861918] hover:border-[#a51f1e] shadow-lg shadow-[#861918]/20 hover:shadow-[#861918]/40 text-sm sm:text-base text-center uppercase tracking-wider"
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