"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles, Trophy } from "lucide-react";

export default function CompetitorMatrix() {
  const comparisonData = [
    {
      feature: "Fireproofing & Shell Material",
      napnest: "Class-A Red-Core MDF Fireproof Wood composite",
      cafe: "Basic plywood partitions (High risk)",
      office: "Open desks or fabric dividers (Unprotected)",
      highlight: true
    },
    {
      feature: "Sound dampening barriers",
      napnest: "Dual-layer shell & Acoustic insulation foam (-35dB)",
      cafe: "Curtain flaps or thin drywall boards (-5dB)",
      office: "None - constant open space interruptions (0dB)",
      highlight: true
    },
    {
      feature: "Sanitization & Disinfection",
      napnest: "Clinical 60s automated UV-C sterilization loop",
      cafe: "Irregular manual spray wipes",
      office: "Periodic cleaning crew sweeps",
      highlight: true
    },
    {
      feature: "Climate & Air Filtration",
      napnest: "HEPA-13 active flow ventilation",
      cafe: "Shared standard room AC ducting",
      office: "Central ventilation filters",
      highlight: false
    },
    {
      feature: "LED Circadian Lighting",
      napnest: "Customizable color spectrum (Amber/Cyan/Purple)",
      cafe: "Standard white fluorescents or dark room",
      office: "Harsh fluorescent white panels",
      highlight: false
    }
  ];

  return (
    <section id="matrix-section" className="bg-slate-900/50 py-20 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-950/20 text-blue-400 text-xs font-mono font-medium">
            <Trophy className="w-3.5 h-3.5" />
            <span>INDUSTRY LEADERSHIP</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Designed for Performance
          </h2>
          <p className="text-slate-400 font-light">
            We contrasted NapNest against traditional options. Here is how our premium engineering features rank side-by-side.
          </p>
        </div>

        {/* Matrix Card */}
        <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-900/80 border-b border-slate-800 text-xs font-mono text-slate-400 uppercase">
                  <th className="py-5 px-6 font-bold">Parameters Checklist</th>
                  <th className="py-5 px-6 font-bold text-blue-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-500 animate-spin" style={{ animationDuration: "3s" }} />
                    NapNest Module
                  </th>
                  <th className="py-5 px-6 font-bold">Traditional Nap Cafes</th>
                  <th className="py-5 px-6 font-bold">Standard Office Desk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-slate-900/20 ${
                      row.highlight ? "bg-blue-950/5" : ""
                    }`}
                  >
                    {/* Feature Label */}
                    <td className="py-5 px-6 font-semibold text-slate-200">
                      {row.feature}
                    </td>

                    {/* NapNest Score */}
                    <td className="py-5 px-6 font-medium text-white bg-blue-950/10 border-l border-r border-blue-500/10">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.napnest}</span>
                      </div>
                    </td>

                    {/* Cafe Score */}
                    <td className="py-5 px-6 text-slate-400 font-light">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-red-500/15 text-red-400 border border-red-500/25 rounded-full flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.cafe}</span>
                      </div>
                    </td>

                    {/* Office Score */}
                    <td className="py-5 px-6 text-slate-400 font-light">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-red-500/15 text-red-400 border border-red-500/25 rounded-full flex items-center justify-center shrink-0">
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
          <div className="bg-slate-900/60 p-5 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-500 font-mono">
            <ShieldAlert className="w-4 h-4 text-blue-400 shrink-0" />
            <span>Class-A specifications are fully certified under International Safety and Ergonomics Standard Codes.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
