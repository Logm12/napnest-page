"use client";

import React from "react";
import { useBooking } from "@/context/BookingContext";
import { Moon, Volume2, ShieldAlert, Sparkles, AlertCircle } from "lucide-react";

export default function PodSimulator() {
  const {
    activeSession,
    ledColor,
    setLedColor,
    ambientTrack,
    setAmbientTrack,
    handleEndSession
  } = useBooking();

  // If there's no active session, we don't display the simulator
  if (!activeSession) return null;

  const LED_COLORS = [
    { name: "Warm Amber", value: "#F59E0B", shadow: "shadow-amber-500/20" },
    { name: "Cyber Cyan", value: "#06B6D4", shadow: "shadow-cyan-500/20" },
    { name: "Ethereal Indigo", value: "#6366F1", shadow: "shadow-indigo-500/20" },
    { name: "Neon Violet", value: "#8B5CF6", shadow: "shadow-purple-500/20" }
  ];

  const SOUNDTRACKS = [
    { id: "None", name: "System Silence" },
    { id: "Rain", name: "Rain Storm" },
    { id: "Ocean", name: "Ocean Waves" },
    { id: "Forest", name: "Forest Wind" }
  ];

  return (
    <section id="simulator-section" className="bg-slate-950 py-20 relative overflow-hidden border-b border-slate-900">
      
      {/* LED Backlight Ambient Glow - dynamically styles the simulator background! */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: ledColor }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-950/20 text-amber-400 text-xs font-mono font-medium">
            <Volume2 className="w-3.5 h-3.5" />
            <span>SESSION IN PROGRESS</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            In-Pod Console Experience Simulator
          </h2>
          <p className="text-slate-400 text-sm font-light">
            You are now inside <span className="text-white font-semibold">{activeSession.podName}</span>. Test out the smart control parameters below to customize your micro-climate environment.
          </p>
        </div>

        {/* Master Glass Console Container */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Control Panel (Left - 6 cols) */}
            <div className="md:col-span-7 space-y-6 text-left">
              
              {/* LED Lights Controller */}
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono">
                  Smart LED Spectrum Glow
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {LED_COLORS.map((color) => {
                    const isSelected = ledColor === color.value;
                    return (
                      <button
                        key={color.value}
                        onClick={() => setLedColor(color.value)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer ${
                          isSelected
                            ? "border-white bg-white/10 text-white"
                            : "border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full block border border-white/20`}
                          style={{ backgroundColor: color.value }}
                        ></span>
                        {color.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sound Tracks Controller */}
              <div className="space-y-3">
                <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono">
                  Ambient Audio Environment
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {SOUNDTRACKS.map((track) => {
                    const isSelected = ambientTrack === track.id;
                    return (
                      <button
                        key={track.id}
                        onClick={() => setAmbientTrack(track.id)}
                        className={`px-4 py-3 rounded-xl border text-sm font-semibold text-center transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "border-blue-500 bg-blue-950/30 text-blue-300"
                            : "border-slate-800 bg-slate-950/40 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        {track.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Device parameters indicator */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-500 block mb-0.5">ESTIMATED TIMER</span>
                  <span className="text-slate-300 font-semibold">{activeSession.hours} Hours Session</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-0.5">CLIMATE VENTILATION</span>
                  <span className="text-emerald-400 font-semibold">HEPA Active (22°C)</span>
                </div>
              </div>

            </div>

            {/* Display Shield Screen (Right - 5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center space-y-6">
              
              {/* Virtual Soundwave Display Frame */}
              <div
                className="bg-slate-950 border border-slate-800 rounded-3xl w-full p-6 h-64 flex flex-col items-center justify-center relative overflow-hidden transition-all duration-1000"
                style={{
                  boxShadow: `inset 0 0 40px ${ledColor}15`,
                  borderColor: `${ledColor}40`
                }}
              >
                {/* SVG soundwave canvas widgets */}
                {ambientTrack !== "None" ? (
                  <div className="w-full space-y-4">
                    
                    {/* SVG canvas wave lines */}
                    <div className="h-24 flex items-end justify-center gap-1.5 px-4">
                      {[...Array(15)].map((_, i) => {
                        // random animation timings for realistic sound vibration simulation
                        const delays = ["0.1s", "0.4s", "0.2s", "0.7s", "0.5s", "0.3s", "0.6s", "0.8s", "0.2s", "0.9s", "0.5s", "0.1s", "0.4s", "0.6s", "0.3s"];
                        return (
                          <div
                            key={i}
                            className="w-1.5 bg-blue-400 rounded-full animate-[soundBar_1.2s_ease-in-out_infinite]"
                            style={{
                              animationDelay: delays[i],
                              backgroundColor: ledColor,
                              height: "10px" // initial minimum
                            }}
                          ></div>
                        );
                      })}
                    </div>

                    <div className="text-center font-mono">
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest animate-pulse">
                        Now Streaming: {SOUNDTRACKS.find(t => t.id === ambientTrack).name}
                      </p>
                      <p className="text-[9px] text-slate-600 mt-1">
                        Vibrational Frequency: 432 Hz
                      </p>
                    </div>

                  </div>
                ) : (
                  <div className="text-center space-y-2">
                    <Moon className="w-8 h-8 text-slate-600 mx-auto animate-bounce" />
                    <p className="text-xs text-slate-500 font-mono">SILENT DEEP SLEEP STATE</p>
                    <p className="text-[10px] text-slate-700 font-mono">Soundwaves deactivated</p>
                  </div>
                )}
                
                {/* Overlay ambient state name */}
                <div className="absolute top-3 left-4 flex items-center gap-1 text-[9px] text-slate-500 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span>INTERNAL AUDIO SENSOR</span>
                </div>
              </div>

              {/* End session triggers */}
              <button
                onClick={handleEndSession}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-lg shadow-red-500/10"
              >
                End Session and Leave Pod
              </button>

            </div>

          </div>

          {/* UV-C Notification safety warning banner */}
          <div className="mt-6 p-4 rounded-xl bg-purple-950/20 border border-purple-500/20 flex gap-3 text-xs text-purple-300 font-medium">
            <AlertCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
            <div className="text-left">
              <span className="font-semibold text-purple-200">INTELLIGENT UV-C ANNOUNCEMENT:</span>
              <p className="text-slate-400 font-normal mt-0.5">
                Upon session termination, the pod door will seal and execute a clinical-grade 60-second UV-C medical disinfection timer. No booking entries can occur during the cycle.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Styled soundwave keyframes */}
      <style jsx global>{`
        @keyframes soundBar {
          0%, 100% {
            height: 10%;
          }
          50% {
            height: 90%;
          }
        }
      `}</style>

    </section>
  );
}
