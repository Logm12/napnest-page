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
    <section className="relative overflow-hidden bg-slate-950 pt-24 pb-16">
      {/* Decorative Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Pitch Side */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-xs font-semibold tracking-wide animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VIBECODE KIT v6.0 CERTIFIED PREMIUM POWER</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-white">
              Don&apos;t Quit.<br />
              <span className="bg-gradient-to-r from-blue-400 via-amber-400 to-indigo-400 bg-clip-text text-transparent">
                Just Nap.
              </span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl font-light leading-relaxed">
              Supercharge your cognitive capability and eliminate mid-day crashes in under 20 minutes. NapNest offers automated, clinical-grade micro-sanitized rest modules custom-tailored for peak performers.
            </p>

            {/* Quick Selling Props */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-900/30 border border-blue-500/20 text-blue-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Acoustic Shield</p>
                  <p className="text-sm font-semibold text-white">-35dB Sound dampening</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-purple-900/30 border border-purple-500/20 text-purple-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">UV-C Sterilized</p>
                  <p className="text-sm font-semibold text-white">Clinical 60s Purge</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-900/30 border border-amber-500/20 text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400">Dynamic Airflow</p>
                  <p className="text-sm font-semibold text-white">HEPA Filtration</p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={scrollToBooking}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                Book Your Pod Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  const investorSection = document.getElementById("investor-section");
                  if (investorSection) investorSection.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-semibold px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer"
              >
                Investor Pitch Board
              </button>
            </div>
          </div>

          {/* Interactive Mock Graphic Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[400px] lg:max-w-none">
              {/* Outer Decorative Ring */}
              <div className="absolute inset-0 rounded-3xl border border-blue-500/20 scale-105 pointer-events-none"></div>
              
              {/* Main Pod Mockup Glass Card */}
              <div className="bg-slate-900/90 border border-slate-800/80 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>

                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs text-slate-400 font-mono">SYSTEM ACTIVE</span>
                  </div>
                  <Moon className="w-4 h-4 text-amber-400" />
                </div>

                {/* Cyber Sleep Pod Vector Graphic Illustration */}
                <div className="bg-slate-950 border border-slate-800/60 rounded-2xl h-64 flex flex-col items-center justify-center relative overflow-hidden group">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.6)_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
                  
                  {/* Sleek Pod Design */}
                  <svg className="w-48 h-32 relative z-10 transition-transform duration-500 group-hover:scale-105" viewBox="0 0 200 120" fill="none">
                    {/* Shadow */}
                    <ellipse cx="100" cy="105" rx="75" ry="8" fill="#000" fillOpacity="0.4" />
                    
                    {/* Pod Shell Base */}
                    <path d="M30 80C30 50 60 25 100 25C140 25 170 50 170 80C170 92 150 95 100 95C50 95 30 92 30 80Z" fill="url(#shellGrad)" stroke="#1E40AF" strokeWidth="2" />
                    
                    {/* Glass Visor */}
                    <path d="M60 55C60 45 75 35 100 35C125 35 140 45 140 55C140 68 125 72 100 72C75 72 60 68 60 55Z" fill="url(#glassGrad)" fillOpacity="0.85" stroke="#3B82F6" strokeWidth="1.5" />
                    
                    {/* Dynamic Ambient Glow inside graphic */}
                    <circle cx="100" cy="55" r="22" fill="#38BDF8" fillOpacity="0.2" className="animate-pulse" />
                    <line x1="85" y1="55" x2="115" y2="55" stroke="#38BDF8" strokeWidth="1" strokeDasharray="3 3" />
                    
                    {/* Status lights on Shell */}
                    <circle cx="48" cy="78" r="2" fill="#10B981" />
                    <circle cx="56" cy="80" r="2" fill="#3B82F6" />
                    <circle cx="64" cy="82" r="2" fill="#F59E0B" />

                    {/* Gradients */}
                    <defs>
                      <linearGradient id="shellGrad" x1="100" y1="25" x2="100" y2="95" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1E293B" />
                        <stop offset="0.5" stopColor="#0F172A" />
                        <stop offset="1" stopColor="#020617" />
                      </linearGradient>
                      <linearGradient id="glassGrad" x1="100" y1="35" x2="100" y2="72" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#1E3A8A" stopOpacity="0.8" />
                        <stop offset="1" stopColor="#0B1329" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Tech specs readout overlay */}
                  <div className="absolute bottom-3 left-4 right-4 flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>SHELL: GEN IV RED-CORE MDF</span>
                    <span>SOUND SHIELD: ACTIVE</span>
                  </div>
                </div>

                {/* Console parameters mockup */}
                <div className="mt-4 grid grid-cols-2 gap-3 text-left">
                  <div className="bg-slate-950/60 border border-slate-800/40 rounded-xl p-3">
                    <p className="text-[10px] text-slate-500 font-mono">TEMPERATURE</p>
                    <p className="text-base font-semibold text-slate-200">22.5 °C</p>
                  </div>
                  <div className="bg-slate-950/60 border border-slate-800/40 rounded-xl p-3">
                    <p className="text-[10px] text-slate-500 font-mono">HEPA STATE</p>
                    <p className="text-base font-semibold text-emerald-400">OPTIMAL</p>
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
