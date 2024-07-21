import type { NextPage } from "next";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch h-screen flex flex-row items-start justify-start py-[102px] px-[63px] box-border bg-[url('/hero-section@2.5x.png')] bg-cover bg-no-repeat bg-center max-w-full text-left text-45xl text-whites-300 font-body ${className}`}
    >
      <div className="w-[560px] rounded-lg flex flex-col items-start justify-start p-8 box-border gap-[40px] max-w-full mq750:gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
          <h1 className="m-0 w-[465px] relative text-inherit leading-[77px] font-medium font-inherit inline-block max-w-full mq1025:text-32xl mq1025:leading-[61px] mq450:text-19xl mq450:leading-[46px]">
            For The Foodies
          </h1>
          <div className="self-stretch relative text-xl leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">{`As the one-stop platform connecting restaurants and suppliers, we bring the food industry together, so that you can focus on doing what you do best. `}</div>
        </div>
        <button className="cursor-pointer [border:none] py-[13.5px] px-6 bg-primary-300 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg flex flex-row items-start justify-start gap-[8px]">
          <div className="overflow-hidden hidden flex-col items-start justify-start p-[9px] box-border w-[px] h-[px]">
            <img
              className="w-[25.7px] h-[25.7px] relative"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <b className="relative text-5xl leading-[29px] font-body text-gray-100 text-left whitespace-nowrap mq450:text-lgi mq450:leading-[23px]">
            Get Started
          </b>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
