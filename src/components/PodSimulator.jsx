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
    { name: "Sunset Gold", value: "#dfc49d", shadow: "shadow-[#dfc49d]/20" },
    { name: "Soft Reading", value: "#faf6ee", shadow: "shadow-[#faf6ee]/10" },
    { name: "Mint Fresh", value: "#d4e9e2", shadow: "shadow-[#d4e9e2]/20" },
    { name: "Zen Ceramic", value: "#edebe9", shadow: "shadow-[#edebe9]/20" }
  ];

  const SOUNDTRACKS = [
    { id: "None", name: "Không gian yên tĩnh" },
    { id: "Rain", name: "Tiếng mưa rơi nhẹ" },
    { id: "Ocean", name: "Sóng biển rì rào" },
    { id: "Forest", name: "Gió rừng thông" }
  ];

  return (
    <section id="simulator-section" className="bg-white py-20 relative overflow-hidden border-b border-[#edebe9]">
      
      {/* LED Backlight Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-3xl opacity-10 pointer-events-none transition-all duration-1000"
        style={{ backgroundColor: ledColor }}
      ></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-600/20 bg-amber-50 text-amber-800 text-xs font-mono font-medium">
            <Volume2 className="w-3.5 h-3.5" />
            <span>PHIÊN NGHỈ ĐANG HOẠT ĐỘNG</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Bảng Điều Khiển Trong Cabin
          </h2>
          <p className="text-slate-650 text-sm font-light">
            Bạn đang trải nghiệm tại cabin <span className="text-[#006241] font-bold">{activeSession.podName}</span>. Tùy chỉnh nhạc nền thiên nhiên và màu sắc ánh sáng để có giấc ngủ ngon nhất.
          </p>
        </div>

        {/* Master Glass Console Container */}
        <div className="bg-[#f2f0eb] border border-[#edebe9] rounded-3xl p-8 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Control Panel (Left - 7 cols) */}
            <div className="md:col-span-7 space-y-6 text-left">
              
              {/* LED Lights Controller */}
              <div className="space-y-3">
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase font-mono">
                  Hệ Thống Ánh Sáng Sinh Học
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {LED_COLORS.map((color) => {
                    const isSelected = ledColor === color.value;
                    return (
                      <button
                        key={color.value}
                        onClick={() => setLedColor(color.value)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl border text-xs font-bold transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-[#00754A] bg-[#00754A] text-white"
                            : "border-[#edebe9] bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full block border border-slate-300`}
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
                <span className="text-xs font-bold tracking-wider text-slate-500 uppercase font-mono">
                  Âm Thanh Thư Giãn
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {SOUNDTRACKS.map((track) => {
                    const isSelected = ambientTrack === track.id;
                    return (
                      <button
                        key={track.id}
                        onClick={() => setAmbientTrack(track.id)}
                        className={`px-4 py-3 rounded-2xl border text-xs font-bold text-center transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "border-[#00754A] bg-[#00754A] text-white"
                            : "border-[#edebe9] bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        {track.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Device parameters indicator */}
              <div className="p-4 rounded-2xl bg-white border border-[#edebe9] grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block mb-0.5">THỜI LƯỢNG ĐÃ CHỌN</span>
                  <span className="text-slate-800 font-bold">{activeSession.hours} Giờ Nghỉ</span>
                </div>
                <div>
                  <span className="text-slate-400 block mb-0.5">HỆ THỐNG GIÓ SẠCH</span>
                  <span className="text-emerald-600 font-bold">HEPA Active (23°C)</span>
                </div>
              </div>

            </div>

            {/* Display Shield Screen (Right - 5 cols) */}
            <div className="md:col-span-5 flex flex-col items-center justify-center space-y-6">
              
              {/* Virtual Soundwave Display Frame */}
              <div
                className="bg-white border border-[#edebe9] rounded-3xl w-full p-6 h-64 flex flex-col items-center justify-center relative overflow-hidden shadow-inner transition-all duration-1000"
                style={{
                  boxShadow: `inset 0 0 20px ${ledColor}40`,
                  borderColor: isNaN(ledColor) ? `${ledColor}80` : "#edebe9"
                }}
              >
                {/* SVG soundwave canvas widgets */}
                {ambientTrack !== "None" ? (
                  <div className="w-full space-y-4">
                    
                    {/* SVG canvas wave lines */}
                    <div className="h-24 flex items-end justify-center gap-1.5 px-4">
                      {[...Array(15)].map((_, i) => {
                        const delays = ["0.1s", "0.4s", "0.2s", "0.7s", "0.5s", "0.3s", "0.6s", "0.8s", "0.2s", "0.9s", "0.5s", "0.1s", "0.4s", "0.6s", "0.3s"];
                        return (
                          <div
                            key={i}
                            className="w-1.5 bg-[#00754A] rounded-full animate-[soundBar_1.2s_ease-in-out_infinite]"
                            style={{
                              animationDelay: delays[i],
                              backgroundColor: ledColor !== "#faf6ee" ? ledColor : "#00754A",
                              height: "10px"
                            }}
                          ></div>
                        );
                      })}
                    </div>

                    <div className="text-center font-mono">
                      <p className="text-[10px] text-[#006241] uppercase tracking-widest font-bold animate-pulse">
                        Đang phát: {SOUNDTRACKS.find(t => t.id === ambientTrack).name}
                      </p>
                      <p className="text-[9px] text-slate-400 mt-1">
                        Tần số thư giãn: 432 Hz
                      </p>
                    </div>

                  </div>
                ) : (
                  <div className="text-center space-y-2">
                    <Moon className="w-8 h-8 text-slate-400 mx-auto animate-bounce" />
                    <p className="text-xs text-slate-500 font-mono">CHẾ ĐỘ NGỦ SÂU TĨNH LẶNG</p>
                    <p className="text-[10px] text-slate-400 font-mono">Loa ngoài đã tắt</p>
                  </div>
                )}
                
                {/* Overlay ambient state name */}
                <div className="absolute top-3 left-4 flex items-center gap-1 text-[9px] text-slate-400 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00754A]"></span>
                  <span>CẢM BIẾN ÂM THANH TRONG BUỒNG</span>
                </div>
              </div>

              {/* End session triggers */}
              <button
                onClick={handleEndSession}
                className="w-full inline-flex items-center justify-center gap-2 bg-red-50 hover:bg-red-100 text-red-650 font-bold py-3.5 px-6 rounded-full border border-red-200 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm"
              >
                Trả cabin &amp; Kết thúc phiên nghỉ
              </button>

            </div>

          </div>

          {/* UV-C Notification safety warning banner */}
          <div className="mt-6 p-4 rounded-xl bg-purple-50 border border-purple-250 flex gap-3 text-xs text-purple-800 font-medium">
            <AlertCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
            <div className="text-left">
              <span className="font-bold text-purple-900">CHU KỲ VÔ TRÙNG KHỬ KHUẨN UV-C:</span>
              <p className="text-slate-600 font-normal mt-0.5 font-sans">
                Ngay sau khi bạn trả cabin, hệ thống sẽ tự động đóng kín cửa khóa điện từ và kích hoạt đèn UV-C vô trùng trong vòng 60 giây. Cabin sẽ ở trạng thái khử trùng và không thể đặt trước khi hoàn thành chu kỳ để đảm bảo vệ sinh cấp y tế cho người dùng tiếp theo.
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
