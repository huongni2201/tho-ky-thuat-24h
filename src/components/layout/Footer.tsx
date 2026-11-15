import Link from "next/link";
import { SITE_CONFIG, SERVICES, DISTRICTS } from "@/data/siteData";
import TechnicianIcon from "@/components/ui/TechnicianIcon";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-800 text-sm">
      
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Business Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-900 flex items-center justify-center text-amber-400 font-black text-xl shadow-inner">
                <TechnicianIcon />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  THỢ KỸ THUẬT <span className="text-sky-400">24H</span>
                </span>
                <span className="text-[11px] text-slate-400 uppercase tracking-wide">
                  Dịch Vụ Khoan Treo Tại Nhà Hà Nội
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Đơn vị cung cấp dịch vụ thợ kỹ thuật khoan tường treo tranh, treo Tivi, lắp kệ gỗ, treo gương rèm cửa chuyên nghiệp tận nhà tại các quận huyện Hà Nội. Thi công an toàn, đúng vị trí, sạch sẽ gọn gàng.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5 border-t border-slate-800/80">
              <p><strong className="text-white">Giờ hoạt động:</strong> {SITE_CONFIG.workingHours}</p>
              <p><strong className="text-white">Hotline/Zalo:</strong> <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-amber-400 font-bold hover:underline">{SITE_CONFIG.phoneDisplay}</a></p>
              <p><strong className="text-white">Email:</strong> {SITE_CONFIG.email}</p>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-base border-b border-slate-800 pb-2">
              DỊCH VỤ CHÍNH
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/${s.slug}`} className="hover:text-sky-400 transition-colors flex items-center gap-2">
                    <span className="text-sky-500">›</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Service Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-bold text-base border-b border-slate-800 pb-2">
              KHU VỰC PHỤC VỤ
            </h3>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-400">
              {DISTRICTS.map((d, idx) => (
                <Link key={idx} href="/khu-vuc-phuc-vu" className="bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-300 hover:text-white hover:border-slate-700 transition-colors">
                  Quận {d.name}
                </Link>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 pt-2">
              Thợ túc trực thường xuyên tại Ba Đình, Cầu Giấy, Đống Đa, Thanh Xuân, Hoàn Kiếm, Tây Hồ... Có mặt sau 20-30 phút.
            </p>
          </div>

          {/* Col 4: Branches (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white font-bold text-base border-b border-slate-800 pb-2">
              CƠ SỞ TẠI HÀ NỘI
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              {SITE_CONFIG.branches.map((branch, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-amber-400 shrink-0">📍</span>
                  <span>{branch}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Sub Footer Copyright Bar */}
      <div className="bg-slate-900/80 border-t border-slate-800/80 pt-4 pb-[calc(9rem+env(safe-area-inset-bottom))] text-xs text-slate-400 sm:pb-[calc(10rem+env(safe-area-inset-bottom))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>© 2026 {SITE_CONFIG.legalName}. Bản quyền thuộc về Thokythuat24h.com.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/gioi-thieu" className="hover:text-white transition-colors">Giới thiệu</Link>
            <span>•</span>
            <Link href="/bang-gia" className="hover:text-white transition-colors">Bảng giá</Link>
            <span>•</span>
            <Link href="/lien-he" className="hover:text-white transition-colors">Liên hệ</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
