import React from 'react';
import {
  Button,
  Col,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from 'reactstrap';

export default () => {
  return (
    <>
      <header id="ahHeader" className="text-white vh-100">
        <Container className="pt-5 px-3">
          <Row className="mt-5 pt-5">
            <Col className="ml-auto" xs="12" md="9" lg="7">
              <h1 className="display-3 font-weight-bold text-right header-shadow">
                Learn directly from our farmers
              </h1>
              <h2 className="text-right mt-3 header-shadow">
                Learn from expert farmers and join our large community of
                enthusiasts
              </h2>
              <div className="mt-5 bg-white p-3 rounded shadow-lg">
                <InputGroup>
                  <Input
                    id="ahSearch"
                    className="border-0"
                    placeholder="Urban Farming, Pest Management"
                  />
                  <InputGroupAddon addonType="append">
                    <Button className="text-primary" color="transparent">
                      Search
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};
