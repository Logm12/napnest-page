"use client";

import React from "react";
import { User, Globe, Mail, Briefcase, Users } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Founder & CEO",
      role: "Visionary & Brand Strategist",
      desc: "Architect of the NapNest sleep pod lounge network. Dedicated to transforming urban workspaces.",
      placeholderName: "Name Placeholder #1"
    },
    {
      name: "Chief Technology Officer",
      role: "Automation & HW Systems Architect",
      desc: "Designer of our automated UV-C secure clinical cycles and integrated micro-climate HEPA diffusers.",
      placeholderName: "Name Placeholder #2"
    },
    {
      name: "Lead Experience Designer",
      role: "Ergonomics & Cozy Interior Architect",
      desc: "Creator of our Japanese-inspired oak wood capsule shells, light warm aesthetics, and acoustics.",
      placeholderName: "Name Placeholder #3"
    }
  ];

  return (
    <section id="team-section" className="bg-[#0b1310] py-20 border-b border-slate-900/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 text-xs font-mono font-medium">
            <Users className="w-3.5 h-3.5" />
            <span>FOUNDING TEAM</span>
          </div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            Our Sleep Pod Pioneers
          </h2>
          <p className="text-slate-400 font-light">
            Meet the innovators behind the clinical automated sleep habitats, committed to optimizing your cognitive performance.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-slate-950 border border-slate-900 hover:border-emerald-600/40 rounded-3xl p-6 flex flex-col justify-between items-center text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
            >
              
              {/* Profile Avatar Box */}
              <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-slate-800 group-hover:border-emerald-500 flex items-center justify-center text-slate-500 group-hover:text-emerald-400 transition-colors shadow-inner relative overflow-hidden mb-6">
                {/* 
                  When you have the team photos, simply replace this User icon with:
                  <img src="/images/team-avatar.jpg" alt={member.placeholderName} className="w-full h-full object-cover" />
                */}
                <User className="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
                
                <div className="absolute inset-0 bg-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Text Information */}
              <div className="space-y-2 flex-1 mb-6">
                <h4 className="text-sm font-semibold text-slate-500 font-mono tracking-wider uppercase">
                  {member.name}
                </h4>
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {member.placeholderName}
                </h3>
                <p className="text-xs text-emerald-500 font-mono font-medium">
                  {member.role}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-light mt-3 max-w-[240px] mx-auto">
                  {member.desc}
                </p>
              </div>

              {/* Social Icon links */}
              <div className="flex gap-4 pt-4 border-t border-slate-900 w-full justify-center text-slate-500 group-hover:text-slate-400 transition-colors text-xs font-mono">
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
                <a href="#" className="hover:text-emerald-400 transition-colors">
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
