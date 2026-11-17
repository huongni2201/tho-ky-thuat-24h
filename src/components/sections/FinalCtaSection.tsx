import { SITE_CONFIG } from "@/data/siteData";

export default function FinalCtaSection({ repair = false }: { repair?: boolean }) {
  return (
    <section id="lien-he" className="py-16 md:py-20 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          {repair ? "Cần Thợ Sửa Điện Nước Tại Hà Nội?" : "Cần Thợ Khoan Tường Tại Hà Nội?"}
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          {repair ? "Gọi hoặc nhắn Zalo để trao đổi về sự cố điện nước và nhận tư vấn phương án xử lý." : "Đừng tự đục phá hỏng tường hay mất thời gian quý báu. DỊCH VỤ KỸ THUẬT 24H luôn sẵn sàng mang máy móc chuyên dụng tới giúp bạn hoàn thiện không gian sống đẹp & kiên cố nhất!"}
        </p>

        {/* Dual Conversion Buttons: Phone & Zalo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-lg px-8 py-4 rounded-xl shadow-xl transition-colors active:scale-[0.98]"
          >
            <svg className="w-6 h-6 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>GỌI HOTLINE: {SITE_CONFIG.phoneDisplay}</span>
          </a>

          <a
            href={SITE_CONFIG.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12c0 1.83.49 3.55 1.34 5.03L2 22l5.13-1.31C8.54 21.52 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
            </svg>
            <span>CHAT ZALO TƯ VẤN</span>
          </a>
        </div>

        <div className="pt-4 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span>✓ Có mặt sau 20-30 phút</span>
          <span>✓ Khảo sát báo giá trước</span>
          <span>✓ Phục vụ 7h00 - 22h00</span>
        </div>
      </div>
    </section>
  );
}
