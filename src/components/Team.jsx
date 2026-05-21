"use client";

import React from "react";
import { User, Globe, Mail, Briefcase, Users } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Founder & CEO",
      role: "Visionary & Brand Strategist",
      desc: "Người sáng lập NapNest. Cam kết cách mạng hóa không gian làm việc và nghỉ ngơi đô thị tại Việt Nam.",
      placeholderName: "Name Placeholder #1"
    },
    {
      name: "Chief Technology Officer",
      role: "Automation & HW Systems Architect",
      desc: "Kiến trúc sư hệ thống điều hòa HEPA và buồng khử khuẩn UV-C lâm sàng chu kỳ 60 giây tự động.",
      placeholderName: "Name Placeholder #2"
    },
    {
      name: "Lead Experience Designer",
      role: "Ergonomics & Cozy Interior Architect",
      desc: "Nhà thiết kế nội thất gỗ sồi ấm cúng phong cách tối giản Nhật Bản đem lại cảm giác dễ chịu nhất.",
      placeholderName: "Name Placeholder #3"
    }
  ];

  return (
    <section id="team-section" className="bg-[#f9f8f6] py-20 border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>FOUNDING TEAM</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Đội Ngũ Sáng Lập
          </h2>
          <p className="text-slate-600 font-light">
            Những người tiên phong mang mô hình trạm ngủ thông minh cách âm, vô trùng đến gần hơn với giới trẻ học đường và văn phòng.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#edebe9] hover:border-[#00754A]/40 rounded-3xl p-6 flex flex-col justify-between items-center text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group shadow-sm"
            >
              
              {/* Profile Avatar Box */}
              <div className="w-24 h-24 rounded-full bg-[#f2f0eb] border-2 border-[#edebe9] group-hover:border-[#00754A] flex items-center justify-center text-slate-400 group-hover:text-[#00754A] transition-colors shadow-inner relative overflow-hidden mb-6">
                {/* 
                  When you have the team photos, simply replace this User icon with:
                  <img src="/images/team-avatar.jpg" alt={member.placeholderName} className="w-full h-full object-cover" />
                */}
                <User className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                
                <div className="absolute inset-0 bg-[#00754A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Text Information */}
              <div className="space-y-2 flex-1 mb-6">
                <h4 className="text-[10px] font-bold text-[#cba258] font-mono tracking-wider uppercase">
                  {member.name}
                </h4>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#00754A] transition-colors">
                  {member.placeholderName}
                </h3>
                <p className="text-xs text-[#00754A] font-mono font-medium">
                  {member.role}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-light mt-3 max-w-[240px] mx-auto">
                  {member.desc}
                </p>
              </div>

              {/* Social Icon links */}
              <div className="flex gap-4 pt-4 border-t border-[#edebe9] w-full justify-center text-slate-400 group-hover:text-slate-600 transition-colors text-xs font-mono">
                <a href="#" className="hover:text-[#00754A] transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-[#00754A] transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-[#00754A] transition-colors">
                  <Briefcase className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
