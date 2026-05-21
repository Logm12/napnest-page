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
    <section id="booking-section" className="bg-[#f2f0eb] py-20 border-t border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Live Booking Grid Map
          </h2>
          <p className="text-slate-650 font-light">
            Real-time cabin layout. Please click on any available pod (green), select your desired resting hours, and proceed to book.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Grid Side (Left) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Station dropdown selector */}
            <div className="bg-white border border-[#edebe9] rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#f2f0eb] rounded-xl text-[#006241]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-500 font-mono">SELECTED STATION</p>
                  <h3 className="text-base font-semibold text-slate-800">{selectedStation.name}</h3>
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
                  className="bg-[#f9f8f6] border border-[#edebe9] rounded-full px-5 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-[#00754A] transition-all cursor-pointer w-full md:w-64 font-semibold"
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
            <div className="bg-white border border-[#edebe9] rounded-3xl p-6 relative overflow-hidden shadow-sm">
              <div className="flex justify-between items-center mb-6 border-b border-[#edebe9] pb-4">
                <span className="text-sm font-semibold text-slate-700">Cabin Cluster Layout Map</span>
                
                {/* Visual Key Indicators */}
                <div className="flex gap-4 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    <span className="text-slate-500">Available</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="text-slate-500">Occupied</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                    <span className="text-slate-500">Sterilizing (UV-C)</span>
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

                  let cardStyle = "border-[#edebe9] bg-[#f9f8f6] hover:border-slate-300 cursor-pointer";
                  let statusGlow = "bg-emerald-50 text-[#00754A] border-emerald-200";
                  
                  if (isOccupied) {
                    cardStyle = "border-red-100 bg-red-50/30 cursor-not-allowed opacity-65";
                    statusGlow = "bg-red-50 text-red-500 border-red-200";
                  } else if (isSterilizing) {
                    cardStyle = "border-purple-100 bg-purple-550/30 cursor-not-allowed opacity-65";
                    statusGlow = "bg-purple-50 text-purple-500 border-purple-200";
                  } else if (isSelected) {
                    cardStyle = "border-[#00754A] bg-[#d4e9e2]/30 ring-2 ring-[#00754A]/20 cursor-pointer";
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
                        {pod.status === "Sterilizing" ? `Sterilizing ${pod.countdown}s` : pod.status === "Available" ? "Available" : "Occupied"}
                      </span>

                      {/* Icon Graphic */}
                      <div className="relative mb-3 flex items-center justify-center">
                        <svg className="w-16 h-12" viewBox="0 0 100 80" fill="none">
                          <rect x="10" y="20" width="80" height="45" rx="8" fill="#ffffff" stroke={isSelected ? "#00754A" : "#edebe9"} strokeWidth="2" />
                          <path d="M20 30h40v15H20z" fill={isAvailable ? "#10B981" : isOccupied ? "#EF4444" : "#8B5CF6"} fillOpacity="0.1" />
                          <circle cx="28" cy="38" r="3" fill={isAvailable ? "#10B981" : isOccupied ? "#EF4444" : "#8B5CF6"} />
                        </svg>
                        
                        {isSelected && (
                          <div className="absolute -top-1 -right-1 bg-[#00754A] text-white rounded-full p-0.5">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h4 className="text-sm font-bold text-slate-800">{pod.name}</h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">ACOUSTIC SHIELD</p>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Checkout & Calculator Panel (Right) */}
          <div className="lg:col-span-4 bg-white border border-[#edebe9] rounded-3xl p-6 space-y-6 text-left relative overflow-hidden shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 border-b border-[#edebe9] pb-3 flex items-center gap-2 font-serif">
              <Zap className="w-5 h-5 text-[#cba258]" />
              Hourly Pricing Calculator
            </h3>

            {selectedPodId ? (
              <div className="space-y-6">
                {/* Product Thumbnail Graphic */}
                <div className="rounded-xl overflow-hidden h-32 relative border border-[#edebe9]">
                  <img
                    src="/images/showcase-3.jpg"
                    alt="Oak Sleep Pod"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <span className="absolute bottom-2 left-3 text-[9px] font-mono text-[#cba258] font-bold bg-white px-2.5 py-0.5 rounded-full border border-[#cba258]/30">
                    NATURAL OAK WOOD
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#f2f0eb] border border-[#edebe9] space-y-1">
                  <p className="text-[10px] text-slate-500 font-mono">SELECTED CABIN</p>
                  <p className="text-base font-bold text-[#006241]">{selectedPod.name}</p>
                  <p className="text-[10px] text-slate-500">Status: <span className="text-emerald-600 font-bold">Available</span></p>
                </div>

                {/* Duration Hour Step Slider Element */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600 font-semibold">Duration hours</span>
                    <span className="text-base font-extrabold text-[#00754A]">{bookingHours} Hours</span>
                  </div>

                  <input
                    type="range"
                    min="2"
                    max="12"
                    step="1"
                    value={bookingHours}
                    onChange={(e) => setBookingHours(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-[#edebe9] rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>2h (Min)</span>
                    <span>7h</span>
                    <span>12h (Max)</span>
                  </div>
                </div>

                {/* Pricing Calculation Display Block */}
                <div className="pt-4 border-t border-[#edebe9] space-y-2">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Base package (first 2 hours)</span>
                    <span className="font-semibold text-slate-800">69,000đ</span>
                  </div>
                  {bookingHours > 2 && (
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Incremental hours (+{bookingHours - 2}h × 15k)</span>
                      <span className="font-semibold text-slate-800">+{((bookingHours - 2) * 15000).toLocaleString()}đ</span>
                    </div>
                  )}
                  <div className="flex justify-between items-end pt-2 border-t border-[#edebe9]">
                    <span className="text-sm font-bold text-slate-800">Total Amount</span>
                    <div className="text-right">
                      <p className="text-2xl font-extrabold text-[#006241]">
                        {currentPrice.toLocaleString("vi-VN")} VND
                      </p>
                      <p className="text-[9px] text-slate-400 font-mono">VAT INCLUDED</p>
                    </div>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button
                  onClick={handleCheckout}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#00754A] hover:bg-[#006241] text-white font-bold py-3.5 px-6 rounded-full shadow-md active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  Confirm Mock Payment &amp; Unlock Pod
                </button>
              </div>
            ) : (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-[#f9f8f6] rounded-full flex items-center justify-center mx-auto text-slate-400 border border-[#edebe9]">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <p className="text-slate-500 text-sm font-light">
                  Please select an available cabin (green) on the layout map to open the progressive calculator engine.
                </p>
              </div>
            )}

            {/* Quick Pricing Table info */}
            <div className="p-4 rounded-xl bg-[#f9f8f6] border border-[#edebe9] text-xs text-slate-500 space-y-1.5 font-mono">
              <p className="font-bold text-[#006241] border-b border-[#edebe9] pb-1.5 mb-1.5">PRICING POLICY</p>
              <div className="flex justify-between">
                <span>Base Rate (first 2h flat)</span>
                <span className="text-slate-700 font-semibold">69,000đ</span>
              </div>
              <div className="flex justify-between">
                <span>Subsequent hourly rate</span>
                <span className="text-slate-700 font-semibold">+15,000đ/hour</span>
              </div>
              <div className="flex justify-between">
                <span>Maximum session cap</span>
                <span className="text-slate-700 font-semibold">12 Hours</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
