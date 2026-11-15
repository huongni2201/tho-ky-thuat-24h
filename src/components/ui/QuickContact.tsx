import { SITE_CONFIG } from "@/data/siteData";

const bubbleClassName =
  "quick-contact-bubble relative grid size-12 place-items-center rounded-full border-2 border-white shadow-md focus-visible:outline-sky-500 sm:size-14 after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border-2 after:opacity-0 motion-safe:transition-transform motion-safe:hover:scale-105 motion-safe:active:scale-95";

export default function QuickContact() {
  return (
    <nav
      aria-label="Liên hệ nhanh"
      className="fixed right-[max(0.75rem,env(safe-area-inset-right))] bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 flex flex-col gap-3 sm:right-[max(1.5rem,env(safe-area-inset-right))]"
    >
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        aria-label={`Gọi điện ${SITE_CONFIG.phoneDisplay}`}
        className={`${bubbleClassName} bg-amber-400 text-slate-950 hover:bg-amber-300 after:border-amber-400`}
      >
        <svg aria-hidden="true" className="size-5 sm:size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
      <a
        href={SITE_CONFIG.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nhắn tin qua Zalo"
        className={`${bubbleClassName} bg-blue-700 text-sm font-extrabold text-white hover:bg-blue-800 after:border-blue-500 sm:text-base`}
      >
        <span>Zalo</span>
      </a>
    </nav>
  );
}
