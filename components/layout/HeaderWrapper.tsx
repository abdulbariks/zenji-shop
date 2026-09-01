"use client";

import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Topbar from "./Topbar";

const SCROLL_THRESHOLD = 8;

export default function HeaderWrapper() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-50 font-mono">
      <Topbar />
      <Navbar scrolled={scrolled} />
    </header>
  );
}
