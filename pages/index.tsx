import { useEffect } from 'react';
import type { NextPage } from "next";
import Head from 'next/head';
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
  useEffect(() => {
    // Track page view
    (window as any).umami && (window as any).umami.trackView('/');
  }, []);

  return (
    <>
      <Head>
        <title>Fournili - Plateforme de Connexion pour Restaurants et Fournisseurs en Algérie</title>
        <meta name="description" content="Fournili est une plateforme innovante qui connecte les restaurants et les fournisseurs alimentaires en Algérie. Simplifiez vos commandes, réduisez les erreurs, et gagnez du temps en gérant toutes vos relations commerciales en un seul endroit. Rejoignez-nous pour une expérience fluide et optimisée dans la gestion de vos approvisionnements alimentaires." />
        <meta name="keywords" content="Fournili, plateforme alimentaire, restaurants, fournisseurs, Algérie, gestion des commandes, approvisionnement alimentaire, marketplace, plateforme de connexion, fournisseurs alimentaires, simplification des commandes, relation commerciale, livraison, Alger, restaurateurs, gestion des fournisseurs, logistique alimentaire, حلقة الوصل, منصة الطعام, مطاعم, موردين, الجزائر, إدارة الطلبات, توريد المواد الغذائية, سوق إلكتروني, تبسيط العمليات, توصيل الطلبات, مزودو الأغذية, تسيير الموردين, لوجستيات الطعام, أمان المعاملات, Fournisseurs en Algérie" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fournili.com/" />
        <meta property="og:title" content="Fournili - Plateforme de Connexion pour Restaurants et Fournisseurs en Algérie" />
        <meta property="og:description" content="Fournili est une plateforme innovante qui connecte les restaurants et les fournisseurs alimentaires en Algérie. Simplifiez vos commandes, réduisez les erreurs, et gagnez du temps en gérant toutes vos relations commerciales en un seul endroit." />
        <meta property="og:image" content="https://www.fournili.com/path-to-your-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.fournili.com/" />
        <meta property="twitter:title" content="Fournili - Plateforme de Connexion pour Restaurants et Fournisseurs en Algérie" />
        <meta property="twitter:description" content="Fournili est une plateforme innovante qui connecte les restaurants et les fournisseurs alimentaires en Algérie. Simplifiez vos commandes, réduisez les erreurs, et gagnez du temps en gérant toutes vos relations commerciales en un seul endroit." />
        <meta property="twitter:image" content="https://www.fournili.com/path-to-your-image.jpg" />
      </Head>
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
    </>
  );
};

export default FourniliHomepageLandingPag;

