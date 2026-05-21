"use client";

import React, { useState } from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, HelpCircle } from "lucide-react";

export default function Hero() {
  const materials = [
    {
      id: "oak",
      name: "Gỗ Sồi Nhật (Light Oak)",
      img: "/images/showcase-1.jpg",
      desc: "Khung sồi đỏ Nhật Bản gia cố chịu lực cao, vân gỗ sáng sang trọng."
    },
    {
      id: "interior",
      name: "Ambient Warmth",
      img: "/images/showcase-2.jpg",
      desc: "Nội thất bọc nỉ cách âm tiêu âm cao cấp kèm dải LED sinh học."
    },
    {
      id: "linen",
      name: "Organic Linen",
      img: "/images/showcase-3.jpg",
      desc: "Đệm Memory Foam phục hồi và chăn ga vải lanh hữu cơ mềm mại."
    },
    {
      id: "aisle",
      name: "Aisle Hub Grid",
      img: "/images/showcase-4.jpg",
      desc: "Thiết kế cabin kép đối xứng tối ưu hóa diện tích cho sảnh chờ."
    }
  ];

  const [activeMaterial, setActiveMaterial] = useState(materials[0]);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#f9f8f6] pt-32 pb-20 border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Pitch Side (60% width) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DỰ ÁN TRẠM NGỦ THÔNG MINH - MOBILE NAP HUB</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-[#006241] font-serif">
              Sleep well.<br />
              <span className="text-[#cba258]">
                Work well.
              </span>
            </h1>

            <p className="text-base text-slate-700 max-w-xl font-normal leading-relaxed">
              Mô hình trạm ngủ di động NapNest cung cấp không gian nghỉ ngơi yên tĩnh, sạch sẽ và tiện lợi tại Hà Nội cho sinh viên và giới văn phòng (đặc biệt từ 18-25 tuổi có thu nhập khiêm tốn). Nghỉ ngơi ngắn từ 30-60 phút để tái tạo năng lượng tối đa!
            </p>

            {/* Quick Selling Props */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#edebe9]">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#edebe9] text-[#006241]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-mono">CÁCH ÂM</p>
                  <p className="text-xs font-bold text-[#1E3932]">-35dB Cách Âm</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#edebe9] text-[#006241]">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-mono">KHỬ KHUẨN</p>
                  <p className="text-xs font-bold text-[#1E3932]">UV-C 60s Purge</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#edebe9] text-[#006241]">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-mono">KHÔNG KHÍ</p>
                  <p className="text-xs font-bold text-[#1E3932]">HEPA Airflow</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={scrollToBooking}
                className="group inline-flex items-center gap-2 bg-[#00754A] hover:bg-[#006241] text-white font-bold px-8 py-3.5 rounded-full shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Đặt cabin ngủ ngay
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  const locatorSection = document.getElementById("location-section");
                  if (locatorSection) locatorSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center border-2 border-[#00754A] text-[#00754A] hover:bg-[#edebe9]/40 font-bold px-6 py-3.5 rounded-full active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Tìm địa điểm trạm
              </button>
            </div>
          </div>

          {/* Interactive Material Image Display Side (40% width) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border border-[#edebe9] rounded-3xl p-5 shadow-sm relative overflow-hidden group">
              {/* Product Image Frame */}
              <div className="relative h-[320px] w-full rounded-2xl overflow-hidden bg-slate-100">
                <img
                  src={activeMaterial.img}
                  alt={activeMaterial.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
                
                {/* Active Material Overlay Badge */}
                <div className="absolute top-3 left-3 bg-[#1E3932]/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-white border border-emerald-800">
                  {activeMaterial.name.toUpperCase()}
                </div>
              </div>

              {/* Dynamic Description Box */}
              <div className="mt-4 text-left p-3 bg-[#f9f8f6] rounded-2xl border border-[#edebe9]">
                <h4 className="text-xs font-bold text-[#006241] font-mono">CHẤT LIỆU HIỆN TẠI</h4>
                <p className="text-sm font-semibold text-[#1E3932] mt-1">{activeMaterial.name}</p>
                <p className="text-xs text-slate-500 font-light mt-0.5">{activeMaterial.desc}</p>
              </div>
            </div>

            {/* Material Selector Buttons */}
            <div className="flex flex-wrap gap-2 justify-start">
              {materials.map((mat) => (
                <button
                  key={mat.id}
                  onClick={() => setActiveMaterial(mat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                    activeMaterial.id === mat.id
                      ? "bg-[#00754A] text-white border-[#00754A]"
                      : "bg-white text-slate-600 border-[#edebe9] hover:border-slate-300"
                  }`}
                >
                  {mat.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
