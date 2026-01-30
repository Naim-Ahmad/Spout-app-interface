"use client";

import step1 from "@/assets/images/step-1.svg";
import step2 from "@/assets/images/step-2.svg";
import step3 from "@/assets/images/step-3.svg";
import step4 from "@/assets/images/step-4.svg";
import step5 from "@/assets/images/step-5.svg";
import { animate, motion, useInView, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    label: "Step 01",
    title: "Complete KYC",
    description:
      "Connect your wallet and complete KYC verification to access investment-grade equities. KYC ensures that we are completely compliant with every jurisdiction.",
    image: step1,
    bg: "from-green-200 to-green-100",
  },
  {
    label: "Step 02",
    title: "Access Public Equities",
    description:
      "Access over 1,000 U.S. public equities, including Tesla, Microsoft, Coinbase, and more",
    image: step2,
    bg: "from-yellow-200 to-yellow-100",
  },
  {
    label: "Step 03",
    title: "Lever Up",
    description:
      "Trade like the top 1% of equities traders, and borrow against your equities at 0% APR",
    image: step3,
    bg: "from-blue-300 to-blue-200",
  },
  {
    label: "Step 04",
    title: "Lend for Stable Returns",
    description:
      "If you are looking for a safer and steadier return, lend to our liquidity pool, which enables margin trading for our borrowers, and earn 10%+ APY",
    image: step4,
    bg: "from-purple-200 to-purple-100",
  },
  {
    label: "Step 05",
    title: "Track Performance",
    description:
      "Monitor your portfolio with real-time analytics and transparent reporting. Trade assets with a UI similar to your traditional brokerage",
    image: step5,
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
    <section ref={ref} className="w-full pt-16 ">
      <div className=" px-6 lg:px-0">
        {/* Header */}
        <div className="text-center mb-[74px]">
          <h2 className="section-heading">How Spout works</h2>
          <p className="section-description">
            Spout bridges the gap between traditional finance and DeFi by
            tokenizing investment-grade corporate bonds, providing stable yields
            while maintaining the benefits of blockchain technology.
          </p>
        </div>

        <div className="w-screen bg-transparent border-t border-b border-[#F3F4F6] "></div>

        <div className="max-w-[1178px] mx-auto">
          {/* Progress Bar */}
          <div className="relative h-[10px] rounded-[24px]  bg-gray-200 overflow-hidden">
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
                <div
                  key={`${step.title}-${i}`}
                  className="w-1/3  flex-shrink-0 border border-[#F3F4F6]"
                >
                  <div className="relative z-10">
                    {/* Step Label */}
                    <div className="text-sm font-medium text-gray-700 py-[10px] px-[20px] bg-[#FAFAFA] border border-[#F3F4F6] font-dm-sans">
                      {step.label}
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center items-center mb-8 relative h-[274px]">
                      <div className="absolute inset-0 -z-10 flex">
                        <Image
                          src={step.image}
                          alt={step.title}
                          className="mx-auto object-cover"
                        />
                      </div>
                    </div>
                    <div className="px-6 pb-8">
                      {/* Title */}
                      <h3 className="font-sans text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="font-sans text-sm text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
