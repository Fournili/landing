import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

export type NavBarLandingPageType = {
  className?: string;
};

const NavBarLandingPage: NextPage<NavBarLandingPageType> = ({
  className = "",
}) => {
  const { t, i18n } = useTranslation();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`self-stretch flex flex-row font-body items-center justify-between py-2 px-4 sticky top-0 z-10 w-full bg-[#e6e4d5] shadow-md ${className}`}
    >
      <div className="flex items-center">
        <Link href="/" passHref>
          <Image
            src="/plan-de-travail-1-copie-4-2@2x.svg"
            alt="Fournili Logo"
            width={110}
            height={64}
            className="relative object-contain z-[1]"
            priority={true} 
          />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="relative">
          <div
            className="rounded-lg flex flex-row items-start justify-start py-2.5 px-[7px] gap-[7px] z-[1] cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              className="h-9 w-[47px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/language-select.svg"
            />
          </div>
          <div
  className={`absolute top-full right-4 mt-2 w-32 bg-white shadow-md rounded-lg transition-opacity duration-300 ease-in-out${
    dropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
  }`}
>
  <div className="self-stretch flex flex-row items-start justify-start">
    <div className="flex-1 rounded bg-whitesmoke flex flex-col items-start justify-start pt-[17px] px-0 pb-4 gap-3">
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 px-[26px] gap-1.5 cursor-pointer"
        onClick={() => handleLanguageChange("en")}
      >
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt="English"
          src={
            i18n.language === "en"
              ? "/radio-button-checked-24dp-e8eaed-fill0-wght300-grad0-opsz24-1.svg"
              : "/radio-button-unchecked-24dp-e8eaed-fill0-wght300-grad0-opsz24-1.svg"
          }
        />
        <div className="relative leading-[120%] inline-block min-w-[69px] mq450:text-base mq450:leading-[19px]">
          {t('NavBarLandingPage.English')}
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 px-[27px] gap-[7px] cursor-pointer"
        onClick={() => handleLanguageChange("fr")}
      >
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
          alt="French"
          src={
            i18n.language === "fr"
              ? "/radio-button-checked-24dp-e8eaed-fill0-wght300-grad0-opsz24-1.svg"
              : "/radio-button-unchecked-24dp-e8eaed-fill0-wght300-grad0-opsz24-1.svg"
          }
        />
        <div className="relative leading-[120%] inline-block min-w-[65px] mq450:text-base mq450:leading-[19px]">
          {t('NavBarLandingPage.French')}
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        {/* For Restaurants Section */}
        <div
          style={{
            display: isMobile ? 'none' : 'flex',
          }}
          className="rounded-lg flex flex-row items-start justify-start p-4 z-[1]"
        >
          <ScrollLink
            to="forrestaurantssection"
            smooth={true}
            duration={500}
            style={{ textDecoration: "none" }}
            className="cursor-pointer text-black flex flex-row items-center justify-start py-0 px-3"
          >
            <div className="relative leading-[120%] font-medium inline-block min-w-[121px] mq450:text-base mq450:leading-[19px]">
              {t('NavBarLandingPage.For Restaurants')}
            </div>
          </ScrollLink>
        </div>
        {/* For Suppliers Section */}
        <div
          style={{
            display: isMobile ? 'none' : 'flex',
          }}
          className="rounded-lg flex flex-row items-start justify-start p-4 z-[1]"
        >
          <ScrollLink
            to="forsupplierssection"
            smooth={true}
            duration={500}
            style={{ textDecoration: "none" }}
            className="cursor-pointer text-black flex flex-row items-start justify-start py-0 px-3"
          >
            <div className="w-[121px] relative leading-[120%] font-medium inline-block min-w-[121px] mq450:text-base mq450:leading-[19px]">
              {t('NavBarLandingPage.For Suppliers')}
            </div>
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarLandingPage;




