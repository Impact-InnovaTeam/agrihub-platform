import React from 'react';

import CommunityHeader from 'components/header/CommunityHeader';
import CommunityTopic from 'components/content/CommunityTopic';
import FooterContent from 'components/footer/FooterContent';
import Footer from 'components/footer';

import CommunityLayout from 'layout/CommunityLayout';

export default () => {
  return (
    <CommunityLayout>
      <CommunityHeader />
      <CommunityTopic />
      <FooterContent />
      <Footer />
    </CommunityLayout>
  );
};
