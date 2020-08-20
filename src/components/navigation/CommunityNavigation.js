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
    <Navbar className={classnames('bg-white', 'shadow-lg')} light expand="lg">
      <Container>
        <NavbarBrand id="navLogo" className="font-weight-bold" href="/">
          AgriHub
        </NavbarBrand>
        <NavbarToggler color="primary" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-2">
              <NavLink
                className={classnames('text-primary', 'px-3')}
                href="/about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink
                className={classnames('text-primary', 'px-3')}
                href="/courses"
              >
                Courses
              </NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink
                className={classnames('text-primary', 'px-3')}
                href="/faq"
              >
                FAQ
              </NavLink>
            </NavItem>
            <UncontrolledDropdown className="mx-2" nav inNavbar>
              <DropdownToggle
                nav
                caret
                className={classnames('text-primary', 'px-3')}
              >
                English
              </DropdownToggle>
              <DropdownMenu className="shadow-lg" right>
                <DropdownItem>Tagalog</DropdownItem>
                <DropdownItem>Cebuano</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem className="mb-3 mb-lg-0 ml-md-2">
              <NavLink
                className={classnames(
                  'btn-secondary',
                  'btn',
                  'px-5',
                  'text-white',
                  'rounded-pill'
                )}
                href="/signin"
              >
                Sign In
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
