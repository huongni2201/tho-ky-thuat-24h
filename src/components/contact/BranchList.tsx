import { SITE_CONFIG } from "@/data/siteData";

export default function BranchList() {
  return (
    <div className="space-y-3 pt-2">
      <div className="border-b border-slate-200 pb-2">
        <h2 className="text-lg font-extrabold text-slate-900">
          Địa Chỉ Các Cơ Sở & Khu Vực Trực Ban
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
          Danh sách cơ sở thợ túc trực tại Hà Nội:
        </p>
      </div>

      {/* Clean 2-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {SITE_CONFIG.branches.map((branchAddress, idx) => {
          const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            branchAddress
          )}`;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-xl p-3.5 space-y-1.5 hover:border-sky-300 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-sky-900 flex items-center gap-1.5 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  {idx === 0 ? "Trụ sở chính" : `Cơ sở ${idx}`}
                </span>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-sky-700 hover:text-sky-900 underline flex items-center gap-1"
                >
                  <span>Chỉ đường</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">
                📍 {branchAddress}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
