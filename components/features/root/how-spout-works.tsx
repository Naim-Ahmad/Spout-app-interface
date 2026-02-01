"use client";

import step1 from "@/assets/images/step-1.svg";
import step2 from "@/assets/images/step-2.svg";
import step3 from "@/assets/images/step-3.svg";
import step4 from "@/assets/images/step-4.svg";
import step5 from "@/assets/images/step-5.svg";
import { useSpring } from "framer-motion";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

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

const CARD_WIDTH = 392;
const VISIBLE_CARDS = 3;
const SCROLL_MULTIPLIER = 1.1;

export function HowSpoutWorks() {
  const viewportRef = useRef<HTMLDivElement>(null);

  const totalWidth = steps.length * CARD_WIDTH;
  const maxX = 0;
  const minX = -(totalWidth - CARD_WIDTH * VISIBLE_CARDS);

  /** Raw value updated instantly */
  const xRaw = useMotionValue(0);

  /** Spring smooths movement automatically */
  const x = useSpring(xRaw, {
    stiffness: 140,
    damping: 28,
    mass: 0.8,
  });

  /** Progress bar (cheap transform) */
  const progress = useTransform(x, [minX, maxX], [1, 0]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();

    const delta = Math.max(-80, Math.min(80, e.deltaY));
    const next = xRaw.get() - delta * SCROLL_MULTIPLIER;

    xRaw.set(Math.max(minX, Math.min(maxX, next)));
  };

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      const delta = Math.max(-80, Math.min(80, e.deltaY));
      const next = xRaw.get() - delta * 1.1;

      xRaw.set(Math.max(minX, Math.min(maxX, next)));
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
    };
  }, [minX, maxX]);

  return (
    <section className="w-full pt-20">
      <div className="px-6 lg:px-0">
        {/* HEADER (unchanged) */}
        <div className="flex w-[769px] flex-col items-center mx-auto mb-20">
          <h2 className="section-heading">How Spout works</h2>
          <p className="text-[#757679] font-dm-sans text-base mt-[-6px] leading-6 tracking-[0.064px] text-center">
            Spout bridges the gap between traditional finance and DeFi by
            tokenizing investment-grade corporate bonds.
          </p>
        </div>

        <div className="w-screen border-t border-b mt-[-16px] border-[#F3F4F6]" />

        <div className="max-w-[1178px] mx-auto">
          {/* PROGRESS BAR (restored) */}
          <div className="relative h-[10px] rounded-[24px] bg-gray-200 overflow-hidden ">
            <motion.div
              className="absolute inset-y-0 left-0"
              style={{
                scaleX: progress,
                top: 0,
                left: 0,
                right: 0,
                height: 10,
                originX: 0,
                background: "linear-gradient(90deg,#DDFF87 0%,#0057FF 100%)",
                transform: "scaleX(0)",
              }}
            />
          </div>

          {/* VIEWPORT */}
          <div
            ref={viewportRef}
            className="relative overflow-hidden mr-[2px]"
            style={{ overscrollBehavior: "contain" }}
          >
            {/* TRACK */}
            <motion.div
              className="flex will-change-transform"
              style={{ x, transform: "translateZ(0)" }}
            >
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="w-[392px] flex-shrink-0 border border-[#F3F4F6]"
                >
                  <div className="relative z-10">
                    <div className="text-[#191B20] font-dm-mono text-[14px] py-4 px-6">
                      {step.label}
                    </div>

                    <div className="flex justify-center items-center mb-8 h-[274px]">
                      <Image
                        src={step.image}
                        alt={step.title}
                        className="object-contain"
                      />
                    </div>

                    <div className="px-5 pb-[27px]">
                      <h3 className="text-[#004040] font-pt-serif text-[24px] leading-[34px] pb-2">
                        {step.title}
                      </h3>
                      <p className="text-[#757679] font-dm-sans text-[15px] font-normal leading-[24px] tracking-[0.06px]">
                        {/* Placeholder description */}
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
