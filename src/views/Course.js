import React from 'react';

import CourseContent from 'components/content/CourseContent';
import HomeCTA from 'components/content/HomeCTA';
import FooterContent from 'components/footer/FooterContent';
import Footer from 'components/footer';

import CommunityLayout from 'layout/CommunityLayout';

export default () => {
  return (
    <CommunityLayout>
      <CourseContent />
      <HomeCTA />
      <FooterContent />
      <Footer />
    </CommunityLayout>
  );
};
