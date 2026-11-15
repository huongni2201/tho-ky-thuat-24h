import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FaqSection from "@/components/sections/FaqSection";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: `Lắp Rèm Cửa & Giàn Phơi Tại Hà Nội | ${SITE_CONFIG.name}`,
  description:
    "Dịch vụ thợ khoan lắp rèm vải, rèm cuốn, rèm cầu vồng, giàn phơi thông minh ban công tại Hà Nội.",
  alternates: {
    canonical: "/lap-rem-cua",
  },
};

export default function CurtainInstallationPage() {
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
              <span className="text-slate-900 font-semibold">Lắp rèm cửa & giàn phơi</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Lắp Rèm Cửa & Giàn Phơi Thần Tốc Tại Hà Nội
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Dịch vụ bắt thanh treo rèm vải, rèm cầu vồng, rèm cuốn văn phòng và giàn phơi đồ thông minh ban công.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-extrabold text-slate-900">
              Hạng Mục Lắp Rèm & Giàn Phơi
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Lắp thanh treo rèm vải 2 lớp phòng khách, phòng ngủ</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Khoan lắp rèm cuốn, rèm cầu vồng văn phòng</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Bắt giàn phơi thông minh quay tay / điều khiển ban công</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Sửa chữa thanh rèm bị sụt tắc kê, xô lệch sau thời gian dài</span>
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
