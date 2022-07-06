import React from 'react';
import { Navbar, Nav, Container, Image} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
            <Navbar.Brand>
                <LinkContainer to="/">
                    <Nav.Link><Image src="images\White_pizza-logo.jpg" alt="Logo Pizza Delicious" style={{ width: '20%' }} /></Nav.Link>
                </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    
                        
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <Nav.Link>Register</Nav.Link>
                            </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
</>
)
}
export default NavBar