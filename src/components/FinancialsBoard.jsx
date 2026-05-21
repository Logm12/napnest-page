"use client";

import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, DollarSign, Calendar, Landmark, CheckSquare, BarChart3 } from "lucide-react";

export default function FinancialsBoard() {
  const [loadTier, setLoadTier] = useState("Medium"); // Low, Medium, Full
  const [mounted, setMounted] = useState(false);

  // Recharts needs client-side mounting to avoid hydration issues in Next.js App Router
  useEffect(() => {
    setMounted(true);
  }, []);

  const TIER_STATS = {
    Low: {
      units: 16,
      dailyUsage: 16,
      averageTicket: 84000, // Average 3 hours booking
      monthlyRevenue: 16 * 84000 * 30, // 40.3M VND
      monthlyOpEx: 18000000,
      monthlyNetProfit: (16 * 84000 * 30) - 18000000,
      breakevenMonths: 34,
      initialCapex: 750000000, // 750M VND
      desc: "Low operational volume scale. Simulates localized corporate installations."
    },
    Medium: {
      units: 32,
      dailyUsage: 32,
      averageTicket: 84000,
      monthlyRevenue: 32 * 84000 * 30, // 80.6M VND
      monthlyOpEx: 28000000,
      monthlyNetProfit: (32 * 84000 * 30) - 28000000,
      breakevenMonths: 26,
      initialCapex: 1350000000, // 1.35B VND
      desc: "Medium volume scale. Simulates typical co-working hubs or hybrid transit locations."
    },
    Full: {
      units: 48,
      dailyUsage: 48,
      averageTicket: 99000, // Average 4 hours booking
      monthlyRevenue: 48 * 99000 * 30, // 142.5M VND
      monthlyOpEx: 38000000,
      monthlyNetProfit: (48 * 99000 * 30) - 38000000,
      breakevenMonths: 19,
      initialCapex: 1950000000, // 1.95B VND
      desc: "Maximum capacity scale. Simulates airport lounges or 24/7 high-density tech hubs."
    }
  };

  const currentStats = TIER_STATS[loadTier];

  // Generate dynamic chart data based on selected load tier
  const generateChartData = () => {
    const data = [];
    const months = 36;
    const monthlyProfit = currentStats.monthlyNetProfit;
    const initialCapex = currentStats.initialCapex;

    for (let m = 0; m <= months; m += 3) {
      // Cumulative Net Cash Flow: Initial Capex is negative, climbs with profits
      const netCashFlow = -initialCapex + (m * monthlyProfit);
      data.push({
        month: `M${m}`,
        VND: Math.round(netCashFlow / 1000000), // convert to Millions VND for cleaner graphing
      });
    }
    return data;
  };

  const chartData = generateChartData();

  return (
    <section id="investor-section" className="bg-slate-950 py-20 relative overflow-hidden border-b border-slate-900">
      
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-950/20 text-indigo-400 text-xs font-mono font-medium">
            <Landmark className="w-3.5 h-3.5" />
            <span>FINANCIAL PITCH BOARD</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Investor Capacity &amp; Break-Even Modifiers
          </h2>
          <p className="text-slate-400 font-light">
            Interactive modeling engine demonstrating the rapid break-even scheduling of NapNest hubs under various capacity scaling benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Controls & Metrics Side (Left - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            
            <div className="space-y-6">
              {/* Capacity Multi-Stage Selectors */}
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono">
                  Select Hub Operational Capacity
                </span>
                
                <div className="flex flex-col gap-3">
                  {["Low", "Medium", "Full"].map((tier) => {
                    const isSelected = loadTier === tier;
                    const stats = TIER_STATS[tier];
                    return (
                      <button
                        key={tier}
                        onClick={() => setLoadTier(tier)}
                        className={`flex items-start justify-between p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "border-indigo-500 bg-indigo-950/30 text-white"
                            : "border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <div className="flex gap-3">
                          <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center ${
                            isSelected ? "border-indigo-400 bg-indigo-500 text-white" : "border-slate-600"
                          }`}>
                            {isSelected && <CheckSquare className="w-3.5 h-3.5" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-200">{tier} Load Capacity</p>
                            <p className="text-[11px] text-slate-400 mt-0.5">{stats.desc}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-indigo-400">{stats.units} Pods</p>
                          <p className="text-[10px] text-slate-500 font-mono mt-0.5">daily usages</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Financial Readings indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900 border border-slate-850 rounded-2xl p-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <DollarSign className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] font-mono font-semibold">EST. MONTHLY REVENUE</span>
                  </div>
                  <p className="text-lg font-black text-white">
                    {Math.round(currentStats.monthlyRevenue / 1000000)}M VND
                  </p>
                  <p className="text-[9px] text-slate-500 font-mono">Based on ~{currentStats.averageTicket.toLocaleString()} ticket average</p>
                </div>

                <div className="bg-slate-900 border border-slate-850 rounded-2xl p-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <TrendingUp className="w-4 h-4 text-indigo-500" />
                    <span className="text-[10px] font-mono font-semibold">EST. NET MARGIN</span>
                  </div>
                  <p className="text-lg font-black text-emerald-400">
                    +{Math.round((currentStats.monthlyNetProfit / currentStats.monthlyRevenue) * 100)}%
                  </p>
                  <p className="text-[9px] text-slate-500 font-mono">Net Profit: ~{Math.round(currentStats.monthlyNetProfit / 1000000)}M/mo</p>
                </div>
              </div>
            </div>

            {/* Visual Callout block */}
            <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-400" />
                <h4 className="text-sm font-bold text-white">Break-Even Velocity</h4>
              </div>
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Under <span className="text-white font-semibold">{loadTier} Load</span> parameters, the hub breaks even and achieves pure net positive yields within exactly <span className="text-amber-400 font-extrabold text-sm">{currentStats.breakevenMonths} Months</span> of launch operations.
              </p>
            </div>

          </div>

          {/* Graph Side (Right - 7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between min-h-[380px]">
            <div className="flex justify-between items-center mb-6">
              <div className="text-left">
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono">
                  Cumulative Yield Trend Curve
                </span>
                <p className="text-sm font-bold text-slate-200">Cash Flow Timeline (Millions VND)</p>
              </div>

              <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-[10px] text-slate-400 font-mono">
                <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
                <span>DYNAMIC PROJECTION MODEL</span>
              </div>
            </div>

            {/* Recharts Wrapper */}
            <div className="h-64 w-full flex-1">
              {mounted ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#1E293B" strokeDasharray="3 3" />
                    <XAxis
                      dataKey="month"
                      stroke="#475569"
                      style={{ fontSize: 10, fontFamily: "monospace" }}
                    />
                    <YAxis
                      stroke="#475569"
                      style={{ fontSize: 10, fontFamily: "monospace" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0F172A",
                        border: "1px solid #334155",
                        borderRadius: "12px",
                        color: "#F1F5F9",
                        fontFamily: "monospace",
                        fontSize: 11
                      }}
                      formatter={(value) => [`${value.toLocaleString()}M VND`, "Net Yield"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="VND"
                      stroke="#6366F1"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#colorCash)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 font-mono text-xs">
                  Loading interactive model graphics...
                </div>
              )}
            </div>

            {/* Axis explanation tags */}
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono pt-4 border-t border-slate-800/80 mt-4">
              <span>X-AXIS: Operational months (0 to 36)</span>
              <span>Y-AXIS: Cumulative cash flows (Millions VND)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
