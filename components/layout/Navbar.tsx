"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import siteData from "../data/Data.json";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navItems = siteData.navigation as NavItem[];

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const closeAll = () => {
    setOpen(false);
    setExpanded(null);
  };

  return (
    <>
      <nav
        className={cn(
          "text-white px-6 py-4 flex items-center justify-between border-b border-white/10 transition-all duration-300",
          open
            ? "relative bg-black"
            : scrolled
              ? "fixed top-0 left-0 w-full bg-black shadow-lg z-50"
              : "relative bg-transparent",
        )}
      >
        <Link
          href="/"
          className="text-3xl font-black tracking-tighter uppercase font-serif"
        >
          ZENJI
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-xs font-semibold tracking-widest font-mono">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <Link
                href={item.href}
                className="hover:text-red-500 transition-colors flex items-center gap-1 uppercase py-1"
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-black border border-zinc-800 py-2 w-32 shadow-xl">
                  {item.children.map((child, cIdx) => (
                    <Link
                      key={cIdx}
                      href={child.href}
                      className="block px-4 py-2 text-xs hover:bg-zinc-900 hover:text-red-500 transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4 sm:space-x-5">
          <div className="relative hidden lg:flex items-center">
            <input
              type="text"
              placeholder="SEARCH..."
              className="bg-transparent border border-zinc-700 text-xs px-3 py-1.5 pr-8 focus:outline-none focus:border-white transition-all w-36 focus:w-48 placeholder-zinc-500 uppercase tracking-wider font-mono"
            />
            <button className="absolute right-2 text-zinc-400 hover:text-white">
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>

          <Link
            href="/cart"
            className="hover:text-red-500 transition-colors p-1"
          >
            <ShoppingBag className="w-5 h-5" />
          </Link>

          <Link
            href="/account"
            className="hidden sm:block hover:text-red-500 transition-colors p-1"
          >
            <User className="w-5 h-5" />
          </Link>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
            aria-expanded={open}
            className="md:hidden text-white p-1 focus:outline-none"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden absolute left-0 right-0 top-full z-40 bg-black border-b border-zinc-800 font-mono w-full shadow-2xl">
          {navItems.map((item, idx) => {
            const isExpanded = expanded === item.label;
            return (
              <div key={idx} className="border-b border-zinc-900">
                {item.children ? (
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : item.label)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between px-6 py-4 text-sm font-bold tracking-widest text-white uppercase"
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isExpanded && "rotate-180",
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    className="block px-6 py-4 text-sm font-bold tracking-widest text-white hover:text-red-500 transition-colors uppercase"
                  >
                    {item.label}
                  </Link>
                )}
                {item.children && (
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-300 ease-out",
                      isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="min-h-0 overflow-hidden">
                      {item.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          href={child.href}
                          onClick={closeAll}
                          className="block px-8 py-3 text-xs font-bold tracking-widest text-zinc-300 hover:text-red-500 transition-colors uppercase border-t border-zinc-900"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <div className="border-t border-zinc-800 px-6 py-4 flex items-center gap-4">
            <Link
              href="/account"
              onClick={closeAll}
              className="text-xs font-bold tracking-widest text-white hover:text-red-500 transition-colors uppercase"
            >
              My Account
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
