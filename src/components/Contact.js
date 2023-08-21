import Container from 'react-bootstrap/Container';
import NavMenu from './components/NavMenu';
import Jumbotron from './components/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';


function Contact() {
  return (
    <Container className="Page" fluid>
      <NavMenu />
      <Jumbotron />
    </Container>
  );
}

export default Contact;
