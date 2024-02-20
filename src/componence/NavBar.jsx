import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import one from '../imges/logo.png';


const navigation = [
  { name: "About", to: "/My-React-Project/About", current: false },
  { name: "Gallery", to: "/My-React-Project/Gallery", current: false },
  { name: "FAQ", to: "/My-React-Project/Faq", current: false },
  { name: "Contact Us", to: "/My-React-Project/ContactUs", current: false },
];



const NavBar = () => {
  return (
    <Navbar expand="md" className="bg-body-tertiary bg-dark bg-good">
      <Container>
        <NavLink to={"/My-React-Project"}>
          <img 
          style={{ width: "100px", height: "60px" }}
          src={one} 
          alt="Your Company" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                aria-current={item.current ? "page" : undefined}
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
