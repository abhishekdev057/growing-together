"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Leaf } from "lucide-react";
import { navLinks, siteConfig } from "@/content/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-paper/95 backdrop-blur-sm shadow-[0_1px_0_rgba(23,60,47,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between py-4" aria-label="Primary">
        <Link
          href="/#home"
          className={`flex items-center gap-2 font-serif text-lg tracking-tight transition-colors ${
            scrolled || open ? "text-deep-green" : "text-paper"
          }`}
        >
          <Leaf className="h-5 w-5 text-leaf" aria-hidden="true" strokeWidth={1.75} />
          <span>{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-leaf ${
                scrolled ? "text-deep-green" : "text-paper/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#policy"
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
              scrolled
                ? "border-forest text-forest hover:bg-forest hover:text-paper"
                : "border-paper/60 text-paper hover:bg-paper hover:text-forest"
            }`}
          >
            Explore the Research
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden rounded-md p-2 ${scrolled || open ? "text-deep-green" : "text-paper"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-forest/10 bg-paper px-6 pb-8 pt-2">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-deep-green hover:bg-sage/50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#policy"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-forest px-5 py-3 text-center text-sm font-medium text-paper"
            >
              Explore the Research
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
