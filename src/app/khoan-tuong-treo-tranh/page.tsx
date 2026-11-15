import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FaqSection from "@/components/sections/FaqSection";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: `Khoan Tường Treo Tranh Tại Hà Nội | ${SITE_CONFIG.name}`,
  description:
    "Dịch vụ thợ khoan tường treo tranh bộ, tranh kính, đồng hồ decor tận nhà tại Hà Nội. Đo nivo laser phẳng đẹp, báo giá trước, thi công dọn bụi.",
  alternates: {
    canonical: "/khoan-tuong-treo-tranh",
  },
};

export default function PictureHangingPage() {
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
              <span className="text-slate-900 font-semibold">Khoan tường treo tranh</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Khoan Tường Treo Tranh, Đồng Hồ Decor Tại Hà Nội
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Dịch vụ treo bộ tranh phòng khách, tranh kính cường lực, tranh đính đá, đồng hồ treo tường chuẩn cân bằng laser.
            </p>
          </div>

          {/* Service Details Card */}
          <div className="bg-white border border-slate-200/90 rounded-xl p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <h2 className="text-lg font-extrabold text-slate-900">
                Các Hạng Mục Treo Tranh Phổ Biến
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>Treo bộ tranh ghép 3-5 bức phòng khách, phòng ngủ cân đối</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>Treo tranh kính cường lực, tranh sơn dầu khung gỗ nặng</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>Khoan treo đồng hồ decor nghệ thuật kích thước lớn</span>
                </li>
                <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <span className="text-amber-500 font-bold">✓</span>
                  <span>Bắt đinh treo bằng khen, tranh kỷ niệm gia đình, tranh thêu</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-5 space-y-2 text-xs sm:text-sm text-slate-600">
              <p>📍 <strong>Khu vực phục vụ:</strong> Có mặt nhanh 20-30 phút tại Ba Đình, Cầu Giấy, Thanh Xuân, Đống Đa, Hoàn Kiếm, Tây Hồ, Hai Bà Trưng, Hoàng Mai, Hà Đông, Nam Từ Liêm, Bắc Từ Liêm, Long Biên.</p>
              <p>⏱ <strong>Giờ làm việc:</strong> 7h00 - 22h00 tất cả các ngày trong tuần.</p>
            </div>
          </div>

          {/* FAQ & CTA */}
          <FaqSection />
          <FinalCtaSection />

        </div>
      </main>

      <Footer />
    </div>
  );
}
