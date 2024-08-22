import { useState } from "react";
import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export type CarouselType = {
  className?: string;
};

const Carousel: NextPage<CarouselType> = ({ className = "" }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const data = [
    {
      quote: t("Carousel.Quote 1"),
      author: t("Carousel.Chef 1"),
      image: "/image-10@2x.png",
    },
    {
      quote: t("Carousel.Quote 2"),
      author: t("Carousel.Chef 2"),
      image: "/image-11@2x.png",
    },
    {
      quote: t("Carousel.Quote 3"),
      author: t("Carousel.Chef 3"),
      image: "/image-12@2x.png",
    },
  ];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section
      className={`self-stretch bg-secondary-100 flex flex-col items-start justify-start py-[88px] px-[296px] box-border gap-[72px] max-w-full text-center text-29xl text-gray-300 font-body mq750:gap-[36px] mq750:pl-[148px] mq750:pr-[148px] mq750:box-border mq1025:pt-[57px] mq1025:pb-[57px] mq1025:box-border mq450:gap-[18px] mq450:py-[37px] px-5 mq450:box-border mq450:px-8 ${className}`}
    >
      <h1 className="m-0 w-[742px] relative text-inherit leading-[58px] font-medium font-inherit inline-block max-w-full mq1025:text-19xl mq1025:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
        <span>{t("Carousel.Get to know the people")}</span>
      </h1>
      <div className="w-full flex flex-col items-center justify-start gap-[64px] max-w-full text-left text-5xl mq1025:gap-[32px] mq450:gap-[16px] mq450:max-w-xs">
        <div className="w-full flex flex-row items-center justify-center gap-[56px] max-w-full mq450:gap-[10px] mq450:max-w-xs mq450:w-xs ">
          <button onClick={handlePrev} aria-label="Previous" className="mq450:hidden">
            <Image
              className="w-8 h-8 relative transform rotate-180"
              alt="Previous"
              src="/iconnext.svg"
              width={32}
              height={32}
            />
          </button>
          <div className="flex-1 flex flex-row items-center justify-start min-w-[482px] max-w-full mq750:gap-[32px] mq1125:min-w-full mq450:gap-[16px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[64px] max-w-full mq750:gap-[32px] mq1025:flex-wrap mq450:gap-[16px]">
              <div
                className={`w-[333px] flex flex-col items-center justify-start gap-[24px] min-w-[333px] max-w-full mq1025:flex-1 transition-opacity duration-500 ease-in-out ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  className="w-8 h-8 relative"
                  alt="Quote Icon"
                  src="/quoteicon.svg"
                  width={32}
                  height={32}
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch relative leading-[120%] mq450:text-lgi mq450:leading-[23px]">
                    {data[currentIndex].quote}
                  </div>
                  <div className="self-stretch relative leading-[120%] font-medium mq450:text-lgi mq450:leading-[23px]">
                    {data[currentIndex].author}
                  </div>
                </div>
              </div>
              <Image
                className={`h-[402px] flex-1 relative rounded-lg max-w-full overflow-hidden object-cover min-w-[224px] transition-opacity duration-500 ease-in-out ${
                  isAnimating ? "opacity-0" : "opacity-100"
                }`}
                alt={data[currentIndex].author}
                src={data[currentIndex].image}
                width={402}
                height={402}
              />
            </div>
          </div>
          <button onClick={handleNext} aria-label="Next" className="mq450:hidden">
            <Image
              className="w-8 h-8 relative"
              alt="Next"
              src="/iconnext.svg"
              width={32}
              height={32}
            />
          </button>
        </div>
        <div className="w-[742px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <button onClick={handlePrev} aria-label="Previous" className="hidden mq450:block">
              <Image
                className="w-8 h-8 relative transform rotate-180"
                alt="Previous"
                src="/iconnext.svg"
                width={32}
                height={32}
              />
            </button>
            {data.map((_, index) => (
              <div
                key={index}
                className={`h-6 w-6 relative rounded-[50%] transition-colors duration-500 ${
                  index === currentIndex
                    ? "bg-accent-blue-300"
                    : "bg-accent-blue-100"
                }`}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 500);
                  }
                }}
              />
            ))}
            <button onClick={handleNext} aria-label="Next" className="hidden mq450:block">
              <Image
                className="w-8 h-8 relative"
                alt="Next"
                src="/iconnext.svg"
                width={32}
                height={32}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;