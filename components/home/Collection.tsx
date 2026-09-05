"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import collectionItems from "../data/collectionData.json";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Collection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      // Pin container so that scroll progress translates incoming cards over previous ones
      const totalCards = cards.length;

      // Create main GSAP timeline linked to scroll pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalCards * 100}%`, // Scroll distance proportional to amount of cards
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      // Animate each card up into position
      cards.forEach((card, i) => {
        if (i === 0) return; // First card is already visible base layer

        tl.fromTo(
          card,
          {
            yPercent: 100,
            scale: 0.96,
            opacity: 0.8,
          },
          {
            yPercent: 0,
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
          },
          // Stagger card overlay animations seamlessly
          `+=0.2`,
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden font-mono px-4 md:px-12"
    >
      {/* Title Header */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 text-center">
        <p className="text-red-600 text-xs tracking-widest font-bold uppercase">
          ORIGINAL DROPS
        </p>
        <h2 className="text-3xl font-black font-sans uppercase tracking-tight">
          COLLECTION
        </h2>
      </div>

      {/* Stack Container */}
      <div className="relative w-full max-w-5xl h-[75vh] min-h-[500px] mt-12 flex items-center justify-center">
        {collectionItems.map((item, index) => {
          // Offsets each card slightly down so top border stacks visually behind top cards
          const topOffset = index * 16;

          return (
            <div
              key={item.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              style={{
                top: `${topOffset}px`,
                zIndex: index + 1,
              }}
              className="absolute inset-x-0 mx-auto w-full max-w-4xl h-[calc(100%-64px)] bg-zinc-950 border-2 border-red-700/80 rounded-t-lg shadow-2xl overflow-hidden flex flex-col justify-end"
            >
              {/* Background Card Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center grayscale contrast-125 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              </div>

              {/* Card Content Overlay */}
              <div className="relative z-10 p-6 md:p-10 space-y-3">
                <p className="text-red-500 text-xs tracking-widest font-semibold uppercase">
                  {item.tagline}
                </p>
                <h3 className="text-4xl md:text-6xl font-black font-sans tracking-tighter text-white uppercase leading-none">
                  {item.title}
                </h3>
                <div className="pt-2">
                  <Link
                    href={item.ctaLink}
                    className="inline-block text-xs font-bold tracking-widest uppercase text-white border-b-2 border-white hover:text-red-500 hover:border-red-500 transition-colors py-1"
                  >
                    {item.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
