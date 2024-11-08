import type { NextPage } from "next";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export type CardType = {
  className?: string;
  image?: string;
  weConnect?: string;
  weBringRestaurantsAndSupp?: string;
};

const Card: NextPage<CardType> = ({
  className = "",
  image,
  weConnect,
  weBringRestaurantsAndSupp,
}) => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const isFrench = i18n.language === 'fr';
  

  return (
    <div
      className={`flex flex-col items-start justify-start py-8 px-0 box-border gap-[40px] max-w-full text-21xl text-gray-300 font-body mq750:pt-[21px] mq750:pb-[21px] mq750:box-border mq450:gap-[20px] ${className}`}
      style={{
        fontFamily: isArabic ? 'NotoKufiArabic' : 'Circular Std',
        textAlign: isArabic ? 'right' : 'left',
      }}
    >
      <Image
        className="self-stretch h-[361px] relative rounded-lg max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt={weConnect || "Default alt text"}
        src={image || ""}
        width={600}
        height={361}
      />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[21px] gap-[16px]">
        <h1 className={`m-0 relative text-inherit leading-[120%] font-medium font-inherit mq1025:text-13xl mq1025:leading-[38px] mq450:text-5xl mq450:leading-[29px] ${isFrench ? 'self-start' : 'self-center'}`} 
            style={{  whiteSpace: isFrench ? 'nowrap' : 'normal', width: isFrench ? 'auto' : '232px'}}>
          {weConnect}
        </h1>
        <div className="self-stretch relative text-5xl font-medium leading-[120%] mq450:text-lgi mq450:leading-[23px]">
          {weBringRestaurantsAndSupp}
        </div>
      </div>
    </div>
  );
};

export default Card;