import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Loader from 'components/loader';

const Home = lazy(() => import('views/Home'));
const Community = lazy(() => import('views/Community'));
const Topic = lazy(() => import('views/Topic'));
const SignIn = lazy(() => import('views/SignIn'));
const SignUp = lazy(() => import('views/SignUp'));

export default () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/community">
            <Community />
          </Route>
          <Route exact path="/community/t">
            <Topic />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
