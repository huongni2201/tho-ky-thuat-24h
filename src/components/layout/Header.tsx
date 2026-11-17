"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/data/siteData";
import TechnicianIcon from "@/components/ui/TechnicianIcon";
import ServicesDropdown from "@/components/layout/ServicesDropdown";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="w-full font-sans sticky top-0 z-50 transition-all duration-300"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          mobileMenuButtonRef.current?.focus();
        }
      }}
    >
      {/* 1. Small Utility Topbar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5">
          {/* Left info */}
          <div className="flex items-center gap-4 text-slate-300 text-[12px] whitespace-nowrap">
            <span className="flex items-center gap-1.5 font-medium">
              <svg className="w-3.5 h-3.5 text-sky-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Khu vực: <span className="text-white font-semibold">Hà Nội</span>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Giờ làm việc: <span className="text-white font-medium">{SITE_CONFIG.workingHours}</span>
            </span>
          </div>

          {/* Right Links & Phone */}
          <div className="flex items-center gap-5 ml-auto text-[12px] whitespace-nowrap">
            <nav className="hidden lg:flex items-center gap-5 text-slate-300">
              <Link href="/gioi-thieu" className="hover:text-sky-300 transition-colors">Giới thiệu</Link>
              <Link href="/bang-gia" className="hover:text-sky-300 transition-colors">Bảng giá</Link>
              <Link href="/lien-he" className="hover:text-sky-300 transition-colors">Liên hệ</Link>
            </nav>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold tracking-tight bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60"
            >
              <svg className="w-3.5 h-3.5 animate-pulse text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Hotline: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Header */}
      <div
        className={`bg-white border-b transition-all duration-200 ${
          isScrolled
            ? "shadow-md py-2.5 border-slate-200"
            : "py-3.5 border-slate-200/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-900 to-slate-900 flex items-center justify-center text-amber-400 font-black text-xl shadow-md border border-sky-800 group-hover:scale-105 transition-transform">
              <TechnicianIcon />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-tight group-hover:text-sky-900 transition-colors flex items-center gap-1.5">
                DỊCH VỤ KỸ THUẬT <span className="text-sky-700 font-black">24H</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 font-semibold tracking-wider uppercase">
                Khoan Tường • Treo Tranh, TV
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Điều hướng chính" className="hidden lg:flex items-center gap-4 xl:gap-6 font-semibold text-sm text-slate-700 whitespace-nowrap">
            <Link href="/" className="hover:text-sky-800 transition-colors py-1">
              Trang Chủ
            </Link>
            <Link href="/gioi-thieu" className="hidden xl:block hover:text-sky-800 transition-colors py-1">
              Giới Thiệu
            </Link>
            <ServicesDropdown />
            <Link href="/bang-gia" className="hover:text-sky-800 transition-colors py-1">
              Bảng Giá
            </Link>
            <Link href="/khu-vuc-phuc-vu" className="hidden xl:block hover:text-sky-800 transition-colors py-1">
              Khu Vực Phục Vụ
            </Link>
            <Link href="/lien-he" className="hover:text-sky-800 transition-colors py-1">
              Liên Hệ
            </Link>
          </nav>

          {/* Prominent Phone CTA Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold text-sm px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>GỌI NGAY: {SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            ref={mobileMenuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden min-h-11 min-w-11 p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen ? (
          <nav id="mobile-nav" aria-label="Điều hướng trên điện thoại" className="lg:hidden max-h-[calc(100dvh-9rem)] overflow-y-auto border-t border-slate-200/90 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-bold text-slate-800 text-base py-1.5 border-b border-slate-100"
            >
              Trang Chủ
            </Link>
            <ServicesDropdown mobile onNavigate={() => setIsMobileMenuOpen(false)} />
            <Link
              href="/gioi-thieu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-base py-1.5 border-b border-slate-100"
            >
              Giới Thiệu & Cam Kết
            </Link>
            <Link
              href="/bang-gia"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-base py-1.5 border-b border-slate-100"
            >
              Bảng Giá Dịch Vụ
            </Link>
            <Link
              href="/khu-vuc-phuc-vu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-base py-1.5 border-b border-slate-100"
            >
              Khu Vực Phục Vụ
            </Link>
            <Link
              href="/lien-he"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-base py-1.5 border-b border-slate-100"
            >
              Liên Hệ
            </Link>

            <div className="pt-2">
              <a
                href={`tel:${SITE_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-extrabold text-base py-3 rounded-xl shadow"
              >
                <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1.01 1.01 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>GỌI THỢ NGAY: {SITE_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}


