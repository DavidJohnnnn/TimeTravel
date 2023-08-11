import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./NavMenu.css";

function NavMenu (props) {
    return (
        <Container fluid className='NavContain'>
            <Navbar expand="lg" className="bg-body-tertiary TimeNav justify-content-end">
                <Container>
                    <Navbar.Brand href="" className="TimeNavBrand">Whenipedia</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="">List 1</NavDropdown.Item>
                                <NavDropdown.Item href="">List 1</NavDropdown.Item>
                                <NavDropdown.Item href="">List 2</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">List 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav className="justify-content-end">
                            <Nav.Link href="" className="TimeNavItem justify-content-end">Link 1</Nav.Link>
                            <Nav.Link href="" className="TimeNavItem justify-content-end">Link 2</Nav.Link>
                            <Nav.Link href="" className="TimeNavItem justify-content-end">Link 2</Nav.Link>
                            <Nav.Link href="" className="TimeNavItem justify-content-end">Link 2</Nav.Link>
                            <Nav.Link href="" className="TimeNavItem justify-content-end">Link 2</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
}

export default NavMenu;