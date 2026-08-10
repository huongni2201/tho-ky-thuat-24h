import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/ui/MobileStickyBar";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import FinalCtaSection from "@/components/sections/FinalCtaSection";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: `Giới Thiệu | ${SITE_CONFIG.name}`,
  description:
    "Tìm hiểu về Thợ Kỹ Thuật 24h - Đơn vị chuyên dịch vụ thợ khoan tường, treo tranh, treo Tivi, lắp giá kệ tận nhà uy tín tại Hà Nội.",
  alternates: {
    canonical: "/gioi-thieu",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Header />

      <main className="flex-grow py-6 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Breadcrumb & Header */}
          <div className="space-y-2 border-b border-slate-200 pb-5">
            <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-sky-800 transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">Giới thiệu</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Giới Thiệu Về Thợ Kỹ Thuật 24h
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Giải pháp thợ khoan lắp kỹ thuật tận nhà nhanh chóng, chuẩn xác và sạch sẽ cho mọi gia đình tại Hà Nội.
            </p>
          </div>

          {/* Main About Narrative */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <h2 className="text-xl font-extrabold text-slate-900">
                1. Sứ Mệnh Phục Vụ Gọn Gàng & An Toàn
              </h2>
              <p>
                Những việc nhỏ như khoan tường treo bộ tranh kỷ niệm, lắp Tivi phòng khách, treo tấm gương nhà tắm hay bắt thanh rèm cửa tuy đơn giản nhưng lại đòi hỏi tay nghề chuẩn xác và máy móc chuyên dụng. Việc tự khoan đục khi không có kinh nghiệm rất dễ gây nứt gạch, đứt dây điện âm tường hoặc treo đồ lệch vị trí gây mất thẩm mỹ và nguy hiểm.
              </p>
              <p>
                <strong>Thợ Kỹ Thuật 24h</strong> ra đời với mục tiêu mang đến cho các gia đình tại Hà Nội một dịch vụ thợ kỹ thuật tại nhà minh bạch, đúng hẹn và thi công chất lượng nhất.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <h2 className="text-xl font-extrabold text-slate-900">
                2. Trang Thiết Bị & Kỹ Thuật Thi Công
              </h2>
              <ul className="space-y-2 list-disc list-inside text-slate-700">
                <li><strong>Máy cân mực Laser thủy nivo:</strong> Định vị độ cao, góc vuông và đường thẳng phẳng tuyệt đối cho bức tranh hay chiếc Tivi.</li>
                <li><strong>Máy khoan bê tông búa lớn & máy khoan pin:</strong> Thi công êm trên tường gạch, tường bê tông mác cao hay tường thạch cao.</li>
                <li><strong>Hút dọn bụi khoan:</strong> Luôn dùng túi hứng bụi hoặc máy hút bụi cầm tay, giữ khu vực thi công sạch sẽ trước khi rời đi.</li>
                <li><strong>Tắc kê & Vít chịu lực:</strong> Trang bị tắc kê sắt, tắc kê bướm thạch cao chuẩn quy cách.</li>
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-6 space-y-3">
              <h2 className="text-xl font-extrabold text-slate-900">
                3. Cam Kết Phục Vụ
              </h2>
              <p className="text-slate-600 text-sm">
                Thợ túc trực thường xuyên tại các quận: Ba Đình, Cầu Giấy, Thanh Xuân, Đống Đa, Hoàn Kiếm, Tây Hồ, Hai Bà Trưng, Hoàng Mai, Hà Đông, Nam Từ Liêm, Bắc Từ Liêm, Long Biên.
              </p>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <WhyChooseUs />

          {/* Final Callout */}
          <FinalCtaSection />

        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
