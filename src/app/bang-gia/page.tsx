import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import FaqSection from "@/components/sections/FaqSection";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Bảng Giá Dịch Vụ Khoan Tường & Lắp Đặt",
  description:
    "Bảng giá dịch vụ khoan tường treo tranh, treo Tivi, lắp giá kệ, treo rèm minh bạch tại Hà Nội. Thợ báo giá trước khi làm, không phát sinh.",
  alternates: {
    canonical: "/bang-gia",
  },
};

export default function PricingPage() {
  const priceList = [
    {
      service: "Khoan treo tranh / Bộ tranh decor",
      unit: "Bộ (1-3 bức)",
      price: "200.000 - 250.000 đ",
    },
    {
      service: "Khoan treo Tivi (32 - 55 inch)",
      unit: "Chiếc",
      price: "200.000 - 300.000 đ",
    },
    {
      service: "Khoan treo Tivi màn lớn (65 - 85 inch)",
      unit: "Chiếc",
      price: "300.000 - 450.000 đ",
    },
    {
      service: "Lắp giá kệ gỗ / Kệ sách trang trí",
      unit: "Bộ",
      price: "200.000 - 3.000.000 đ",
    },
    {
      service: "Khoan lắp ban thờ treo tường",
      unit: "Chiếc",
      price: "250.000 - 400.000 đ",
    },
    {
      service: "Lắp rèm cửa / Giàn phơi thông minh",
      unit: "Bộ",
      price: "200.000 - 350.000 đ",
    },
  ];

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
              <span className="text-slate-900 font-semibold">Bảng giá</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Bảng Giá Dịch Vụ Khoan Lắp Tận Nhà Tại Hà Nội
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Báo giá tham khảo các hạng mục khoan tường, treo tranh, treo TV và lắp giá kệ. Thợ khảo sát và chốt giá minh bạch trước khi bắt đầu thi công.
            </p>
          </div>

          {/* Pricing Table Container */}
          <div className="bg-white border border-slate-200/90 rounded-xl overflow-hidden shadow-sm">
            <div className="p-4 sm:p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between flex-wrap gap-2">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Bảng Giá Tham Khảo Chi Tiết
              </h2>
              <span className="text-xs text-amber-700 bg-amber-50 border border-amber-200 font-bold px-2.5 py-1 rounded-md">
                Cam kết không phát sinh chi phí phụ
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                    <th className="p-3.5 sm:p-4">Hạng mục công việc</th>
                    <th className="p-3.5 sm:p-4">Đơn vị</th>
                    <th className="p-3.5 sm:p-4">Mức giá tham khảo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-800">
                  {priceList.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-semibold text-slate-900">{item.service}</td>
                      <td className="p-3.5 sm:p-4 text-slate-600">{item.unit}</td>
                      <td className="p-3.5 sm:p-4 font-bold text-amber-600">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-sky-50/60 border-t border-slate-200 text-xs text-slate-700 leading-relaxed">
              💡 <strong>Lưu ý:</strong> Giá thực tế có thể thay đổi tùy thuộc vào vị trí thi công (tường thạch cao gia cố hay bê tông chịu lực), số lượng đồ cần treo trọn gói hoặc địa hình trên cao. Quý khách vui lòng gọi Hotline <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="font-bold text-sky-800 underline">{SITE_CONFIG.phoneDisplay}</a> để thợ báo giá chính xác nhất.
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
