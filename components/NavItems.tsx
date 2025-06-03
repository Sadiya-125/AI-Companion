"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Users, BarChart, CreditCard } from "lucide-react";

const navItems = [
  { label: "Companions", href: "/companions", icon: Users },
  { label: "Usage", href: "/my-journey", icon: BarChart },
  { label: "Subscription", href: "/subscription", icon: CreditCard },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 sm:gap-4">
      {navItems.map(({ label, href, icon: Icon }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            "flex items-center gap-2 px-3 py-2 border rounded-md transition-colors duration-200",
            pathname === href
              ? "border-primary text-primary font-semibold"
              : "border-muted hover:border-primary/60 hover:text-primary"
          )}
        >
          <Icon className="w-4 h-4" />
          <span className="text-[15px] hidden sm:inline">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
