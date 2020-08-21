import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, Col, Container, CustomInput, Row } from 'reactstrap';

export default () => {
  return (
    <section id="ahPricing" className="bg-primary">
      <Container className="py-5">
        <Row>
          <Col className="mx-auto text-center text-white" xs="6">
            <h1>Subscription Pricing</h1>
            <CustomInput className="mb-5" type="switch" label="Monthly" />
          </Col>
        </Row>
        <Row>
          <Col className="ml-auto p-3" xs="4">
            <Card className="h-100 shadow-lg bg-light border-0">
              <CardBody className="text-center">
                <h5>Starter</h5>
                <h3 className="text-primary font-weight-bold">PHP 0 / month</h3>
                <h6>Free Forever Plan</h6>
                <hr />
                <p>
                  <i className="fas fa-check mr-2" />
                  Free account
                </p>
                <p>
                  <i className="fas fa-check mr-2" />
                  Access to Community
                </p>
                <NavLink className="btn btn-primary" to="/">
                  Sign Up
                </NavLink>
              </CardBody>
            </Card>
          </Col>
          <Col className="mr-auto" xs="4">
            <Card className="h-100 shadow-lg bg-info border-0">
              <CardBody className="text-center">
                <h5 className="font-weight-bold">Premium</h5>
                <h3 className="text-primary font-weight-bold">
                  PHP 500 / month
                </h3>
                <h6>Access to Premium Paid Content</h6>
                <hr />
                <p>
                  <i className="fas fa-check mr-2" />
                  All features in the Starter plan
                </p>
                <p>
                  <i className="fas fa-check mr-2" />
                  Certificate of Completion
                </p>
                <p>
                  <i className="fas fa-check mr-2" />
                  Unlimited courses
                </p>
                <p>
                  <i className="fas fa-check mr-2" />
                  Premium Videos
                </p>
                <NavLink className="btn btn-primary" to="/">
                  Subscribe Now
                </NavLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
