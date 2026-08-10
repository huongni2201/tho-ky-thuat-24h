import { SITE_CONFIG } from "@/data/siteData";

export default function ContactActions() {
  return (
    <div className="bg-slate-50/80 border border-slate-200/90 rounded-xl p-5 sm:p-6 space-y-4">
      <div className="border-b border-slate-200 pb-3">
        <h2 className="text-lg font-extrabold text-slate-900">
          Kênh Đặt Lịch & Báo Giá Nhanh
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
          Gọi điện hoặc nhắn Zalo trực tiếp để thợ xếp lịch thi công tận nhà.
        </p>
      </div>

      {/* Action Buttons with tactile active states */}
      <div className="space-y-2.5">
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-sm sm:text-base py-3 px-4 rounded-xl shadow-sm transition-all active:scale-[0.98]"
        >
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>GỌI NGAY: {SITE_CONFIG.phoneDisplay}</span>
        </a>

        <a
          href={SITE_CONFIG.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base py-3 px-4 rounded-xl shadow-sm transition-all active:scale-[0.98]"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.83.49 3.55 1.34 5.03L2 22l5.13-1.31C8.54 21.52 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
          </svg>
          <span>NHẮN ZALO TƯ VẤN</span>
        </a>
      </div>

      {/* Advice Note */}
      <div className="bg-sky-50/80 border border-sky-100/90 rounded-lg p-3 text-xs text-slate-700 space-y-1">
        <p className="font-bold text-sky-950 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-sky-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Gợi ý khi liên hệ:
        </p>
        <p className="leading-relaxed text-slate-600">
          Gia chủ vui lòng báo rõ <strong className="text-slate-900">địa chỉ</strong>, <strong className="text-slate-900">loại đồ cần treo</strong> (tranh, TV, kệ...) và <strong className="text-slate-900">thời gian hẹn</strong> để thợ đến nhanh nhất.
        </p>
      </div>
    </div>
  );
}
