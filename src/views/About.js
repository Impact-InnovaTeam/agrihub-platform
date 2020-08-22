import React from 'react';

import Header from 'components/header/AboutHeader';
import FooterContent from 'components/footer/FooterContent';

import SiteLayout from 'layout/SiteLayout';

export default () => {
  return (
    <SiteLayout>
      <Header />
      <FooterContent />
    </SiteLayout>
  );
};
