import React from 'react';

import Navigation from 'components/navigation';

export default ({ children }) => {
  return (
    <>
      <Navigation />
      <main id="ahMain">{children}</main>
    </>
  );
};
