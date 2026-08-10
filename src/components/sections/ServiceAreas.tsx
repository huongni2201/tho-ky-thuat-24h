import { DISTRICTS, SITE_CONFIG } from "@/data/siteData";

export default function ServiceAreas() {
  return (
    <section id="khu-vuc" className="py-14 md:py-20 bg-slate-50 border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Khu Vực Thợ Phục Vụ Tận Nơi Tại Hà Nội
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Đội ngũ thợ túc trực thường xuyên tại các tuyến phố chính thuộc 12 quận nội thành, có mặt nhanh sau 20 - 30 phút từ khi tiếp nhận cuộc gọi.
          </p>
        </div>

        {/* District Coverage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 sm:mt-10">
          {DISTRICTS.map((district, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-4 hover:border-sky-300 transition-colors space-y-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <svg className="w-4 h-4 text-sky-800 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Quận {district.name}
                </h3>
                {district.popular ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Phục vụ nhanh
                  </span>
                ) : null}
              </div>

              <p className="text-slate-500 text-xs leading-relaxed">
                <strong className="text-slate-700">Tuyến đường:</strong> {district.subAreas.join(", ")}.
              </p>
            </div>
          ))}
        </div>

        {/* Callout box for suburbs */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-5 text-center text-xs sm:text-sm text-slate-600">
          <p>
            📍 Hỗ trợ dịch vụ tại các khu vực lân cận: <strong className="text-slate-800">Đông Anh, Gia Lâm, Hoài Đức, Thanh Trì, Sóc Sơn</strong> khi có lịch hẹn trước.
          </p>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="inline-block mt-2 text-sky-800 hover:text-sky-900 font-bold underline"
          >
            Gọi kiểm tra thợ gần vị trí của bạn: {SITE_CONFIG.phoneDisplay}
          </a>
        </div>

      </div>
    </section>
  );
}
