import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-whites-400 flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full text-left text-5xl text-gray-300 font-body ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between p-16 box-border max-w-full gap-[20px] mq750:pl-8 mq750:pr-8 mq750:box-border mq1025:flex-wrap mq450:pt-[42px] mq450:pb-[42px] mq450:box-border">
          <div className="w-[550px] flex flex-row items-start justify-start gap-[104px] max-w-full mq750:flex-wrap mq750:gap-[52px] mq450:gap-[26px]">
            <img
              className="h-[25px] w-[93px] relative object-contain"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
            <div className="flex-1 flex flex-row items-start justify-start gap-[88px] min-w-[229px] max-w-full mq450:flex-wrap mq450:gap-[44px]">
              <div className="w-28 flex flex-col items-start justify-start gap-[16px] min-w-[112px] mq450:flex-1">
                <div className="relative leading-[29px] font-medium inline-block min-w-[43px] mq450:text-lgi mq450:leading-[23px]">
                  Info
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl text-greys-300">
                  <div className="w-[101px] relative leading-[120%] font-medium inline-block mq450:text-base mq450:leading-[19px]">
                    Homepage
                  </div>
                  <div className="w-[109px] relative leading-[120%] font-medium inline-block mq450:text-base mq450:leading-[19px]">
                    Restaurants
                  </div>
                  <div className="relative leading-[120%] font-medium inline-block min-w-[86px] mq450:text-base mq450:leading-[19px]">
                    Suppliers
                  </div>
                  <div className="relative leading-[120%] font-medium inline-block min-w-[65px] mq450:text-base mq450:leading-[19px]">
                    Pricing
                  </div>
                  <div className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                    Help Center
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[99px]">
                <div className="relative leading-[29px] font-medium inline-block min-w-[68px] mq450:text-lgi mq450:leading-[23px]">
                  About
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl text-greys-300">
                  <div className="relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                    About Fournili
                  </div>
                  <div className="relative leading-[120%] font-medium inline-block min-w-[49px] mq450:text-base mq450:leading-[19px]">
                    FAQs
                  </div>
                  <div className="self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                    Terms of Service
                  </div>
                  <div className="relative leading-[120%] font-medium inline-block min-w-[128px] mq450:text-base mq450:leading-[19px]">
                    Privacy Policy
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[216px] flex flex-col items-start justify-center gap-[40px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="w-[123px] relative leading-[29px] font-medium inline-block mq450:text-lgi mq450:leading-[23px]">
                Contact Us
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl text-greys-300">
                <div className="relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                  <p className="m-0">Company Address</p>
                  <p className="m-0">Algeria, 12358</p>
                </div>
                <div className="self-stretch relative leading-[120%] font-medium whitespace-nowrap mq450:text-base mq450:leading-[19px]">
                  questions@fournili.com
                </div>
                <div className="relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                  +1 (312) 888 8888
                </div>
              </div>
            </div>
            <div className="w-[147px] flex flex-col items-start justify-start gap-[16px]">
              <img
                className="self-stretch h-[41px] relative rounded-lg max-w-full overflow-hidden shrink-0"
                alt=""
                src="/apple-button-contents-1.svg"
              />
              <img
                className="self-stretch h-[41px] relative rounded-lg max-w-full overflow-hidden shrink-0"
                alt=""
                src="/google-button-contents-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch box-border flex flex-row items-center justify-start pt-[27px] px-16 pb-[30px] max-w-full text-base text-greys-300 border-t-[2px] border-solid border-greys-200 mq750:pl-8 mq750:pr-8 mq750:box-border">
          <div className="w-[440px] flex flex-row flex-wrap items-start justify-start gap-[64px] max-w-full mq450:gap-[32px]">
            <div className="flex-1 relative leading-[120%] font-medium inline-block min-w-[154px]">
              2023 © Fournili Corporation Inc.
            </div>
            <div className="w-[139px] relative leading-[120%] font-medium inline-block">{`All rights reserved. `}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
