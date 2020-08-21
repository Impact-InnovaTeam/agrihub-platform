import React from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import {
  Badge,
  Button,
  Card,
  CardBody,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'reactstrap';

const categories = [
  { name: 'Urban Farming', count: 3 },
  { name: 'Pest Management', count: 5 },
  { name: 'Vertical Farms', count: 2 },
  { name: 'Aquaponics', count: 6 },
  { name: 'Organic Farming', count: 10 },
  { name: 'Seed Production', count: 8 },
  { name: 'Fruit Propagation', count: 7 },
  { name: 'Zero-Waste Farming', count: 1 },
  { name: 'Loans and Credit', count: 4 },
  { name: 'Composting', count: 5 },
];

const topics = [
  {
    title: 'What is the best way to produce seedlings?',
    category: 'Seed Production',
    name: 'Jessalin',
    votes: 44,
    comments: 10,
  },
  {
    title: 'FAMOTIDINE',
    category: 'Urban Farming',
    name: 'Yoko',
    votes: 62,
    comments: 32,
  },
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
    title: 'Glandulae suprarenales 6 Special Order',
    category: 'Pest Management',
    name: 'Mirabella',
    votes: 88,
    comments: 81,
  },
  {
    title: 'Phenytoin',
    category: 'Aquaponics',
    name: 'Katerina',
    votes: 32,
    comments: 87,
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
    title: 'Alcohol',
    category: 'Composting',
    name: 'Dyann',
    votes: 72,
    comments: 89,
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
  {
    title: 'Epicoccum nigrum',
    category: 'Vertical Farms',
    name: 'Stephannie',
    votes: 49,
    comments: 29,
  },
  {
    title:
      'Arsenicum album 8X, Lycopodium clavatum 30X, Natrum sulphuricum 12X, Phosphoricum acidum 12X, Secale cornutum 4X',
    category: 'Pest Management',
    name: 'Chantalle',
    votes: 79,
    comments: 6,
  },
];

export default () => {
  return (
    <section id="ahCommunity">
      <Container className="mt-5">
        <Row>
          <Col className="mb-3" xs="12" lg="8">
            <Card className="shadow-lg">
              <CardBody>
                <Row>
                  <Col>
                    <h3>Recent Discussions</h3>
                  </Col>
                </Row>
                <hr />
                <ListGroup flush>
                  {topics.map((topic, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col xs="2">
                          <Button
                            className="p-0 text-dark"
                            block
                            color="link"
                            size="lg"
                          >
                            <i className="fas fa-caret-up" />
                          </Button>
                          <p className="text-center mb-0">
                            <small>{topic.votes}</small>
                          </p>
                        </Col>
                        <Col className="py-2" xs="8">
                          <h6>
                            <NavLink
                              className="stretched-link"
                              to="/community/t"
                            >
                              {topic.title}
                            </NavLink>
                          </h6>
                          <p className="mb-0">
                            <small>{moment().fromNow()}</small>
                            <span className="mx-2">&bull;</span>
                            <small className="mr-3">{topic.name}</small>
                            <Badge className="px-3 py-1" color="secondary" pill>
                              {topic.category}
                            </Badge>
                          </p>
                        </Col>
                        <Col className="d-flex align-items-center" xs="2">
                          <NavLink to="/">
                            <i className="fas fa-comment-dots mr-2" />
                            <span className="text-dark">{topic.comments}</span>
                          </NavLink>
                        </Col>
                      </Row>
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
                    <h3>Categories</h3>
                  </Col>
                </Row>
                <hr />
                <ListGroup flush>
                  {categories.map((category, index) => (
                    <ListGroupItem key={index} tag="a" to="#">
                      <span className="mr-2">{category.name}</span>
                      <small className="text-dark">({category.count})</small>
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
