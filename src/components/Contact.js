import Container from 'react-bootstrap/Container';
import Jumbotron from './Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



function Contact() {
  const JumbotronContent = ({onSelect}) => {
    return (
      <>
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{" "}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
          <Button
            variant="primary"
            onClick={() => {
              // setting on button click to setState from Jumbotron component
              onSelect(Math.floor(Math.random() * 150));
            }}
          >
            Go somewhere
          </Button>
        </Card>
      </>
    );
  }


  return (
    <Container className="Page" fluid>
      <Jumbotron
        JumImg="https://picsum.photos/id/10/200/300"
        CardTle="Special title treatment"
        CardTxt="With supporting text below as a natural lead-in to additional content."
        BtnTxt="Go somewhere"
        JumbotronContent={JumbotronContent}
      />

    </Container>
  );
}

export default Contact;
