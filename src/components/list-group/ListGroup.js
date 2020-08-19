import React from 'react';
import { ListGroup } from 'reactstrap';

export default ({ children }) => {
  return <ListGroup flush>{children}</ListGroup>;
};
