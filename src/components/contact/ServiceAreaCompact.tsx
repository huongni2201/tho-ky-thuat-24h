import { DISTRICTS } from "@/data/siteData";

export default function ServiceAreaCompact() {
  return (
    <div className="space-y-3 pt-2">
      <div className="border-b border-slate-200 pb-2">
        <h2 className="text-lg font-extrabold text-slate-900">
          Khu Vực Phục Vụ Nhanh
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
          Có mặt sau 20 - 30 phút tại 12 quận nội thành Hà Nội:
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {DISTRICTS.map((district, idx) => (
          <span
            key={idx}
            className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Quận {district.name}
          </span>
        ))}
      </div>
    </div>
  );
}
