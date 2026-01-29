"use client";

import Image from "next/image";
import Link from "next/link";
import { JoinMailingList } from "./join-mailing-list";

import image1 from "@/assets/images/hero/1.png";

export function HeroSection() {
  return (
    <section className="w-full flex flex-col relative overflow-hidden lg:h-[702px] justify-center">
      {/* Hero content wrapper */}
      <div className="relative w-full">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/svg-assets/landingpage/grid-bg.svg"
            className="bg-contain w-full h-full optimized"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-6 sm:pt-12 lg:pt-20 pb-0 flex flex-col lg:flex-row items-center gap-10 lg:gap-[114px]">
          {/* Left column */}
          <div className="w-full lg:max-w-[833px] mb-6 sm:mb-12 lg:mb-0">
            <div className=" space-y-4 sm:space-y-6">
              <h1 className="font-pt-serif text-spout-primary lg:text-[60px] font-normal lg:leading-[72px] text-2xl capitalize sm:text-3xl lg:text-5xl !leading-tight">
                The Go-To Platform for Margin Trading at{" "}
                <span className="text-spout-blue">0%</span> Rates
              </h1>

              <p className="text-sm sm:text-base tracking-[-0.072px] font-noto-sans text-spout-gray font-dm-sans lg:text-[20px] lg:leading-7">
                Spout enables you to borrow against your equities at 0% APR or
                lend your stablecoins for 10%+ APY
              </p>

              <div className="pt-2 sm:pt-0 flex flex-col lg:flex-row  items-center gap-4 sm:gap-6">
                <Link
                  href="/app"
                  className="flex items-center justify-center w-full lg:w-[199px] h-[45.281px] bg-spout-primary hover:bg-spout-primary/90 text-white font-dm-sans font-medium text-lg sm:text-xl rounded-[4.766px] transition-all"
                >
                  Launch Platform
                </Link>

                <button className="flex items-center justify-center gap-3 w-full lg:w-[162px] h-[45.281px] border-[1px]  rounded-[4.766px] border-spout-light-gray text-primary font-dm-sans font-medium text-lg sm:text-xl transition-all group">
                  Try Demo
                  <div className="bg-spout-primary w-[35px] h-[32px] rounded-[3px] text-white flex items-center justify-center transition-transform group-hover:translate-x-2">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.43 5.92999L20.5 12L14.43 18.07"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.5 12H20.33"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>

              <p className="text-xs sm:text-sm lg:text-base font-noto-sans text-[#004040] uppercase tracking-wide">
                [JOIN THE PLATFORM THAT&apos;S MAKING TRADITIONAL CAPITAL MORE
                EFFICIENT]
              </p>

              <div className="max-w-md pt-2 sm:pt-0">
                <JoinMailingList />
              </div>
            </div>
          </div>

          {/* Right column - image */}
          <div className="max-w-[368.592px]">
            <div className="w-full max-w-[280px] sm:max-w-sm lg:max-w-xl lg:w-auto optimized">
              <Image src={image1} alt="Spout Water Tokens" priority />
            </div>
          </div>
        </div>

        {/* Partner Ticker */}
        {/* <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 mb-3 sm:mb-6">
          <div className="px-16 hidden md:block optimized">
            <PartnerTicker />
          </div>
          <div className="block md:hidden optimized">
            <PartnerTicker />
          </div>
        </div> */}
      </div>
    </section>
  );
}
