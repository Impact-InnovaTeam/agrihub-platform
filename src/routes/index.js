import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Loader from 'components/loader';

const Home = lazy(() => import('views/Home'));
const Dashboard = lazy(() => import('views/Dashboard'));
const Learn = lazy(() => import('views/Learn'));
const Community = lazy(() => import('views/Community'));
const CommunityTopic = lazy(() => import('views/Topic'));
const Courses = lazy(() => import('views/Courses'));
const Course = lazy(() => import('views/Course'));
const SignIn = lazy(() => import('views/SignIn'));
const SignUp = lazy(() => import('views/SignUp'));
const About = lazy(() => import('views/About'));
const NotFound = lazy(() => import('views/NotFound'));

export default () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/learn/c">
            <Learn />
          </Route>
          <Route exact path="/community">
            <Community />
          </Route>
          <Route exact path="/community/t">
            <CommunityTopic />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/course/c">
            <Course />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};
