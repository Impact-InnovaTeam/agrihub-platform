import React from 'react';

import CommunityNavigation from 'components/navigation/CommunityNavigation';

export default ({ children }) => {
  return (
    <>
      <CommunityNavigation />
      <main id="ahMain">{children}</main>
    </>
  );
};
