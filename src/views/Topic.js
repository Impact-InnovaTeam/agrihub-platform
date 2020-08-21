import React from 'react';

import CommunityNavigation from 'components/navigation/CommunityNavigation';
import CommunityHeader from 'components/header/CommunityHeader';
import CommunityTopic from 'components/content/CommunityTopic';
import FooterContent from 'components/footer/FooterContent';
import Footer from 'components/footer';

import CommunityLayout from 'layout/CommunityLayout';

export default () => {
  return (
    <CommunityLayout>
      <CommunityNavigation />
      <CommunityHeader />
      <CommunityTopic />
      <FooterContent />
      <Footer />
    </CommunityLayout>
  );
};
