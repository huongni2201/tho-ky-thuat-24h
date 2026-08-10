import { SITE_CONFIG } from "@/data/siteData";

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-t border-slate-200 p-2 sm:p-2.5 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        
        {/* Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phoneRaw}`}
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 active:to-amber-700 text-white font-black text-sm py-2.5 px-3 rounded-lg shadow-sm"
        >
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>GỌI THỢ NGAY</span>
        </a>

        {/* Zalo Button */}
        <a
          href={SITE_CONFIG.zaloUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-blue-600 active:bg-blue-700 text-white font-bold text-sm py-2.5 px-3 rounded-lg shadow-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.83.49 3.55 1.34 5.03L2 22l5.13-1.31C8.54 21.52 10.22 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
          </svg>
          <span>CHAT ZALO</span>
        </a>

      </div>
    </div>
  );
}
