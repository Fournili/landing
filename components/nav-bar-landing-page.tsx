import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export type NavBarLandingPageType = {
  className?: string;
};

const NavBarLandingPage: NextPage<NavBarLandingPageType> = ({
  className = "",
}) => {
  const [language, setLanguage] = useState("english");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setDropdownVisible(false);
    // Add additional logic here to handle language change if needed
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav
      className={`self-stretch flex flex-row font-body items-center justify-between py-2 px-4 sticky top-0 z-10 w-full bg-[#e6e4d5] shadow-md ${className}`}
    >
      <div className="flex items-center">
        <Link href="/" passHref>
          <img
            className="h-16 w-[110px] relative object-contain z-[1]"
            loading="lazy"
            alt="Fournili Logo"
            src="/plan-de-travail-1-copie-3-2@2x.png"
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
            className={`absolute top-full mt-2 w-32 bg-white shadow-md rounded-lg transition-opacity duration-300 ease-in-out ${
              dropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="py-1">
              <li
                className={`px-4 py-2 cursor-pointer ${
                  language === "english" ? "text-red-600" : "text-black"
                }`}
                onClick={() => handleLanguageChange("english")}
              >
                English
              </li>
              <li
                className={`px-4 py-2 cursor-pointer ${
                  language === "french" ? "text-red-600" : "text-black"
                }`}
                onClick={() => handleLanguageChange("french")}
              >
                French
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg flex flex-row items-start justify-start p-4 z-[1]">
          <ScrollLink
            to="forrestaurantssection"
            smooth={true}
            duration={500}
            style={{ textDecoration: "none" }}
            className="cursor-pointer text-black flex flex-row items-center justify-start py-0 px-3"
          >
            <div className="relative leading-[120%] font-medium inline-block min-w-[121px] mq450:text-base mq450:leading-[19px]">
              For Restaurants
            </div>
          </ScrollLink>
        </div>
        <div className="rounded-lg flex flex-row items-start justify-start p-4 z-[1]">
          <ScrollLink
            to="forsupplierssection"
            smooth={true}
            duration={500}
            style={{ textDecoration: "none" }}
            className="cursor-pointer text-black flex flex-row items-start justify-start py-0 px-3"
          >
            <div className="w-[121px] relative leading-[120%] font-medium inline-block min-w-[121px] mq450:text-base mq450:leading-[19px]">
              For Suppliers
            </div>
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarLandingPage;