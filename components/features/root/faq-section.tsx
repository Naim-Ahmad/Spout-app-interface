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
    <section className="w-full py-4 sm:py-6 lg:py-5">
      {/* Section content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column - Header */}
          <div>
            <div className="text-xs sm:text-sm font-medium text-[#475569] mb-3 sm:mb-4 tracking-wider">
              [ FAQ ]
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-lora font-normal text-[#004040] mb-4 sm:mb-6">
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
          <div className="space-y-3 sm:space-y-4">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="max-w-lg text-start"
            >
              {faqs.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="faq-title border-[1px] border-gray-300 px-5 p-2 sm:px-6 sm:py-2 rounded-sm hover:no-underline"
                >
                  <AccordionTrigger className="text-start">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}

              <div className="mt-4 sm:mt-6 text-end">
                <Link
                  href="/faq"
                  className="border rounded-sm border-black bg-white py-2 px-2 inline-flex text-sm sm:text-base font-noto-sans font-medium text-[#004040] hover:text-[#003030] transition-colors items-end"
                >
                  View All →
                </Link>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
