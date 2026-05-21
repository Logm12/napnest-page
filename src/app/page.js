"use client";

import React from "react";
import Hero from "@/components/Hero";
import BookingGrid from "@/components/BookingGrid";
import Showcase from "@/components/Showcase";
import Team from "@/components/Team";
import LocationSection from "@/components/LocationSection";
import PodSimulator from "@/components/PodSimulator";
import CompetitorMatrix from "@/components/CompetitorMatrix";
import FinancialsBoard from "@/components/FinancialsBoard";
import Chatbot from "@/components/Chatbot";
import { useBooking } from "@/context/BookingContext";
import { ShoppingBag, User, ShieldCheck } from "lucide-react";

export default function Home() {
  const { activeSession } = useBooking();

  return (
    <main className="w-full bg-[#f9f8f6] min-h-screen">
      {/* 
        Strict PC Layout Wrapper bounding content safely between 1280px and 1920px width brackets. 
        Centered, with overflow protection.
      */}
      <div className="max-w-[1920px] min-w-[1280px] mx-auto bg-[#f9f8f6] overflow-hidden relative shadow-md">
        
        {/* PREMIUM FIXED TOP NAVIGATION */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#edebe9] max-w-[1920px] min-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo & Branding */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img 
              src="/images/logo.png" 
              alt="NapNest Logo" 
              className="w-10 h-10 rounded-full object-contain bg-white border border-[#edebe9] shadow-sm"
            />
            <span className="text-xl font-bold tracking-tight text-[#006241] font-serif">
              NapNest
            </span>
          </div>

          {/* Quick Nav Links Styled as Cafe Outlines */}
          <nav className="flex items-center gap-3">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Giới thiệu
            </button>
            
            <button
              onClick={() => document.getElementById("booking-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Sơ đồ đặt cabin
            </button>
            
            <button
              onClick={() => document.getElementById("showcase-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Hình ảnh
            </button>

            <button
              onClick={() => document.getElementById("team-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Đội ngũ
            </button>

            <button
              onClick={() => document.getElementById("location-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Vị trí trạm
            </button>

            {activeSession && (
              <button
                onClick={() => document.getElementById("simulator-section")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-amber-300 bg-amber-50 rounded-full px-4 py-2 hover:bg-amber-100/60 text-amber-800 font-bold cursor-pointer text-xs transition-colors animate-pulse"
              >
                Cabin của bạn
              </button>
            )}

            <button
              onClick={() => document.getElementById("matrix-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              So sánh tiện ích
            </button>

            <button
              onClick={() => document.getElementById("investor-section")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-[#edebe9] bg-white rounded-full px-4 py-2 hover:bg-[#edebe9]/40 text-slate-700 font-semibold cursor-pointer text-xs transition-colors"
            >
              Kế hoạch tài chính
            </button>
          </nav>

          {/* Action Call / Cart Badge / Contact Us Button */}
          <div className="flex items-center gap-4">
            {/* Shopping Cart Icon with Badge */}
            <div className="relative p-2 text-slate-700 hover:text-[#00754A] cursor-pointer transition-colors">
              <ShoppingBag className="w-5.5 h-5.5" />
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-[#cba258] text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                1
              </span>
            </div>

            <button
              onClick={() => {
                const footer = document.querySelector("footer");
                if (footer) footer.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-[#1E3932] hover:bg-[#006241] text-white font-bold text-xs px-5 py-2.5 rounded-full active:scale-95 transition-all cursor-pointer shadow-sm"
            >
              Liên hệ
            </button>
          </div>
        </header>

        {/* HERO VALUE PROP CONTAINER */}
        <Hero />

        {/* MOCK BOOKING GRID CONTAINER */}
        <BookingGrid />

        {/* COZY OAK SHOWCASE IMAGES CONTAINER */}
        <Showcase />

        {/* TEAM PIONEERS CONTAINER */}
        <Team />

        {/* NEW LOCATION SECTION */}
        <LocationSection />

        {/* IN-POD SIMULATION CONSOLE CONTAINER */}
        <PodSimulator />

        {/* COMPARATIVE ADVANTAGES CONTAINER */}
        <CompetitorMatrix />

        {/* INVESTOR PROJECTED YIELD CURVES */}
        <FinancialsBoard />

        {/* CHATBOT INTEGRATION */}
        <Chatbot />

        {/* PREMIUM DEEP GREEN FOOTER */}
        <footer className="bg-[#1E3932] border-t border-emerald-800/20 py-16 px-8 text-[#edebe9]/70 font-sans text-xs">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-[#edebe9]/10 pb-12 mb-12 text-left">
            
            {/* Brand column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/logo.png" 
                  alt="NapNest Logo" 
                  className="w-10 h-10 rounded-full object-contain bg-white border border-[#edebe9] shadow-sm"
                />
                <span className="text-xl font-bold tracking-tight text-white font-serif">
                  NapNest
                </span>
              </div>
              <p className="text-xs text-[#edebe9]/60 leading-relaxed font-light">
                Hệ thống trạm kén ngủ thông minh di động cách âm và tự động khử trùng UV-C đầu tiên tại Việt Nam. Mang lại giấc ngủ ngắn chất lượng cho cộng đồng sinh viên và văn phòng.
              </p>
            </div>

            {/* Quick links */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white font-serif">Liên Kết Nhanh</h4>
              <ul className="space-y-2 text-[#edebe9]/60 font-light">
                <li><a href="#" className="hover:text-white transition-colors">Giới thiệu dự án</a></li>
                <li><a href="#booking-section" className="hover:text-white transition-colors">Sơ đồ đặt cabin</a></li>
                <li><a href="#showcase-section" className="hover:text-white transition-colors">Hình ảnh thực tế</a></li>
                <li><a href="#location-section" className="hover:text-white transition-colors">Vị trí cơ sở</a></li>
              </ul>
            </div>

            {/* Safety specifications */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white font-serif">Tiêu Chuẩn An Toàn</h4>
              <ul className="space-y-2 text-[#edebe9]/60 font-light">
                <li>Khử khuẩn UV-C lâm sàng 60s</li>
                <li>Lọc gió tươi HEPA tiêu chuẩn</li>
                <li>Chống cháy gỗ Composite Class-A</li>
                <li>Hộp kén tiêu âm cách âm -35dB</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white font-serif">Liên Hệ Trực Tiếp</h4>
              <ul className="space-y-2 text-[#edebe9]/60 font-light font-mono text-[11px]">
                <li>Địa điểm: 144 Xuân Thủy, Cầu Giấy, HN</li>
                <li>Hotline: 1900-NAPNEST</li>
                <li>Email: support@napnest.com</li>
                <li className="flex items-center gap-1 text-emerald-400 font-bold mt-2 font-sans">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  Vệ sinh an toàn tuyệt đối
                </li>
              </ul>
            </div>

          </div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[#edebe9]/50 font-light text-[11px]">
            <p className="font-medium text-[#edebe9]/70">Bản Quyền &copy; 2026 NAPNEST GLOBAL INC. Bảo lưu mọi quyền.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
              <a href="#" className="hover:text-white transition-colors">Tiêu chuẩn vận hành</a>
            </div>
            <p className="font-mono text-[10px]">VIBECODE KIT v6.0 • BUILD: PRODUCTION READY</p>
          </div>
        </footer>

      </div>
    </main>
  );
}
