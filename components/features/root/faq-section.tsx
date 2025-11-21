"use client";

import BgGrain from "@/components/bg-grain-svg";
import { DiagonalPattern } from "@/components/slant-dashes-svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<string>("item-0");

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

  return (
    <section className="w-full py-4 sm:py-6 lg:py-8 relative">
      {/* Background grain for this section */}
      <BgGrain className="absolute inset-0 w-full h-full z-0" />
      {/* Section content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Left Column - Header */}
          <div>
            <div className="text-xs sm:text-sm font-medium text-[#475569] mb-3 sm:mb-4 tracking-wider">
              [ FAQ ]
            </div>
            <h2 className="text-3xl capitalize sm:text-4xl lg:text-5xl font-lora font-bold text-[#004040] mb-4 sm:mb-6">
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
              value={openItem}
              onValueChange={setOpenItem}
            >
              {faqs.map((faq, index) => {
                const isOpen = openItem === `item-${index}`;
                return (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`border border-spout-border mb-px last:mb-0 ${isOpen ? "bg-white" : "bg-[#FFFDFB]"}`}
                  >
                    <AccordionTrigger className="px-8 py-5 text-lg font-medium text-black text-left hover:no-underline [&>svg]:hidden">
                      <div className="flex items-center justify-between w-full">
                        <span className="pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`h-6 w-6 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>
                    </AccordionTrigger>
                    {faq.answer && (
                      <AccordionContent className="px-8 pb-5 pt-3 text-base font-medium text-spout-text-muted leading-7">
                        {faq.answer}
                      </AccordionContent>
                    )}
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Diagonal blue lines at bottom */}
      <div className="relative z-10 w-full mt-20 px-4 py-2">
        <DiagonalPattern
          width="100%"
          height={34}
          color="#A7C6ED"
          strokeWidth={2}
          spacing={14}
        />
      </div>
    </section>
  );
}
