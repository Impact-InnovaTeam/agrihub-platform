import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardImg, Col, Container, Row } from 'reactstrap';

const courses = [
  {
    title: 'Farming and Everything Rice',
    author: 'Darwin Camahalan',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-iconcom-236473.jpg`,
  },
  {
    title: 'Horticulture 101',
    author: 'Rollie Jabonero',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-john-lambeth-2886937.jpg`,
  },
  {
    title: 'The Therapeutic Power of Gardening',
    author: 'Nessa Bacani',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-kaboompics-com-6442.jpg`,
  },
  {
    title: 'Agritourism in Asia',
    author: 'Laurence Lloyd',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-quang-nguyen-vinh-2162133.jpg`,
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
                  <h5 className="font-weight-bold mb-0">{course.title}</h5>
                  <h6>
                    <small>by {course.author}</small>
                  </h6>
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
