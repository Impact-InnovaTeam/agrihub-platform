import React from 'react';

import Header from 'components/header';
import SelectCourses from 'components/content/SelectCourses';
import TopCategories from 'components/content/TopCategories';
import FooterContent from 'components/footer/FooterContent';
import Footer from 'components/footer';

export default () => {
  return (
    <>
      <Header />
      <SelectCourses />
      <TopCategories />
      <FooterContent />
      <Footer />
    </>
  );
};
