import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardImg,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
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

const courses = [
  {
    title: 'Farming and Everything Rice',
    author: 'Darwin Camahalan',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-iconcom-236473.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    rating: '4.4',
  },
  {
    title: 'Horticulture 101',
    author: 'Rollie Jabonero',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-john-lambeth-2886937.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.',
    rating: '4.5',
  },
  {
    title: 'The Therapeutic Power of Gardening',
    author: 'Nessa Bacani',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-kaboompics-com-6442.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..',
    rating: '4.2',
  },
  {
    title: 'Agritourism in Asia',
    author: 'Laurence Lloyd',
    image: `${process.env.PUBLIC_URL}/assets/sample/pexels-quang-nguyen-vinh-2162133.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    rating: '4.0',
  },
];

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="ahTopCategories">
      <Container className="py-5">
        <Row className="mb-3 border-bottom">
          <Col>
            <h3 className="font-weight-bold mb-3">
              Popular Categories in AgriHub
            </h3>
            {categories.map((category, index) => (
              <Button key={index} className="px-3 mr-3 mb-3" outline>
                {category.name}
              </Button>
            ))}
          </Col>
        </Row>
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
        <Row className="my-3 py-3 border-bottom">
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
        <Row>
          <Col>
            <h3 className="font-weight-bold mb-3">All Agricultural Courses</h3>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col>
            <ButtonDropdown isOpen={isOpen} toggle={toggle}>
              <DropdownToggle caret color="primary">
                <i className="mr-2 fas fa-sort-amount-up-alt" />
                Most Popular
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Highest Rated</DropdownItem>
                <DropdownItem>Newest</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="3">
            <Card>
              <CardBody>
                <h4>Ratings</h4>
                <FormGroup className="text-secondary" check>
                  <Label check>
                    <Input type="radio" name="ratingFilter" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <strong className="ml-2">5.0</strong>
                  </Label>
                </FormGroup>
                <FormGroup className="text-secondary" check>
                  <Label check>
                    <Input type="radio" name="ratingFilter" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <strong className="ml-2">4.0 & up</strong>
                  </Label>
                </FormGroup>
                <FormGroup className="text-secondary" check>
                  <Label check>
                    <Input type="radio" name="ratingFilter" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <i className="far fa-star" />
                    <strong className="ml-2">3.0 & up</strong>
                  </Label>
                </FormGroup>
                <h4 className="mt-3">Category</h4>
                {categories.map((category, index) => (
                  <FormGroup check>
                    <Label key={index} check>
                      <Input type="checkbox" />
                      <span className="ml-2">{category.name}</span>
                    </Label>
                  </FormGroup>
                ))}
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="9">
            {courses.reverse().map((course, index) => (
              <Card key={index} className="border-0 mb-3 shadow-lg">
                <Row noGutters>
                  <Col xs="4">
                    <NavLink className="stretched-link" to="/course">
                      <CardImg
                        className="h-100"
                        src={course.image}
                        alt={course.title}
                      />
                    </NavLink>
                  </Col>
                  <Col xs="8">
                    <CardBody className="py-3">
                      <NavLink
                        className="stretched-link text-dark"
                        to="/course"
                      >
                        <h5>{course.title}</h5>
                      </NavLink>
                      <h6>
                        <small>by {course.author}</small>
                      </h6>
                      <p>
                        <small>{course.description}</small>
                      </p>
                      <p className="text-secondary">
                        <strong className="mr-3">{course.rating}</strong>
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </p>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
