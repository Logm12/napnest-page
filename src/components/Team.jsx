"use client";

import React from "react";
import { Users, Mail, Globe, ExternalLink } from "lucide-react";

export default function Team() {
  const members = [
    {
      name: "Nguyễn Minh Anh",
      role: "Co-founder & CEO",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      desc: "Responsible for business expansion strategies, branding, and flagship café partnership operations."
    },
    {
      name: "Lê Hoàng Nam",
      role: "Co-founder & CTO",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200",
      desc: "IoT integration engineer designing the automated 60s UV-C sterilization system and pricing modules."
    },
    {
      name: "Trần Thu Thủy",
      role: "Co-founder & COO",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      desc: "Logistics director managing composite materials supply chain and clinical-grade HEPA ventilation installation."
    }
  ];

  return (
    <section id="team-section" className="bg-white py-20 border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>FOUNDING TEAM</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Founding &amp; Operations Team
          </h2>
          <p className="text-slate-650 font-light">
            The pioneers bringing the smart sleep hub model to students and office workers in Vietnam.
          </p>
        </div>

        {/* Member cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#edebe9] rounded-3xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Avatar circle */}
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-[#edebe9]">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Role */}
              <div className="space-y-1">
                <h4 className="text-base font-bold text-slate-800">{member.name}</h4>
                <p className="text-xs text-[#00754A] font-bold font-mono">{member.role}</p>
              </div>

              {/* Bio description */}
              <p className="text-xs text-slate-550 leading-relaxed font-light">
                {member.desc}
              </p>

              {/* Contact mini social nodes */}
              <div className="flex justify-center gap-3 pt-2">
                <a
                  href="#"
                  className="p-2 rounded-full border border-[#edebe9] hover:bg-[#edebe9]/40 text-slate-600 hover:text-[#00754A] transition-colors cursor-pointer"
                  aria-label="Portfolio Website"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full border border-[#edebe9] hover:bg-[#edebe9]/40 text-slate-600 hover:text-[#00754A] transition-colors cursor-pointer"
                  aria-label="Email Address"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic call to action */}
        <div className="mt-16 bg-[#f2f0eb] border border-[#edebe9] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase font-mono">
              PARTNERSHIP CONNECT
            </span>
            <h4 className="text-lg font-bold text-[#1E3932] font-serif">Contact the Founders</h4>
            <p className="text-xs text-slate-600 font-light">
              Interested in integrating a sleep pod hub at your campus, co-working space, or office? Let's connect!
            </p>
          </div>

          <a
            href="mailto:partner@napnest.com"
            className="inline-flex items-center gap-2 bg-[#00754A] hover:bg-[#006241] text-white font-bold py-3.5 px-6 rounded-full active:scale-95 transition-all duration-200 cursor-pointer shadow-sm text-xs"
          >
            Send Inquiry Email
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
