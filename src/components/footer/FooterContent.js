import React from 'react';
import { Col, Container, Row } from 'reactstrap';

import ListGroup from 'components/list-group/ListGroup';
import ListGroupItem from 'components/list-group/ListGroupItem';

export default () => {
  return (
    <div id="ahFooterContent">
      <Container className="py-5">
        <Row>
          <Col xs="12" lg="3">
            <h3 className="h5 font-weight-bold text-secondary text-uppercase text-center text-lg-left">
              Links
            </h3>
            <ListGroup>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                About AgriHub
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Contact
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                FAQ
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Blog
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Partnership
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs="12" lg="3">
            <h3 className="h5 font-weight-bold text-secondary text-uppercase text-center text-lg-left mt-5 mt-lg-0">
              Categories
            </h3>
            <ListGroup>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Urban Farming
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Pest Management
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Vertical Farms
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Aquaponics
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Organic Farming
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col xs="12" lg="3">
            <h3 className="h5 font-weight-bold text-white text-uppercase text-center text-lg-left mt-5 mt-lg-0">
              Categories
            </h3>
            <ListGroup>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Seed Production
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Fruit Propagation
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Zero-Waste Farming
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Loans and Credit
              </ListGroupItem>
              <ListGroupItem className="text-center text-lg-left" href="#!">
                Composting
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col className="text-center text-lg-left mb-5 mb-md-3 mt-lg-0" lg="3">
            <img
              className="mb-3 w-75"
              src={`${process.env.PUBLIC_URL}/assets/logo/agrihub-logo-colored.png`}
              alt={`${process.env.REACT_APP_NAME} - ${process.env.REACT_APP_CAPTION}`}
              loading="lazy"
            />
            <p>
              <i className="fas fa-map-marker-alt mr-3" />
              NCR Philippines
            </p>
            <p>
              <i className="fa fa-envelope mr-3" />
              <a className="" href="mailto:mail@agrihub.ph">
                mail@agrihub.ph
              </a>
            </p>
            <p>
              <i className="fas fa-phone-alt mr-3" />
              <a className="" href="tel:+639123456789">
                +63 912 3456 789
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
