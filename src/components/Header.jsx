import {Navbar, Nav, Container} from 'react-bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RenameMe from './RenameMe';
import facade from "../apiFacade.js";



// import Home from './pages/Home';
// import Login from './pages/Login';


function Header({loggedIn, setLoggedIn, setErrorMessage}) {

  const logout = () => {
    facade.logout()
    setLoggedIn(false)
    setErrorMessage('Logged out.')
  }

  return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">CA2_Frontend_Personal</Navbar.Brand>
            <Nav className="flex-fill">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/joke">Jokes</Nav.Link>
              <Nav.Link as={Link} to={loggedIn ? "/" : "/login"} className={"float-end"} onClick={loggedIn ? logout : ""}>
                {loggedIn ? "Logout" : "Login"}
              </Nav.Link> {/*Why won't u float right?*/}
            </Nav>
          </Container>
        </Navbar>
      </div>
  );
}

export default Header;