import React from 'react';
import Accordion from './Accordion';
import { useTranslation } from 'react-i18next';

const Qpp: React.FC = () => {
  const { t } = useTranslation();

  const accordionData = [
    {
      title: t('FAQs.Do my suppliers need to be on Fournili?'),
      content: t('FAQs.answer1'),
    },
    {
      title: t('FAQs.How much does Fournili cost?'),
      content: t('FAQs.answer2'),
    },
    {
      title: t('FAQs.What is Fournili?'),
      content: t('FAQs.answer3'),
    },
    {
      title: t('FAQs.Who is Fournili for?'),
      content: t('FAQs.answer4'),
    },
  ];

  return (
    <section 
      className={`self-stretch flex flex-col items-center justify-start py-[24px] px-16 box-border max-w-full text-center text-29xl font-body mq750:pl-8 mq750:pr-8 mq750:box-border mq1025:pt-[68px] mq1025:pb-[68px] mq1025:box-border mq450:pt-11 mq450:pb-11 mq450:box-border `}
    >
      <div className="self-stretch rounded-lg bg-white box-border flex flex-col items-center justify-start py-20 px-0 relative max-w-full border-[12px] border-solid border-primary-300">
        <div className="w-full flex flex-col items-center justify-start gap-[48px] max-w-full">
          <h1 className="bg-white m-0 relative text-inherit leading-[58px] font-medium font-inherit inline-block mq1025:text-19xl mq1025:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
            FAQs
          </h1>
          <div className="self-stretch flex flex-col items-center justify-start max-w-full px-5">
      {accordionData.map((item, index) => (
        <Accordion key={index} title={item.title} content={item.content} />
      ))}
      </div>
      </div>
      </div>
    </section>
  );
};

export default Qpp;