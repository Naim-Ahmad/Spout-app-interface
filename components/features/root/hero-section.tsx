"use client";

import Image from "next/image";
import Link from "next/link";
import { JoinMailingList } from "./join-mailing-list";

import image1 from "@/assets/images/hero/1.png";

export function HeroSection() {
  return (
    <section className="w-full flex flex-col relative overflow-hidden">
      {/* Hero content wrapper */}
      <div className="relative w-full">
        {/* Grid background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img
            src="/svg-assets/landingpage/grid-bg.svg"
            className="object-cover w-full h-full optimized"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-6 sm:pt-12 lg:pt-0 pb-16 flex flex-col lg:flex-row gap-10 xl:gap-[114px] items-center">
          {/* Left column */}
          <div className="lg:max-w-[840px] sm:mb-12">
            <div className="">
              <h1 className="mt-[100px] text-[#004040] font-pt-serif text-[52px] font-normal leading-[72px] tracking-[0.208px]">
                The Go-To Platform for Margin Trading at{" "}
                <span className="text-spout-blue">0%</span> Rates
              </h1>

              <p className="py-8 text-[#757679] font-dm-sans text-[18px] font-normal leading-[24px] tracking-[0.072px]">
                Spout enables you to borrow against your equities at 0% APR or
                lend your stablecoins for <br /> 10%+ APY
              </p>

              <div className="pt-2 sm:pt-0 flex flex-col lg:flex-row  items-center gap-4 sm:gap-6 mb-[52px]">
                <Link
                  href="/app"
                  className="flex h-9 px-4 py-3 justify-center items-center gap-3 bg-spout-primary hover:bg-spout-primary/90 text-white font-dm-sans text-[16px] font-medium leading-normal rounded-[4.766px] transition-all"
                >
                  Launch Platform
                </Link>

                <button className="flex h-9 px-4 py-3 justify-center items-center gap-[11.916px] border-[1px]  rounded-[4.766px] border-spout-light-gray text-primary font-dm-sans !text-black font-[16px] text-lg sm:text-xl transition-all group">
                  Try Demo
                  {/* <div className="bg-spout-primary w-[35px] h-[32px] rounded-[3px] text-white flex items-center justify-center transition-transform group-hover:translate-x-2">
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
                  </div> */}
                </button>
              </div>

              <p className="text-[#004040] font-dm-sans text-base not-italic font-medium leading-normal uppercase">
                [ Join our mailing list for early access and updates ]
              </p>

              <div className="max-w-md pt-5">
                <JoinMailingList />
              </div>
            </div>
          </div>

          {/* Right column - image */}
          <div className="max-w-[368.592px]">
            <div className="w-full max-w-[368.592px] lg:max-w-xl lg:w-auto optimized">
              <Image
                src={image1}
                alt="Spout Water Tokens"
                priority
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
