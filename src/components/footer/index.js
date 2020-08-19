import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

export default () => {
  return (
    <footer id="ahFooter" className="border-top">
      <Container className="py-3">
        <Row>
          <Col
            xs="12"
            lg="4"
            className="py-3 align-middle text-center text-lg-left"
          >
            &copy; Copyright {new Date().getFullYear()} AgriHub
          </Col>
          <Col xs="12" lg="8" className="py-3">
            <Row>
              <Col className="text-right mb-5 mb-lg-0" lg="8">
                <NavLink
                  className="d-block d-lg-inline ml-lg-5 py-3 text-center text-lg-left"
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className="d-block d-lg-inline ml-lg-5 py-3 text-center text-lg-left"
                  to="/terms-of-service"
                >
                  Terms of Service
                </NavLink>
                <NavLink
                  className="d-block d-lg-inline ml-lg-5 py-3 text-center text-lg-left"
                  to="/privacy-policy"
                >
                  Privacy Policy
                </NavLink>
              </Col>
              <Col id="wshSocial" className="text-center" lg="4">
                <a
                  className="text-theme-dark footer-social rounded-circle bg-white d-inline-block text-center"
                  href="https://www.facebook.com/agrihubph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-square" />
                </a>
                <a
                  className="ml-3 text-theme-dark footer-social rounded-circle bg-white d-inline-block text-center"
                  href="https://twitter.com/agrihubph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter" />
                </a>
                <a
                  className="ml-3 text-theme-dark footer-social rounded-circle bg-white d-inline-block text-center"
                  href="https://linkedin.com/company/agrihubph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin" />
                </a>
                <a
                  className="ml-3 text-theme-dark footer-social rounded-circle bg-white d-inline-block text-center"
                  href="https://www.instagram.com/agrihubph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
