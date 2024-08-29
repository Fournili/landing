import type { NextPage } from "next";
import NavBarLandingPage from "../components/nav-bar-landing-page";
import NavBarLP from "../components/new-navbar";
import Facts from "../components/facts";
import ForResturantsSection from "../components/for-resturants-section";
import ForSuppliersSection from "../components/for-suppliers-section";
import Carousel from "../components/Carousel";
import MobileAdBanner from "../components/mobile-ad-banner";
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
      <MobileAdBanner />
      <FunArt />
      <Footer />
    </div>
  );
};

export default FourniliHomepageLandingPag;

