"use client";

import Image from "next/image";
import lockImage from "@/assets/images/lock.png";
import amazonSvg from "@/assets/images/amazon.svg";
import circleSvg from "@/assets/images/circle.svg";
import coinbaseSvg from "@/assets/images/coinbase.svg";
import frame1Svg from "@/assets/images/frame 1.svg";
import frame2Svg from "@/assets/images/frame 2.svg";
import frame3Svg from "@/assets/images/frame 3.svg";
import metaSvg from "@/assets/images/meta.svg";
import microsoftSvg from "@/assets/images/microsoft.svg";
import teslaSvg from "@/assets/images/tesla.svg";

export function ProofOfReserveLanding() {
  return (
    <section className="w-full py-4 sm:py-6 lg:py-8 relative">

      {/* Section content */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pb-8">
        {/* Header */}
        <div className="flex w-[769] flex-col justify-center align-center mb-8 sm:mb-12 lg:mb-16 text-center">
          <h2 className="section-heading">
            <span className="">Proof</span> of Reserve
          </h2>
          <p className="section-description">
            Every token is fully backed 1:1 by investment-grade bond ETFs, held
            by qualified U.S. custodians for maximum security.
          </p>
        </div>

        {/* Vault Image with Company Logos */}
        <div className="flex justify-center items-center mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-radial-gradient-green w-full max-w-[1262px] sm:h-auto flex flex-col md:flex-row items-center md:items-stretch gap-6 p-6">
            {/* Left: lock image */}
            <div className="md:w-1/2 flex items-center justify-center">
              <Image
                src={lockImage}
                alt="Proof of Reserve Lock"
                width={519}
                height={778}
                className="w-[220px] sm:w-[300px] md:w-[420px] lg:w-[519px] h-auto object-contain"
              />
            </div>

            {/* Right: company logos grid */}
            <div className="md:w-1/2 grid grid-cols-2 gap-y-4 gap-x-6 items-center justify-items-center">
              <div className="w-[120px] sm:w-[160px] md:w-[208px] h-[40px] sm:h-[48px] md:h-[60px] flex items-center justify-center">
                <Image
                  src={teslaSvg}
                  alt="Tesla"
                  width={208}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-[120px] sm:w-[160px] md:w-[208px] h-[40px] sm:h-[48px] md:h-[60px] flex items-center justify-center">
                <Image
                  src={metaSvg}
                  alt="Meta"
                  width={208}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-[120px] sm:w-[160px] md:w-[208px] h-[40px] sm:h-[48px] md:h-[60px] flex items-center justify-center">
                <Image
                  src={coinbaseSvg}
                  alt="Coinbase"
                  width={208}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-[120px] sm:w-[160px] md:w-[208px] h-[40px] sm:h-[48px] md:h-[60px] flex items-center justify-center">
                <Image
                  src={amazonSvg}
                  alt="Amazon"
                  width={208}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-[120px] sm:w-[160px] md:w-[208px] h-[40px] sm:h-[48px] md:h-[60px] flex items-center justify-center">
                <Image
                  src={circleSvg}
                  alt="Circle"
                  width={208}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="w-[120px] sm:w-[160px] md:w-[208px] h-[40px] sm:h-[48px] md:h-[60px] flex items-center justify-center">
                <Image
                  src={microsoftSvg}
                  alt="Microsoft"
                  width={208}
                  height={60}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}

        <div className="bg-white border border-gray-300 rounded-none shadow-sm m-auto max-w-[1150px]">
          <div className="flex flex-col items-center sm:flex-row justify-between gap-3 sm:gap-4">
            {/* Assets On-Chain */}
            <div className="flex-1 flex justify-between w-[200px] sm:w-auto lg:max-w-[370px] h-[156px] sm:h-auto">
              <div className="flex flex-col items-start justify-center gap-[20px] sm:gap-[24px] px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                  <Image
                    src={frame3Svg}
                    alt="Bank"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
                <div>
                  <div className="text-black font-dm-sans text-[20px] font-semibold leading-normal">
                    $200k
                  </div>
                  <div className="text-[#7D8690] font-dm-sans text-base font-medium leading-normal">
                    Assets On-Chain
                  </div>
                </div>
              </div>
              <div className="bg-linear-gradient-1 w-[15px] sm:w-[22px] h-[156px]"></div>
            </div>

            {/* Investments Tokenized */}

            <div className="flex-1 flex justify-between w-[200px] sm:w-auto lg:max-w-[370px] h-[156px] sm:h-auto">
              <div className="flex flex-col items-start justify-center gap-[20px] sm:gap-[24px] px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                  <Image
                    src={frame1Svg}
                    alt="Category"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
                <div>
                  <div className="text-black font-dm-sans text-[20px] font-semibold leading-normal">
                    1,124
                  </div>
                  <div className="text-[#7D8690] font-dm-sans text-base font-medium leading-normal">
                    Investments Tokenized
                  </div>
                </div>
              </div>
              <div className="bg-linear-gradient-2 w-[15px] sm:w-[22px] h-[156px]"></div>
            </div>

            {/* Proof-of-Reserve Verified */}

            <div className="flex-1 flex justify-between w-[200px] sm:w-auto lg:max-w-[370px] h-[156px] sm:h-auto">
              <div className="flex flex-col items-start justify-center gap-[20px] sm:gap-[24px] px-4 sm:px-6 lg:px-10 py-3 sm:py-4">
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                  <Image
                    src={frame2Svg}
                    alt="Shield"
                    width={40}
                    height={40}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                </div>
                <div>
                  <div className="text-black font-dm-sans text-[20px] font-semibold leading-normal">
                    100%
                  </div>
                  <div className="text-[#7D8690] font-dm-sans text-base font-medium leading-normal">
                    Proof-of-Reserve Verified
                  </div>
                </div>
              </div>
              <div className="bg-linear-gradient-3 w-[15px] sm:w-[22px] h-[156px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
