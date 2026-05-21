"use client";

import React from "react";
import Hero from "@/components/Hero";
import BookingGrid from "@/components/BookingGrid";
import Showcase from "@/components/Showcase";
import Team from "@/components/Team";
import LocationSection from "@/components/LocationSection";
import PodSimulator from "@/components/PodSimulator";
import CompetitorMatrix from "@/components/CompetitorMatrix";
import FinancialsBoard from "@/components/FinancialsBoard";
import Chatbot from "@/components/Chatbot";
import { useBooking } from "@/context/BookingContext";
import { ShoppingBag, User, ShieldCheck } from "lucide-react";

export default function Home() {
  const { activeSession } = useBooking();

  return (
    <main className="w-full bg-[#f9f8f6] min-h-screen">
      {/* 
        Strict PC Layout Wrapper bounding content safely between 1280px and 1920px width brackets. 
        Centered, with overflow protection.
      */}
      <div className="max-w-[1920px] min-w-[1280px] mx-auto bg-[#f9f8f6] overflow-hidden relative shadow-md">
        
        {/* PREMIUM FIXED TOP NAVIGATION */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#edebe9] max-w-[1920px] min-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo & Branding */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img 
              src="/images/logo.png" 
              alt="NapNest Logo" 
              className="w-10 h-10 rounded-full object-contain bg-white border border-[#edebe9] shadow-sm"
            />
            <span className="text-xl font-bold tracking-tight text-[#006241] font-serif">
              NapNest
            </span>
          </div>

          {/* Quick Nav Links Styled as Cafe Outlines */}
          <nav className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              About
            </button>
            
            <button
              onClick={() => document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Booking Grid
            </button>
            
            <button
              onClick={() => document.getElementById("showcase-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Showcase
            </button>

            <button
              onClick={() => document.getElementById("team-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Team
            </button>

            <button
              onClick={() => document.getElementById("location-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Hub Location
            </button>

            {activeSession && (
              <button
                onClick={() => document.getElementById("simulator-section")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-amber-300 bg-amber-50 rounded-full px-4 py-2 hover:bg-amber-100/60 text-amber-800 font-bold cursor-pointer text-xs transition-colors animate-pulse"
              >
                Your Cabin
              </button>
            )}

            <button
              onClick={() => document.getElementById("matrix-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Tech Features
            </button>

            <button
              onClick={() => document.getElementById("investor-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Investor Pitch
            </button>
          </nav>

          {/* Action Call / Cart Badge / Contact Us Button */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart Icon with Badge */}
            <div className="relative p-2 text-slate-700 hover:text-[#00754A] cursor-pointer transition-colors">
              <ShoppingBag className="w-5.5 h-5.5" />
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#cba258] text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                1
              </span>
            </div>

            <button
              onClick={() => {
                const footer = document.querySelector("footer");
                if (footer) footer.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#1E3932] hover:bg-[#006241] text-white font-bold text-xs px-5 py-2.5 rounded-full active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              Contact Us
            </button>
          </div>
        </header>

        {/* HERO VALUE PROP CONTAINER */}
        <Hero />

        {/* MOCK BOOKING GRID CONTAINER */}
        <BookingGrid />

        {/* COZY OAK SHOWCASE IMAGES CONTAINER */}
        <Showcase />

        {/* TEAM PIONEERS CONTAINER */}
        <Team />

        {/* NEW LOCATION SECTION */}
        <LocationSection />

        {/* IN-POD SIMULATION CONSOLE CONTAINER */}
        <PodSimulator />

        {/* COMPARATIVE ADVANTAGES CONTAINER */}
        <CompetitorMatrix />

        {/* INVESTOR PROJECTED YIELD CURVES */}
        <FinancialsBoard />

        {/* CHATBOT INTEGRATION */}
        <Chatbot />

        {/* PREMIUM DEEP GREEN FOOTER */}
        <footer className="bg-[#1E3932] border-t border-emerald-800/20 py-16 px-8 text-[#edebe9]/70 font-sans text-xs">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#edebe9]/10 pb-12 mb-12 text-left">
            
            {/* Brand column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/logo.png" 
                  alt="NapNest Logo" 
                  className="w-10 h-10 rounded-full object-contain bg-white border border-[#edebe9] shadow-sm"
                />
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  NapNest
                </span>
              </div>
              <p className="text-xs text-[#edebe9]/60 leading-relaxed font-light">
                First premium, clinical-grade mobile nap hub network in Vietnam. Designed to provide high-quality acoustic silence and clinical-grade UV-C sanitation for students and young working professionals.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white font-serif">Quick Links</h4>
              <ul className="space-y-2 text-[#edebe9]/60 font-light">
                <li><a href="#" className="hover:text-white transition-colors">About Project</a></li>
                <li><a href="#booking-section" className="hover:text-white transition-colors">Booking Grid</a></li>
                <li><a href="#showcase-section" className="hover:text-white transition-colors">Cabin Showcase</a></li>
                <li><a href="#location-section" className="hover:text-white transition-colors">Hub Location</a></li>
              </ul>
            </div>

            {/* Safety specifications */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white font-serif">Safety & Specs</h4>
              <ul className="space-y-2 text-[#edebe9]/60 font-light">
                <li>60s Automatic UV-C Purge</li>
                <li>Active HEPA-13 Fresh Airflow</li>
                <li>Class-A Fireproof Composite Wood</li>
                <li>Acoustic Shielding (-35dB Sound dampening)</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white font-serif">Contact Info</h4>
              <ul className="space-y-2 text-[#edebe9]/60 font-light font-mono text-[11px]">
                <li>Address: 144 Xuan Thuy, Cau Giay, Hanoi</li>
                <li>Hotline: 1900-NAPNEST</li>
                <li>Email: support@napnest.com</li>
                <li className="flex items-center gap-1 text-emerald-400 font-bold mt-2 font-sans font-normal normal-case">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  Clinical Grade Cleanliness
                </li>
              </ul>
            </div>

          </div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#edebe9]/50 font-light text-[11px]">
            <p className="font-medium text-[#edebe9]/70">Copyright &copy; 2026 NAPNEST GLOBAL INC. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Operations</a>
              <a href="#" className="hover:text-white transition-colors">Safety Standards</a>
            </div>
            <p className="font-mono text-[10px]">VIBECODE KIT v6.0 • BUILD: PRODUCTION READY</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
