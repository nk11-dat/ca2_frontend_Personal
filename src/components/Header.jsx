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


function Header({loggedIn, setDataFromServer}) {

  function clearData(){
    setDataFromServer({});
  }
  return (
    <div>
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={clearData}>CA2_Frontend_Personal</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about" onClick={clearData}>About</Nav.Link>
            <Nav.Link as={Link} to="/joke" onClick={clearData}>Jokes</Nav.Link>
            <Nav.Link as={Link} to="/search/dog" onClick={clearData} hidden={!loggedIn}>Dog Search</Nav.Link>
            {/*<Nav.Link as={Link} to="/joke" onClick={clearData}>Cat Search</Nav.Link>*/}
            <Nav.Link as={Link} to="/login" onClick={clearData}>{loggedIn ? "Profile" : "Login"}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>

    <div>  

    </div>


    </div>

    
  );
}

export default Header;