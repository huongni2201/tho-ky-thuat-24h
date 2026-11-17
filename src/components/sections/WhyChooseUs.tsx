import { TRUST_POINTS, SITE_CONFIG } from "@/data/siteData";

export default function WhyChooseUs() {
  return (
    <section id="gioi-thieu" className="py-16 md:py-24 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout: Left Content, Right Technical Quality List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Focused Value Proposition & Action */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Tại Sao Khách Hàng Hà Nội Tin Chọn DỊCH VỤ KỸ THUẬT 24H?
            </h2>
            
            <p className="text-slate-600 text-base leading-relaxed">
              Chúng tôi hiểu rằng ngôi nhà của bạn cần sự chỉn chu và an toàn tuyệt đối. Đội ngũ thợ có tay nghề vững vàng, mang đầy đủ dụng cụ máy móc chuyên dụng và làm việc với thái độ trách nhiệm nhất.
            </p>

            <div className="pt-2">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2.5 bg-sky-900 hover:bg-sky-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-colors"
              >
                <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Tư vấn kỹ thuật ngay: {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Divided Quality List (No repetitive cards) */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 divide-y divide-slate-200">
            {TRUST_POINTS.map((point, index) => (
              <div
                key={index}
                className={`py-5 first:pt-0 last:pb-0 flex items-start gap-4`}
              >
                <span className="font-mono text-sm font-black text-sky-800 bg-sky-100 border border-sky-200 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  0{index + 1}
                </span>

                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {point.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
