import React from 'react';
import { useTranslation } from 'react-i18next';
import MobileAdBanner from './mobile-ad-banner';
import MobileAd from './mobile-ad-banner-arabic';

const MobileAdSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <>
      {currentLanguage === 'ar' ? <MobileAd /> : <MobileAdBanner />}
    </>
  );
};

export default MobileAdSwitcher;
