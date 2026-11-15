import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactActions from "@/components/contact/ContactActions";
import ServiceAreaCompact from "@/components/contact/ServiceAreaCompact";
import BranchList from "@/components/contact/BranchList";
import ContactMap from "@/components/contact/ContactMap";
import { SITE_CONFIG } from "@/data/siteData";

export const metadata: Metadata = {
  title: `Liên hệ`,
  description:
    "Thông tin hotline, Zalo, giờ làm việc, khu vực phục vụ và danh sách cơ sở địa chỉ của Thợ Kỹ Thuật 24h tại Hà Nội.",
  alternates: {
    canonical: "/lien-he",
  },
  openGraph: {
    title: `Liên hệ`,
    description:
      `Thông tin hotline ${SITE_CONFIG.phoneDisplay}, nhắn Zalo tư vấn, giờ làm việc và danh sách cơ sở của Thợ Kỹ Thuật 24h tại Hà Nội.`,
    url: `${SITE_CONFIG.baseUrl}/lien-he`,
    siteName: SITE_CONFIG.name,
    locale: "vi_VN",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Global Navigation Header */}
      <Header />

      <main className="flex-grow py-6 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* 1. Page Header: Breadcrumb & Compact H1 Title */}
          <div className="space-y-2 border-b border-slate-200 pb-5">
            <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <Link href="/" className="hover:text-sky-800 transition-colors">
                Trang chủ
              </Link>
              <span>/</span>
              <span className="text-slate-900 font-semibold">Liên hệ</span>
            </nav>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Liên Hệ
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm max-w-xl leading-relaxed">
              Thông tin hotline, nhắn Zalo, giờ làm việc, danh sách cơ sở và địa bàn phục vụ của Thợ Kỹ Thuật 24h tại Hà Nội.
            </p>
          </div>

          {/* 2. Main 2-Column Contact Section */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-sm">
            {/* Left Side: Contact Information Details (7 cols) */}
            <div className="lg:col-span-7">
              <ContactInfo />
            </div>

            {/* Right Side: Quick Action Panel (5 cols) */}
            <div className="lg:col-span-5">
              <ContactActions />
            </div>
          </div>

          {/* 3. Service Area Coverage */}
          <ServiceAreaCompact />

          {/* 4. Branch & Office Location List */}
          <BranchList />

          {/* 5. Map Embed */}
          <ContactMap />

        </div>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
