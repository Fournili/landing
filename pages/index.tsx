import type { NextPage } from "next";
import NavBarLP from "../components/new-navbar";
import Facts from "../components/facts";
import ForResturantsSection from "../components/for-resturants-section";
import ForSuppliersSection from "../components/for-suppliers-section";
import Carousel from "../components/Carousel";
import MobileBanner from "../components/mobile-ad-banner-sm";
import MobileAdSwitcher from "../components/mobile-ad-banner-switcher";
import Footer from "../components/footer";
import HeroSection from "../components/hero-section";
import FunArt from "../components/funart";
import FourniliFAQ from "../components/faq";

const FourniliHomepageLandingPag: NextPage = () => {
  return (
    <div className="w-full relative bg-whites-300 flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <NavBarLP />
      <HeroSection />
      <FunArt />
      <Facts />
        <ForResturantsSection />
        <ForSuppliersSection />
      <FourniliFAQ/>
      <MobileAdSwitcher/>
      <MobileBanner />
      <FunArt />
      <Footer />
    </div>
  );
};

export default FourniliHomepageLandingPag;

