import type { NextPage } from "next";
import LeftContent from "./left-content";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export type ForSuppliersSectionType = {
  className?: string;
};

const ForSuppliersSection: NextPage<ForSuppliersSectionType> = ({
  className = "",
}) => {
  const { t,i18n} = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <section
      id="forsupplierssection"
      className={`self-stretch bg-secondary-100 flex flex-col items-center justify-between py-20 px-5 box-border min-h-[500px] max-w-full mq750:pt-[52px] mq750:pb-[52px] mq750:box-border ${className}`}
      style={{
        fontFamily: isArabic ? 'NotoKufiArabic' : 'Circular Std',
      }}
    >
      <div className="w-[1220px] flex flex-row items-center justify-between max-w-full gap-[100px] mq450:gap-[20px] mq750:gap-[40px] text-left text-21xl mq1125:flex-wrap mq1125:justify-center">
        <div className="w-[479px] relative rounded-lg max-h-full max-w-full flex-1 mq1125:flex-1">
          <Image
            alt="Suppliers Section Image"
            src="/image-3@2x.png"
            layout="responsive"
            width={479} 
            height={320} 
            quality={75} 
            className="rounded-lg object-cover" 
          />
        </div>
        <LeftContent
          service={t("ForSuppliersSection.For Suppliers")}
          serviceSubheading={t(
            "ForSuppliersSection.By making the process easier for restaurants"
          )}
          vector="/vector-3.svg"
        />
      </div>
    </section>
  );
};

export default ForSuppliersSection;