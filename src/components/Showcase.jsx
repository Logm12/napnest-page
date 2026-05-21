"use client";

import React, { useState } from "react";
import { Sparkles, Eye } from "lucide-react";

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
    <section id="showcase-section" className="bg-white py-20 relative overflow-hidden border-b border-[#edebe9]">
      {/* Dynamic Background Glow */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCLUSIVE HIGHLIGHTS</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Hình Ảnh Trực Quan NapNest
          </h2>
          <p className="text-slate-650 font-light">
            Trải nghiệm không gian kén ngủ gỗ sồi Nhật sang trọng, cách âm tuyệt đối và cực kỳ tiện ích cho giấc ngủ ngon của bạn.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-3 mb-10 text-xs font-mono">
          {[
            { id: "all", label: "TẤT CẢ" },
            { id: "interior", label: "NỘI THẤT CABIN" },
            { id: "exterior", label: "BÊN NGOÀI KHUNG" },
            { id: "amenities", label: "TIỆN ÍCH KÈM THEO" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full border font-semibold transition-all duration-350 cursor-pointer ${
                activeTab === tab.id
                  ? "border-[#00754A] bg-[#d4e9e2]/30 text-[#006241]"
                  : "border-[#edebe9] bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700"
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
              className="bg-white border border-[#edebe9] rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:border-[#00754A]/40 group flex flex-col justify-between"
            >
              {/* Image Box */}
              <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-[#1E3932]/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-[#00754A] text-white flex items-center justify-center shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[9px] font-mono text-[#006241] border border-[#edebe9] font-bold">
                  {img.category.toUpperCase()}
                </div>
              </div>

              {/* Text content details */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-800 group-hover:text-[#00754A] transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light font-sans">
                    {img.description}
                  </p>
                </div>

                {/* Sub Features detail boxes */}
                <div className="mt-4 pt-4 border-t border-[#edebe9] space-y-1.5 font-mono text-[10px] text-slate-650">
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
