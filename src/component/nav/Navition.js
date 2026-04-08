import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NAV = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/news">
              news
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              contact
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              about
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NAV;
