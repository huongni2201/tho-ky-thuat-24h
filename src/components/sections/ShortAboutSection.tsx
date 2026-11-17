import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteData";

export default function ShortAboutSection() {
  return (
    <section className="py-14 md:py-18 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-8 space-y-3.5">
            <span className="text-sky-900 font-bold text-xs uppercase tracking-wider bg-sky-100/80 border border-sky-200 px-2.5 py-0.5 rounded-md inline-block">
              GIỚI THIỆU DỊCH VỤ KỸ THUẬT 24H
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Đơn Vị Chuyên Khoan Tường & Treo Lắp Tận Nhà Tại Hà Nội
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>DỊCH VỤ KỸ THUẬT 24H</strong> chuyên cung cấp dịch vụ khoan treo tranh, lắp Tivi màn hình lớn, kệ gỗ trang trí, gương soi, rèm cửa và thiết bị gia đình tại tất cả 12 quận nội thành Hà Nội. Đội ngũ thợ kinh nghiệm, trang bị thước nivo laser chuẩn xác và máy hút dọn bụi sạch sẽ trước khi bàn giao.
            </p>

            <div className="pt-1 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Có mặt sau 20-30 phút
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                Báo giá chốt trước khi thi công
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                Bảo hành kỹ thuật 6 - 12 tháng
              </span>
            </div>
          </div>

          {/* Right Action */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-3">
            <Link
              href="/gioi-thieu"
              className="inline-flex items-center justify-center gap-2 bg-sky-900 hover:bg-sky-800 text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors text-center"
            >
              <span>Tìm hiểu chi tiết về chúng tôi</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>

            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm px-5 py-3 rounded-xl transition-colors text-center active:scale-[0.98]"
            >
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Hotline: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
