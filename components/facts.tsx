import type { NextPage } from "next";
import Card from "./card";
import { useTranslation } from "react-i18next";

export type FactsType = {
  className?: string;
};

const Facts: NextPage<FactsType> = ({ className = "" }) => {
  const { t,i18n} = useTranslation();
  const isArabic = i18n.language === 'ar';
  return (
    <section
      className={`self-stretch bg-secondary-100 flex flex-col items-center justify-start py-10 px-16 box-border gap-[48px] max-w-full text-center text-29xl text-gray-300 font-body mq750:gap-[24px] mq750:py-5 mq750:px-8 mq750:box-border mq1025:pt-[26px] mq1025:pb-[26px] mq1025:box-border ${className}`}
      style={{
        fontFamily: isArabic ? 'NotoKufiArabic' : 'Circular Std',
      }}
    >
      <div className="w-[661px] flex flex-col items-center justify-start gap-[24px] max-w-full" dir="rtl">
        <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-medium font-inherit mq1025:text-19xl mq1025:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          {t('Facts.Leave the mess in the kitchen')}
        </h1>
        <h1 className="m-0 w-[308px] relative text-21xl leading-[120%] font-medium font-inherit text-primary-300 text-center inline-block mq1025:text-13xl mq1025:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          {t('Facts.We’ll do the rest')}
        </h1>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start gap-[32px] max-w-full grid-cols-[repeat(3,_minmax(312px,_1fr))] text-left text-21xl mq750:gap-[16px] mq750:grid-cols-[minmax(312px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(312px,_541px))]"
      >
        <Card
          image="/image@3x.jpg"
          weConnect={t('Facts.We connect')}
          weBringRestaurantsAndSupp={t('Facts.We bring restaurants and suppliers together so')}
        />
        <Card
          image="/image-1@2x.png"
          weConnect={t('Facts.We save')}
          weBringRestaurantsAndSupp={t('Facts.Save tou money, save you time')}
        />
        <Card
          image="/imageicon@2x.png"
          weConnect={t('Facts.We promise')}
          weBringRestaurantsAndSupp={t('Facts.In the food industry, reliability is key')}
        />
      </div>
    </section>
  );
};

export default Facts;
