"use client";

import BgGrain from "@/components/bg-grain-svg";
import { DiagonalPattern } from "@/components/slant-dashes-svg";
import Image from "next/image";
import Link from "next/link";

import lockImage from "@/assets/images/lock.svg";

export function UnlockingFinance() {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8 relative">
      {/* Background grain for this section */}
      <BgGrain className="absolute inset-0 w-full h-full z-0 optimized" />

      {/* Section content */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl capitalize sm:text-4xl lg:text-5xl font-pt-serif leading-[56px] tracking-[0.192px] text-spout-deep-teal font-normal mb-4 sm:mb-6">
            Unlocking <span className="font-normal">Finance</span> with DeFi
            <br />
            through our stablecoin
          </h2>
          <p className="text-[18px] sm:text-base lg:text-lg text-spout-text-muted-dark max-w-3xl mx-auto text-center font-dm-sans  font-normal leading-6 tracking-[0.064px]">
            Expand access to traditional assets with security, transparency, and
            real yield on-chain.
          </p>
          <p className="text-[18px] sm:text-base lg:text-lg text-spout-text-muted-dark max-w-3xl mx-auto text-center font-dm-sans  font-normal leading-6 tracking-[0.064px]">
            Global access, real yield, full transparency, built for DeFi.
          </p>
        </div>

        {/* Cards Section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 mb-6 sm:mb-8 lg:mb-12">

          {/* DeFi Integration Benefits Card */}

      <div className="flex ">
          <div className="border bg-white border-gray-300 rounded-l-none sm:rounded-l-none rounded-r-none sm:rounded-r-none p-4 sm:p-6 lg:p-8 relative">
            <div className="flex bg-[#A7C6ED]/35 border border-[#A7C6ED] items-center gap-2 sm:gap-3 mb-3 sm:mb-4 w-fit px-2 py-1 rounded-none">
              {/* <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#004040]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg> */}
              <Image
                src="/svg-assets/icon-shield-security.svg"
                alt="Shield"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <h3 className="text-lg sm:text-xl font-noto-sans font-semibold text-[#3D5678]">
                DeFi Integration Benefits
              </h3>
            </div>

            <p className="text-sm sm:text-base font-noto-sans font-normal text-[#525252] mb-4 sm:mb-6 leading-relaxed">
              DeFi expands access to traditional assets by enabling
              security-backed lending and diversified exposure, unlocking
              opportunities while bridging traditional and decentralized
              markets.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-0">
              <li className="flex items-center gap-2 text-xs sm:text-sm font-noto-sans text-[#525252]">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400"></div>
                Security-backed lending
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm font-noto-sans text-[#525252]">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400"></div>
                Multi-asset exposure
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm font-noto-sans text-[#525252]">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400"></div>
                Access to real yield
              </li>
            </ul>

            {/* Benefits icon */}
            <div className="flex justify-center lg:absolute lg:bottom-6 lg:right-6 optimized">
              <Image
                src="/svg-assets/defi-integration-benefits.svg"
                alt="Benefits"
                width={180}
                height={180}
                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40"
              />
            </div>
          </div>
            <div className="bg-linear-gradient-2 w-[64px] sm:w-[94px] h-[340px] sm:h-auto"></div>
      </div>




          {/* DeFi Security & Transparency Card */}
                <div className="flex ">
                <div className="bg-linear-gradient-3 w-[64px] sm:w-[94px] h-[340px] sm:h-auto"></div>

          <div className="border-t sm:border-t border-r border-b border-l-0 sm:border-l-0 bg-white border-gray-300 rounded-r-none sm:rounded-r-none rounded-l-none sm:rounded-l-none p-4 sm:p-6 lg:p-8 relative">
            <div className="flex bg-[#A7C6ED]/35 border border-[#A7C6ED] items-center gap-2 sm:gap-3 mb-3 sm:mb-4 w-fit px-2 py-1 rounded-none">
              <Image
                src="/svg-assets/defi-security-transparency.svg"
                alt="Lock"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <h3 className="text-lg sm:text-xl font-noto-sans font-semibold text-[#3D5678]">
                DeFi Security & Transparency
              </h3>
            </div>

            <p className="text-sm sm:text-base font-noto-sans font-normal text-[#525252] mb-4 sm:mb-6 leading-relaxed">
              DeFi combines strong safeguards with full transparency, ensuring
              all assets are protected and fully verifiable while building
              lasting trust and unlocking new opportunities in finance.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 lg:mb-0">
              <li className="flex items-center gap-2 text-xs sm:text-sm font-noto-sans text-[#525252]">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400"></div>
                Institutional-grade asset protection
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm font-noto-sans text-[#525252]">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400"></div>
                Transparent on-chain verification
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm font-noto-sans text-[#525252]">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400"></div>
                Continuous independent audits
              </li>
            </ul>

            {/* Lock icon */}
            <div className="flex justify-center lg:absolute lg:bottom-3 lg:right-6 optimized">
              <Image
                src="/svg-assets/security-lock.svg"
                alt="Lock"
                width={160}
                height={160}
                className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 z-10"
              />
              <Image
                src={lockImage}
                alt="Lock"
                width={160}
                height={160}
                className="w-20 h-20 sm:w-22 sm:h-22 lg:w-26 opacity-20 lg:h-26 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 ml-7 mt-3"
              />
            </div>
          </div>
                </div>


        </div>

        {/* View Reserve Details Button */}
        {/* <div className="flex justify-start">
          <Link
            href="/app/proof-of-reserve"
            className="inline-flex bg-white p-2 sm:p-3 border rounded-md border-gray-300 items-center gap-1 sm:gap-2 text-[#004040] font-semibold text-sm sm:text-base hover:text-[#003030] transition-colors"
          >
            View Reserve Details
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div> */}
      </div>

      {/* Diagonal blue lines at bottom */}
      <div className="relative z-10 w-full mt-10 px-4 py-2">
        <DiagonalPattern
          width="100%"
          height={34}
          color="#A7C6ED"
          strokeWidth={1.5}
          spacing={14}
        />
      </div>
    </section>
  );
}
