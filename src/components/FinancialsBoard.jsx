"use client";

import React, { useState, useEffect } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, DollarSign, Calendar, Landmark, CheckSquare, BarChart3 } from "lucide-react";

export default function FinancialsBoard() {
  const [loadTier, setLoadTier] = useState("Medium"); // Low, Medium, Full
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const TIER_STATS = {
    Low: {
      units: 16,
      dailyUsage: 16,
      averageTicket: 84000,
      monthlyRevenue: 16 * 84000 * 30,
      monthlyOpEx: 18000000,
      monthlyNetProfit: (16 * 84000 * 30) - 18000000,
      breakevenMonths: 34,
      initialCapex: 750000000,
      desc: "Mô hình quy mô nhỏ lắp đặt tại các văn phòng nhỏ hoặc quán cà phê vệ tinh."
    },
    Medium: {
      units: 32,
      dailyUsage: 32,
      averageTicket: 84000,
      monthlyRevenue: 32 * 84000 * 30,
      monthlyOpEx: 28000000,
      monthlyNetProfit: (32 * 84000 * 30) - 28000000,
      breakevenMonths: 26,
      initialCapex: 1350000000,
      desc: "Quy mô trung bình thích hợp cho không gian co-working, đại học hoặc ga tàu."
    },
    Full: {
      units: 48,
      dailyUsage: 48,
      averageTicket: 99000,
      monthlyRevenue: 48 * 99000 * 30,
      monthlyOpEx: 38000000,
      monthlyNetProfit: (48 * 99000 * 30) - 38000000,
      breakevenMonths: 19,
      initialCapex: 1950000000,
      desc: "Công suất tối đa lắp đặt tại các sảnh sân bay, bệnh viện hoặc khu vực 24/7."
    }
  };

  const currentStats = TIER_STATS[loadTier];

  const generateChartData = () => {
    const data = [];
    const months = 36;
    const monthlyProfit = currentStats.monthlyNetProfit;
    const initialCapex = currentStats.initialCapex;

    for (let m = 0; m <= months; m += 3) {
      const netCashFlow = -initialCapex + (m * monthlyProfit);
      data.push({
        month: `Tháng ${m}`,
        VND: Math.round(netCashFlow / 1000000),
      });
    }
    return data;
  };

  const chartData = generateChartData();

  return (
    <section id="investor-section" className="bg-[#f2f0eb] py-20 relative overflow-hidden border-b border-[#edebe9]">
      
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
            <Landmark className="w-3.5 h-3.5" />
            <span>KẾ HOẠCH TÀI CHÍNH</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Hiệu Suất Đầu Tư &amp; Điểm Hòa Vốn
          </h2>
          <p className="text-slate-600 font-light">
            Bảng tính giả lập dòng tiền tích lũy và thời gian hoàn vốn thực tế của dự án NapNest dưới các mức công suất vận hành khác nhau.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Controls & Metrics Side (Left - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            
            <div className="space-y-6">
              {/* Capacity Multi-Stage Selectors */}
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase font-mono">
                  Chọn Quy Mô Vận Hành Trạm ngủ
                </span>
                
                <div className="flex flex-col gap-3">
                  {["Low", "Medium", "Full"].map((tier) => {
                    const isSelected = loadTier === tier;
                    const stats = TIER_STATS[tier];
                    return (
                      <button
                        key={tier}
                        onClick={() => setLoadTier(tier)}
                        className={`flex items-start justify-between p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-[#00754A] bg-[#d4e9e2]/30 text-[#006241]"
                            : "border-[#edebe9] bg-white text-slate-650 hover:border-slate-355"
                        }`}
                      >
                        <div className="flex gap-3">
                          <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center ${
                            isSelected ? "border-[#00754A] bg-[#00754A] text-white" : "border-slate-300"
                          }`}>
                            {isSelected && <CheckSquare className="w-3 h-3" />}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-800">Quy mô {tier === "Low" ? "Nhỏ" : tier === "Medium" ? "Vừa" : "Tối đa"}</p>
                            <p className="text-xs text-slate-500 mt-0.5 font-light leading-snug">{stats.desc}</p>
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-4">
                          <p className="text-sm font-bold text-[#00754A]">{stats.units} Cabin</p>
                          <p className="text-[10px] text-slate-400 font-mono mt-0.5">lượt nghỉ / ngày</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Financial Readings indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-[#edebe9] rounded-2xl p-4 space-y-1 shadow-sm">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <DollarSign className="w-4 h-4 text-[#00754A]" />
                    <span className="text-[10px] font-mono font-bold">DOANH THU THÁNG</span>
                  </div>
                  <p className="text-xl font-bold text-slate-800">
                    {Math.round(currentStats.monthlyRevenue / 1000000)}Tr VND
                  </p>
                  <p className="text-[9px] text-slate-400 font-mono">Tính trên vé trung bình {currentStats.averageTicket === 84000 ? "84.000" : "99.000"}đ</p>
                </div>

                <div className="bg-white border border-[#edebe9] rounded-2xl p-4 space-y-1 shadow-sm">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <TrendingUp className="w-4 h-4 text-[#cba258]" />
                    <span className="text-[10px] font-mono font-bold">TỶ SUẤT LỢI NHUẬN</span>
                  </div>
                  <p className="text-xl font-bold text-emerald-600">
                    +{Math.round((currentStats.monthlyNetProfit / currentStats.monthlyRevenue) * 100)}%
                  </p>
                  <p className="text-[9px] text-slate-400 font-mono">LN ròng: ~{Math.round(currentStats.monthlyNetProfit / 1000000)}Tr/tháng</p>
                </div>
              </div>
            </div>

            {/* Visual Callout block */}
            <div className="p-5 rounded-2xl bg-[#d4e9e2]/30 border border-[#00754A]/20 space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#00754A]" />
                <h4 className="text-sm font-bold text-slate-800">Tiến Độ Hòa Vốn</h4>
              </div>
              <p className="text-xs text-slate-650 font-light leading-relaxed">
                Với mức vận hành <span className="text-[#006241] font-bold">Quy mô {loadTier === "Low" ? "Nhỏ" : loadTier === "Medium" ? "Vừa" : "Tối đa"}</span>, dự án sẽ đạt điểm hòa vốn và bắt đầu sinh dòng tiền thuần dương sau đúng <span className="text-[#006241] font-bold text-sm bg-white px-2 py-0.5 rounded-full border border-[#edebe9]">{currentStats.breakevenMonths} Tháng</span> kể từ ngày vận hành trạm ngủ.
              </p>
            </div>

          </div>

          {/* Graph Side (Right - 7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#edebe9] rounded-3xl p-6 flex flex-col justify-between min-h-[380px] shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="text-left">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase font-mono">
                  Biểu Đồ Lợi Nhuận Tích Lũy
                </span>
                <p className="text-sm font-bold text-slate-800">Tiến trình dòng tiền (Triệu VND)</p>
              </div>

              <div className="flex items-center gap-1 bg-[#f9f8f6] border border-[#edebe9] rounded-full px-3 py-1.5 text-[10px] text-slate-500 font-mono">
                <BarChart3 className="w-3.5 h-3.5 text-[#00754A]" />
                <span>MÔ HÌNH DỰ PHÒNG DÒNG TIỀN</span>
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
                        <stop offset="5%" stopColor="#00754A" stopOpacity={0.25}/>
                        <stop offset="95%" stopColor="#00754A" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#edebe9" strokeDasharray="3 3" />
                    <XAxis
                      dataKey="month"
                      stroke="#888888"
                      style={{ fontSize: 10, fontFamily: "sans-serif" }}
                    />
                    <YAxis
                      stroke="#888888"
                      style={{ fontSize: 10, fontFamily: "sans-serif" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#ffffff",
                        border: "1px solid #edebe9",
                        borderRadius: "12px",
                        color: "#333333",
                        fontFamily: "sans-serif",
                        fontSize: 11,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
                      }}
                      formatter={(value) => [`${value.toLocaleString()} Tr VND`, "Dòng tiền tích lũy"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="VND"
                      stroke="#00754A"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#colorCash)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-400 font-mono text-xs">
                  Đang tải biểu đồ giả lập tài chính...
                </div>
              )}
            </div>

            {/* Axis explanation tags */}
            <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pt-4 border-t border-[#edebe9] mt-4">
              <span>Trục hoành X: Các tháng vận hành (0 đến 36)</span>
              <span>Trục tung Y: Dòng tiền thuần lũy kế (Triệu VND)</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
