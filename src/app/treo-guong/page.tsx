import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FaqSection from "@/components/sections/FaqSection";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: `Treo Gương Soi & Gương LED Tại Hà Nội`,
  description:
    "Dịch vụ thợ treo gương soi toàn thân, gương nhà tắm ốp gạch men, gương LED thông minh an toàn tại Hà Nội.",
  alternates: {
    canonical: "/treo-guong",
  },
};

export default function MirrorHangingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Header />

      <main className="flex-grow py-6 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
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
              <span className="text-slate-900 font-semibold">Treo gương soi</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Treo Gương Soi Toàn Thân & Gương Nhà Tắm Tại Hà Nội
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Dịch vụ khoan gạch men êm không nứt vỡ, lắp gương soi toàn thân, gương tròn decor và gương LED thông minh.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-extrabold text-slate-900">
              Hạng Mục Treo Gương Chuyên Nghiệp
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Treo gương soi toàn thân phòng ngủ / khu vực trang điểm</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Khoan lắp gương nhà tắm ốp gạch men an toàn</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Lắp gương LED cảm ứng hiện đại cho căn hộ chung cư</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Treo gương vách kính, gương cửa hàng thời trang</span>
              </li>
            </ul>
          </div>

          <FaqSection />
          <FinalCtaSection />

        </div>
      </main>

      <Footer />
    </div>
  );
}
