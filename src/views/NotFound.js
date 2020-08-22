import React from 'react';

import NotFoundHeader from 'components/header/NotFoundHeader';
import TopCategories from 'components/content/TopCategories';
import HomeCTA from 'components/content/HomeCTA';
import FooterContent from 'components/footer/FooterContent';
import Footer from 'components/footer';

import SiteLayout from 'layout/SiteLayout';

export default () => {
  return (
    <SiteLayout>
      <NotFoundHeader />
      <TopCategories />
      <HomeCTA />
      <FooterContent />
      <Footer />
    </SiteLayout>
  );
};
