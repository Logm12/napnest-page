"use client";

import React from "react";
import { Users, Mail, Globe, ExternalLink } from "lucide-react";

export default function Team() {
  const members = [
    {
      name: "Pham Nhu Dat",
      role: "Chief Human Resources Officer",
      avatar: "/images/member-dat.png",
      desc: "Dedicated to building a strong and people-centered workplace culture, leads talent development, team engagement, and organizational growth to empower NapNest's people."
    },
    {
      name: "Do Minh Duc",
      role: "CEO",
      avatar: "/images/member-duc.jpg",
      desc: "A visionary leader driving NapNest's mission to redefine rest and wellness experiences. With strategic thinking and innovative leadership, Duc oversees business growth, partnerships, and long-term development.",
      featured: true
    },
    {
      name: "Pham Phuong Linh",
      role: "Sales & Marketing Director",
      avatar: "/images/member-linh.jpg",
      desc: "Passionate about brand growth and customer engagement, leads NapNest's sales and marketing strategies to expand market reach and deliver meaningful customer experiences."
    }
  ];

  return (
    <section id="team-section" className="bg-white py-16 md:py-24 border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>OUR TEAM</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Founding &amp; Operations Team
          </h2>
          <p className="text-slate-650 text-sm md:text-base font-light">
            The pioneers bringing the smart sleep hub model to students and office workers in Vietnam.
          </p>
        </div>

        {/* Member cards grid - fully responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {members.map((member, idx) => (
            <div
              key={idx}
              className={`bg-white border rounded-3xl p-6 md:p-8 text-center flex flex-col justify-between transition-all duration-300 hover:shadow-lg ${
                member.featured
                  ? "border-[#00754A] ring-2 ring-[#00754A]/10 md:-translate-y-2 shadow-md"
                  : "border-[#edebe9] shadow-sm"
              }`}
            >
              <div className="space-y-5">
                {/* Avatar container with specific sizing & object-cover */}
                <div className={`relative mx-auto rounded-2xl overflow-hidden border ${
                  member.featured 
                    ? "w-40 h-48 border-[#00754A]" 
                    : "w-36 h-44 border-[#edebe9]"
                }`}>
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {member.featured && (
                    <span className="absolute bottom-2 right-2 bg-[#00754A] text-white text-[8px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Leader
                    </span>
                  )}
                </div>

                {/* Title & Role */}
                <div className="space-y-1">
                  <h4 className={`text-base md:text-lg font-bold text-slate-800 ${member.featured ? "text-[#006241]" : ""}`}>
                    {member.name}
                  </h4>
                  <p className="text-xs text-[#00754A] font-bold font-mono uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>

                {/* Bio description */}
                <p className="text-xs md:text-sm text-slate-650 leading-relaxed font-light text-center">
                  {member.desc}
                </p>
              </div>

              {/* Contact mini social nodes */}
              <div className="flex justify-center gap-3 pt-6 border-t border-[#edebe9]/50 mt-6">
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

        {/* Dynamic call to action - responsive */}
        <div className="mt-16 bg-[#f2f0eb] border border-[#edebe9] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1.5">
            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase font-mono">
              PARTNERSHIP CONNECT
            </span>
            <h4 className="text-lg md:text-xl font-bold text-[#1E3932] font-serif">Contact the Founders</h4>
            <p className="text-xs md:text-sm text-slate-600 font-light">
              Interested in integrating a sleep pod hub at your campus, co-working space, or office? Let's connect!
            </p>
          </div>

          <a
            href="mailto:partner@napnest.com"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#00754A] hover:bg-[#006241] text-white font-bold py-3.5 px-6 rounded-full active:scale-95 transition-all duration-200 cursor-pointer shadow-sm text-xs whitespace-nowrap"
          >
            Send Inquiry Email
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
