import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import {
  Alert,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Media,
  Row,
} from 'reactstrap';

const topic = {
  title: 'What is the best way to produce seedlings?',
  category: 'Seed Production',
  details:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  name: 'Jessalin',
  avatar: 'https://robohash.org/quaeratsuntmolestiae.jpg?size=100x100&set=set1',
  votes: 44,
  comments: 10,
};

const comments = [
  {
    name: 'Sari',
    picture: 'https://robohash.org/enimdolorut.png?size=100x100&set=set1',
    message:
      'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.',
  },
  {
    name: 'Matelda',
    picture:
      'https://robohash.org/eumreiciendisconsequatur.bmp?size=100x100&set=set1',
    message:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
  },
  {
    name: 'Ardelia',
    picture: 'https://robohash.org/autautet.bmp?size=100x100&set=set1',
    message:
      'Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
  },
  {
    name: 'Christel',
    picture:
      'https://robohash.org/consequaturvelpariatur.png?size=100x100&set=set1',
    message: 'Praesent blandit. Nam nulla.',
  },
  {
    name: 'Carola',
    picture: 'https://robohash.org/vitaenonsit.jpg?size=100x100&set=set1',
    message:
      'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
  },
  {
    name: 'Laurice',
    picture:
      'https://robohash.org/nihilperspiciatisqui.bmp?size=100x100&set=set1',
    message: 'Proin risus. Praesent lectus.',
  },
  {
    name: 'Charlena',
    picture: 'https://robohash.org/inciduntutdolore.bmp?size=100x100&set=set1',
    message:
      'Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
  },
  {
    name: 'Lyndy',
    picture:
      'https://robohash.org/accusantiumdolorumdistinctio.png?size=100x100&set=set1',
    message:
      'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
  },
  {
    name: 'Shirlee',
    picture: 'https://robohash.org/idnemolabore.png?size=100x100&set=set1',
    message:
      'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
  },
  {
    name: 'Gwennie',
    picture: 'https://robohash.org/optiotemporibusid.bmp?size=100x100&set=set1',
    message:
      'Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
  },
];

const topics = [
  {
    title: 'Arnica Montana, Atropa Belladonna',
    category: 'Zero-Waste Farming',
    name: 'Evey',
    votes: 57,
    comments: 93,
  },
  {
    title: 'Acetaminophen, Phenylephrine HCl, Chlorpheniramine maleate',
    category: 'Zero-Waste Farming',
    name: 'Anthia',
    votes: 70,
    comments: 23,
  },
  {
    title: 'divalproex sodium',
    category: 'Organic Farming',
    name: 'Feliza',
    votes: 10,
    comments: 1,
  },
  {
    title: 'Oxymorphone Hydrochloride',
    category: 'Composting',
    name: 'Sybilla',
    votes: 72,
    comments: 91,
  },
  {
    title: 'OCTINOXATE and TITANIUM DIOXIDE',
    category: 'Seed Production',
    name: 'Lydie',
    votes: 31,
    comments: 80,
  },
  {
    title: 'Chlorpromazine Hydrochloride',
    category: 'Fruit Propagation',
    name: 'Phyllida',
    votes: 46,
    comments: 27,
  },
  {
    title: 'OCTINOXATE, TITANIUM DIOXIDE, and ZINC OXIDE',
    category: 'Seed Production',
    name: 'Ros',
    votes: 53,
    comments: 4,
  },
  {
    title: 'DIPHENHYDRAMINE HYDROCHLORIDE',
    category: 'Fruit Propagation',
    name: 'Belia',
    votes: 26,
    comments: 26,
  },
];

export default () => {
  return (
    <section id="ahCommunity">
      <Container className="mt-5">
        <Row>
          <Col className="mb-3" xs="12">
            <Breadcrumb tag="nav" listTag="div">
              <BreadcrumbItem
                className="text-primary"
                tag={NavLink}
                to="/community"
              >
                Community
              </BreadcrumbItem>
              <BreadcrumbItem
                className="text-primary"
                tag={NavLink}
                to={`/community?q=${topic.category}`}
              >
                {topic.category}
              </BreadcrumbItem>
              <BreadcrumbItem active tag="span">
                {topic.title}
              </BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col className="mb-3" xs="12" lg="8">
            <Card className="shadow-lg">
              <CardBody>
                <h3>{topic.title}</h3>
                <Badge className="px-3 py-1" color="secondary" pill>
                  {topic.category}
                </Badge>
                <div className="my-3">
                  <Media>
                    <Media left href="#">
                      <Media
                        className="border rounded-circle mr-3"
                        object
                        src={topic.avatar}
                        alt={topic.name}
                        style={{ height: 50, width: 50 }}
                      />
                    </Media>
                    <Media body>
                      <Media className="mb-0" heading>
                        <small className="text-primary">{topic.name}</small>
                      </Media>
                      <Media>
                        <small className="text-light">
                          {moment().fromNow()}
                        </small>
                      </Media>
                    </Media>
                  </Media>
                </div>
                <p>{topic.details}</p>
                <Row className="mb-5">
                  <Col className="text-left">
                    <small>
                      <strong>{topic.votes} Upvotes</strong>
                    </small>
                  </Col>
                  <Col className="text-right">
                    <Button color="link" size="sm">
                      <i className="fas fa-info-circle mr-2" />
                      Report this topic
                    </Button>
                  </Col>
                </Row>
                <Alert color="info">
                  <span className="text-success">
                    Sign In to Upvote and Comment
                  </span>
                </Alert>
                <strong>{topic.comments} Comments</strong>
                <hr />
                <ListGroup flush>
                  {comments.map((comment, index) => (
                    <ListGroupItem key={index} className="py-0">
                      <Media className="my-3">
                        <Media left href="#">
                          <Media
                            className="border rounded-circle mr-3"
                            object
                            src={comment.picture}
                            alt={comment.name}
                            style={{ height: 50, width: 50 }}
                          />
                        </Media>
                        <Media body>
                          <Media className="mb-0" heading>
                            <small className="text-primary">
                              {comment.name}
                            </small>
                          </Media>
                          <Media>
                            <small className="text-light">
                              {moment().fromNow()}
                            </small>
                          </Media>
                        </Media>
                      </Media>
                      <p>{comment.message}</p>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="4">
            <Card className="shadow-lg">
              <CardBody>
                <Row>
                  <Col>
                    <h3>Related</h3>
                  </Col>
                </Row>
                <hr />
                <ListGroup flush>
                  {topics.map((topic, index) => (
                    <ListGroupItem key={index} className="py-0 border-0">
                      <Row>
                        <Col xs="2">
                          <Button disabled color="link">
                            {topic.votes}
                          </Button>
                        </Col>
                        <Col xs="10">
                          <NavLink className="btn btn-link text-left" to="/">
                            <small>{topic.title}</small>
                          </NavLink>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
