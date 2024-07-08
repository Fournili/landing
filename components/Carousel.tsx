import type { NextPage } from "next";

export type CarouselType = {
  className?: string;
};

const Carousel: NextPage<CarouselType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-secondary-100 flex flex-col items-start justify-start py-[88px] px-[296px] box-border gap-[72px] max-w-full text-center text-29xl text-gray-300 font-body mq750:gap-[36px] mq750:pl-[148px] mq750:pr-[148px] mq750:box-border mq1025:pt-[57px] mq1025:pb-[57px] mq1025:box-border mq450:gap-[18px] mq450:py-[37px] mq450:px-5 mq450:box-border ${className}`}
    >
      <h1 className="m-0 w-[742px] relative text-inherit leading-[58px] font-medium font-inherit inline-block max-w-full mq1025:text-19xl mq1025:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
        <span>{`Get to know the `}</span>
        <span className="text-primary-300">people.</span>
      </h1>
      <div className="w-[830px] flex flex-col items-start justify-start gap-[64px] max-w-full text-left text-5xl mq1025:gap-[32px] mq450:gap-[16px]">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[56px] max-w-full mq450:gap-[28px]">
          <div className="flex-1 flex flex-row items-center justify-start min-w-[482px] max-w-full mq750:gap-[32px] mq1125:min-w-full mq450:gap-[16px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[64px] max-w-full mq750:gap-[32px] mq1025:flex-wrap mq450:gap-[16px]">
              <div className="w-[333px] flex flex-col items-center justify-start gap-[24px] min-w-[333px] max-w-full mq1025:flex-1">
                <img
                  className="w-8 h-8 relative"
                  loading="lazy"
                  alt=""
                  src="/quoteicon.svg"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch relative leading-[120%] mq450:text-lgi mq450:leading-[23px]">{`One of the most important things is being able to talk with my suppliers and building that trust. When I know their food is fantastic and they’re reliable, it cuts down on time and money I spend shopping and trying new products. `}</div>
                  <div className="self-stretch relative leading-[120%] font-medium mq450:text-lgi mq450:leading-[23px]">{`Jacklyn I Chef I Nigiri’s Table I North Algeria `}</div>
                </div>
              </div>
              <img
                className="h-[402px] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover min-w-[224px]"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[164px] px-0 pb-0">
            <img
              className="w-8 h-8 relative"
              loading="lazy"
              alt=""
              src="/iconnext.svg"
            />
          </div>
        </div>
        <div className="w-[742px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <div className="h-6 w-6 relative rounded-[50%] bg-accent-blue-300" />
            <div className="h-6 w-6 relative rounded-[50%] bg-accent-blue-100" />
            <div className="h-6 w-6 relative rounded-[50%] bg-accent-blue-100" />
            <div className="h-6 w-6 relative rounded-[50%] bg-accent-blue-100" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
