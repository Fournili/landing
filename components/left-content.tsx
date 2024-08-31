import type { NextPage } from "next";
import { useTranslation } from "react-i18next";

export type LeftContentType = {
  className?: string;
  service?: string;
  serviceSubheading?: string;
  vector?: string;
};

const LeftContent: NextPage<LeftContentType> = ({
  className = "",
  service,
  serviceSubheading,
  vector,
}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <div
      className={`w-[528px] flex flex-col items-start justify-start py-5 px-0 box-border gap-[48px] min-w-[528px] max-w-full text-left text-21xl text-gray-300 font-body mq750:gap-[24px] mq750:min-w-full mq1125:flex-1 ${className}`}
      style={{
        fontFamily: isArabic ? 'NotoKufiArabic' : 'Circular Std',
      }}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
        <h1 className="font-h3 m-0 w-[416px] relative text-inherit leading-[120%] font-medium font-inherit inline-block max-w-full mq1025:text-13xl mq1025:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          {service}
        </h1>
        <div className="font-h6 self-stretch h-[145px] text-[1.5rem] font-medium relative leading-[120%] inline-block mq450:text-lgi mq450:leading-[23px]">
          {serviceSubheading}
        </div>
      </div>
      <button className="hidden cursor-pointer [border:none] py-[13.5px] px-6 bg-primary-300 shadow-[0px_2px_2px_rgba(0,_0,_0,_0.1)] rounded-lg flex flex-row items-center justify-center gap-[8px]">
        <div className="overflow-hidden hidden flex-col items-start justify-start p-[9px] box-border w-[px] h-[px]">
          <img className="w-[25.7px] h-[25.7px] relative" alt="" src={vector} />
        </div>
        <b className="relative text-5xl leading-[29px] inline-block font-body text-gray-100 text-left min-w-[129px] whitespace-nowrap mq450:text-lgi mq450:leading-[23px]">
          Learn More
        </b>
      </button>
    </div>
  );
};

export default LeftContent;
