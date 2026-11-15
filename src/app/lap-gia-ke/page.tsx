import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FaqSection from "@/components/sections/FaqSection";

export const metadata: Metadata = {
  title: "Lắp Giá Kệ & Ban Thờ Tại Hà Nội",
  description:
    "Dịch vụ thợ lắp kệ sách, kệ gỗ âm tường, kệ gia vị inox bếp, kệ nhà tắm và ban thờ treo tường kiên cố tại Hà Nội.",
  alternates: {
    canonical: "/lap-gia-ke",
  },
};

export default function ShelvingPage() {
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
              <span className="text-slate-900 font-semibold">Lắp giá kệ & Ban thờ</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Lắp Giá Kệ Trang Trí, Kệ Bếp & Ban Thờ Treo Tường
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Dịch vụ bắt tắc kê chịu tải lớn cho kệ gỗ trang trí, kệ sách, giá bếp inox và ban thờ treo tường phẳng chuẩn thủy nivo.
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-extrabold text-slate-900">
              Hạng Mục Lắp Đặt Kệ Phổ Biến
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Lắp kệ sách gỗ, kệ decor trang trí âm tường phòng khách</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Khoan bắt ban thờ treo tường kiên cố chuẩn phong thủy</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Lắp giá kệ gia vị inox bếp & kệ để đồ phòng tắm ốp gạch</span>
              </li>
              <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                <span className="text-amber-500 font-bold">✓</span>
                <span>Bắt kệ vách gỗ, giá móc treo quần áo, cây treo đồ</span>
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
