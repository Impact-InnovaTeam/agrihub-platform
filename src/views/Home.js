import React from 'react';

import Header from 'components/header';
import SelectCourses from 'components/content/SelectCourses';
import TopCategories from 'components/content/TopCategories';
import FooterContent from 'components/footer/FooterContent';
import Footer from 'components/footer';

import SiteLayout from 'layout/SiteLayout';

export default () => {
  return (
    <SiteLayout>
      <Header />
      <SelectCourses />
      <TopCategories />
      <FooterContent />
      <Footer />
    </SiteLayout>
  );
};
