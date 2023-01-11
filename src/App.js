import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';

// localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
  return (
    <Container>
      <NavbarComponent></NavbarComponent>
    </Container>
  );
}

export default App;
