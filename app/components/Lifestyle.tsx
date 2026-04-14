"use client";

import Image from "next/image";

export default function Lifestyle() {
  return (
    <div
      id="lifestyle"
      className="self-stretch"
      style={{ backgroundColor: "var(--color-blue-accent)" }}
    >
      {/* Mobile version */}
      <div className="md:hidden flex flex-col items-center self-stretch bg-[url(/paradiseLifeBG.webp)] bg-cover bg-center py-18.75 px-5">
        <span className="text-white text-[26px] font-semibold text-center w-full max-w-[280px] mb-4.75 uppercase leading-[100%]">
          <span className="whitespace-nowrap">Paradise life by</span>{" "}
          <span className="whitespace-nowrap">the sea all year round</span>
        </span>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 self-stretch gap-5.25 md:gap-6 lg:gap-8">
          <div className="flex flex-col w-full bg-white py-6.5 md:py-8 lg:py-10 px-6.5 md:px-8 lg:px-10 gap-2.25 md:gap-3 lg:gap-4 rounded-[13px] md:rounded-[15px]">
            <Image
              src="/фото3 1.webp"
              alt=""
              width={283}
              height={199}
              style={{ height: "auto" }}
              className="w-full object-cover rounded-lg"
            />
            <div className="flex items-center self-stretch bg-[#EBF7FF] py-2.5 md:py-3 lg:py-3.5 px-3.25 md:px-4 lg:px-5 gap-4.5 md:gap-5 lg:gap-6 rounded-md">
              <Image
                src="/window.png"
                alt=""
                width={33}
                height={33}
                className="w-8.25 md:w-10 lg:w-12 h-8.25 md:h-10 lg:h-12 object-fill"
              />
              <span
                className="flex-1 text-sm md:text-base lg:text-lg font-light"
                style={{ color: "var(--color-blue-primary)" }}
              >
                <span className="font-semibold">Panoramic sea view</span> from the apartment
              </span>
            </div>
            <div className="flex items-center self-stretch bg-[#EBF7FF] py-2.5 md:py-3 lg:py-3.5 px-3.25 md:px-4 lg:px-5 gap-4.5 md:gap-5 lg:gap-6 rounded-md">
              <Image
                src="/bed.png"
                alt=""
                width={33}
                height={33}
                className="w-8.25 md:w-10 lg:w-12 h-8.25 md:h-10 lg:h-12 object-fill"
              />
              <span
                className="flex-1 text-sm md:text-base lg:text-lg font-light"
                style={{ color: "var(--color-blue-primary)" }}
              >
                <span className="font-semibold">Private beach</span> within walking distance
              </span>
              <div className="w-8.25 md:w-10 lg:w-12 h-8.25 md:h-10 lg:h-12"></div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white p-6.5 md:p-8 lg:p-10 gap-2.25 md:gap-3 lg:gap-4 rounded-[13px] md:rounded-[15px]">
            <Image
              src="/фото3 2.webp"
              alt=""
              width={283}
              height={199}
              style={{ height: "auto" }}
              className="w-full object-cover rounded-lg"
            />
            <div className="flex items-center self-stretch bg-[#EBF7FF] rounded-md py-2.5 md:py-3 lg:py-3.5 px-3.25 md:px-4 lg:px-5">
              <Image
                src="/woman.png"
                alt=""
                width={33}
                height={33}
                className="w-8.25 md:w-10 lg:w-12 h-8.25 md:h-10 lg:h-12 mr-4.5 md:mr-5 lg:mr-6 object-fill"
              />
              <span className="text-sm md:text-base lg:text-lg leading-[100%] text-(--color-blue-primary)">
                <span className="font-semibold">SPA, pools,</span>
                <br />
                <span className="font-normal">relaxation areas</span>
              </span>
            </div>
            <div className="flex items-center self-stretch bg-[#EBF7FF] py-2.75 md:py-3 lg:py-3.5 px-3.25 md:px-4 lg:px-5 gap-4.5 md:gap-5 lg:gap-6 rounded-md">
              <Image
                src="/building.png"
                alt=""
                width={33}
                height={33}
                className="w-8.25 md:w-10 lg:w-12 h-8.25 md:h-10 lg:h-12 object-fill"
              />
              <span
                className="flex-1 text-sm md:text-base lg:text-lg font-light"
                style={{ color: "var(--color-blue-primary)" }}
              >
                Padel court and{" "}
                <span className="font-semibold">modern infrastructure</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full bg-white p-6.5 md:p-8 lg:p-10 gap-2.25 md:gap-3 lg:gap-4 rounded-[13px] md:rounded-[15px] md:col-span-2 lg:col-span-1">
            <Image
              src="/фото3 3.webp"
              alt=""
              width={283}
              height={199}
              style={{ height: "auto" }}
              className="w-full object-cover rounded-lg"
            />
            <div className="flex items-center self-stretch bg-[#EBF7FF] rounded-md py-2.5 md:py-3 lg:py-3.5 px-3.25 md:px-4 lg:px-5">
              <Image
                src="/point.png"
                alt=""
                width={33}
                height={33}
                className="w-8.25 md:w-10 lg:w-12 h-8.25 md:h-10 lg:h-12 mr-4.5 md:mr-5 lg:mr-6 object-fill"
              />
              <span className="text-sm md:text-base lg:text-lg font-semibold leading-[100%] text-(--color-blue-primary)">
                Underground
                <br />
                parking
              </span>
            </div>
            <div className="flex items-center self-stretch bg-[#EBF7FF] text-left py-2.5 md:py-3 lg:py-3.5 px-3.25 md:px-4 lg:px-5 gap-4.5 md:gap-5 lg:gap-6 rounded-md border-0">
              <Image
                src="/paper.png"
                alt=""
                width={33}
                height={33}
                className="w-8.25 md:w-10 lg:w-12 h-8.25 md:h-10 lg:h-12 object-fill"
              />
              <span className="flex-1 text-sm md:text-base lg:text-lg font-light text-(--color-blue-primary)">
                Option to design{" "}
                <span className="font-semibold">the apartment to your taste</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet & Desktop version */}
      <div className="hidden md:flex flex-col items-center self-stretch bg-[url(/paradiseLifeBG-desktop.webp)] bg-cover bg-center py-16 lg:py-24 xl:py-32 2xl:py-26 px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-16">
        <h2 className="text-white text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px] 2xl:text-[38px] font-semibold text-center mb-10 lg:mb-16 2xl:mb-13 uppercase leading-tight tracking-tight">
          Paradise life by the sea all year round
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 2xl:gap-6 w-full max-w-[1440px] 2xl:max-w-[1440px]">
          {/* Card 1 */}
          <div className="flex flex-col bg-white p-10 2xl:p-8 gap-5 2xl:gap-4 rounded-[20px] 2xl:rounded-[16px] shadow-lg">
            <div className="relative w-full h-[260px] 2xl:h-[208px] overflow-hidden rounded-[15px] 2xl:rounded-[12px]">
              <Image
                src="/фото3 1.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <FeatureRow
              icon="/window.png"
              content={
                <>
                  <span className="font-semibold">Panoramic sea view</span>
                  <br />
                  <span>from the apartment</span>
                </>
              }
            />
            <FeatureRow
              icon="/bed.png"
              content={
                <>
                  <span className="font-semibold">Private beach</span> within
                  <br />
                  <span>walking distance</span>
                </>
              }
            />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white p-10 2xl:p-8 gap-5 2xl:gap-4 rounded-[20px] 2xl:rounded-[16px] shadow-lg">
            <div className="relative w-full h-[260px] 2xl:h-[208px] overflow-hidden rounded-[15px] 2xl:rounded-[12px]">
              <Image
                src="/фото3 2.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <FeatureRow
              icon="/woman.png"
              content={
                <>
                  <span className="font-semibold">SPA, pools,</span>
                  <br />
                  <span>relaxation areas</span>
                </>
              }
            />
            <FeatureRow
              icon="/building.png"
              content={
                <>
                  <span>Padel court and</span>
                  <br />
                  <span className="font-semibold">modern infrastructure</span>
                </>
              }
            />
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-white p-10 2xl:p-8 gap-5 2xl:gap-4 rounded-[20px] 2xl:rounded-[16px] shadow-lg">
            <div className="relative w-full h-[260px] 2xl:h-[208px] overflow-hidden rounded-[15px] 2xl:rounded-[12px]">
              <Image
                src="/фото3 3.webp"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <FeatureRow
              icon="/point.png"
              content={
                <>
                  <span className="font-semibold">Underground</span>
                  <br />
                  <span className="font-semibold">parking</span>
                </>
              }
            />
            <FeatureRow
              icon="/paper.png"
              content={
                <>
                  <span>Option to design</span>
                  <br />
                  <span className="font-semibold">the apartment to your taste</span>
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureRow({
  icon,
  content,
}: {
  icon: string;
  content: React.ReactNode;
}) {
  return (
    <div className="flex items-center self-stretch bg-[#f0f9ff] py-3 lg:py-4 2xl:py-3 px-4 lg:px-6 2xl:px-5 gap-4 lg:gap-6 2xl:gap-5 rounded-[10px] 2xl:rounded-[8px] h-auto lg:h-[86px] 2xl:h-[69px]">
      <div className="w-10 lg:w-12 2xl:w-10 h-10 lg:h-12 2xl:h-10 shrink-0 flex items-center justify-center">
        <Image
          src={icon}
          alt=""
          width={40}
          height={40}
          className="object-contain w-full h-full"
        />
      </div>
      <span className="text-[15px] lg:text-[17px] 2xl:text-[14px] leading-[1.2] text-[#155277]">
        {content}
      </span>
    </div>
  );
}
