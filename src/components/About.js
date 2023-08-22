import Container from 'react-bootstrap/Container';
import Jumbotron from './Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';


function About() {
  return (
    <Container className="Page" fluid>
      <Jumbotron />
    </Container>
  );
}

export default About;
