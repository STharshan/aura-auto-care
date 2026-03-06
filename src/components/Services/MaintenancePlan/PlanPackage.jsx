import React from "react";
import { HashLink } from "react-router-hash-link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Shield, Droplets, Zap } from "lucide-react";

const iconMap = {
    Phone: <FiPhone size={20} />,
    Mail: <FiMail size={20} />,
    MapPin: <FiMapPin size={20} />,
};

const contentData = {
    detail: {
        tittle: "Maintenance Packages",
        desc: "Professional care for your car."
    },
    contactLinks: [
        { title: "07305794353", href: "tel:07305794353", icon: "Phone" },
        { title: "Get a Quote", href: "mailto:auraautocare1@gmail.com", icon: "Mail" },
        { title: "Our Location", href: "https://maps.app.goo.gl/e1S2etqinvH3EkZr7", icon: "MapPin" }
    ],
    packages: [
        {
            type: "2-WEEK PLAN",
            price: "20% OFF",
            btnText: "Book",
            bgColor: "bg-red-900/10",
            borderColor: "border-red-900/20",
            iconColor: "text-[#B62025]",
            features: [
                { icon: <Zap size={18} />, title: "M/F Valet:", description: "Bi-weekly upkeep." },
                { icon: <Droplets size={18} />, title: "Ceramic:", description: "£25 first, then FREE." },
                { icon: <Shield size={18} />, title: "Setup:", description: "Full Valet + Clay Bar." }
            ]
        },
        {
            type: "4-WEEK PLAN",
            price: "10% OFF",
            btnText: "Book",
            bgColor: "bg-red-900/10",
            borderColor: "border-red-900/20",
            iconColor: "text-[#B62025]",
            features: [
                { icon: <Zap size={18} />, title: "M/F Valet:", description: "Monthly upkeep." },
                { icon: <Droplets size={18} />, title: "Ceramic:", description: "£25 first, then FREE." },
                { icon: <Shield size={18} />, title: "Setup:", description: "Full Valet + Clay Bar." }
            ]
        },
        {
            type: "6-WEEK PLAN",
            price: "10% OFF",
            btnText: "Book",
            bgColor: "bg-red-900/10",
            borderColor: "border-red-900/20",
            iconColor: "text-[#B62025]",
            features: [
                { icon: <Zap size={18} />, title: "Full Valet:", description: "6-week cycle." },
                { icon: <Droplets size={18} />, title: "Ceramic:", description: "£25 first, then FREE." },
                { icon: <Shield size={18} />, title: "Setup:", description: "Full Valet + Clay Bar." }
            ]
        }
    ]
};

export default function PlanPackage() {
    const { contactLinks, packages, detail } = contentData;

    return (
        <section id="package" className="scroll-m-10 bg-linear-to-b from-black via-[#0b0b0b] to-[#1a1a1a] text-white py-16 px-4 sm:px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-[0.9fr_1.1fr] gap-12">

                {/* LEFT COLUMN - on desktop: sticky with title + contacts */}
                <div className="lg:sticky lg:top-24 lg:h-fit self-start lg:space-y-8">

                    {/* TITLE BLOCK — always first */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-0.5 w-12 bg-[#e80202] "></div>
                            <h6 className="text-xs sm:text-sm font-semibold text-[#e80202]  uppercase tracking-wider">
                                {detail.tittle}
                            </h6>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                            {detail.desc}
                        </h2>
                    </div>

                    {/* CONTACT LINKS — desktop only */}
                    <div className="hidden lg:block space-y-3 mt-8">
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 border border-white/10 rounded-xl p-4 bg-[#111]/70 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex items-center justify-center h-10 w-10 text-[#e80202] ">
                                    {iconMap[link.icon]}
                                </div>
                                <div>
                                    <h6 className="text-base font-semibold group-hover:text-[#e80202]  transition-colors">
                                        {link.title}
                                    </h6>
                                </div>
                            </a>
                        ))}       
                    </div>
                </div>

                {/* RIGHT COLUMN - PACKAGES */}
                <div className="flex flex-col gap-10 mt-10 lg:mt-0">
                    {packages.map((pkg, idx) => (
                        <div
                            key={idx}
                            className="border border-white/10 rounded-2xl bg-linear-to-br from-[#151515] to-[#0b0b0b] backdrop-blur-lg p-6 sm:p-8 hover:border-[#e80202] /40 hover:shadow-[0_0_25px_rgba(134,25,24,0.15)] transition-all duration-500"
                        >
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <h6 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{pkg.type}</h6>
                            </div>

                            <div className="border border-white/10 rounded-lg p-5 mb-6 flex flex-wrap items-center justify-between bg-[#111]">
                                <h3 className="text-4xl sm:text-5xl font-bold text-[#e80202] ">{pkg.price}</h3>
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
                                className="w-full block bg-[#e80202]  hover:bg-[#a51f1e] text-white font-semibold py-3 rounded-full transition-all duration-300 border-2 border-[#e80202]  hover:border-[#a51f1e] shadow-lg shadow-[#e80202] /20 hover:shadow-[#e80202] /40 text-sm sm:text-base text-center uppercase tracking-wider"
                            >
                                {pkg.btnText}
                            </HashLink>
                        </div>
                    ))}
                </div>

                {/* CONTACT LINKS — mobile only, after packages */}
                <div className="lg:hidden space-y-3">
                    {contactLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 border border-white/10 rounded-xl p-4 bg-[#111]/70 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-center justify-center h-10 w-10 text-[#e80202] ">
                                {iconMap[link.icon]}
                            </div>
                            <div>
                                <h6 className="text-base font-semibold group-hover:text-[#e80202]  transition-colors">
                                    {link.title}
                                </h6>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}