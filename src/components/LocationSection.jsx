"use client";

import React from "react";
import { MapPin, Clock, Phone, Navigation, Info } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location-section" className="bg-[#f2f0eb] py-20 border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>OUR LOCATION</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Flagship Xuan Thuy Mobile Hub
          </h2>
          <p className="text-slate-650 font-light">
            Conveniently situated within the university corridor, offering immediate relief and study breaks for students and office workers alike.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            
            <div className="space-y-6">
              {/* Address details card */}
              <div className="bg-white border border-[#edebe9] rounded-3xl p-6 space-y-4 shadow-sm">
                
                <div className="flex gap-4">
                  <div className="p-3 bg-[#f2f0eb] rounded-xl text-[#006241] shrink-0 h-11 w-11 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase font-mono">
                      HUB ADDRESS
                    </span>
                    <p className="text-sm font-bold text-slate-800">
                      144 Xuan Thuy, Cau Giay, Hanoi
                    </p>
                    <p className="text-xs text-slate-500 font-light">
                      (Inside Vietnam National University Campus - VNU)
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#edebe9] pt-4 flex gap-4">
                  <div className="p-3 bg-[#f2f0eb] rounded-xl text-[#006241] shrink-0 h-11 w-11 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase font-mono">
                      OPERATING HOURS
                    </span>
                    <p className="text-sm font-bold text-slate-800">
                      Open 24/7 (Including Holidays)
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#edebe9] pt-4 flex gap-4">
                  <div className="p-3 bg-[#f2f0eb] rounded-xl text-[#006241] shrink-0 h-11 w-11 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase font-mono">
                      SUPPORT HOTLINE
                    </span>
                    <p className="text-sm font-bold text-slate-800 font-mono">
                      1900-NAPNEST
                    </p>
                  </div>
                </div>

              </div>

              {/* Parking Instructions */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-250 flex gap-3 text-xs text-amber-900 font-medium">
                <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-left">
                  <span className="font-bold text-amber-950 font-mono text-[10px] tracking-wider uppercase block">
                    Parking Guide
                  </span>
                  <p className="text-slate-650 font-normal mt-1 leading-relaxed">
                    Motorbikes can be parked at the G7 parking lot or the main entrance on Xuan Thuy Road. Follow the walking signs for NapNest Hub.
                  </p>
                </div>
              </div>
            </div>

            {/* Action button */}
            <a
              href="https://maps.google.com/?q=144+Xuan+Thuy+Cau+Giay+Hanoi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#00754A] hover:bg-[#006241] text-white font-bold py-3.5 px-6 rounded-full shadow-md active:scale-95 transition-all duration-200 cursor-pointer text-xs"
            >
              <Navigation className="w-4 h-4" />
              Get Directions on Google Maps
            </a>

          </div>

          {/* Interactive Google Map embed (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#edebe9] rounded-3xl p-4 shadow-sm h-[380px] lg:h-auto overflow-hidden relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8927038166527!2d105.77977467615024!3d21.037000380613768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab3b4e60897f%3A0xc3f348e3518bbd0!2zMTQ0IFh1w6JuIFRo4buneSwgROG7i2NoIFbhu41uIEjhuq11LCBD4bqndSBHaeG6pXksIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1716262423000!5m2!1svi!2s"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "1.25rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location of 144 Xuan Thuy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
