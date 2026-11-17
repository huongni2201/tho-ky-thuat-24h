import Image from "next/image";
import { SITE_CONFIG } from "@/data/siteData";
import { REPAIR_SERVICES } from "@/data/repairServices";

export default function ServicesSection() {
  return (
    <section id="dich-vu" className="py-12 md:py-16 bg-slate-50 font-sans border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="sua-chua-dien-nuoc" aria-labelledby="repair-services-heading" className="scroll-mt-44">
          <h2 id="repair-services-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Dịch vụ sửa chữa điện nước tại Hà Nội</h2>
          <p className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-slate-600">Kiểm tra, sửa chữa điện nước sinh hoạt, chậu rửa bát và vòi nước. Chọn dịch vụ theo nhu cầu và khu vực, sau đó gọi hoặc nhắn Zalo để trao đổi tình trạng cần sửa.</p>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
            {REPAIR_SERVICES.map((service) => (
              <article key={service.id} id={service.id} className="scroll-mt-44 overflow-hidden rounded-lg border border-slate-200 bg-white sm:flex">
                <Image src={service.id.includes("chau") || service.id.includes("voi") ? "/images/repair-faucet.gif" : "/images/repair-tools.png"} alt="" width={300} height={243} className="h-40 w-full object-contain bg-slate-100 sm:h-auto sm:w-36 sm:shrink-0" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="mt-2 inline-flex min-h-11 items-center text-sm font-bold text-sky-800 hover:underline" aria-label={`Gọi tư vấn: ${service.title}`}>Gọi tư vấn: {SITE_CONFIG.phoneDisplay}</a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-600">
            <h3 className="text-xl font-bold text-slate-900">Những sự cố thường gặp</h3>
            <p>Điện chập, aptomat nhảy, ổ cắm hoặc công tắc hỏng; vòi nước nhỏ giọt, đường ống rò rỉ và thiết bị vệ sinh hoạt động kém đều cần được kiểm tra để xác định nguyên nhân.</p>
            <p>Với chậu rửa bát, nước thoát chậm có thể do dầu mỡ hoặc cặn trong ống; nước rò dưới chậu có thể liên quan đến gioăng, xi phông hoặc mối nối. Thợ kiểm tra tình trạng và tư vấn phương án sửa hoặc thay bộ phận phù hợp.</p>
          </div>
        </section>
      </div>
    </section>
  );
}
