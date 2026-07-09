"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks } from "@/lib/nav-links";
import { Magnetic } from "@/components/magnetic";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-[80] flex items-center justify-between px-6 py-5 md:px-12 md:py-7 mix-blend-difference">
      <Link href="/" className="font-display text-lg font-semibold tracking-wide text-paper" data-cursor="link">
        IMAGINE <span className="text-pink">MEDIA</span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Magnetic key={link.href}>
            <Link
              href={link.href}
              data-cursor="link"
              className={`text-sm uppercase tracking-[0.15em] transition-opacity hover:opacity-60 ${
                pathname === link.href ? "text-pink" : "text-paper"
              }`}
            >
              {link.label}
            </Link>
          </Magnetic>
        ))}
        <Magnetic>
          <Link
            href="/contact"
            data-cursor="link"
            className="rounded-full border border-paper px-5 py-2 text-sm uppercase tracking-[0.15em] text-paper transition-colors hover:border-pink hover:text-pink"
          >
            Contact
          </Link>
        </Magnetic>
      </nav>

      <button
        onClick={() => setOpen(!open)}
        className="relative z-[85] flex h-8 w-8 flex-col items-center justify-center gap-1.5 md:hidden"
        aria-label="Menu"
        data-cursor="link"
      >
        <span
          className={`h-px w-6 bg-paper transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
        />
        <span
          className={`h-px w-6 bg-paper transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[82] flex flex-col items-center justify-center gap-8 bg-ink"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-paper"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-pink px-6 py-3 text-sm uppercase tracking-[0.15em] text-paper"
            >
              Nous contacter
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
