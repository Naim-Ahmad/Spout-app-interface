"use client";

import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    label: "Step 01",
    title: "Complete KYC",
    image: "/svg-assets/kyc-tokens.svg",
    bg: "from-green-200 to-green-100",
  },
  {
    label: "Step 02",
    title: "Access Public Equities",
    image: "/svg-assets/public-equity.svg",
    bg: "from-yellow-200 to-yellow-100",
  },
  {
    label: "Step 03",
    title: "Lever Up",
    image: "/svg-assets/lever-up.svg",
    bg: "from-blue-300 to-blue-200",
  },
  {
    label: "Step 04",
    title: "Earn Yields",
    image: "/svg-assets/stable-yields.svg",
    bg: "from-purple-200 to-purple-100",
  },
  {
    label: "Step 05",
    title: "Track Performance",
    image: "/svg-assets/track-performance.svg",
    bg: "from-cyan-200 to-cyan-100",
  },
];

const INTERVAL = 5000;

export function HowSpoutWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-100px" });

  const [activeIndex, setActiveIndex] = useState(0);

  const x = useMotionValue("0%");

  useEffect(() => {
    if (!inView) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [inView]);

  useEffect(() => {
    animate(x, `-${activeIndex * (100 / 3)}%`, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    });
  }, [activeIndex]);

  // progress based on CENTER card
  const progressPercent = ((activeIndex + 1) / steps.length) * 100;

  return (
    <section ref={ref} className="w-full py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="section-heading">How Spout works</h2>
          <p className="section-description">
            Step-by-step overview of how Spout works.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="relative h-[10px] rounded-[24px] mb-10 bg-gray-200 overflow-hidden">
          {/* Masked gradient */}
          <motion.div
            className="absolute inset-y-0 left-0 "
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              background: "linear-gradient(90deg, #DDFF87 0%, #0057FF 100%)",
            }}
          />

          {/* Background track */}
          <motion.div
            className="absolute inset-y-0 right-0 bg-gray-200"
            animate={{ width: `${100 - progressPercent}%` }}
          />
        </div>

        {/* Carousel viewport */}
        <div className="relative overflow-hidden">
          <motion.div className="flex will-change-transform" style={{ x }}>
            {steps.map((step, i) => (
              <div key={step.title} className="w-1/3  flex-shrink-0">
                <div className={`relative bg-gradient-to-r  p-8 md:p-12`}>
                  {/* Vertical stripes background */}

                  <div className="relative z-10">
                    {/* Step Label */}
                    <div className="text-sm font-medium text-gray-700 py-[10px] px-[20px] bg-[#FAFAFA] border border-[#F3F4F6] font-dm-sans">
                      Step 01
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-8 relative">
                      <div className="absolute inset-0 -z-10 flex">
                        <div className="flex-1 bg-emerald-200"></div>
                        <div className="flex-1 bg-emerald-300"></div>
                        <div className="flex-1 bg-emerald-200"></div>
                        <div className="flex-1 bg-emerald-300"></div>
                      </div>
                      <div className="w-32 h-32 flex items-center justify-center">
                        <svg
                          viewBox="0 0 200 200"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-full h-full"
                        >
                          {/* Shield */}
                          <path
                            d="M100 30 L140 45 L140 85 Q140 125 100 155 Q60 125 60 85 L60 45 Z"
                            fill="#5B9BD5"
                            stroke="#2D5F8D"
                            strokeWidth="3"
                          />

                          {/* User icon in shield */}
                          <circle cx="100" cy="75" r="15" fill="white" />
                          <path
                            d="M80 110 Q80 95 100 95 Q120 95 120 110 L120 115 L80 115 Z"
                            fill="white"
                          />

                          {/* Coins */}
                          <g>
                            {/* Left coin */}
                            <circle
                              cx="70"
                              cy="130"
                              r="18"
                              fill="#FFD700"
                              stroke="#DAA520"
                              strokeWidth="2"
                            />
                            <circle
                              cx="70"
                              cy="130"
                              r="12"
                              fill="none"
                              stroke="#DAA520"
                              strokeWidth="1.5"
                            />
                            <text
                              x="70"
                              y="136"
                              textAnchor="middle"
                              fill="#DAA520"
                              fontSize="16"
                              fontWeight="bold"
                            >
                              $
                            </text>

                            {/* Center coin */}
                            <circle
                              cx="100"
                              cy="140"
                              r="18"
                              fill="#FFD700"
                              stroke="#DAA520"
                              strokeWidth="2"
                            />
                            <circle
                              cx="100"
                              cy="140"
                              r="12"
                              fill="none"
                              stroke="#DAA520"
                              strokeWidth="1.5"
                            />
                            <text
                              x="100"
                              y="146"
                              textAnchor="middle"
                              fill="#DAA520"
                              fontSize="16"
                              fontWeight="bold"
                            >
                              $
                            </text>

                            {/* Right coin */}
                            <circle
                              cx="130"
                              cy="130"
                              r="18"
                              fill="#FFD700"
                              stroke="#DAA520"
                              strokeWidth="2"
                            />
                            <circle
                              cx="130"
                              cy="130"
                              r="12"
                              fill="none"
                              stroke="#DAA520"
                              strokeWidth="1.5"
                            />
                            <text
                              x="130"
                              y="136"
                              textAnchor="middle"
                              fill="#DAA520"
                              fontSize="16"
                              fontWeight="bold"
                            >
                              $
                            </text>
                          </g>
                        </svg>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-xl font-semibold text-gray-900 mb-3">
                      Complete KYC
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-sm text-gray-700 leading-relaxed">
                      Connect your wallet and complete KYC verification to
                      access investment-grade equities. KYC ensures that we are
                      completely compliant with every jurisdiction.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
