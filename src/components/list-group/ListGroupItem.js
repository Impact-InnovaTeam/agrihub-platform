import React from 'react';
import classnames from 'classnames';
import { ListGroupItem } from 'reactstrap';

export default ({ children, className, href }) => {
  return (
    <ListGroupItem
      className={classnames('bg-transparent', 'border-0', 'px-0', className)}
      href={href}
      tag="a"
    >
      {children}
    </ListGroupItem>
  );
};
