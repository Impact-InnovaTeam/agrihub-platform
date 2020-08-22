import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Row,
} from 'reactstrap';

const learn = [
  {
    value: 'Maecenas pulvinar lobortis est.',
  },
  {
    value: 'Morbi vel lectus in quam fringilla rhoncus.',
  },
  {
    value: 'Vestibulum ac est lacinia nisi venenatis tristique.',
  },
  {
    value: 'Morbi quis tortor id nulla ultrices aliquet.',
  },
  {
    value: 'Morbi porttitor lorem id ligula.',
  },
  {
    value: 'Nulla tempus.',
  },
  {
    value: 'Etiam pretium iaculis justo.',
  },
  {
    value:
      'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
  },
];

export default () => {
  return (
    <>
      <section id="ahCourse" className="bg-dark">
        <Container className="text-white">
          <Row className="pt-3">
            <Col xs="12">
              <Breadcrumb className="bg-white rounded" tag="nav" listTag="div">
                <BreadcrumbItem
                  className="text-primary"
                  tag={NavLink}
                  to="/courses"
                >
                  Courses
                </BreadcrumbItem>
                <BreadcrumbItem
                  className="text-primary"
                  tag={NavLink}
                  to={`/courses/search?q=traditional-farming`}
                >
                  Traditional Farming
                </BreadcrumbItem>
                <BreadcrumbItem active tag="span">
                  Farming and Everything
                </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className="py-3">
            <Col className="order-1 order-sm-12" xs="12" md="9">
              <h1>Farming and Everything</h1>
              <p>
                Master the art of farming and farming techniques with this
                highly practical advice and training, lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-secondary">
                <strong className="mr-2">4.4</strong>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <span className="ml-3 text-white">(89 ratings)</span>
              </p>
              <p>
                Created by
                <NavLink className="ml-2 text-info" to="/">
                  Darwin Camahalan
                </NavLink>
              </p>
              <p>
                <i className="mr-2 fas fa-language" />
                English, Tagalog
              </p>
              <p>
                <i className="mr-2 fas fa-calendar" />
                Last updated 4/2020
              </p>
            </Col>
            <Col className="text-center order-12 order-sm-1" xs="12" md="3">
              <img
                className="img-thumbnail"
                src={`${process.env.PUBLIC_URL}/assets/sample/pexels-iconcom-236473.jpg`}
                alt="Farming and Everything"
              />
              <Button className="mt-3" block color="primary" size="lg">
                Get This Course
              </Button>
              <Button className="my-3" block color="warning" size="lg">
                Share
                <i className="ml-2 fas fa-share" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="ahCourseDetails" className="py-5">
        <Container>
          <Row>
            <Col>
              <Card className="shadow-lg">
                <CardBody>
                  <h3>What you'll learn</h3>
                  <ul>
                    {learn.map((item, index) => (
                      <li key={index} className="mb-2">
                        {item.value}
                      </li>
                    ))}
                  </ul>
                  <h3>Requirements</h3>
                  <ul>
                    <li className="mb-2">
                      No prior knowledge of the subject is required
                    </li>
                    <li className="mb-2">
                      Examples of leadership experiences would be helpful to
                      draw on
                    </li>
                    <li className="mb-2">
                      Some of the materials you may wish to print
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
