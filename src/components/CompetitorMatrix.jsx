"use client";

import React from "react";
import { Check, X, ShieldAlert, Sparkles, Trophy } from "lucide-react";

export default function CompetitorMatrix() {
  const comparisonData = [
    {
      feature: "Chất liệu & An toàn chống cháy",
      napnest: "Khung gỗ sồi composite Red-Core Class-A chống cháy chuẩn y tế",
      cafe: "Vách ngăn gỗ dán thông thường (Nguy cơ cháy cao)",
      office: "Bàn làm việc mở hoặc vách ngăn vải (Không bảo vệ)",
      highlight: true
    },
    {
      feature: "Khả năng cách âm riêng tư",
      napnest: "Hộp vỏ kép cách âm tiêu âm chuyên sâu giảm tới -35dB",
      cafe: "Rèm che hoặc vách thạch cao mỏng (Giảm ồn kém -5dB)",
      office: "Không có - Thường xuyên bị gián đoạn âm thanh (0dB)",
      highlight: true
    },
    {
      feature: "Vệ sinh & Khử khuẩn",
      napnest: "Hệ thống khử khuẩn UV-C tự động 60s sau mỗi phiên nghỉ",
      cafe: "Lau dọn thủ công không định kỳ",
      office: "Lao công dọn dẹp định kỳ cuối ngày",
      highlight: true
    },
    {
      feature: "Lọc khí & Điều hòa",
      napnest: "Hệ thống gió sạch độc lập màng lọc HEPA-13",
      cafe: "Dùng chung điều hòa tổng tòa nhà",
      office: "Điều hòa tổng không có lọc khí chuyên dụng",
      highlight: false
    },
    {
      feature: "Ánh sáng sinh học",
      napnest: "Đèn LED mô phỏng chu kỳ giấc ngủ tự nhiên",
      cafe: "Đèn tuýp huỳnh quang hoặc bóng tối mờ mắt",
      office: "Ánh sáng đèn huỳnh quang văn phòng gay gắt",
      highlight: false
    }
  ];

  return (
    <section id="matrix-section" className="bg-[#f9f8f6] py-20 border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
            <Trophy className="w-3.5 h-3.5" />
            <span>SO SÁNH TÍNH NĂNG</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Điểm Khác Biệt Của NapNest
          </h2>
          <p className="text-slate-650 font-light">
            Chúng tôi đối chiếu các thông số kỹ thuật của cabin NapNest với các phương án nghỉ ngơi truyền thống.
          </p>
        </div>

        {/* Matrix Card */}
        <div className="bg-white border border-[#edebe9] rounded-3xl overflow-hidden shadow-sm">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#f9f8f6] border-b border-[#edebe9] text-xs font-mono text-slate-500 uppercase">
                  <th className="py-5 px-6 font-bold">Thông số / Tiện ích</th>
                  <th className="py-5 px-6 font-bold text-[#006241] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#cba258] animate-pulse" />
                    Cabin NapNest
                  </th>
                  <th className="py-5 px-6 font-bold">Cà phê ngủ trưa</th>
                  <th className="py-5 px-6 font-bold">Ngủ tại bàn văn phòng</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#edebe9] text-sm text-slate-700">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-[#f2f0eb]/20 ${
                      row.highlight ? "bg-[#d4e9e2]/5" : ""
                    }`}
                  >
                    {/* Feature Label */}
                    <td className="py-5 px-6 font-bold text-slate-800">
                      {row.feature}
                    </td>

                    {/* NapNest Score */}
                    <td className="py-5 px-6 font-semibold text-[#006241] bg-[#d4e9e2]/10 border-l border-r border-[#edebe9]/60">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-[#d4e9e2] text-[#00754A] border border-emerald-300 rounded-full flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.napnest}</span>
                      </div>
                    </td>

                    {/* Cafe Score */}
                    <td className="py-5 px-6 text-slate-500 font-light">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-red-50 text-red-500 border border-red-150 rounded-full flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.cafe}</span>
                      </div>
                    </td>

                    {/* Office Score */}
                    <td className="py-5 px-6 text-slate-500 font-light">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-red-50 text-red-500 border border-red-150 rounded-full flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5" />
                        </div>
                        <span>{row.office}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Matrix Footer Note */}
          <div className="bg-[#f9f8f6] p-5 border-t border-[#edebe9] flex items-center gap-2 text-xs text-slate-500 font-mono">
            <ShieldAlert className="w-4 h-4 text-[#00754A] shrink-0" />
            <span>Mọi linh kiện cấu thành trạm ngủ NapNest đều tuân thủ các chỉ chuẩn quốc tế về công thái học và an toàn điện y tế.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
