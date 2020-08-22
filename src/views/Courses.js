import React from 'react';

import CoursesHeader from 'components/header/CoursesHeader';
import CoursesContent from 'components/content/CoursesContent';
import HomeCTA from 'components/content/HomeCTA';
import FooterContent from 'components/footer/FooterContent';
import Footer from 'components/footer';

import CommunityLayout from 'layout/CommunityLayout';

export default () => {
  return (
    <CommunityLayout>
      <CoursesHeader />
      <CoursesContent />
      <HomeCTA />
      <FooterContent />
      <Footer />
    </CommunityLayout>
  );
};
