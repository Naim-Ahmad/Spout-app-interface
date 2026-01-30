import block from "@/assets/images/block.png";
import mexc from "@/assets/images/mexc-global-seeklogo.svg";
import kucoin from "@/assets/images/logo_general_green.svg";
import Image from "next/image";
import Link from "next/link";

export function InTheNews() {
  const newsItems = [
    {
      logo: block,
      publication: "The Block",
      date: "SEP 9, 2025",
      url: "https://apnews.com/press-release/globenewswire-mobile/onepiece-labs-solana-accelerator-officially-launches-f2e8e0a2478df30533933fdfe8f07a5e",
      gradient: "linear-gradient-2",
    },
    {
      logo: mexc,
      publication: "MEXC",
      date: "SEP 9, 2025",
      url: "https://markets.businessinsider.com/news/stocks/onepiece-labs-solana-accelerator-officially-launches-1035128439",
      gradient: "linear-gradient-3",
    },
    {
      logo: kucoin,
      publication: "Kucoin",
      date: "SEP 9, 2025",
      url: "https://www.marketwatch.com/press-release/onepiece-labs-solana-accelerator-officially-launches-7b06ee13?mod=search_headline",
      gradient: "linear-gradient-blue-3",
    },
  ];

  // Map gradient identifiers to concrete Tailwind classes so they are discoverable by the
  // Tailwind compiler (avoid using dynamic `bg-${...}` strings)
  const gradientMap: Record<string, string> = {
    "linear-gradient-2": "bg-linear-gradient-2",
    "linear-gradient-3": "bg-linear-gradient-3",
    "linear-gradient-blue-3": "bg-linear-gradient-blue-3",
  };

  return (
    <section className="w-full py-4 sm:py-6 lg:py-8">
      {/* Section content */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pb-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="section-heading">
            In the <span className="">Press</span>
          </h2>
          <p className="section-description">
            Financial media outlets are highlighting our approach to secure,
            regulated
            <br />
            investing with real returns
          </p>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12">
          {newsItems.map((item, index) => (
            <div className="flex w-full" key={index}>
              <div className="border border-gray-300 rounded-none">
                {/* Card Content with rounded corners */}
                <div className="overflow-hidden rounded-none">
                  {/* Logo Area */}
                  <div
                    className={`h-32 sm:h-40 lg:h-48 flex ${index === 1 ? "bg-black" : "bg-white"} items-center justify-center p-4 sm:p-6 lg:p-8`}
                  >
                    <Image
                      src={item.logo}
                      alt={item.publication}
                      width={400}
                      height={120}
                      className=" h-auto max-h-20 sm:max-h-24 lg:max-h-32 object-contain "
                    />
                  </div>

                  {/* Publication Info */}
                  <div className="p-3 sm:p-4 md:p-6 border-t border-gray-300 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-2 md:gap-4">
                    <Link
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 sm:py-2 md:px-4 bg-blue-50 border border-blue-200 rounded text-[#004040] font-noto-sans text-xs sm:text-sm md:text-base font-medium hover:bg-blue-100 transition-colors flex-shrink-0"
                    >
                      <Image
                        src="/svg-assets/landingpage/spout-book.svg"
                        alt="Article"
                        width={20}
                        height={20}
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                      {item.publication}
                    </Link>
                    <span className="text-xs sm:text-xs md:text-sm font-noto-sans text-[#525252] sm:ml-auto whitespace-nowrap">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              <div
                className={`${gradientMap[item.gradient] ?? ""} h-[297px] w-[22px]`}
              ></div>
            </div>
          ))}
        </div>
        <div className="mt-4 sm:mt-6 text-end">
          <Link
            href="/faq"
            className="border rounded-sm border-black bg-white py-2 px-2 inline-flex text-sm sm:text-base font-noto-sans font-medium text-[#004040] hover:text-[#003030] transition-colors items-end"
          >
            View All →
          </Link>
        </div>
      </div>
    </section>
  );
}
