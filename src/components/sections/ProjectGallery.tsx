import Image from "next/image";
import { PROJECTS, SITE_CONFIG } from "@/data/siteData";

export default function ProjectGallery() {
  return (
    <section className="py-14 md:py-20 bg-slate-900 text-white font-sans border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-2">
            <span className="text-amber-400 font-bold text-xs tracking-wider uppercase bg-slate-800 border border-slate-700 px-2.5 py-0.5 rounded-md inline-block">
              HÌNH ẢNH THI CÔNG THỰC TẾ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Công Trình Khoan Lắp Tiêu Biểu Tại Hà Nội
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
              Hình ảnh thực tế thợ thi công treo tranh, lắp Tivi màn hình lớn, kệ gỗ và gương nghệ thuật cho các căn hộ chung cư & nhà phố.
            </p>
          </div>

          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <span>Tư vấn treo đồ theo mẫu</span>
            <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Dynamic Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 sm:mt-10">
          
          {/* Featured Large Item (Left - 7 cols) */}
          <div className="lg:col-span-7 group relative rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-xl flex flex-col justify-end min-h-[360px] lg:min-h-[420px]">
            <Image
              src={PROJECTS[0].image}
              alt={PROJECTS[0].title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            />
            {/* Gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

            {/* Content overlay */}
            <div className="relative p-6 sm:p-8 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                <span className="bg-amber-500/20 border border-amber-500/40 px-2 py-0.5 rounded-md">
                  {PROJECTS[0].category}
                </span>
                <span>• {PROJECTS[0].district}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                {PROJECTS[0].title}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm max-w-xl line-clamp-2">
                {PROJECTS[0].description}
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Thời gian: {PROJECTS[0].completionTime}
                </span>
                <span>• Đo bằng cân thủy Laser</span>
              </div>
            </div>
          </div>

          {/* Right Column Stacked Items (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-6">
            {PROJECTS.slice(1).map((project) => (
              <div
                key={project.id}
                className="group relative rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-lg flex flex-col justify-end min-h-[200px]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                <div className="relative p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-300">
                    <span className="bg-sky-500/20 border border-sky-500/40 px-2 py-0.5 rounded-md">
                      {project.category}
                    </span>
                    <span>• {project.district}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
