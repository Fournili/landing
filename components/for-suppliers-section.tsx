import type { NextPage } from "next";
import LeftContent from "./left-content";

export type ForSuppliersSectionType = {
  className?: string;
};

const ForSuppliersSection: NextPage<ForSuppliersSectionType> = ({
  className = "",
}) => {
  return (
    <section id="forsupplierssection"
      className={`self-stretch bg-secondary-100 flex flex-col items-center justify-between py-20 px-5 box-border min-h-[566px] max-w-full mq750:pt-[52px] mq750:pb-[52px] mq750:box-border ${className}`}
    >
      <div className="w-[1088px] flex flex-row items-center justify-between max-w-full gap-[20px] mq1125:flex-wrap">
        <img
          className="w-[479px] relative rounded-lg max-h-full object-cover max-w-full mq1125:flex-1"
          alt=""
          src="/image-3@2x.png"
        />
        <LeftContent
          service="For Suppliers"
          serviceSubheading="By making the process easier for restaurants, we increase the amount of items in their cart and orders placed. We remove the hassle so that you can grow your revenue and build a solid customer base. "
          vector="/vector-3.svg"
        />
      </div>
    </section>
  );
};

export default ForSuppliersSection;
