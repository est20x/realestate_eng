"use client";

import Emoji from "./Emoji";

export default function Benefits() {
  return (
    <div id="benefits" className="lg:hidden overflow-hidden w-full">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-4 lg:gap-5 mb-2.75 md:mb-6 lg:mb-8 mt-2.75 md:mt-6 lg:mt-8 px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="col-span-2 md:col-span-2 lg:col-span-4 flex flex-col items-start py-2.75 md:py-4 lg:py-5 gap-1.5 md:gap-2 rounded-[5px] md:rounded-[8px] bg-[linear-gradient(180deg,#EAF7FF,#D9F1FF)] w-full h-[80.84px] md:h-[100px] lg:h-[120px]">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] ml-5 md:ml-6 lg:ml-8 text-(--color-blue-primary)">
            <Emoji>⏳</Emoji>
          </span>
          <span className="text-sm md:text-base lg:text-lg ml-5 md:ml-6 lg:ml-8 font-light text-(--color-blue-primary) -mt-3">
            Installment:{" "}
            <span className="font-bold">30% down payment + 30 months</span>
          </span>
        </div>

        <div className="flex flex-col items-start py-3 md:py-4 lg:py-5 gap-1.5 md:gap-2 rounded-[5px] md:rounded-[8px] bg-[linear-gradient(180deg,#EAF7FF,#D9F1FF)] w-full h-[113.84px] md:h-[140px] lg:h-[160px]">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] ml-5 md:ml-6 lg:ml-8 text-(--color-blue-primary)">
            <Emoji>📄</Emoji>
          </span>
          <span className="text-sm md:text-base lg:text-lg ml-5 md:ml-6 lg:ml-8 font-light text-(--color-blue-primary) -mt-4">
            <span className="font-bold">License</span> for short-term rental
          </span>
        </div>

        <div className="flex flex-col items-start py-2.75 md:py-4 lg:py-5 pr-5 md:pr-6 gap-1.5 md:gap-2 rounded-[5px] md:rounded-[8px] bg-[linear-gradient(180deg,#EAF7FF,#D9F1FF)] w-full h-[113.84px] md:h-[140px] lg:h-[160px]">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] ml-5 md:ml-6 lg:ml-8 text-(--color-blue-primary)">
            <Emoji>🏝️</Emoji>
          </span>
          <span className="text-sm md:text-base lg:text-lg ml-5 md:ml-6 lg:ml-8 font-light text-(--color-blue-primary) -mt-4">
            <span className="font-bold whitespace-nowrap">
              Prime beachfront
            </span>{" "}
            <span className="font-bold">location</span> (premium segment)
          </span>
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col items-start py-3 md:py-4 lg:py-5 gap-1.5 md:gap-2 rounded-[5px] md:rounded-[8px] bg-[linear-gradient(180deg,#EAF7FF,#D9F1FF)] w-full h-[80.84px] md:h-[100px] lg:h-[120px]">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] ml-5 md:ml-6 lg:ml-8 text-(--color-blue-primary)">
            <Emoji>🔥</Emoji>
          </span>
          <span className="text-sm md:text-base lg:text-lg ml-5 md:ml-6 lg:ml-8 font-light text-(--color-blue-primary) -mt-3">
            <span className="font-bold">High rental demand</span> year-round
          </span>
        </div>

        <div className="flex flex-col items-start py-3 md:py-4 lg:py-5 pr-5 md:pr-6 gap-1.5 md:gap-2 rounded-[5px] md:rounded-[8px] bg-[linear-gradient(180deg,#EAF7FF,#D9F1FF)] w-full h-[98.55px] md:h-[120px] lg:h-[140px]">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] ml-5 md:ml-6 lg:ml-8 text-(--color-blue-primary)">
            <Emoji>💰</Emoji>
          </span>
          <span className="text-sm md:text-base lg:text-lg ml-5 md:ml-6 lg:ml-8 font-light text-(--color-blue-primary) -mt-4">
            Passive income <span className="font-bold">up to $20,000 per year</span>
          </span>
        </div>

        <div className="flex flex-col items-start py-3 md:py-4 lg:py-5 gap-1.5 md:gap-2 rounded-[5px] md:rounded-[8px] bg-[linear-gradient(180deg,#EAF7FF,#D9F1FF)] w-full h-[98.55px] md:h-[120px] lg:h-[140px]">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] ml-5 md:ml-6 lg:ml-8 text-(--color-blue-primary)">
            <Emoji>💶</Emoji>
          </span>
          <span className="text-sm md:text-base lg:text-lg ml-5 md:ml-6 lg:ml-8 font-light text-(--color-blue-primary) -mt-4">
            Prices from <br className="md:hidden" /><span className="font-bold">€240,000</span>
          </span>
        </div>

        <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col items-start justify-center rounded-[5px] md:rounded-[8px] bg-[linear-gradient(180deg,#EAF7FF,#D9F1FF)] w-full h-[80.84px] md:h-[100px] lg:h-[120px]">
          <span className="text-[32px] md:text-[40px] lg:text-[48px] ml-5 md:ml-6 lg:ml-8">
            <Emoji>🚀</Emoji>
          </span>
          <span className="text-sm md:text-base lg:text-lg ml-5 md:ml-6 lg:ml-8 font-light text-(--color-blue-primary) -mt-2">
            <span className="font-bold">Value growth</span> during construction
          </span>
        </div>
      </div>

      <div className="px-5 md:px-8 lg:px-12 xl:px-16 mt-3 md:mt-4 lg:mt-6 mb-17.75 md:mb-20 lg:mb-24">
        <a href="#contact-form" className="flex flex-col items-center justify-center text-left py-5.25 md:py-6 lg:py-7 rounded-[10px] md:rounded-[12px] border-0 bg-[linear-gradient(90deg,#FFE643_0%,#FFEE7D_51.92%,#FFE643_100%)] w-full h-[60.99px] md:h-[70px] lg:h-[80px] cursor-pointer no-underline">
          <span className="text-[#453D0B] text-lg md:text-xl lg:text-2xl font-extrabold">
            Get a yield calculation
          </span>
        </a>
      </div>
    </div>
  );
}
