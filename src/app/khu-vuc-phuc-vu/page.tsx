import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FinalCtaSection from "@/components/sections/FinalCtaSection";

export const metadata: Metadata = {
  title: "Khu Vực Phục Vụ Tại Hà Nội",
  description:
    "Danh sách các quận nội thành và khu vực thợ túc trực phục vụ khoan tường, treo TV, treo tranh tận nhà nhanh sau 20-30 phút tại Hà Nội.",
  alternates: {
    canonical: "/khu-vuc-phuc-vu",
  },
};

export default function ServiceAreasPage() {
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
              <span className="text-slate-900 font-semibold">Khu vực phục vụ</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Địa Bàn Phục Vụ Thợ Tận Nơi Tại Hà Nội
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Đội ngũ thợ di chuyển thường xuyên tại 12 quận nội thành Hà Nội, sẵn sàng có mặt hỗ trợ gia đình bạn sau 20 - 30 phút.
            </p>
          </div>

          {/* Full Service Areas Section */}
          <ServiceAreas />

          {/* Final Callout */}
          <FinalCtaSection />

        </div>
      </main>

      <Footer />
    </div>
  );
}
