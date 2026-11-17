import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";
import QuickContact from "@/components/ui/QuickContact";
import { SITE_CONFIG } from "@/data/siteData";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Khoan Tường Treo Tranh - Treo Tivi Tại Hà Nội | DỊCH VỤ KỸ THUẬT 24H",
    template: "%s | DỊCH VỤ KỸ THUẬT 24H",
  },
  description:
    "Dịch vụ khoan tường, treo tranh, treo Tivi, lắp giá kệ, treo rèm cửa & đồ kỹ thuật tận nhà tại Hà Nội. Thợ lành nghề, có mặt nhanh 20-30 phút, báo giá trước, thi công sạch gọn.",
  keywords: [
    "khoan tường treo tranh hà nội",
    "treo tivi tường hà nội",
    "lắp giá kệ treo tường hà nội",
    "thợ khoan tường tại nhà hà nội",
    "treo gương rèm cửa hà nội",
    "dịch vụ kỹ thuật 24h",
  ],
  metadataBase: new URL(SITE_CONFIG.baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: SITE_CONFIG.name,
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/hero-technician.png",
        width: 1200,
        height: 630,
        alt: "DỊCH VỤ KỸ THUẬT 24H - Dịch vụ khoan tường treo tranh treo tivi Hà Nội",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-sky-500 selection:text-white">
        <JsonLd />
        {children}
        <QuickContact />
      </body>
    </html>
  );
}
