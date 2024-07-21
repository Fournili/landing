import type { NextPage } from "next";
import LeftContent from "./left-content";

export type ForResturantsSectionType = {
  className?: string;
};

const ForResturantsSection: NextPage<ForResturantsSectionType> = ({
  className = "",
}) => {
  return (
    <section id="forrestaurantssection"
      className={`self-stretch flex flex-col items-center justify-start py-24 px-5 box-border gap-[56px] max-w-full text-center text-29xl text-gray-300 font-body mq750:gap-[28px] mq750:pt-[62px] mq750:pb-[62px] mq750:box-border ${className}`}
    >
      <h1 className="m-0 w-[616px] relative text-inherit leading-[58px] font-medium font-inherit inline-block max-w-full mq1025:text-19xl mq1025:leading-[46px] mq450:text-10xl mq450:leading-[35px]">
        <span>{`For all the `}</span>
        <span className="text-primary-300">foodies</span>
        <span> out there.</span>
      </h1>
      <div className="w-[1088px] flex flex-row items-center justify-between max-w-full gap-[20px] text-left text-21xl mq1125:flex-wrap mq1125:justify-center">
        <LeftContent
          service="For Restaurants"
          serviceSubheading="We cut your workload in half. The days of screw ups are over. Order in three clicks, contact with suppliers at your fingertips, and track your items as they drive towards you. And did we mention it’s free?"
          vector="/vector-2.svg"
        />
        <img
          className="w-[479px] relative rounded-lg max-h-full object-cover max-w-full mq1125:flex-1"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
    </section>
  );
};

export default ForResturantsSection;
