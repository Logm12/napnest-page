"use client";

import React from "react";
import Hero from "@/components/Hero";
import BookingGrid from "@/components/BookingGrid";
import Showcase from "@/components/Showcase";
import PodSimulator from "@/components/PodSimulator";
import CompetitorMatrix from "@/components/CompetitorMatrix";
import FinancialsBoard from "@/components/FinancialsBoard";
import { useBooking } from "@/context/BookingContext";
import { Moon, User, HelpCircle, Shield, PhoneCall } from "lucide-react";

export default function Home() {
  const { activeSession } = useBooking();

  return (
    <main className="w-full bg-slate-950 min-h-screen">
      {/* 
        Strict PC Layout Wrapper bounding content safely between 1280px and 1920px width brackets. 
        Centered, with overflow protection.
      */}
      <div className="max-w-[1920px] min-w-[1280px] mx-auto bg-slate-950 overflow-hidden relative shadow-2xl border-l border-r border-slate-900">
        
        {/* PREMIUM FIXED TOP NAVIGATION */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900/60 max-w-[1920px] min-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="w-9 h-9 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Moon className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-black tracking-tight text-white">
              Nap<span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Nest</span>
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex items-center gap-8 text-xs font-mono tracking-widest text-slate-400 uppercase">
            <button
              onClick={() => document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Grid Map
            </button>
            
            <button
              onClick={() => document.getElementById("showcase-section")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Cabin Showcase
            </button>
            
            {activeSession && (
              <button
                onClick={() => document.getElementById("simulator-section")?.scrollIntoView({ behavior: "smooth" })}
                className="text-amber-400 hover:text-amber-300 font-semibold transition-colors flex items-center gap-1 cursor-pointer animate-pulse"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                Console Simulator
              </button>
            )}

            <button
              onClick={() => document.getElementById("matrix-section")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Tech Features
            </button>

            <button
              onClick={() => document.getElementById("investor-section")?.scrollIntoView({ behavior: "smooth" })}
              className="hover:text-blue-400 transition-colors cursor-pointer"
            >
              Investor Pitch
            </button>
          </nav>

          {/* Action Call / Contact info */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 text-right">
              <span className="text-[10px] text-slate-500 font-mono block">SUPPORT HOTLINE</span>
              <span className="text-xs font-semibold text-slate-300 font-mono">1900-NAPNEST</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 cursor-pointer hover:border-slate-700 transition-colors">
              <User className="w-4 h-4" />
            </div>
          </div>
        </header>

        {/* HERO VALUE PROP CONTAINER */}
        <Hero />

        {/* MOCK BOOKING GRID CONTAINER */}
        <BookingGrid />

        {/* COZY OAK SHOWCASE IMAGES CONTAINER */}
        <Showcase />

        {/* IN-POD SIMULATION CONSOLE CONTAINER */}
        <PodSimulator />

        {/* COMPARATIVE ADVANTAGES CONTAINER */}
        <CompetitorMatrix />

        {/* INVESTOR PROJECTED YIELD CURVES */}
        <FinancialsBoard />

        {/* PREMIUM SLATE FOOTER */}
        <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6 text-slate-600 font-mono text-[11px]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1">
              <p className="font-bold text-slate-400">NAPNEST GLOBAL INC. &copy; 2026</p>
              <p>Automated Clinical Sleep Modules &amp; Micro-climate Habitats.</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Operations</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Safety Standard Codes</a>
            </div>
            <div className="text-right space-y-1">
              <p className="text-slate-500">BUILD VERSION: VIBECODE KIT v6.0</p>
              <p className="flex items-center gap-1 justify-end text-emerald-500/80">
                <Shield className="w-3.5 h-3.5" />
                Active clinical UV-C secure
              </p>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
