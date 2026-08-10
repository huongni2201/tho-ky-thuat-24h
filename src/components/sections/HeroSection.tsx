import Image from "next/image";
import { SITE_CONFIG } from "@/data/siteData";

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white pt-8 pb-14 md:pt-14 md:pb-20 border-b border-slate-800 overflow-hidden font-sans">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Content & SEO H1 */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Local Trust Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-950 border border-sky-800 px-3 py-1 rounded-md text-xs font-semibold text-sky-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>DỊCH VỤ KỸ THUẬT TẠI NHÀ • PHỤC VỤ TOÀN HÀ NỘI</span>
            </div>

            {/* Main H1 SEO Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              Khoan Tường – Treo Tranh – Treo TV <span className="text-amber-400">Chuyên Nghiệp Tại Hà Nội</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Bạn cần khoan tường treo tranh decor, treo Tivi màn hình lớn, lắp kệ sách, rèm cửa hay đồ dùng gia đình? Thợ Kỹ Thuật 24h có mặt sau <strong className="text-white font-semibold">20–30 phút</strong> tại tất cả các quận Hà Nội, đo đạc laser chuẩn xác, máy khoan chuyên dụng dọn sạch bụi.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-base px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>GỌI THỢ NGAY: {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href="#dich-vu"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm px-5 py-3.5 rounded-xl transition-colors"
              >
                <span>Xem dịch vụ & bảng giá</span>
                <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* 3 Short Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 border-t border-slate-800 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-sky-900/80 border border-sky-700/60 flex items-center justify-center text-sky-400 shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Có mặt sau <strong>20 - 30 phút</strong></span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-sky-900/80 border border-sky-700/60 flex items-center justify-center text-amber-400 shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span>Báo giá chốt trước khi làm</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-sky-900/80 border border-sky-700/60 flex items-center justify-center text-emerald-400 shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Khoan êm, hút dọn sạch bụi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Technician Image */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container with crisp border */}
              <div className="relative rounded-xl overflow-hidden border border-slate-700 shadow-xl bg-slate-800">
                <Image
                  src="/images/hero-technician.png"
                  alt="Thợ kỹ thuật khoan tường treo tivi tranh ảnh tại Hà Nội"
                  width={600}
                  height={500}
                  priority
                  className="w-full h-auto object-cover max-h-[440px]"
                />

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 border-t border-slate-800 p-3.5 sm:p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-md bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white font-bold text-xs sm:text-sm">Thợ Tay Nghề Cao</p>
                        <p className="text-slate-400 text-[11px]">Cân bằng Laser & Tắc kê chịu lực</p>
                      </div>
                    </div>

                    <a
                      href={`tel:${SITE_CONFIG.phoneRaw}`}
                      className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs px-3 py-1.5 rounded-md transition-colors shrink-0"
                    >
                      Đặt thợ ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
