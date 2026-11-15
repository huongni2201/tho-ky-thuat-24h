import { FAQS } from "@/data/siteData";

export default function FaqSection() {
  return (
    <section id="faq" className="border-b border-slate-200/80 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 text-left">
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">Giải Đáp Thắc Mắc Trước Khi Đặt Thợ</h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">Những thắc mắc phổ biến của gia chủ về báo giá, chất lượng tắc kê, khoan tường thạch cao/bê tông và thời gian phục vụ.</p>
        </div>
        <div className="mt-10 space-y-3">
          {FAQS.map((faq, index) => (
            <details key={faq.question} open={index === 0} className="group overflow-hidden rounded-xl border border-slate-200 bg-slate-50/60">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-left text-base font-bold text-slate-900 hover:bg-slate-100/80 sm:p-5">
                <span className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 shrink-0 font-mono text-sm font-black text-sky-800">Q{index + 1}.</span>
                  <span>{faq.question}</span>
                </span>
                <svg aria-hidden="true" className="size-5 shrink-0 text-slate-600 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-slate-100 bg-white p-4 text-sm leading-relaxed text-slate-600 sm:p-5"><p>{faq.answer}</p></div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
