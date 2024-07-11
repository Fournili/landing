import type { NextPage } from "next";
import Link from "next/link"

export type NavBarLandingPageType = {
  className?: string;
};

const NavBarLandingPage: NextPage<NavBarLandingPageType> = ({
  className = "",
}) => {
  
  return (
    <nav
      className={`self-stretch flex flex-row items-center justify-between py-2 px-4 sticky top-0 z-10 w-full bg-[#e6e4d5] shadow-md  ${className}`}
      >
      <Link href="/" >
       <img
        className="h-16 w-[110px] relative object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/plan-de-travail-1-copie-3-2@2x.png"
      />
      </Link>
      
    </nav>
  );
};

export default NavBarLandingPage;
