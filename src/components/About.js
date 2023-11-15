import Container from 'react-bootstrap/Container';
import Jumbotron from './Jumbotron';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';


function About() {
  const JumbotronContent = ({onSelect}) => {
    return (
      <Card>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Button
          variant="primary"
          onClick={() => {
            // setting on button click to setState from Jumbotron component
            onSelect(Math.floor(Math.random() * 150));
          }}
        >
          Button
        </Button>
      </Card>
    );
  }
  return (
    <Container className="Page" fluid>
      <Jumbotron
        JumImg="https://picsum.photos/id/100/200/300"
        CardTle="Special title treatment"
        CardTxt="With supporting text below as a natural lead-in to additional content."
        BtnTxt="Go somewhere"
        JumbotronContent={JumbotronContent}
      />

    </Container>
  );
}

export default About;
