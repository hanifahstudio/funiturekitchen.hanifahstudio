"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import Logo from "./logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "News" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* top bar */}
      <div className="bg-forest-deep text-white/80 text-[0.8125rem]">
        <div className="container-x flex items-center justify-between h-10">
          <p className="hidden sm:block">Welcome to Woodora Modular Kitchen Studio !</p>
          <div className="flex items-center gap-7 sm:gap-10">
            <a
              href="tel:+18005702288"
              className="flex items-center gap-2 hover:text-[#c6904f] transition-colors"
            >
              <Phone size={14} className="text-[#c6904f]" />
              <span className="font-medium text-white">
                Call for help: +1 (800) 570 2288
              </span>
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 hover:text-[#c6904f] transition-colors font-medium"
            >
              <span className="text-[#c6904f]">✉</span> Book An Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* main nav */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_10px_30px_rgba(22,36,28,0.10)]" : ""
        }`}
      >
        <div className="container-x flex items-center justify-between h-[86px]">
          <Link href="/" aria-label="Woodora Kitchens home">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Main">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={pathname === item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex">
              <Link href="/contact" className="btn-brass !py-3.5 !px-7">
                Get a Quote
              </Link>
            </span>
            <button
              className="lg:hidden w-12 h-12 rounded-full border border-[#e4ddcd] flex items-center justify-center text-forest"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-[visibility] ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-forest-deep/70 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-7 flex flex-col transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-11 h-11 rounded-full border border-[#e4ddcd] flex items-center justify-center text-forest"
            >
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 border-b border-[#efe9dc] font-heading font-medium text-ink text-lg"
                data-active={pathname === item.href}
              >
                {item.label}
                <ChevronRight
                  size={18}
                  className={pathname === item.href ? "text-brass" : "text-[#c9c3b4]"}
                />
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-brass mt-8 justify-center"
          >
            Book An Appointment
          </Link>
          <p className="mt-8 text-sm text-body-text">
            Call for help:{" "}
            <a href="tel:+18005702288" className="text-forest font-medium">
              +1 (800) 570 2288
            </a>
          </p>
        </div>
      </div>
    </header>
  );
}
