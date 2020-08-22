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
      <header id="ahHeader" className="text-white">
        <Container>
          <Row className="pt-3 pb-5">
            <Col className="mx-auto" xs="12" md="9">
              <h1 className="display-3 font-weight-bold text-center header-shadow">
                AgriHub Courses
              </h1>
              <h4 className="text-center mt-3 header-shadow">
                Explore Philippines' largest selection of Agricultural courses
              </h4>
              <div className="mt-3 bg-white p-3 rounded shadow-lg">
                <InputGroup>
                  <Input
                    id="ahSearch"
                    className="border-0"
                    placeholder="Search interesting agricultural topics..."
                    bsSize="sm"
                  />
                  <InputGroupAddon addonType="append">
                    <Button
                      className="text-primary"
                      color="transparent"
                      size="sm"
                    >
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
