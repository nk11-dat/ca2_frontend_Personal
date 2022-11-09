import {Navbar, Nav, Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RenameMe from './RenameMe';



// import Home from './pages/Home';
// import Login from './pages/Login';


function ColorSchemesExample() {
  return (
    <div>
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">CA2-Startcode</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/joke">Jokes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

    <div>  

    </div>


    </div>

    
  );
}

export default ColorSchemesExample;