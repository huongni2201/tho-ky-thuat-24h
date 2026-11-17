"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SERVICES } from "@/data/siteData";
import { REPAIR_SERVICES } from "@/data/repairServices";

export default function ServicesDropdown({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !detailsRef.current?.contains(event.target)) {
        detailsRef.current?.removeAttribute("open");
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  const close = () => {
    detailsRef.current?.removeAttribute("open");
    onNavigate?.();
  };

  return (
    <details
      ref={detailsRef}
      className={mobile ? "group border-b border-slate-100" : "group relative"}
      onKeyDown={(event) => {
        if (event.key === "Escape" && detailsRef.current?.open) {
          event.stopPropagation();
          detailsRef.current.removeAttribute("open");
          detailsRef.current.querySelector("summary")?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          detailsRef.current?.removeAttribute("open");
        }
      }}
    >
      <summary className={`flex min-h-11 cursor-pointer list-none items-center gap-1.5 hover:text-sky-800 [&::-webkit-details-marker]:hidden ${mobile ? "justify-between font-semibold text-base text-slate-800" : "py-1"}`}>
        Dịch Vụ
        <svg aria-hidden="true" className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <path d="m5 7.5 5 5 5-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <div className={mobile ? "pb-3" : "absolute left-1/2 top-full z-10 max-h-[65dvh] w-[min(44rem,calc(100vw-2rem))] -translate-x-1/2 overflow-y-auto rounded-lg border border-slate-200 bg-white p-4 shadow-lg"}>
        <Link href="/dich-vu" onClick={close} className="flex min-h-11 items-center rounded px-3 text-sm font-bold text-sky-900 hover:bg-sky-50">
          Xem tất cả dịch vụ →
        </Link>
        <div className={mobile ? "space-y-3" : "grid grid-cols-2 gap-4 border-t border-slate-100 pt-3"}>
          <div>
            <p className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">Khoan lắp tại nhà</p>
            <ul>
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={service.slug ? `/${service.slug}` : `/dich-vu#${service.id}`} onClick={close} className="flex min-h-11 items-center whitespace-normal rounded px-3 py-2 text-sm font-medium leading-relaxed text-slate-700 hover:bg-sky-50 hover:text-sky-900">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">Sửa chữa điện nước</p>
            <ul>
              {REPAIR_SERVICES.map((service) => (
                <li key={service.id}>
                  <Link href={`/dich-vu#${service.id}`} onClick={close} className="flex min-h-11 items-center whitespace-normal rounded px-3 py-2 text-sm font-medium leading-relaxed text-slate-700 hover:bg-sky-50 hover:text-sky-900">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </details>
  );
}
