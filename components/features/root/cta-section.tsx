"use client";

import background from "@/assets/images/frame.svg";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="w-[1176px] mx-auto mt-[-20px]">
          <div className=" w-screen bg-transparent border-b-2 border-[#F3F4F6] "></div>
          <div className="flex">
            {/* Left Content */}
            <div className="flex-1 w-full flex items-center justify-center">
              <div className="flex flex-col gap-5 p-9 w-[635px]">
                  <h2 className="text-[#004040] font-['DM_Sans'] text-[24px] not-italic font-medium leading-[28px] tracking-[-0.096px]">
                Ready to Start Earning Stable Yields?
              </h2>
              <p className="text-[#525252] font-['DM_Sans'] text-[16px] not-italic font-normal leading-[28px] tracking-[-0.064px]">
                Join thousands of users who are already earning consistent
                returns from investment-grade corporate bonds on the blockchain.
              </p>
              <div className="pt-2 sm:pt-0 flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email to join our mailing list"
                  className="flex h-[44px] pt-[14px] pr-[88px] pb-[14px] pl-[20px] items-center w-[395px] border text-[14px] border-gray-300 rounded-sm py-3 px-5 outline-none text-[#6E6E6E] font-dm-sans text-sm not-italic font-normal leading-4"
                />
                <button className="text-[#FFF] font-['DM_Sans'] text-[20px] not-italic font-medium leading-normal flex w-[92px] h-[44px] pt-[10px] pr-[12px] pb-[10px] pl-[16px] justify-center items-center gap-[10px] rounded-[6px] border-[1px] border-solid border-[#A7C6ED] bg-[#004040]">
                  Join
                </button>
              </div>
              </div>

            </div>

            {/* Right Image */}
            <div className="flex-1 w-full mt-4 sm:mt-0 flex">
              <div className="bg-linear-gradient-blue-2 w-[18px] h-auto "></div>

              <div className="w-[523px] h-[330px]">
                <Image
                  src={background}
                  alt="Stock Exchange Building"
                  height={313}
                  className="w-full h-full rounded-none object-cover"
                />
              </div>
            </div>
          </div>
    </section>
  );
}
