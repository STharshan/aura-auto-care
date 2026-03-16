import React from 'react';
import { Check, CircleCheckBig } from 'lucide-react'; // Optional: npm install lucide-react

const WhatInclude = () => {
    const features = [
        "Multi-stage exterior wash and full decontamination",
        "Iron and tar removal",
        "Clay bar treatment",
        "Machine polish for paint enhancement and revitalisation",
        "Trim and plastic restoration treatments",
        "Deep interior cleaning and stain removal",
        "Steam clean and upholstery extraction",
        "Leather conditioning and nourishment",
        "pH-neutral products used throughout",
        "Optional ceramic coating upgrades available"
    ];

    return (
        <section className="bg-linear-to-b from-black via-[#0b0b0b] to-[#1a1a1a] text-white min-h-[600px] flex items-center justify-center p-6 md:p-12">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content Side */}
                <div className="space-y-8 order-2 lg:order-1">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        What's Included
                    </h2>

                    <ul className="space-y-6">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-4 group">
                                <div className="mt-1">
                                    <CircleCheckBig className="w-5 h-5 text-[#e80202]  group-hover:scale-125 transition-transform" />
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed font-light">
                                    {feature}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Image Side */}
                <div className="relative order-1 lg:order-2 h-full min-h-[300px] md:min-h-[500px]">
                    <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-transparent z-10 hidden lg:block" />
                    <img
                        src="/api/placeholder/800/600" // Replace with your orange car image
                        alt="Professional car detailing"
                        className="w-full h-full object-cover rounded-lg shadow-2xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default WhatInclude;