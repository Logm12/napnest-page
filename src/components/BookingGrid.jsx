"use client";

import React from "react";
import { useBooking } from "@/context/BookingContext";
import { Check, ShieldAlert, Sparkles, MapPin, Zap } from "lucide-react";

export default function BookingGrid() {
  const {
    stations,
    selectedStation,
    setSelectedStation,
    pods,
    selectedPodId,
    selectPod,
    bookingHours,
    setBookingHours,
    currentPrice,
    handleCheckout
  } = useBooking();

  const selectedPod = pods.find((p) => p.id === selectedPodId);

  return (
    <section id="booking-section" className="bg-slate-900/50 py-20 border-t border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Select Your Station &amp; Sleep Pod
          </h2>
          <p className="text-slate-400 font-light">
            Real-time grid showing automated pods. Choose an available (green) pod, set your resting duration, and unlock immediate relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Grid Side (Left) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Station dropdown selector */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-900/30 rounded-xl border border-blue-500/20 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-500 font-mono">SELECTED HUB STATION</p>
                  <h3 className="text-base font-semibold text-white">{selectedStation.name}</h3>
                </div>
              </div>

              {/* Selector */}
              <div className="relative">
                <select
                  value={selectedStation.id}
                  onChange={(e) => {
                    const found = stations.find((s) => s.id === e.target.value);
                    if (found) setSelectedStation(found);
                  }}
                  className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-blue-500 transition-all cursor-pointer w-full md:w-64"
                >
                  {stations.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Grid Map Wrapper */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                <span className="text-sm font-semibold text-slate-300">Cluster Pod Layout Matrix</span>
                
                {/* Visual Key Indicators */}
                <div className="flex gap-4 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-400">Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="text-slate-400">Occupied</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                    <span className="text-slate-400">Sterilizing</span>
                  </div>
                </div>
              </div>

              {/* 12-Pod CSS Grid Mapping */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {pods.map((pod) => {
                  const isSelected = selectedPodId === pod.id;
                  const isAvailable = pod.status === "Available";
                  const isOccupied = pod.status === "Occupied";
                  const isSterilizing = pod.status === "Sterilizing";

                  let cardStyle = "border-slate-800 bg-slate-900/40 hover:border-slate-700 cursor-pointer";
                  let statusGlow = "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
                  
                  if (isOccupied) {
                    cardStyle = "border-red-900/30 bg-red-950/10 cursor-not-allowed opacity-65";
                    statusGlow = "bg-red-500/20 text-red-400 border-red-500/30";
                  } else if (isSterilizing) {
                    cardStyle = "border-purple-900/30 bg-purple-950/10 cursor-not-allowed opacity-65";
                    statusGlow = "bg-purple-500/20 text-purple-400 border-purple-500/30";
                  } else if (isSelected) {
                    cardStyle = "border-emerald-500 bg-emerald-950/20 ring-2 ring-emerald-500/20 cursor-pointer";
                  }

                  return (
                    <div
                      key={pod.id}
                      onClick={() => {
                        if (isAvailable) {
                          selectPod(pod.id);
                        }
                      }}
                      className={`border rounded-2xl p-5 flex flex-col items-center justify-between text-center transition-all duration-300 ${cardStyle}`}
                    >
                      {/* Pod status accent badge */}
                      <span className={`inline-flex px-2 py-0.5 rounded-full border text-[10px] font-mono font-medium mb-3 ${statusGlow}`}>
                        {pod.status === "Sterilizing" ? `Sterilizing ${pod.countdown}s` : pod.status}
                      </span>

                      {/* Icon Graphic */}
                      <div className="relative mb-3 flex items-center justify-center">
                        <svg className="w-16 h-12" viewBox="0 0 100 80" fill="none">
                          <rect x="10" y="20" width="80" height="45" rx="8" fill="#1E293B" stroke={isSelected ? "#3B82F6" : "#475569"} strokeWidth="1.5" />
                          <path d="M20 30h40v15H20z" fill={isAvailable ? "#10B981" : isOccupied ? "#EF4444" : "#8B5CF6"} fillOpacity="0.15" />
                          <circle cx="28" cy="38" r="3" fill={isAvailable ? "#10B981" : isOccupied ? "#EF4444" : "#8B5CF6"} />
                        </svg>
                        
                        {isSelected && (
                          <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full p-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="text-sm font-semibold text-slate-200">{pod.name}</h4>
                      <p className="text-[10px] text-slate-500 font-mono mt-1">GEN 6 SHIELD</p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Checkout & Calculator Panel (Right) */}
          <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-3xl p-6 space-y-6 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl"></div>

            <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" />
              Hourly Calculation Panel
            </h3>

            {selectedPodId ? (
              <div className="space-y-6">
                {/* Product Thumbnail Graphic */}
                <div className="rounded-xl overflow-hidden h-32 relative border border-slate-800">
                  <img
                    src="/images/showcase-3.jpg"
                    alt="Oak Sleep Pod"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
                  <span className="absolute bottom-2 left-3 text-[9px] font-mono text-amber-400 font-semibold bg-slate-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                    OAK WOOD COMPOSITE
                  </span>
                </div>

                 <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                  <p className="text-xs text-slate-400 font-mono">SELECTED POD</p>
                  <p className="text-base font-semibold text-white">{selectedPod.name}</p>
                  <p className="text-[10px] text-slate-400">Current Status: <span className="text-emerald-400">Available</span></p>
                </div>

                {/* Duration Hour Step Slider Element */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-300 font-medium">Duration Hours</span>
                    <span className="text-base font-extrabold text-emerald-400">{bookingHours} Hours</span>
                  </div>

                  <input
                    type="range"
                    min="2"
                    max="12"
                    step="1"
                    value={bookingHours}
                    onChange={(e) => setBookingHours(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>2h (Base)</span>
                    <span>7h</span>
                    <span>12h (Max)</span>
                  </div>
                </div>

                {/* Pricing Calculation Display Block */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <div className="flex justify-between text-xs text-slate-400 font-mono">
                    <span>Base 2h Rate</span>
                    <span>69,000 VND</span>
                  </div>
                  {bookingHours > 2 && (
                    <div className="flex justify-between text-xs text-slate-400 font-mono">
                      <span>Extra Hours (+{bookingHours - 2}h × 15k)</span>
                      <span>+{(bookingHours - 2) * 15000} VND</span>
                    </div>
                  )}
                  <div className="flex justify-between items-end pt-2 border-t border-slate-900">
                    <span className="text-sm font-semibold text-slate-200">Total Price</span>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-amber-500">
                        {currentPrice.toLocaleString("vi-VN")} VND
                      </p>
                      <p className="text-[10px] text-slate-500 font-mono">VAT INCLUDED</p>
                    </div>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handleCheckout}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-[#00704A] hover:from-emerald-700 hover:to-[#006241] text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-emerald-950/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  Confirm Mock Payment &amp; Unlock Pod
                </button>
              </div>
            ) : (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mx-auto text-slate-500 border border-slate-800">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <p className="text-slate-400 text-sm font-light">
                  Please click an available (green) pod on the map grid to open the calculation engine panel.
                </p>
              </div>
            )}

            {/* Quick Pricing Table info */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850/50 text-xs text-slate-500 space-y-1.5 font-mono">
              <p className="font-semibold text-slate-400 border-b border-slate-800 pb-1.5 mb-1.5">PRICING RULES MATRIX</p>
              <div className="flex justify-between">
                <span>Base Fee (First 2h flat)</span>
                <span className="text-slate-300">69,000 VND</span>
              </div>
              <div className="flex justify-between">
                <span>Incremental hourly rate</span>
                <span className="text-slate-300">+15,000 VND/hr</span>
              </div>
              <div className="flex justify-between">
                <span>Maximum cap duration</span>
                <span className="text-slate-300">12 Hours</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
