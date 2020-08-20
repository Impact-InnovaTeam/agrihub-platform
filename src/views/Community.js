import React from 'react';

import CommunityNavigation from 'components/navigation/CommunityNavigation';
import CommunityHeader from 'components/header/CommunityHeader';
import CommunityTopics from 'components/content/CommunityTopics';
import FooterContent from 'components/footer/FooterContent';
import Footer from 'components/footer';

import CommunityLayout from 'layout/CommunityLayout';

export default () => {
  return (
    <CommunityLayout>
      <CommunityNavigation />
      <CommunityHeader />
      <CommunityTopics />
      <FooterContent />
      <Footer />
    </CommunityLayout>
  );
};
