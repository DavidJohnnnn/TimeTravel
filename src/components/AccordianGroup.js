import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccordianEl from './AccordianEl';

function ContainerFluidExample() {
  return (
    <Container className="px-4">
      <Row className="g-2">
        <Col>
            <AccordianEl />
        </Col>
        <Col>
            <AccordianEl />
        </Col>
        <Col>
            <AccordianEl />
        </Col>
      </Row>
    </Container>
  );
}