import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Khoan Treo Tivi Tường Tại Hà Nội",
  description:
    "Dịch vụ thợ khoan treo Tivi từ 32 inch đến 85 inch lên tường gạch, bê tông, thạch cao tại Hà Nội. Khung treo thẳng, nghiêng, xoay đa năng chắc chắn.",
  alternates: {
    canonical: "/treo-tv-tuong",
  },
};

export default function TvMountingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Header />

      <main className="flex-grow py-6 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb & Header */}
          <div className="space-y-2 border-b border-slate-200 pb-5">
            <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-sky-800 transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <Link href="/dich-vu" className="hover:text-sky-800 transition-colors">
                Dịch vụ
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">Treo Tivi tường</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Khoan Treo Tivi Tường Chuyên Nghiệp Tại Hà Nội
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Nhận khoan lắp khung giá treo Tivi các cỡ 43 - 85 inch lên tường gạch, tường bê tông mác cao, tường ốp gỗ hay thạch cao gia cố.
            </p>
          </div>

          {/* Details Card */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg font-extrabold text-slate-900">
                Dịch Vụ Lắp Giá Treo Tivi Tại Nhà
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>Treo TV khung thẳng áp tường gọn gàng cho phòng khách</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>Lắp giá treo TV gật gù chỉnh góc nhìn phòng ngủ</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>Treo TV khung xoay 180 độ cho quán cafe, cửa hàng, văn phòng</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>Thi công giấu dây cáp tín hiệu HDMI & dây nguồn âm thẩm mỹ</span>
                </li>
              </ul>
            </div>
          </div>

          <FaqSection />
          <FinalCtaSection />

        </div>
      </main>

      <Footer />
    </div>
  );
}
