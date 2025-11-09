'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/sales", label: "Sales" },
    { href: "/expenses/daily", label: "Daily" },
    { href: "/expenses/monthly", label: "Monthly" },
    { href: "/workers", label: "Workers" },
    { href: "/analytics", label: "Analytics" },
  ];

  return (
    <div className="h-16 px-4 md:px-6 bg-white border-b border-border">
      <div className="flex h-16 items-center justify-between max-w-[1600px] mx-auto">
        <Link href="/" className="flex items-center">
          <span className="font-semibold text-xl text-black tracking-tight">
            Finance
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-black underline underline-offset-4"
                  : "text-muted-foreground hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center border border-border px-3 py-2 text-sm font-medium hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border px-4 py-4 grid gap-2 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium ${
                isActive(link.href)
                  ? "text-black underline"
                  : "text-muted-foreground hover:text-black"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}