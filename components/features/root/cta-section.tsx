"use client";

import background from "@/assets/images/frame.svg";
import Image from "next/image";

export function CTASection() {
  return (
    <section className="w-full py-4 sm:py-8 lg:py-0 relative">
      {/* Section content */}
      <div className="w-full max-w-[1178px] mx-auto px-4 sm:px-8 lg:px-0 pb-8 sm:pb-12 lg:pb-0 ">
        <div className="relative  rounded-none shadow-sm pl-4 sm:pl-4 lg:pl-5 pr-4 sm:pr-4 lg:pr-0 py-6 sm:py-8 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-[#004040] !font-[500] !text-[28px] !leading-[28px] !font-dm-sans tracking-[-0.144px] ">
                Ready to Start Earning Stable Yields?
              </h2>
              <p className="text-[#525252] font-dm-sans text-base not-italic font-normal leading-7 tracking-[-0.064px]">
                Join thousands of users who are already earning consistent
                returns from investment-grade corporate bonds on the blockchain.
              </p>
              <div className="pt-2 sm:pt-0 flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email to join our mailing list"
                  className="w-full border text-[14px] border-gray-300 rounded-sm py-3 px-5 outline-none text-[#6E6E6E] font-dm-sans text-sm not-italic font-normal leading-4"
                />
                <button className="px-2 sm:px-8 py-3 sm:py-3 bg-[#004040] text-white font-noto-sans font-medium rounded-lg w-full sm:w-auto">
                  Join
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full mt-4 sm:mt-0 flex">
              <div className="bg-linear-gradient-blue-2 w-[18px] h-auto "></div>

              <div className=" w-full">
                <Image
                  src={background}
                  alt="Stock Exchange Building"
                  height={313}
                  className="w-full rounded-none object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
