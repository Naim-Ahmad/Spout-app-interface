import {
  CTASection,
  FAQSection,
  HeroSection,
  HowSpoutWorks,
  InTheNews,
  InvestmentDifferent,
  ProofOfReserveLanding,
  UnlockingFinance,
} from "@/components/features/root";
import { PartnerTicker } from "@/components/features/root/partner-ticker";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen w-full overflow-x-hidden flex flex-col items-center justify-center relative">
        {/* Hero Section */}
        <div className="relative z-10 w-full overflow-hidden">
          <HeroSection />
        </div>

        {/* Partner Ticker */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-8 lg:px-16 mb-3 sm:mb-6">
          <div className="px-16 hidden md:block optimized">
            <PartnerTicker />
          </div>
          <div className="block md:hidden optimized">
            <PartnerTicker />
          </div>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0 max-w-[1178px] mx-auto">
            {/* Left vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#F3F4F6] optimized"></div>
            {/* Right vertical line */}
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#F3F4F6] optimized"></div>
          </div>

          {/* How Spout Works Section */}
          <div className="relative z-10 w-full">
            <HowSpoutWorks />
          </div>

          {/* Proof of Reserve Section */}
          <div className="relative z-10 w-full">
            <ProofOfReserveLanding />
          </div>

          {/* Unlocking Finance Section */}
          <div className="relative z-10 w-full">
            <UnlockingFinance />
          </div>

          {/* Investment Different Section */}
          <div className="relative z-10 w-full">
            <InvestmentDifferent />
          </div>

          {/* In The News Section */}
          <div className="relative z-10 w-full">
            <InTheNews />
          </div>

          {/* FAQ Section */}
          <div className="relative z-10 w-full">
            <FAQSection />
          </div>

          {/* CTA Section */}
          <div className="relative z-10 w-full">
            <CTASection />
          </div>
        </div>
      </div>
    </>
  );
}
