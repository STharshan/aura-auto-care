import React from "react";
import { motion } from "framer-motion";

const WhatIsIncluded = () => {
  const processes = [
    {
      step: "01",
      name: "Multi-Stage Chemical & Mechanical Decontamination",
      features: [
        { title: "Deep Surface Wash", desc: "pH-neutral foam bath and two-bucket contact wash to remove loose dirt and grime." },
        { title: "Iron & Fallout Removal", desc: "Chemical treatment to dissolve embedded brake dust and industrial fallout." },
        { title: "Tar & Adhesive Removal", desc: "Specialized solvent application to safely lift road tar, tree sap, and bug guts." },
        { title: "Clay Bar Treatment", desc: "Mechanical exfoliation leaving the surface 'glass-smooth'." }
      ],
      highlight: false
    },
    {
      step: "02",
      name: "Paint Correction (The Restoration)",
      features: [
        { title: "Panel Wipe & Inspection", desc: "Removal of all old waxes/oils to reveal true paint condition under high-output lighting." },
        { title: "Machine Polishing", desc: "Multi-stage process to remove swirl marks, light to heavy scratches, and oxidation." },
        { title: "Clarity Enhancement", desc: "Finishing polish to maximize 'jewelled' gloss and depth before sealing." }
      ],
      highlight: true
    },
    {
      step: "03",
      name: "Ceramic Coating Application",
      note: "The note or description referencing the coating product used should reflect PPL Reign 7 Year Coating instead of the Carbon Collective system (Molecule 9H + Nero).",
      features: [
        { title: "Paintwork", desc: "Full body application providing UV protection and extreme hydrophobicity." },
        { title: "Wheels", desc: "High-heat resistant coating to prevent brake dust pitting and simplify cleaning." },
        { title: "Glass Surfaces", desc: "Hydrophobic coating for improved wet-weather visibility and water spot prevention." }
      ],
      highlight: false
    },
    {
      step: "04",
      name: "Final Inspection & Handover",
      features: [
        { title: "Infrared Curing", desc: "Assisted curing to ensure the coating bonds perfectly (where applicable)." },
        { title: "Final Wipe Down", desc: "Using a dedicated gloss-enhancer for a streak-free, mirror finish." },
        { title: "Maintenance Guide", desc: "A physical walkthrough to ensure the coating lasts its full lifespan." }
      ],
      highlight: false
    }
  ];

  return (
    <section className="bg-linear-to-b from-black via-[#0b0b0b] to-[#050505] py-24 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 italic"
          >
            What's <span className="text-[#e80202]">Included</span>
          </motion.h2>
          <p className="max-w-3xl text-gray-400 text-lg leading-relaxed border-l-2 border-[#e80202] pl-6">
            This premium package is designed to restore your vehicle’s clarity and provide long-term defense against the elements. Below is the step-by-step breakdown of our process.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className={`group rounded-3xl p-8 border transition-all duration-500 flex flex-col ${
                process.highlight
                  ? "bg-[#0f0f0f] border-[#e80202]/40 shadow-[0_0_40px_rgba(232,2,2,0.15)] ring-1 ring-[#e80202]/20"
                  : "bg-[#0a0a0a] border-white/5 hover:border-[#e80202]/30"
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-4xl font-black text-white/10 group-hover:text-[#e80202]/20 transition-colors">
                  {process.step}
                </span>
            
              </div>

              <h3 className={`text-2xl font-bold mb-6 leading-tight ${
                process.highlight ? "text-white" : "text-gray-100"
              }`}>
                {process.name}
              </h3>

              {process.note && (
                <p className="text-xs text-[#e80202] font-medium uppercase tracking-wider mb-6 bg-[#e80202]/5 p-3 rounded-lg border border-[#e80202]/10">
                  {process.note}
                </p>
              )}

              <ul className="space-y-6 grow">
                {process.features.map((feature, fIndex) => (
                  <li key={fIndex} className="group/item">
                    <h4 className="text-[#e80202] text-sm font-bold uppercase tracking-wide mb-1 flex items-center gap-2">
                      <span className="h-1 w-4 bg-[#e80202] rounded-full inline-block" />
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed pl-6 group-hover/item:text-gray-200 transition-colors">
                      {feature.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FOOTER CALLOUT */}
        <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm italic">
                All processes are carried out using professional-grade equipment and UK-sourced premium chemicals.
            </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIncluded;