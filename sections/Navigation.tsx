"use client";

import { useState, useEffect } from "react";
import { Menu, X, Vote } from "lucide-react";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#apropos", label: "À propos" },
  { href: "#programme", label: "Programme" },
  { href: "#vote", label: "Vote" },
  { href: "#event", label: "Événements" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileOpen(false);
  };

  const gradientText =
    "bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] bg-clip-text text-transparent";

  const linkClass =
    "text-[20px] font-semibold text-slate-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#5B21B6] hover:via-[#C026D3] hover:to-[#F472B6] transition tracking-wide";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <a
              href="#accueil"
              onClick={(e) => handleClick(e, "#accueil")}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r from-[#5B21B6] via-[#C026D3] to-[#F472B6] shadow-md">
                <Vote className="w-5 h-5 text-white" />
              </div>

              <div className="hidden sm:block leading-tight">
                <p className="font-semibold text-sm text-slate-800">
                  Cathy HADJER & Mathieu GBEKAN
                </p>
                <p className={`text-xs font-medium ${gradientText}`}>
                  Elections Consulaires 2026
                </p>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className={linkClass}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100"
            >
              {isMobileOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition ${
          isMobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsMobileOpen(false)}
        />

        <div
          className={`absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-6 transition-transform ${
            isMobileOpen ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          <div className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="block px-4 py-3 rounded-xl text-[15px] font-semibold text-slate-700 hover:bg-gradient-to-r hover:from-[#5B21B6]/10 hover:via-[#C026D3]/10 hover:to-[#F472B6]/10 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}