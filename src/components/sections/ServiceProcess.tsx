import { PROCESS_STEPS } from "@/data/siteData";

export default function ServiceProcess() {
  return (
    <section id="quy-trinh" className="py-14 md:py-20 bg-white border-b border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-2 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Quy Trình Phục Vụ 5 Bước Minh Bạch
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Quy trình làm việc rõ ràng giúp tiết kiệm thời gian cho gia chủ, đảm bảo không phát sinh chi phí ẩn hay phiền hà.
          </p>
        </div>

        {/* Process Steps List */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 flex flex-col justify-between hover:border-sky-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-amber-500 bg-slate-900 px-2.5 py-1 rounded-md">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-bold text-base text-slate-900">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
