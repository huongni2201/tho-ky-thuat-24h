"use client";

import { useState } from "react";
import { FAQS } from "@/data/siteData";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Giải Đáp Thắc Mắc Trước Khi Đặt Thợ
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Những thắc mắc phổ biến của gia chủ về báo giá, chất lượng tắc kê, khoan tường thạch cao/bê tông và thời gian phục vụ.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-10 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const contentId = `faq-answer-${idx}`;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/60 transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-base text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-100/80 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className="flex items-start gap-3">
                    <span className="font-mono text-sky-800 font-black text-sm shrink-0 mt-0.5">Q{idx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white border border-slate-300 flex items-center justify-center shrink-0 text-slate-600">
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-sky-800" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen ? (
                  <div id={contentId} className="p-4 sm:p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
