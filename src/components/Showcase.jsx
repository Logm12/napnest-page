"use client";

import React, { useState } from "react";
import { Sparkles } from "lucide-react";

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", name: "All Images" },
    { id: "Exterior", name: "Exterior Structure" },
    { id: "Interior", name: "Interior Comfort" },
    { id: "Amenities", name: "Premium Amenities" }
  ];

  const photos = [
    {
      img: "/images/showcase-1.jpg",
      title: "Light-Oak Dual Cabinets",
      desc: "Dual-layer shell with integrated climbing ladder",
      category: "Exterior"
    },
    {
      img: "/images/showcase-2.jpg",
      title: "Circadian LED Warmth",
      desc: "Self-regulating warm LED strip designed for circadian sleep cycles",
      category: "Interior"
    },
    {
      img: "/images/showcase-3.jpg",
      title: "Minimalist Bedding Space",
      desc: "Pressure-relieving memory foam mattress and 100% natural linen sheets",
      category: "Interior"
    },
    {
      img: "/images/showcase-4.jpg",
      title: "Symmetric Cabin Corridors",
      desc: "Symmetric layout optimizing corridors for transit nodes",
      category: "Exterior"
    },
    {
      img: "/images/showcase-5.jpg",
      title: "Convenient Bedside Charging",
      desc: "Equipped with power sockets, HEPA ventilation (23°C), and modern private restrooms",
      category: "Amenities"
    }
  ];

  const filteredPhotos = activeCategory === "All"
    ? photos
    : photos.filter(p => p.category === activeCategory);

  return (
    <section id="showcase-section" className="bg-[#f9f8f6] py-20 border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>NAPNEST GALLERY</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Cozy Cabin Experience Showcase
          </h2>
          <p className="text-slate-650 font-light">
            Authentic snapshots from our physical NapNest flagship installations. Modern, minimalist, and built for resting.
          </p>
        </div>

        {/* Category Toggles */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-250 cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-[#00754A] text-white border-[#00754A]"
                  : "bg-white text-slate-700 border-[#edebe9] hover:border-slate-350"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#edebe9] rounded-3xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 hover:shadow-md"
            >
              {/* Photo Box */}
              <div className="h-60 w-full overflow-hidden bg-slate-100 relative">
                <img
                  src={photo.img}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                
                {/* Category Badge overlay */}
                <div className="absolute bottom-3 left-3 bg-[#1E3932]/80 backdrop-blur-sm px-2.5 py-0.5 rounded-md text-[9px] font-mono text-white border border-emerald-800">
                  {photo.category.toUpperCase()}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h4 className="text-sm font-bold text-[#1E3932]">{photo.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-light leading-relaxed">
                    {photo.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
