import type { NextPage } from "next";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export type MobileBannerType = {
  className?: string;
};

const MobileBanner: NextPage<MobileBannerType> = ({ className = "" }) => {
  const [screenContentTwoValue, setScreenContentTwoValue] = useState(null);
  const { t } = useTranslation();

  return (
    <section
      className={`mq750:flex self-stretch h-[476px] bg-white flex items-center justify-center px-[20px] box-border text-center text-29xl text-primary-300 font-body ${className} mq750:block hidden`}
    >
      <div className="w-[457px] flex flex-col items-start justify-start gap-[24px] max-w-[calc(100%_-_503px)] shrink-0 text-center text-29xl text-primary-300  mq1025:max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
          <h1 className="m-0 flex-1 relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full z-[1] mq1025:text-19xl mq1025:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            <p className="m-0">{t('MobileAdBanner.Run Your Business')}</p>
            <p className="m-0">{t('MobileAdBanner.On The Go')}</p>
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] text-5xl text-gray-300 mq450:gap-[16px]">
          <div className="self-stretch relative leading-[120%] font-medium z-[1] mq450:text-lgi mq450:leading-[23px]">
            <p className="m-0">{t('MobileAdBanner.Try our app for free in')}</p>
            <p className="m-0">{t('MobileAdBanner.any app store')}</p>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
          <h1 className="w-full relative text-[3rem] leading-[120%] inline-block font-lato text-center" style={{ color: '#373736' }}>
            Coming Soon!
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MobileBanner;

