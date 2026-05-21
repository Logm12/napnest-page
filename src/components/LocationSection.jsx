"use client";

import React from "react";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="location-section" className="bg-[#f2f0eb] py-20 border-b border-[#edebe9]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-600/20 bg-emerald-50 text-emerald-800 text-xs font-mono font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>ĐỊA ĐIỂM TRẠM HỘI TỤ</span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#006241] tracking-tight font-serif">
            Trạm Ngủ Xuân Thủy Cầu Giấy
          </h2>
          <p className="text-slate-600 font-light">
            Vị trí thuận lợi nằm ngay trung tâm quận Cầu Giấy, đắc địa cho sinh viên Đại học Quốc gia Hà Nội và giới văn phòng lân cận.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Card (Left) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="bg-white border border-[#edebe9] rounded-3xl p-8 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-[#006241] font-serif border-b border-[#edebe9] pb-4">
                Thông Tin Trạm
              </h3>

              {/* Items */}
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-[#f2f0eb] text-[#00754A] shrink-0">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 font-mono">ĐỊA CHỈ</h4>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      144 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội
                    </p>
                    <p className="text-xs text-slate-500 font-light">
                      (Nằm trong khuôn viên Đại học Quốc gia Hà Nội)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-[#f2f0eb] text-[#00754A] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 font-mono">GIỜ MỞ CỬA</h4>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      Mở cửa cả ngày (24/7)
                    </p>
                    <p className="text-xs text-slate-500 font-light">
                      Khử trùng chu kỳ tự động sau mỗi lượt
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-2.5 rounded-xl bg-[#f2f0eb] text-[#00754A] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 font-mono">HOTLINE HỖ TRỢ</h4>
                    <p className="text-sm font-semibold text-[#00754A] mt-0.5 font-mono">
                      1900-NAPNEST (1900 6276)
                    </p>
                  </div>
                </div>
              </div>

              {/* Action */}
              <a
                href="https://maps.app.goo.gl/t1kExZfSyrGz4B5p8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00754A] hover:bg-[#006241] text-white font-bold py-3 px-6 rounded-full shadow-md transition-all active:scale-95 text-sm"
              >
                Chỉ đường trên Google Maps
              </a>
            </div>
          </div>

          {/* Interactive Map Iframe (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#edebe9] rounded-3xl p-4 shadow-sm overflow-hidden h-[450px]">
              <iframe
                title="Google Map NapNest 144 Xuân Thủy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.905663738096!2d105.7828600759695!3d21.03645978751543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m0!2zMTQ0IFh1w6JuIFRo4buneSwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "1.25rem" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
