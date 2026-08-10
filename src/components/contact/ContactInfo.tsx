import { SITE_CONFIG } from "@/data/siteData";

export default function ContactInfo() {
  return (
    <div className="space-y-5 text-slate-800 font-sans">
      <div className="border-b border-slate-200 pb-3">
        <h2 className="text-lg font-extrabold text-slate-900 tracking-tight">
          Thông Tin Kỹ Thuật & Trực Ban
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
          Tiếp nhận cuộc gọi & xử lý dịch vụ từ 7h00 đến 22h00 hàng ngày.
        </p>
      </div>

      <div className="space-y-3.5">
        {/* Hotline / Zalo */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Hotline & Zalo (24/7)</span>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="text-lg font-black text-amber-600 hover:text-amber-700 transition-colors"
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Email liên hệ</span>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-semibold text-slate-800 hover:text-sky-800 text-xs sm:text-sm transition-colors"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Website chính thức</span>
            <span className="font-semibold text-slate-800 text-xs sm:text-sm">{SITE_CONFIG.domain}</span>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider block">Thời gian phục vụ</span>
            <span className="font-semibold text-slate-800 text-xs sm:text-sm">{SITE_CONFIG.workingHours}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
