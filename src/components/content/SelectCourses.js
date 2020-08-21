import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, Col, Container, Row } from 'reactstrap';

const courses = [
  {
    title: 'Farming and Everything Rice',
    author: 'Darwin Camahalan',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-iconcom-236473.jpg`,
    rating: '4.4',
  },
  {
    title: 'Horticulture 101',
    author: 'Rollie Jabonero',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-john-lambeth-2886937.jpg`,
    rating: '4.5',
  },
  {
    title: 'The Therapeutic Power of Gardening',
    author: 'Nessa Bacani',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-kaboompics-com-6442.jpg`,
    rating: '4.2',
  },
  {
    title: 'Agritourism in Asia',
    author: 'Laurence Lloyd',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-quang-nguyen-vinh-2162133.jpg`,
    rating: '4.0',
  },
];

export default () => {
  return (
    <section id="ahTopCategories">
      <Container className="py-5">
        <Row>
          <Col>
            <h3 className="font-weight-bold">
              Philippines' largest selection of Agricultural courses
            </h3>
            <h3 className="text-primary">
              <small>
                Get access to the best <strong>Agricultural courses</strong>.
                Learn hands-on from our expert farmers.
              </small>
            </h3>
          </Col>
        </Row>
        <Row className="mt-3 py-3">
          {courses.map((course, index) => (
            <Col key={index} xs="12" md="3">
              <Card className="h-100 border-0">
                <CardBody className="p-0">
                  <CardImg
                    className="mb-2"
                    height="150"
                    src={course.image}
                    alt={course.title}
                  />
                  <NavLink className="stretched-link text-dark" to="/course">
                    <h5 className="font-weight-bold mb-0">{course.title}</h5>
                  </NavLink>
                  <h6>
                    <small>by {course.author}</small>
                  </h6>
                  <p className="text-secondary">
                    <strong className="mr-3">{course.rating}</strong>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                  </p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-3">
          <Col className="mx-auto" xs="4">
            <NavLink
              className="btn-secondary btn-lg btn-block text-center"
              to="/"
            >
              Discover More Courses
            </NavLink>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
