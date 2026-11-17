import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { REPAIR_SERVICES } from "@/data/repairServices";

export const metadata: Metadata = {
  title: "Dịch Vụ Khoan Lắp & Sửa Điện Nước Tại Hà Nội",
  description:
    "Dịch vụ khoan tường, treo Tivi, lắp giá kệ, sửa điện nước, chậu rửa bát và vòi nước tại Hà Nội. Xem hạng mục theo khu vực và liên hệ tư vấn.",
  alternates: {
    canonical: "/dich-vu",
  },
};

export default function ServicesPage() {
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
              <span className="text-slate-900 font-semibold">Dịch vụ</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Dịch Vụ Khoan Lắp & Sửa Điện Nước Tại Nhà
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Các hạng mục khoan tường, treo lắp đồ dùng gia đình và sửa chữa điện nước tại Hà Nội. Chọn dịch vụ bên dưới để xem nội dung và liên hệ tư vấn.
            </p>
          </div>

          {/* Quick Sub-service Navigation Links */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-5 space-y-3">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Chuyển nhanh tới dịch vụ chuyên biệt:
            </h2>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link
                href="/khoan-tuong-treo-tranh"
                className="bg-slate-50 hover:bg-sky-50 text-slate-800 hover:text-sky-900 border border-slate-200 font-semibold px-3 py-1.5 rounded-lg transition-colors"
              >
                Khoan Tường Treo Tranh
              </Link>
              <Link
                href="/treo-tv-tuong"
                className="bg-slate-50 hover:bg-sky-50 text-slate-800 hover:text-sky-900 border border-slate-200 font-semibold px-3 py-1.5 rounded-lg transition-colors"
              >
                Treo Tivi Tường
              </Link>
              <Link
                href="/lap-gia-ke"
                className="bg-slate-50 hover:bg-sky-50 text-slate-800 hover:text-sky-900 border border-slate-200 font-semibold px-3 py-1.5 rounded-lg transition-colors"
              >
                Lắp Giá Kệ & Ban Thờ
              </Link>
              <Link
                href="/treo-guong"
                className="bg-slate-50 hover:bg-sky-50 text-slate-800 hover:text-sky-900 border border-slate-200 font-semibold px-3 py-1.5 rounded-lg transition-colors"
              >
                Treo Gương Trang Trí
              </Link>
              <Link
                href="/lap-rem-cua"
                className="bg-slate-50 hover:bg-sky-50 text-slate-800 hover:text-sky-900 border border-slate-200 font-semibold px-3 py-1.5 rounded-lg transition-colors"
              >
                Treo Rèm Cửa & Giàn Phơi
              </Link>
            </div>
          </div>

          <nav aria-label="Dịch vụ sửa chữa điện nước" className="bg-white border border-slate-200/90 rounded-xl p-5">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Sửa chữa điện nước theo nhu cầu & khu vực</h2>
            <ul className="mt-3 grid gap-x-6 sm:grid-cols-2">
              {REPAIR_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`#${service.id}`} className="flex min-h-11 items-center py-2 text-sm font-medium text-sky-800 hover:underline">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Main Services Section */}
          <ServicesSection />

          {/* Final Callout */}
          <FinalCtaSection />

        </div>
      </main>

      <Footer />
    </div>
  );
}
