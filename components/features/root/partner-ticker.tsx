"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const partners = [
  {
    src: "/partners/Chainlink.svg",
    alt: "Chainlink",
    link: "https://chain.link/",
  },
  {
    src: "/partners/Inco.png",
    alt: "INCO",
    link: "https://www.inco.org/",
  },
  {
    src: "/partners/Blocksense.png",
    alt: "blocksense",
    link: "https://blocksense.network/",
  },
  {
    src: "/partners/Pharos.svg",
    alt: "SOLANA",
    link: "https://pharosnetwork.xyz/",
  },
];

export function PartnerTicker() {
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const speed = 0.5;

  useEffect(() => {
    let frame: number;
    const animate = () => {
      if (contentRef.current && !isPaused) {
        const scrollWidth = contentRef.current.scrollWidth / 2;
        setOffset((prev) => {
          const next = prev - speed;
          return Math.abs(next) >= scrollWidth ? 0 : next;
        });
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <div className="w-full rounded-lg border border-blue-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center">
        {/* Fixed "Compatible With Leading Networks" box */}
        <div className="bg-white rounded-l-lg px-8 py-5 border-r border-blue-200 flex-shrink-0 shadow-sm">
          <h3 className="text-lg font-noto-sans text-[#334155] font-semibold text-center leading-tight tracking-tight">
            Compatible With<br />
            Leading Networks
          </h3>
        </div>
        
        {/* Animated partner logos */}
        <div 
          className="flex-1 overflow-hidden bg-gradient-to-r from-white via-blue-50/20 to-white"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={tickerRef}
            className="flex items-center will-change-transform"
            style={{ 
              transform: `translateX(${offset}px)`,
              transition: isPaused ? 'none' : 'none'
            }}
          >
            <div
              ref={contentRef}
              className="flex items-center shrink-0"
            >
              {/* Duplicate the partners array for seamless loop */}
              {[...partners, ...partners, ...partners].map((partner, idx) => (
                <Link
                  key={idx}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded group"
                  aria-label={partner.alt}
                >
                  <div className="bg-white/80 backdrop-blur-sm px-20 py-5 border-r border-blue-200/60 transition-all duration-300 ease-out flex items-center justify-center min-w-[120px] hover:bg-blue-50 hover:shadow-inner relative">
                    <Image
                      src={partner.src}
                      alt={partner.alt}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain filter brightness-0 saturate-100 transition-all duration-300 ease-out group-hover:scale-110 group-hover:brightness-[0.3]"
                      style={{ 
                        filter: 'brightness(0) saturate(100%) invert(20%) sepia(8%) saturate(1352%) hue-rotate(201deg) brightness(95%) contrast(86%)'
                      }}
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/5 transition-colors duration-300 rounded"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}