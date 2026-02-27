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
        tittle: "Ceramic Protection",
        desc: "Advanced Paint Protection & Ceramic Coatings"
    },
    contactLinks: [
        { title: "07305794353", href: "tel:07305794353", icon: "Phone" },
        { title: "Get a Quote", href: "mailto:auraautocare1@gmail.com", icon: "Mail" },
        { title: "Our Location", href: "#", icon: "MapPin" }
    ],
    packages: [
        {
            type: "SPRAY SEALANT",
            price: "£25",
            btnText: "Book Sealant",
            bgColor: "bg-red-900/10",
            borderColor: "border-red-900/20",
            iconColor: "text-[#861918]",
            features: [
                { icon: <Droplets size={18} />, title: "3-4 Months Protection:", description: "Applied as a snow foam or panel by panel for quick application with no dwell time." },
                { icon: <Shield size={18} />, title: "Road Grime Defense:", description: "Amazing protection to fight off moderate levels of road grime." },
                { icon: <Sparkles size={18} />, title: "Maintenance:", description: "Allows for much easier vehicle maintenance in the future." }
            ]
        },
        {
            type: "CC 3 YEAR PLATINUM PAINT",
            price: "£150",
            btnText: "Book 3 Year Coating",
            bgColor: "bg-red-900/10",
            borderColor: "border-red-900/20",
            iconColor: "text-[#861918]",
            features: [
                { icon: <ShieldCheck size={18} />, title: "7H Hardness:", description: "A scratch resistant layer to keep your paintwork swirl free." },
                { icon: <Zap size={18} />, title: "Long Term:", description: "Protects your paintwork for up to 3 years from harsh environmental chemicals." },
                { icon: <Shield size={18} />, title: "UV Protection:", description: "Provides a robust barrier against harmful UV rays." }
            ]
        },
        {
            type: "CC NERO SELF HEALING",
            price: "From £200",
            btnText: "Book Nero Coating",
            bgColor: "bg-red-900/10",
            borderColor: "border-red-900/20",
            iconColor: "text-[#861918]",
            features: [
                { icon: <Sparkles size={18} />, title: "5 Year Protection:", description: "Provides up to 5 years of protection from Chemical and UV damage." },
                { icon: <Zap size={18} />, title: "Self Healing:", description: "Advanced capabilities with swirl resistance and self-healing properties." },
                { icon: <ShieldCheck size={18} />, title: "Deep Gloss:", description: "Provides effortless maintenance and a deeper gloss than standard sealants." }
            ]
        },
        {
            type: "CC PLATINUM PACKAGE",
            price: "From £345",
            btnText: "Book Platinum Package",
            bgColor: "bg-red-900/10",
            borderColor: "border-red-900/20",
            iconColor: "text-[#861918]",
            features: [
                { icon: <ShieldCheck size={18} />, title: "Full Exterior:", description: "Complete protection for Paintwork, Wheels, Glass, and Trims." },
                { icon: <Zap size={18} />, title: "3 Year Duration:", description: "Everything protected for up to 3 years for total peace of mind." },
                { icon: <Sparkles size={18} />, title: "Effortless:", description: "Makes maintenance of your car completely effortless." }
            ]
        }
    ]
};

export default function CeramicPackage() {
    const { contactLinks, packages, detail } = contentData;

    return (
        <section id="package" className="scroll-m-10 bg-gradient-to-b from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-12">
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
                        <span>Scroll down to see protection options</span>
                    </div>
                </div>

                {/* RIGHT COLUMN - SCROLLABLE PACKAGES */}
                <div className="flex flex-col gap-10 mt-10 lg:mt-0">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className="border border-white/10 rounded-2xl bg-gradient-to-br from-[#151515] to-[#0b0b0b] backdrop-blur-lg p-6 sm:p-8 hover:border-[#861918]/40 hover:shadow-[0_0_25px_rgba(134,25,24,0.15)] transition-all duration-500"
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
                                        <div className="text-gray-300 text-sm leading-relaxed">
                                            <span className="text-white font-semibold block sm:inline">{feature.title}</span> {feature.description}
                                        </div>
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