import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Progress,
  Row,
} from 'reactstrap';

const courses = [
  {
    title: 'Farming and Everything Rice',
    author: 'Darwin Camahalan',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-iconcom-236473.jpg`,
    progress: 13,
    total: 20,
  },
  {
    title: 'Horticulture 101',
    author: 'Rollie Jabonero',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-john-lambeth-2886937.jpg`,
    progress: 4,
    total: 15,
  },
  {
    title: 'The Therapeutic Power of Gardening',
    author: 'Nessa Bacani',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-kaboompics-com-6442.jpg`,
    progress: 10,
    total: 25,
  },
];

export default () => {
  return (
    <section id="ahDashboardContent">
      <Container className="mt-5">
        <Row>
          <Col xs="12" md="4">
            <InputGroup className="mb-3">
              <Input placeholder="Search for content..." />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="fas fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <Card>
              <CardHeader>
                <h5>Displaying 3 of 3 subscribed courses</h5>
              </CardHeader>
              <CardBody>
                <h6 className="text-uppercase">Creators</h6>
                {courses.map((course, index) => (
                  <Row key={index} className="mb-3">
                    <Col xs="10">{course.author}</Col>
                    <Col xs="2">
                      <Input type="checkbox" />
                    </Col>
                  </Row>
                ))}
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="8">
            <Row className="mb-3">
              <Col xs="12">
                <h4>Subscribed Content</h4>
              </Col>
            </Row>
            <Row>
              {courses.map((course, index) => (
                <Col key={index} className="mb-4" xs="12" md="6">
                  <Card className="shadow-sm h-100">
                    <CardImg
                      height="200"
                      src={course.image}
                      alt={course.title}
                    />
                    <CardBody>
                      <NavLink
                        className="stretched-link text-dark"
                        to="/course/c"
                      >
                        <h5 className="font-weight-bold mb-0">
                          {course.title}
                        </h5>
                      </NavLink>
                      <h6>
                        <small>by {course.author}</small>
                      </h6>
                      <p className="mb-0">
                        <small>
                          Progress: {course.progress} / {course.total}
                        </small>
                      </p>
                      <Progress
                        animated
                        striped
                        value={course.progress}
                        max={course.total}
                      >
                        {Number((course.progress / course.total) * 100).toFixed(
                          2
                        )}
                        %
                      </Progress>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
