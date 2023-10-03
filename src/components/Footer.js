import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

function Footer() {
    return (
        <div className="bottomBox">
            <Container fluid className="bottomDiv">
                <Row>

                </Row>
                <Row>

                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>© 2023 David John.</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;