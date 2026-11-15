import { SITE_CONFIG, SERVICES } from "@/data/siteData";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_CONFIG.name,
    "image": `${SITE_CONFIG.baseUrl}/images/hero-technician.png`,
    "@id": SITE_CONFIG.baseUrl,
    "url": SITE_CONFIG.baseUrl,
    "telephone": SITE_CONFIG.phoneRaw,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tầng 2, D12 Giảng Võ",
      "addressLocality": "Ba Đình",
      "addressRegion": "Hà Nội",
      "addressCountry": "VN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "07:00",
      "closes": "22:00"
    },
    "areaServed": [
      "Hà Nội",
      "Ba Đình",
      "Cầu Giấy",
      "Thanh Xuân",
      "Đống Đa",
      "Hoàn Kiếm",
      "Tây Hồ",
      "Hai Bà Trưng",
      "Hoàng Mai",
      "Hà Đông",
      "Nam Từ Liêm",
      "Bắc Từ Liêm",
      "Long Biên"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dịch Vụ Khoan Lắp Kỹ Thuật Tại Nhà",
      "itemListElement": SERVICES.map((service, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.shortDesc
        },
        "position": idx + 1
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
