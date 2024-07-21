import type { NextPage } from "next";
import NavBarLandingPage from "../components/nav-bar-landing-page";
import Facts from "../components/facts";
import ForResturantsSection from "../components/for-resturants-section";
import ForSuppliersSection from "../components/for-suppliers-section";
import FourniliFAQs from "../components/fournili-f-a-qs";
import Carousel from "../components/Carousel";
import MobileAdBanner from "../components/mobile-ad-banner";
import Footer from "../components/footer";
import HeroSection from "../components/hero-section";
import FunArt from "../components/funart";

const FourniliHomepageLandingPag: NextPage = () => {
  return (
    <div className="w-full relative bg-whites-300 flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <NavBarLandingPage />
      <HeroSection />
      <FunArt />
      <Facts />
        <ForResturantsSection />
        <ForSuppliersSection />
      <FourniliFAQs />
      <Carousel />
      <MobileAdBanner />
      <FunArt />
      <Footer />
    </div>
  );
};

export default FourniliHomepageLandingPag;

