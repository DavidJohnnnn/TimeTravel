import './App.css';
import Container from 'react-bootstrap/Container';
import NavMenu from './components/NavMenu';
import Jumbotron from './components/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container className="App" fluid>
      <NavMenu />
      <Jumbotron />
    </Container>
  );
}

export default App;
