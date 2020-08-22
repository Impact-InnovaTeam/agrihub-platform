import React from 'react';
import ReactPlayer from 'react-player';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

export default () => {
  return (
    <>
      <section id="ahLearn" className="bg-dark text-white">
        <Container className="py-5">
          <Row>
            <Col xs="12" md="7">
              <ReactPlayer url="https://www.youtube.com/watch?v=J_mMS3EkHok" />
            </Col>
            <Col className="p-3" xs="12" md="5">
              <h3>Farming and Everything Rice</h3>
              <h5 className="text-light">
                Lesson 1 - Rice Farming: Complete Guide from Seeds to Harvest
              </h5>
              <Button className="my-3" color="light" outline>
                View Transcript
              </Button>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="ahLearnDetails">
        <Container className="py-3">
          <Row>
            <Col xs="12" md="9">
              <ListGroup>
                <ListGroupItem className="bg-light font-weight-bold" disabled>
                  Introduction
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 1 - Rice Farming: Complete Guide from Seeds to
                      Harvest
                    </Col>
                    <Col className="text-right" xs="3">
                      6:23
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 2 - Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam
                    </Col>
                    <Col className="text-right" xs="3">
                      7:25
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 3 - Sed ut perspiciatis unde omnis iste natus error
                      sit voluptatem
                    </Col>
                    <Col className="text-right" xs="3">
                      3:30
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 4 - Excepteur sint occaecat cupidatat non proident
                    </Col>
                    <Col className="text-right" xs="3">
                      8:19
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 5 - Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit
                    </Col>
                    <Col className="text-right" xs="3">
                      10:02
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="bg-light font-weight-bold" disabled>
                  Methodologies
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 6 - Rice Farming: Complete Guide from Seeds to
                      Harvest
                    </Col>
                    <Col className="text-right" xs="3">
                      6:23
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 7 - Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam
                    </Col>
                    <Col className="text-right" xs="3">
                      7:25
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 8 - Sed ut perspiciatis unde omnis iste natus error
                      sit voluptatem
                    </Col>
                    <Col className="text-right" xs="3">
                      3:30
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="bg-light font-weight-bold" disabled>
                  Conclusion
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 9 - Rice Farming: Complete Guide from Seeds to
                      Harvest
                    </Col>
                    <Col className="text-right" xs="3">
                      6:23
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 11 - Sed ut perspiciatis unde omnis iste natus
                      error sit voluptatem
                    </Col>
                    <Col className="text-right" xs="3">
                      3:30
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem>
                  <Row>
                    <Col xs="9">
                      Lesson 10 - Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam
                    </Col>
                    <Col className="text-right" xs="3">
                      7:25
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="12" md="3">
              <h5>Lesson Information</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <h5>Author Information</h5>
              <NavLink to="/">Darwin Camahalan</NavLink>
              <h5 className="mt-3">Others</h5>
              <p>Last updated 4/2020</p>
              <Button className="mt-3" color="secondary" block>
                Share Course
                <i className="fas fa-share ml-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
