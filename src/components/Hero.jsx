"use client";

import React from "react";
import { Moon, Shield, Award, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#0a110e] pt-24 pb-16">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[450px] h-[450px] bg-[#cba258]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Pitch Side */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-semibold tracking-wide animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COFFEEHOUSE INTEGRATED REST CABINS</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-white">
              Don&apos;t Quit.<br />
              <span className="bg-gradient-to-r from-emerald-400 via-amber-400 to-[#cba258] bg-clip-text text-transparent">
                Just Nap.
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl font-light leading-relaxed">
              Supercharge your cognitive capability and eliminate mid-day coffee crashes. NapNest offers premium, clinical-grade oak wood rest cabins custom-tailored for co-working hubs and transit terminals.
            </p>

            {/* Quick Selling Props */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/60">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Acoustic Shield</p>
                  <p className="text-sm font-semibold text-white">-35dB Sound dampening</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">UV-C Sterilized</p>
                  <p className="text-sm font-semibold text-white">Clinical 60s Purge</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-950/30 border border-amber-500/20 text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Cozy Climate</p>
                  <p className="text-sm font-semibold text-white">HEPA Active Airflow</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={scrollToBooking}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-[#00704A] hover:from-emerald-700 hover:to-[#006241] text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Book Your Pod Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  const investorSection = document.getElementById("investor-section");
                  if (investorSection) investorSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center bg-slate-900/60 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer"
              >
                Investor Pitch Board
              </button>
            </div>
          </div>

          {/* Cozy Oak Wooden Cabin Graphic Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[400px] lg:max-w-none">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-3xl border border-emerald-500/10 scale-105 pointer-events-none"></div>
              
              {/* Main Pod Mockup Glass Card */}
              <div className="bg-slate-950/80 border border-slate-900 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs text-slate-400 font-mono">CABIN SECURE</span>
                  </div>
                  <Moon className="w-4 h-4 text-[#cba258]" />
                </div>

                {/* Cozy Wood Sleep Pod Visual Graphic */}
                <div className="bg-[#0b1310] border border-slate-800/80 rounded-2xl h-64 flex flex-col items-center justify-center relative overflow-hidden group">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40"></div>
                  
                  {/* Oak Wood Cozy Pod Vector Layout */}
                  <svg className="w-48 h-32 relative z-10 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 200 120" fill="none">
                    {/* Shadow */}
                    <ellipse cx="100" cy="108" rx="80" ry="6" fill="#000" fillOpacity="0.5" />
                    
                    {/* Cozy Wooden Pod Case Outlines (Light oak wood) */}
                    <rect x="25" y="20" width="150" height="80" rx="12" fill="#8B5A2B" stroke="#A0522D" strokeWidth="2.5" />
                    {/* Inside panel */}
                    <rect x="32" y="26" width="136" height="68" rx="8" fill="#CD853F" />
                    
                    {/* Pillow & Mattress block */}
                    <rect x="36" y="74" width="128" height="16" rx="3" fill="#E8DCC4" />
                    <rect x="130" y="62" width="28" height="14" rx="4" fill="#D2B48C" />
                    
                    {/* Ceiling LED warm light bars */}
                    <rect x="44" y="32" width="112" height="4" rx="2" fill="#FFF8DC" className="animate-pulse" />
                    <rect x="44" y="32" width="112" height="4" rx="2" fill="#FFD700" fillOpacity="0.5" />

                    {/* Sliding Wood door panels details */}
                    <line x1="100" y1="26" x2="100" y2="94" stroke="#8B5A2B" strokeWidth="2" />
                    <rect x="86" y="50" width="4" height="16" rx="1" fill="#8B5A2B" />
                    <rect x="110" y="50" width="4" height="16" rx="1" fill="#8B5A2B" />

                    {/* Active indicators */}
                    <circle cx="44" cy="84" r="2.5" fill="#10B981" />
                    <circle cx="54" cy="84" r="2.5" fill="#cba258" />
                  </svg>

                  {/* Tech specs readout overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[9px] text-slate-500 font-mono">
                    <span>MATERIAL: JAPANESE LIGHT OAK</span>
                    <span>HEPA AIRFLOW: ACTIVE</span>
                  </div>
                </div>

                {/* Console parameters mockup */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-left">
                  <div className="bg-[#0b1310]/80 border border-slate-900 rounded-xl p-3">
                    <p className="text-[10px] text-slate-500 font-mono">COZY LEVEL</p>
                    <p className="text-base font-semibold text-[#cba258]">PREMIUM OAK</p>
                  </div>
                  <div className="bg-[#0b1310]/80 border border-slate-900 rounded-xl p-3">
                    <p className="text-[10px] text-slate-500 font-mono">UVC STATE</p>
                    <p className="text-base font-semibold text-emerald-400">READY 100%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
