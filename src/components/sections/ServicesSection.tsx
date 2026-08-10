import Link from "next/link";
import { SERVICES, SITE_CONFIG } from "@/data/siteData";

export default function ServicesSection() {
  return (
    <section id="dich-vu" className="py-14 md:py-20 bg-slate-50 font-sans border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Danh Mục Dịch Vụ Khoan Tường & Treo Lắp Kỹ Thuật
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nhận làm từ những việc nhỏ nhất tại nhà. Thợ chuẩn bị đầy đủ máy móc chuyên dụng, thước nivo laser cân bằng chuẩn xác và tắc kê chịu lực tốt nhất.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:mt-10">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-sky-300 transition-colors group shadow-sm"
            >
              <div className="space-y-4">
                {/* Header Title & Badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                    <Link href={`/${service.slug}`} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>

                  {service.badge ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
                      {service.badge}
                    </span>
                  ) : null}
                </div>

                {/* Service Description */}
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Popular items bullet list */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Hạng mục chính:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.popularItems.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <svg className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 mt-4 flex items-center justify-between border-t border-slate-100 text-xs">
                <span className="text-slate-500 font-medium">Báo giá chốt trước</span>
                <Link
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-sky-800 hover:text-sky-900 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Chi tiết & đặt thợ</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Quick Call Out Banner inside Services */}
        <div className="mt-8 sm:mt-10 bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Cần Thợ Khoan Lắp Trọn Gói Nhiều Đồ?</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Thợ mang máy khoan bê tông, máy khoan pin, các loại tắc kê & vít nở đến làm trọn gói nhanh gọn trong ngày.
            </p>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm sm:text-base px-6 py-3 rounded-xl transition-colors shrink-0 whitespace-nowrap active:scale-[0.98]"
          >
            <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Nhận Báo Giá: {SITE_CONFIG.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
