import Container from 'react-bootstrap/Container';
import NavMenu from './NavMenu';
import Jumbotron from './Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';


function Home() {
  return (
    <Container className="Page" fluid>
      <NavMenu />
      <Jumbotron />
    </Container>
  );
}

export default Home;
