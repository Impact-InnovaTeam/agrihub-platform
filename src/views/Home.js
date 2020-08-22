import React from 'react';

import Header from 'components/header';
import SelectCourses from 'components/content/SelectCourses';
import Pricing from 'components/content/Pricing';
import TopCategories from 'components/content/TopCategories';
import HomeCTA from 'components/content/HomeCTA';
import FooterContent from 'components/footer/FooterContent';
import Footer from 'components/footer';

import SiteLayout from 'layout/SiteLayout';

export default () => {
  return (
    <SiteLayout>
      <Header />
      <SelectCourses />
      <Pricing />
      <TopCategories />
      <HomeCTA />
      <FooterContent />
      <Footer />
    </SiteLayout>
  );
};
