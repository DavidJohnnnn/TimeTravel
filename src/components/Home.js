import Container from 'react-bootstrap/Container';
import Jumbotron from './Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';
import CarouselCards from './CarouselCards';


function Home() {
  return (
    <Container className="Page" fluid>
      <Jumbotron />
      <br />
      <CarouselCards />
    </Container>
  );
}

export default Home;
