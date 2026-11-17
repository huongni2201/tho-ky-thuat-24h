import Image from "next/image";
import Link from "next/link";
import { SERVICES, SITE_CONFIG } from "@/data/siteData";
import { REPAIR_SERVICES } from "@/data/repairServices";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-8 sm:mt-10">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-44 overflow-hidden bg-white rounded-xl border border-slate-200/90 flex flex-col hover:border-sky-300 focus-within:border-sky-300 transition-colors group shadow-sm"
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={960}
                  height={540}
                  className="block w-full h-auto bg-slate-100"
                />
                <span aria-hidden="true" className="pointer-events-none absolute right-3 bottom-3 text-sm font-semibold tracking-wide text-white sm:text-base">
                  {SITE_CONFIG.phoneDisplay}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6 lg:p-7">
                {/* Header Title & Badge */}
                <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                  <h3 className="text-xl lg:text-2xl font-bold text-red-700 group-hover:text-red-800 transition-colors">
                    {service.slug ? (
                      <Link href={`/${service.slug}`} className="hover:underline">
                        {service.title}
                      </Link>
                    ) : service.title}
                  </h3>

                  {service.badge ? (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 shrink-0">
                      {service.badge}
                    </span>
                  ) : null}
                </div>

                {/* Service Description */}
                <p className="text-slate-600 text-base leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Popular items bullet list */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Hạng mục chính:</span>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {service.popularItems.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg aria-hidden="true" className="w-3.5 h-3.5 text-sky-700 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Card Footer CTA */}
                <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 border-t border-slate-100 text-sm">
                  <span className="text-slate-500 font-medium">Báo giá chốt trước</span>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="inline-flex min-h-11 items-center gap-1 font-bold text-sky-800 hover:underline"
                  >
                    <span>Gọi thợ</span>
                    <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <section id="sua-chua-dien-nuoc" aria-labelledby="repair-services-heading" className="mt-12 scroll-mt-44 border-t border-slate-200 pt-8">
          <h2 id="repair-services-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Dịch vụ sửa chữa điện nước tại Hà Nội
          </h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">
            Sửa điện nước sinh hoạt, chậu rửa bát và vòi nước tại nhà. Chọn hạng mục theo nhu cầu và khu vực, gọi hoặc gửi hình ảnh qua Zalo để trao đổi tình trạng cần sửa.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-x-8 md:grid-cols-2">
            {REPAIR_SERVICES.map((service) => (
              <article key={service.id} id={service.id} className="scroll-mt-44 border-b border-slate-200 py-5">
                <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="mt-2 inline-flex min-h-11 items-center text-sm font-bold text-sky-800 hover:underline" aria-label={`Gọi tư vấn: ${service.title}`}>
                  Gọi tư vấn: {SITE_CONFIG.phoneDisplay}
                </a>
              </article>
            ))}
          </div>
        </section>

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
