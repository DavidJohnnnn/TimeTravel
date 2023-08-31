import './App.css';
import Container from 'react-bootstrap/Container';
import NavMenu from './components/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';


function App() {

  return (
    <Container className="App" fluid>
      <NavMenu />
      <Main />
    </Container>
  );
}

export default App;
