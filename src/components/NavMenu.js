import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {NavLink} from 'react-router-dom';
import { Route, Link } from 'react-router-dom';

import "./NavMenu.css";

function NavMenu () {
    return (
        <Container fluid className='NavContain'>
            <Navbar expand="lg" className="bg-body-tertiary TimeNav justify-content-end">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="TimeNavBrand">Whenipedia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/dLink1">List 1</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/dLink2">List 1</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/dLink3">List 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="dLink4">List 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link as={Link} to="/" className="TimeNavItem justify-content-end"><NavLink to='/'>Home</NavLink></Nav.Link>
                            <Nav.Link as={Link} to="/About" className="TimeNavItem justify-content-end">About</Nav.Link>
                            <Nav.Link as={Link} to="/Contact" className="TimeNavItem justify-content-end">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/Link4" className="TimeNavItem justify-content-end">Link 4</Nav.Link>
                            <Nav.Link as={Link} to="/Link5" className="TimeNavItem justify-content-end">Link 5</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
            </div>
        </Container>
    );
}

export default NavMenu;