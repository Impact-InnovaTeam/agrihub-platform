import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export default () => {
  return (
    <section id="ahHomeCTA" className="bg-secondary">
      <Container className="py-5">
        <Row>
          <Col className="text-center text-md-right text-white" xs="12" md="6">
            <h5 className="font-weight-bold">
              Unleash Your Agricultural Potential
            </h5>
            <h6>
              <small>Sign up and get instant access</small>
            </h6>
          </Col>
          <Col className="text-center text-md-left" xs="12" md="6">
            <NavLink className="btn btn-info btn-lg" to="/signup">
              Start Learning Now
            </NavLink>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
