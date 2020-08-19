import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, Col, Container, Row } from 'reactstrap';

const categories = [
  {
    name: 'Urban Farming',
    image: `${process.env.PUBLIC_URL}/assets/categories/urban-farming.jpg`,
    path: '/search?category=urban-farming',
  },
  {
    name: 'Aquaponics',
    image: `${process.env.PUBLIC_URL}/assets/categories/aquaponics.jpg`,
    path: '/search?category=aquaponics',
  },
  {
    name: 'Organic Farming',
    image: `${process.env.PUBLIC_URL}/assets/categories/organic-farming.jpg`,
    path: '/search?category=organic-farming',
  },
  {
    name: 'Financing',
    image: `${process.env.PUBLIC_URL}/assets/categories/financing.jpg`,
    path: '/search?category=financing-farming',
  },
  {
    name: 'Poultry Farming',
    image: `${process.env.PUBLIC_URL}/assets/categories/poultry-farming.jpg`,
    path: '/search?category=poultry-farming',
  },
  {
    name: 'Fruit Propagation',
    image: `${process.env.PUBLIC_URL}/assets/categories/fruit-propagation.jpg`,
    path: '/search?category=fruit-propagation',
  },
];

export default () => {
  return (
    <section id="ahTopCategories">
      <Container className="py-5">
        <Row>
          <Col>
            <h3 className="font-weight-bold">Top Categories</h3>
          </Col>
          <Col>
            <h3 className="text-right">
              <NavLink className="text-secondary" to="/categories">
                <small>See more &rarr;</small>
              </NavLink>
            </h3>
          </Col>
        </Row>
        <Row className="mt-3">
          {categories.map((category, index) => (
            <Col key={index} className="mb-5" xs="12" md="6" lg="4">
              <Card className="shadow-sm border-0 h-100">
                <CardImg
                  top
                  width="100%"
                  src={category.image}
                  alt={category.name}
                />
                <CardBody>
                  <NavLink className="stretched-link" to={category.path}>
                    <h4 className="m-0 text-center">{category.name}</h4>
                  </NavLink>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
