"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does Spout bring traditional assets like bonds to DeFi?",
      answer:
        "Spout brings traditional assets like bonds to DeFi by tokenizing U.S. investment-grade ETFs into secure, yield-bearing tokens backed 1:1 by real assets.",
    },
    {
      question:
        "What guarantees that Spout tokens are secure and fully backed?",
      answer:
        "Every Spout token is backed 1:1 by investment-grade bond ETFs held by qualified U.S. custodians. We provide full transparency through on-chain proof-of-reserve verification, ensuring complete accountability and security for all tokenized assets.",
    },
    {
      question: "How can investors generate yield through Spout's platform?",
      answer:
        "Investors generate yield by holding Spout tokens, which accrue yield on price movement or dividends when attached to the underlying asset. The yield is distributed automatically to token holders. Spout tokens will be eligible to serve as collateral in the Spout lending market to efficiently borrow against your assets.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-4 sm:py-6 lg:py-[72px]">
      {/* Section content */}
      <div className="w-full max-w-[1178px] mx-auto px-4 sm:px-6 lg:px-[36px] pb-8 sm:pb-0">
        <div className="flex gap-[36px]">
          {/* Left Column - Header */}
          <div className="basis-[448px]">
            <div className="text-xs sm:text-sm font-medium text-[#475569] mb-3 sm:mb-4 tracking-wider">
              [ FAQ ]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-pt-serif font-normal text-[#004040] mb-4 sm:mb-6 tracking-[0.192px]">
              Frequently asked
              <br />
              questions
            </h2>
            <p className="text-base sm:text-lg font-noto-sans font-normal text-[#475569] leading-relaxed">
              Everything you need to know about Spout and
              <br />
              how we&apos;re changing decentralized investing.
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="basis-[610px]">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="text-start w"
            >
              {faqs.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="faq-title border-[1px] border-[#F3F4F6] px-5 p-2 sm:px-8 sm:py-5 rounded-sm hover:no-underline font-dm-sans text-[#4f4f4f] text-xl"
                >
                  <AccordionTrigger className="text-start py-0 px-0 gap-8 items-start">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="mt-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}

              <div className="mt-4 sm:mt-6 text-end">
                <Link
                  href="/faq"
                  className="group border rounded-sm border-[#E8E8E8] bg-white p-[10px] inline-flex text-sm sm:text-base font-noto-sans font-medium text-[#000] transition-colors items-end gap-2"
                >
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path
                      d="M14.4301 5.93018L20.5001 12.0002L14.4301 18.0702"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 12H20.33"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
