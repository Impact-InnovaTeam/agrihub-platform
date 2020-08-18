import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Loader from 'components/loader';
import SiteLayout from 'layout/SiteLayout';

const Home = lazy(() => import('views/Home'));

export default () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <SiteLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </SiteLayout>
      </Suspense>
    </Router>
  );
};
