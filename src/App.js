import './App.css';
import Container from 'react-bootstrap/Container';
import NavMenu from './components/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import Footer from './components/Footer';


function App() {

  return (
    <Container className="App" fluid>
      <NavMenu />
      <Main />
      
      <br />
      <br />
      <Footer />
    </Container>
  );
}

export default App;
