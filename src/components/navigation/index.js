import React, { useEffect, useState } from 'react';
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
  const [scroll, setScroll] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);

    if (scroll && !isOpen) {
      setScroll(!scroll);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < 10;
      setIsOpen(false);

      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [scroll, setScroll]);

  return (
    <Navbar
      className={classnames(
        scroll ? 'bg-transparent' : 'bg-light shadow-lg',
        'py-3'
      )}
      dark={scroll}
      light={!scroll}
      fixed="top"
      expand="lg"
    >
      <Container className="py-2">
        <NavbarBrand id="navLogo" className="font-weight-bold" href="/">
          AgriHub
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="mx-2">
              <NavLink
                className={classnames(
                  scroll ? 'text-white' : 'text-primary',
                  'px-3'
                )}
                href="/about"
              >
                About
              </NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink
                className={classnames(
                  scroll ? 'text-white' : 'text-primary',
                  'px-3'
                )}
                href="/courses"
              >
                Courses
              </NavLink>
            </NavItem>
            <NavItem className="mx-2">
              <NavLink
                className={classnames(
                  scroll ? 'text-white' : 'text-primary',
                  'px-3'
                )}
                href="/community"
              >
                Community
              </NavLink>
            </NavItem>
            <UncontrolledDropdown className="mx-2" nav inNavbar>
              <DropdownToggle
                nav
                caret
                className={classnames(
                  scroll ? 'text-white' : 'text-primary',
                  'px-3'
                )}
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
                href="https://bit.ly/joinwesoarhigh"
                target="_blank"
              >
                Start Learning
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};
