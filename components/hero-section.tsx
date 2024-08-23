import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  const { t } = useTranslation();

  return (
    <section
      className={`self-stretch h-screen flex flex-row items-start justify-start py-[102px] px-[63px] box-border bg-cover bg-no-repeat bg-center max-w-full text-left text-45xl text-whites-300 font-body ${className}`}
      style={{
        backgroundImage: "url('/hero-section@2.5x.webp')",
      }}
    >
      <div className="w-[560px] rounded-lg flex flex-col items-start justify-start p-8 box-border gap-[40px] max-w-full mq750:gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
          <h1 className="m-0 w-[465px] relative text-inherit leading-[77px] font-medium font-inherit inline-block max-w-full mq1025:text-32xl mq1025:leading-[61px] mq450:text-19xl mq450:leading-[46px]">
            {t("HeroSection.For The Foodies")}
          </h1>
          <div className="self-stretch relative text-xl leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
            {t("HeroSection.one-stop platform")}
          </div>
        </div>
        <Link href="https://www.linkedin.com/company/fournili/" style={{ textDecoration: 'none' }}>
  <button
    className="cursor-pointer border-none py-[13.5px] px-6 bg-primary-300 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg flex flex-row items-start justify-start gap-[8px]"
  >
    <div className="overflow-hidden flex-col items-start justify-start p-[9px] box-border hidden">
      <Image
        className="w-[25.7px] h-[25.7px] relative"
        alt=""
        src="/vector-1.svg"
        width={26}
        height={26}
        priority={false}
      />
    </div>
    <b
      className="relative text-5xl leading-[29px] font-body text-gray-100 text-left whitespace-nowrap mq450:text-lgi mq450:leading-[23px]"

    >
      {t("HeroSection.Get Started")}
    </b>
  </button>
</Link>


      </div>
    </section>
  );
};

export default HeroSection;