import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Card, CardBody, Col, Container, Input, Row } from 'reactstrap';

export default () => {
  return (
    <section id="ahAuthorization" className="vh-100">
      <Container className="h-100 p-0" fluid>
        <Row className="h-100">
          <Col className="h-100 order-12 d-flex p-5" xs="12" lg="7">
            <Card className="m-5 w-100 shadow-lg border-0">
              <CardBody className="text-center p-5">
                <h1 className="mb-3 font-weight-bold">Sign In</h1>
                <Row className="mt-4 mb-2 pb-4">
                  <Col xs="6">
                    <Button className="p-2" color="success" block>
                      <i className="fab fa-facebook-square mr-3" /> Sign in with
                      Facebook
                    </Button>
                  </Col>
                  <Col xs="6">
                    <Button className="p-2" color="light" block>
                      <i className="fab fa-google mr-3" />
                      Sign in with Google
                    </Button>
                  </Col>
                </Row>
                <Row className="border-top pt-4">
                  <Col className="mx-auto" xs="9">
                    <Input type="text" placeholder="Username" />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="mx-auto" xs="9">
                    <Input type="password" placeholder="Password" />
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="ml-auto" xs="5">
                    <NavLink
                      className="btn btn-link btn-block text-left"
                      to="/forgot"
                    >
                      Forgot password?
                    </NavLink>
                  </Col>
                  <Col className="mr-auto" xs="4">
                    <Button className="px-3" color="primary" block>
                      Sign In
                    </Button>
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col className="mx-auto" xs="9">
                    <NavLink
                      className="btn btn-outline-secondary px-3 py-2"
                      to="/signup"
                    >
                      New user? Sign up here!
                    </NavLink>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col
            className="h-100 bg-primary order-1 d-none d-lg-flex py-5 px-3"
            xs="12"
            lg="5"
          >
            <Card className="m-5 w-100 border-0 bg-transparent">
              <CardBody className="text-right text-white pl-5">
                <h1 className="mb-5 font-weight-bold">AgriHub</h1>
                <h2 className="mb-3">
                  Join the largest Agricultural learning community in the
                  Philippines
                </h2>
                <h6>
                  Learn at your own pace with over 50+ online resources
                  available
                </h6>
                <p className="mt-5">Follow us:</p>
                <div className="h4">
                  <a
                    className="text-white footer-social rounded-circle  d-inline-block text-center"
                    href="https://www.facebook.com/agrihubph"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a
                    className="ml-3 text-white footer-social rounded-circle  d-inline-block text-center"
                    href="https://twitter.com/agrihubph"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="ml-3 text-white footer-social rounded-circle  d-inline-block text-center"
                    href="https://linkedin.com/company/agrihubph"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                  <a
                    className="ml-3 text-white footer-social rounded-circle  d-inline-block text-center"
                    href="https://www.instagram.com/agrihubph"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
