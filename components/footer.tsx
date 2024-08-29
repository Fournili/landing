import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  const { t } = useTranslation();
  return (
    <footer
      className={`self-stretch bg-whites-400 flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full text-left text-5xl text-gray-300 font-body ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between p-16 box-border max-w-full gap-[20px] mq750:pl-8 mq750:pr-8 mq750:box-border mq1025:flex-wrap mq450:pt-[42px] mq450:pb-[42px] mq450:box-border">
          <div className="w-[550px] flex flex-row items-start justify-start gap-[104px] max-w-full mq750:flex-wrap mq750:gap-[52px] mq450:gap-[26px]">
            <Link href="/" passHref>
              <Image
                className="h-[30px] w-[112px] relative object-contain"
                loading="lazy"
                alt="Logo"
                src="/logo@2x.png"
                width={112}
                height={30}
                quality={75}
              />
            </Link>
            <div className="flex-1 flex flex-row items-start justify-start gap-[88px] min-w-[229px] max-w-full mq450:flex-wrap mq450:gap-[44px]">
              <div className="w-28 flex flex-col items-start justify-start gap-[16px] min-w-[112px] mq450:flex-1">
                <div className="relative leading-[29px] font-medium inline-block min-w-[43px] mq450:text-lgi mq450:leading-[23px]">
                  {t('Footer.Info')}
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl text-greys-300">
                  <Link href="/" passHref>
                    <div className="text-dimgray-100 w-[101px] relative leading-[120%] font-medium inline-block mq450:text-base mq450:leading-[19px]">
                      {t('Footer.Homepage')}
                    </div>
                  </Link>
                  <Link href="/#forrestaurantssection">
                    <div className="text-dimgray-100 w-[109px] relative leading-[120%] font-medium inline-block mq450:text-base mq450:leading-[19px]">
                      {t('Footer.Restaurants')}
                    </div>
                  </Link>
                  <Link href="/#forsupplierssection">
                    <div className="text-dimgray-100 relative leading-[120%] font-medium inline-block min-w-[86px] mq450:text-base mq450:leading-[19px]">
                      {t('Footer.Suppliers')}
                    </div>
                  </Link>
                  <div className="text-dimgray-100 self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                    {t('Footer.Help Center')}
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[99px]">
                <div className="relative leading-[29px] font-medium inline-block min-w-[68px] mq450:text-lgi mq450:leading-[23px]">
                  {t('Footer.About')}
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl text-greys-300">
                  <div className="text-dimgray-100 relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                    {t('Footer.About Fournili')}
                  </div>
                  <Link href="/#FAQ">
                    <div className="text-dimgray-100 relative leading-[120%] font-medium inline-block min-w-[49px] mq450:text-base mq450:leading-[19px]">
                      {t('Footer.FAQs')}
                    </div>
                  </Link>
                  <div className="text-dimgray-100 self-stretch relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                    {t('Footer.Terms of Service')}
                  </div>
                  <div className="text-dimgray-100 relative leading-[120%] font-medium inline-block min-w-[128px] mq450:text-base mq450:leading-[19px]">
                    {t('Footer.Privacy Policy')}
                  </div>
                </div>
              </div>
               {/* Follow Us Section */}
               <div className="w-28 flex flex-col items-start justify-start gap-[16px] min-w-[112px] mq450:flex-1">
                <div className="relative leading-[29px] font-medium inline-block min-w-[68px] mq450:text-lgi mq450:leading-[23px]">
                  {t('Footer.Follow')}
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-xl text-greys-300">
                  <Link href="https://www.linkedin.com/company/fournili/posts" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/icon-linkedin.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="hover:opacity-75 transition-opacity duration-200"
                    />
                  </Link>
                  <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/icon-instagram.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="hover:opacity-75 transition-opacity duration-200"
                    />
                  </Link>
                  <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/icon-facebook.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="hover:opacity-75 transition-opacity duration-200"
                    />
                  </Link>
                </div>
              </div>
              {/* End of Follow Us Section */}
            </div>
          </div>
          <div className="w-[216px] flex flex-col items-start justify-center gap-[40px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="w-[123px] relative leading-[29px] font-medium inline-block mq450:text-lgi mq450:leading-[23px]">
                {t('Footer.Contact Us')}
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-xl text-greys-300">
              {/* adress section hidden until we can get an actual address 
                <div className="relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                  <p className="m-0">{t('Footer.Company Address')}</p>
                  <p className="m-0">{t('Footer.Location')}</p>
                </div> 
              */}
<div className="self-stretch relative leading-[120%] font-medium whitespace-nowrap mq450:text-base mq450:leading-[19px]">
  <Link 
    href="mailto:hello@fournili.co" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-inherit hover:underline"
  >
    hello@fournili.co
  </Link>
</div>
                <div className="relative leading-[120%] font-medium mq450:text-base mq450:leading-[19px]">
                  +213 558 501 857
                </div>
              </div>
            </div>
            <div className="w-[147px] flex flex-col items-start justify-start gap-[16px]">
              <Image
                className="self-stretch h-[41px] relative rounded-lg max-w-full overflow-hidden shrink-0"
                alt="Apple Store"
                src="/apple-button-contents-1.svg"
                width={147}
                height={41}
                quality={75}
              />
              <Image
                className="self-stretch h-[41px] relative rounded-lg max-w-full overflow-hidden shrink-0"
                alt="Google Play Store"
                src="/google-button-contents-1.svg"
                width={147}
                height={41}
                quality={75}
              />
            </div>
          </div>
        </div>
        <div className="self-stretch box-border flex flex-row items-center justify-start pt-[27px] px-16 pb-[30px] max-w-full text-base text-greys-300 border-t-[2px] border-solid border-greys-200 mq750:pl-8 mq750:pr-8 mq750:box-border">
          <div className="w-[440px] flex flex-row flex-wrap items-start justify-start gap-[64px] max-w-full mq450:gap-[32px]">
            <div className="flex-1 relative leading-[120%] font-medium inline-block min-w-[154px]">
              2024 © Fournili Corporation Inc.
            </div>
            <div className="w-[139px] relative leading-[120%] font-medium inline-block">{`All rights reserved. `}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;