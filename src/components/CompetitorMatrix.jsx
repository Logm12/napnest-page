"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles, Trophy } from "lucide-react";

export default function CompetitorMatrix() {
  const comparisonData = [
    {
      feature: "Fireproofing & Shell Material",
      napnest: "Class-A Red-Core fireproof oak wood composite (Medical-grade)",
      cafe: "Basic thin plywood panels (High safety risk)",
      office: "Open office desks or fabric dividers (Zero protection)",
      highlight: true
    },
    {
      feature: "Sound Dampening & Noise Control",
      napnest: "Dual-layer shell & professional acoustic foam (Dampens -35dB)",
      cafe: "Curtain flaps or single-layer drywalls (Dampens -5dB)",
      office: "None - open space with constant noise interruptions (0dB)",
      highlight: true
    },
    {
      feature: "Sanitization & Sterilization",
      napnest: "Clinical 60s automated UV-C sterilization cycle after each rest",
      cafe: "Irregular manual disinfectant spray wipes",
      office: "Standard office cleaning sweeps (once daily)",
      highlight: true
    },
    {
      feature: "Climate & Air Filtration",
      napnest: "Active HEPA-13 airflow filtration system",
      cafe: "Shared building central AC",
      office: "Standard office central duct (Unfiltered)",
      highlight: false
    },
    {
      feature: "Circadian Ambient Lighting",
      napnest: "Color spectrum LEDs mimicking circadian phases",
      cafe: "Dim ambient room or generic lamps",
      office: "Harsh commercial fluorescent white panels",
      highlight: false
    }
  ];

  return (
    <section id="matrix-section" className="bg-[#f9f8f6] py-20 border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
            <Trophy className="w-3.5 h-3.5" />
            <span>COMPETITIVE ADVANTAGE</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Why Choose NapNest?
          </h2>
          <p className="text-slate-650 font-light">
            A side-by-side technical comparison of our premium sleep modules against standard resting options.
          </p>
        </div>

        {/* Matrix Card */}
        <div className="bg-white border border-[#edebe9] rounded-3xl overflow-hidden shadow-sm">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#f9f8f6] border-b border-[#edebe9] text-xs font-mono text-slate-500 uppercase">
                  <th className="py-5 px-6 font-bold">Safety &amp; Comfort Parameters</th>
                  <th className="py-5 px-6 font-bold text-[#006241] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#cba258] animate-pulse" />
                    NapNest Pod Module
                  </th>
                  <th className="py-5 px-6 font-bold">Traditional Nap Cafes</th>
                  <th className="py-5 px-6 font-bold">Standard Office Desk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#edebe9] text-sm text-slate-700">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-[#f2f0eb]/20 ${
                      row.highlight ? "bg-[#d4e9e2]/5" : ""
                    }`}
                  >
                    {/* Feature Label */}
                    <td className="py-5 px-6 font-bold text-slate-800 text-left">
                      {row.feature}
                    </td>

                    {/* NapNest Score */}
                    <td className="py-5 px-6 font-semibold text-[#006241] bg-[#d4e9e2]/10 border-l border-r border-[#edebe9]/60 text-left">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#d4e9e2] text-[#00754A] border border-emerald-300 rounded-full flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.napnest}</span>
                      </div>
                    </td>

                    {/* Cafe Score */}
                    <td className="py-5 px-6 text-slate-500 font-light text-left">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-red-50 text-red-500 border border-red-150 rounded-full flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.cafe}</span>
                      </div>
                    </td>

                    {/* Office Score */}
                    <td className="py-5 px-6 text-slate-500 font-light text-left">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-red-50 text-red-500 border border-red-150 rounded-full flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.office}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Matrix Footer Note */}
          <div className="bg-[#f9f8f6] p-5 border-t border-[#edebe9] flex items-center gap-2 text-xs text-slate-500 font-mono text-left">
            <ShieldAlert className="w-4 h-4 text-[#00754A] shrink-0" />
            <span>All structural components are certified under International Safety and Ergonomics Standard Codes.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
