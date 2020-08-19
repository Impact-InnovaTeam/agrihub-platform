import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Loader from 'components/loader';

const Home = lazy(() => import('views/Home'));
const SignIn = lazy(() => import('views/SignIn'));

export default () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
