import type { NextPage } from "next";
import Card from "./card";

export type FactsType = {
  className?: string;
};

const Facts: NextPage<FactsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-secondary-100 flex flex-col items-center justify-start py-10 px-16 box-border gap-[48px] max-w-full text-center text-29xl text-gray-300 font-body mq750:gap-[24px] mq750:py-5 mq750:px-8 mq750:box-border mq1025:pt-[26px] mq1025:pb-[26px] mq1025:box-border ${className}`}
    >
      <div className="w-[661px] flex flex-col items-center justify-start gap-[24px] max-w-full">
        <h1 className="m-0 self-stretch relative text-inherit leading-[58px] font-medium font-inherit mq1025:text-19xl mq1025:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
          Leave the mess in the kitchen.
        </h1>
        <h1 className="m-0 w-[308px] relative text-21xl leading-[120%] font-medium font-inherit text-primary-300 text-left inline-block mq1025:text-13xl mq1025:leading-[38px] mq450:text-5xl mq450:leading-[29px]">
          We’ll do the rest.
        </h1>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start gap-[32px] max-w-full grid-cols-[repeat(3,_minmax(312px,_1fr))] text-left text-21xl mq750:gap-[16px] mq750:grid-cols-[minmax(312px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(312px,_541px))]">
        <Card
          image="/image@2x.png"
          weConnect="We connect."
          weBringRestaurantsAndSupp="We bring restaurants and suppliers together so you can do it all in one spot. Chat with your business partners, track orders in real time, and discover whats out there (all of it)."
        />
        <Card
          image="/image-1@2x.png"
          weConnect="We save."
          weBringRestaurantsAndSupp="Save you money, save you time, and save you stress. We decrease order errors by 62%. Skip the endless phone calls, get organized, and focus on what you know best: amazing food."
        />
        <Card
          image="/imageicon@2x.png"
          weConnect="We promise."
          weBringRestaurantsAndSupp="In the food industry, reliability is key. We promise the transparency you need to trust the guys on the other end and build reliable partnerships."
        />
      </div>
    </section>
  );
};

export default Facts;
