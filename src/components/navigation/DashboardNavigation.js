import React, { useState } from 'react';
import classnames from 'classnames';
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar className={classnames('bg-white', 'shadow-sm')} light expand="lg">
      <Container fluid>
        <NavbarBrand
          id="navLogo"
          className="font-weight-bold text-primary"
          href="/"
        >
          AgriHub
        </NavbarBrand>
        <NavbarToggler color="primary" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-2">
              <NavLink
                className={classnames('text-primary')}
                href="/courses/enrolled"
              >
                My Courses
              </NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink
                className={classnames('text-primary')}
                href="/all-courses"
              >
                All Courses
              </NavLink>
            </NavItem>
            <UncontrolledDropdown className="mx-2" nav inNavbar>
              <DropdownToggle nav caret className={classnames('text-primary')}>
                English
              </DropdownToggle>
              <DropdownMenu className="shadow-lg" right>
                <DropdownItem>Tagalog</DropdownItem>
                <DropdownItem>Cebuano</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown className="mx-2" nav inNavbar>
              <DropdownToggle nav caret className={classnames('text-primary')}>
                Darwin Camahalan
              </DropdownToggle>
              <DropdownMenu className="shadow-lg" right>
                <DropdownItem href="/account">Profile</DropdownItem>
                <DropdownItem href="/settings">Settings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="/">Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
