import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import one from '../imges/logo.png';

const navigation = [
  { name: 'About', to: '/About', current: false },
  { name: 'Gallery', to: '/Gallery', current: false },
  { name: 'FAQ', to: '/Faq', current: false },
  { name: 'Contact Us', to: '/ContactUs', current: false },
];

const NavBar = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary bg-dark bg-good">
      <Container>
        <NavLink to="/">
          <img 
            style={{ width: "100px", height: "60px" }}
            src={one} 
            alt="Your Company" 
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                isActive={(match, location) => {
                  if (!match) {
                    return false;
                  }
                  return location.pathname === item.to;
                }}
                activeClassName="active"
                className="ms-3 nav-link nav_text btn btn-secondary"
              >
                {item.name}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
