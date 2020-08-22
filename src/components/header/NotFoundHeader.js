import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export default () => {
  return (
    <>
      <header id="ahHeader" className="text-white vh-75">
        <Container className="pt-5 px-3">
          <Row className="mt-5 pt-5">
            <Col className="text-center" xs="12">
              <h3 className="display-4 font-weight-bold header-shadow">
                Looking for something?
              </h3>
              <h2 className="mt-3 header-shadow">
                Sorry! We couldn't find what you're looking for.
              </h2>
              <NavLink
                className="btn btn-dark shadow-lg btn-lg my-3 px-5"
                to="/"
              >
                &larr; Go Back
              </NavLink>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};
