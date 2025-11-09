'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  {
    category: "Dashboard",
    items: [
      { href: "/", label: "Home" },
      { href: "/analytics", label: "Analytics" },
    ],
  },
  {
    category: "Finance",
    items: [
      { href: "/sales", label: "Sales" },
      { href: "/expenses/daily", label: "Daily Expenses" },
      { href: "/expenses/monthly", label: "Monthly Expenses" },
    ],
  },
  {
    category: "Management",
    items: [
      { href: "/workers", label: "Workers" },
    ],
  },
  {
    category: "Account",
    items: [
      { href: "/auth/login", label: "Login" },
      { href: "/auth/register", label: "Register" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="space-y-6">
      {menuItems.map((section) => (
        <div key={section.category} className="space-y-2">
          <h3 className="text-xs font-bold text-black uppercase tracking-wider px-3">
            {section.category}
          </h3>
          <div className="space-y-1">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-black underline"
                    : "text-muted-foreground hover:text-black"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}