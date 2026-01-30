"use client";

import amazonSvg from "@/assets/images/amazon.svg";
import circleSvg from "@/assets/images/circle.svg";
import coinbaseSvg from "@/assets/images/coinbase.svg";
import frame1Svg from "@/assets/images/frame 1.svg";
import frame2Svg from "@/assets/images/frame 2.svg";
import frame3Svg from "@/assets/images/frame 3.svg";
import lockImage from "@/assets/images/lock.png";
import metaSvg from "@/assets/images/meta.svg";
import microsoftSvg from "@/assets/images/microsoft.svg";
import teslaSvg from "@/assets/images/tesla.svg";
import Image from "next/image";

export function ProofOfReserveLanding() {
  const logos = [
    { id: "tesla", src: teslaSvg, alt: "Tesla" },
    { id: "meta", src: metaSvg, alt: "Meta" },
    { id: "coinbase", src: coinbaseSvg, alt: "Coinbase" },
    { id: "amazon", src: amazonSvg, alt: "Amazon" },
    { id: "circle", src: circleSvg, alt: "Circle" },
    { id: "microsoft", src: microsoftSvg, alt: "Microsoft" },
  ];

  return (
    <section className="w-full h-fit py-4 sm:py-6 lg:py-8 relative">
      {/* Section content */}
      <div className="w-full  px-4 sm:px-6 md:px-8 lg:px-0 pb-8">
        {/* Header */}
        <div className="flex flex-col justify-center align-center mb-8 sm:mb-12 lg:mb-16 text-center">
          <h2 className="section-heading">
            <span className="">Proof</span> of Reserve
          </h2>
          <p className="section-description">
            Every token is fully backed 1:1 by investment-grade bond ETFs, held
            by qualified U.S. custodians for maximum security.
          </p>
        </div>

        {/* Vault Image with Company Logos */}
        <div className="flex justify-center items-center mb-8 sm:mb-12 lg:mb-0 max-w-[1178px] mx-auto">
          <div
            className=" w-full max-w-[1262px] sm:h-auto flex flex-col md:flex-row items-center md:items-stretch gap-6"
            style={{
              background: `
      radial-gradient(60% 100% at left 60%, rgba(61, 199, 132, 0.38), transparent 70%),
      radial-gradient(150% 100% at right 60%, rgba(88, 162, 255, 0.38), transparent 70%)
    `,
            }}
          >
            {/* Left: lock image */}
            <div className="flex items-center justify-center">
              <Image
                src={lockImage}
                alt="Proof of Reserve Lock"
                width={519}
                height={778}
                className="hidden sm:flex w-[220px]  sm:w-[300px] md:w-[420px] lg:w-[519px] h-auto object-contain"
              />
            </div>

            {/* Right: company logos grid */}
            <div className="grid grid-cols-2 gap-y-4 gap-x-6 items-center justify-items-center">
              {logos.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="h-[100px] w-screen bg-transparent border-t-2 border-b-2 border-[#F3F4F6]"></div>

        {/* Statistics Section */}

        <div className="  rounded-none max-w-[1178px] mx-auto">
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
