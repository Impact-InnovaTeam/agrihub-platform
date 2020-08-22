import React from 'react';

import DashboardNavigation from 'components/navigation/DashboardNavigation';

export default ({ children }) => {
  return (
    <>
      <DashboardNavigation />
      <main id="ahMain">{children}</main>
    </>
  );
};
