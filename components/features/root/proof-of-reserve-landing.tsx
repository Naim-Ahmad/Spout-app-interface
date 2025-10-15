"use client";

import Image from "next/image";

const companies = [
  { name: "Microsoft", logo: "/partners/Microsoft.svg" },
  { name: "Circle", logo: "/partners/Circle.svg" },
  { name: "Amazon", logo: "/partners/Amazon.svg" },
  { name: "Coinbase", logo: "/partners/Coinbase.svg" },
  { name: "Meta", logo: "/partners/Meta.svg" },
  { name: "Tesla", logo: "/partners/Tesla.svg" },
];

export function ProofOfReserveLanding() {
  return (
    <section className="w-full bg-gray-50 py-20 relative">
      {/* Section content */}
      <div className="w-full max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-lora font-normal text-[#004040] mb-6">
            Proof of Reserve
          </h2>
          <p className="text-lg lg:text-xl font-noto-sans text-[#334155] max-w-3xl mx-auto">
            Every token is fully backed 1:1 by investment-grade bond ETFs, held by
            qualified U.S. custodians for maximum security.
          </p>
        </div>

        {/* Vault Image with Company Logos */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center vault image */}
          <div className="flex justify-center items-center py-12">
            <div className="w-full max-w-md">
              <Image
                src="/landingpage/spout-reserve.svg"
                alt="Proof of Reserve Vault"
                width={400}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Company logos positioned around the vault */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white rounded-lg p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diagonal blue lines at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg
          width="100%"
          height="40"
          viewBox="0 0 1440 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <pattern
            id="diagonalLines"
            x="0"
            y="0"
            width="20"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="20"
              y2="40"
              stroke="#A7C6ED"
              strokeWidth="2"
            />
          </pattern>
          <rect width="100%" height="40" fill="url(#diagonalLines)" />
        </svg>
      </div>
    </section>
  );
}

