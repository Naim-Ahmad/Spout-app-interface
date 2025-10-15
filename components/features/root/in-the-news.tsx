"use client";

import Image from "next/image";
import Link from "next/link";
import { DiagonalPattern } from "@/components/slant-dashes-svg";

export function InTheNews() {
  const newsItems = [
    {
      logo: "/news/morningstar.png",
      publication: "Morningstar",
      date: "SEP 4, 2025",
      url: "#",
    },
    {
      logo: "/news/business-insider.png",
      publication: "Business Insider",
      date: "SEP 1, 2025",
      url: "#",
    },
    {
      logo: "/news/bezinga.png",
      publication: "Bezinga",
      date: "AUG 23, 2025",
      url: "#",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 relative">
      {/* Section content */}
      <div className="w-full max-w-[1800px] mx-auto px-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-lora font-normal text-[#004040] mb-6">
            In the <span className="font-bold">News</span>
          </h2>
          <p className="text-lg font-noto-sans font-normal text-[#475569] max-w-3xl mx-auto leading-relaxed">
            Financial media outlets are highlighting our approach to secure, regulated<br />
            investing with real returns
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <div key={index} className="relative bg-white border border-gray-300 rounded-lg overflow-hidden">
              {/* Top-left diamond */}
              <div className="absolute -left-4 -top-4 z-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                  <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="currentColor" strokeWidth="3" fill="white"/>
                </svg>
              </div>

              {/* Top-right diamond */}
              <div className="absolute -right-4 -top-4 z-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                  <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="currentColor" strokeWidth="3" fill="white"/>
                </svg>
              </div>

              {/* Bottom-left diamond */}
              <div className="absolute -left-4 -bottom-4 z-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                  <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="currentColor" strokeWidth="3" fill="white"/>
                </svg>
              </div>

              {/* Bottom-right diamond */}
              <div className="absolute -right-4 -bottom-4 z-20">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                  <path d="M12 2L22 12L12 22L2 12L12 2Z" stroke="currentColor" strokeWidth="3" fill="white"/>
                </svg>
              </div>

              {/* Logo Area */}
              <div className="h-48 flex items-center justify-center p-8 bg-white">
                <Image
                  src={item.logo}
                  alt={item.publication}
                  width={300}
                  height={120}
                  className="w-full h-auto max-h-32 object-contain"
                />
              </div>

              {/* Publication Info */}
              <div className="p-6 border-t border-gray-300 flex items-center justify-between">
                <Link
                  href={item.url}
                  className="flex items-center gap-2 text-[#004040] font-noto-sans font-medium hover:text-[#003030] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  {item.publication}
                </Link>
                <span className="text-sm font-noto-sans text-[#475569]">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Diagonal blue lines at bottom */}
      <div className="relative z-10 w-full mt-10">
        <DiagonalPattern 
          width="100%" 
          height={34} 
          color="#A7C6ED" 
          strokeWidth={2} 
          spacing={14} 
        />
      </div>
    </section>
  );
}

