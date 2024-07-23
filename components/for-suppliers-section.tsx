import type { NextPage } from "next";
import LeftContent from "./left-content";
import { useTranslation } from "react-i18next";

export type ForSuppliersSectionType = {
  className?: string;
};

const ForSuppliersSection: NextPage<ForSuppliersSectionType> = ({
  className = "",
}) => {
  const { t } = useTranslation();

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
          service={t('ForSuppliersSection.For Suppliers')}
          serviceSubheading={t('ForSuppliersSection.By making the process easier for restaurants')}
          vector="/vector-3.svg"

        />
      </div>
    </section>
  );
};

export default ForSuppliersSection;
