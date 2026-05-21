"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Eye, ShieldCheck, Zap, Sliders } from "lucide-react";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState("all");

  const images = [
    {
      src: "/images/showcase-1.jpg",
      title: "Light Oak Stacked Cabin Cabinets",
      category: "exterior",
      description: "Solid double-decker framework with reinforced wooden ladders and easy sliding privacy panels.",
      details: ["Premium Japanese Red-Core MDF", "Quiet close sliding tracks", "Heavy load-bearing ladder hooks"]
    },
    {
      src: "/images/showcase-2.jpg",
      title: "Inner Ambient Capsule Warmth",
      category: "interior",
      description: "Gleaming warm LED strip lighting recessed into high-grade oak ceiling, with built-in bedhead shelves.",
      details: ["Adjustable lux warm strips", "Solid oak side-bed platform", "Acoustic fabric backing panels"]
    },
    {
      src: "/images/showcase-3.jpg",
      title: "Premium Linen Comfort Grid",
      category: "interior",
      description: "Cozy organic linen bedding, memory foam mattresses, pillow cushions, and integrated reading spot lights.",
      details: ["Hypoallergenic memory foam mattress", "USB socket direct bedside access", "Warm reading directional lamp"]
    },
    {
      src: "/images/showcase-4.jpg",
      title: "Multi-Cabin Double-Aisle Hub",
      category: "exterior",
      description: "Symmetric double-aisle layout maximizing space, noise isolation, and privacy for high-density airport lounges.",
      details: ["35dB Sound dampening shell", "Independent HEPA intake ducts", "Automatic occupancy indicators"]
    },
    {
      src: "/images/showcase-5.jpg",
      title: "Integrated Utilities & Washroom",
      category: "amenities",
      description: "Compact high-end details: bedside dual USB and 220V power outlets, ceiling climate control, and luxury marble-wood washrooms.",
      details: ["Ceiling multi-speed HEPA diffuser", "Bedside USB & Universal outlet socket", "High-end luxury ensuite bathroom"]
    }
  ];

  const filteredImages = activeTab === "all" ? images : images.filter(img => img.category === activeTab);

  return (
    <section id="showcase-section" className="bg-[#0a110e] py-20 relative overflow-hidden border-b border-slate-900/60">
      {/* Dynamic Background Glow */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCLUSIVE HIGHLIGHTS</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Cozy Oak Cabin Showcase
          </h2>
          <p className="text-slate-400 font-light">
            Explore our state-of-the-art Japanese-style oak wood micro-habitats. Handcrafted for supreme comfort, quietude, and premium ergonomics.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-3 mb-10 text-xs font-mono">
          {[
            { id: "all", label: "ALL VIEWS" },
            { id: "interior", label: "INTERIOR COMFORT" },
            { id: "exterior", label: "CABIN GRID" },
            { id: "amenities", label: "UTILITIES & ENSUITE" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl border font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "border-emerald-500 bg-emerald-950/30 text-emerald-300"
                  : "border-slate-850 bg-slate-900/40 text-slate-500 hover:border-slate-700 hover:text-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredImages.map((img, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-850 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:border-emerald-600/40 group flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative h-72 w-full bg-slate-950 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-[#00704A] text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#0a110e]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono text-slate-400 border border-slate-800">
                  {img.category.toUpperCase()}
                </div>
              </div>

              {/* Text content details */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light font-sans">
                    {img.description}
                  </p>
                </div>

                {/* Sub Features detail boxes */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5 font-mono text-[10px] text-slate-400">
                  {img.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#cba258]"></span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
