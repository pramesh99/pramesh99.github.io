import {Nav, Navbar, Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Link, HashRouter} from 'react-router-dom';
import Home from './HomePage.js';
import Photography from './PhotographyPage.js';
import ProjectsComp from './ProjectsPage.js';
import Pdf from '../files/resume.pdf';

const NavbarComp = () => {
  return (
    <HashRouter>
      <Navbar collapseOnSelect={true} style={{backgroundColor: "#0f1817"}} variant="dark" expand="sm" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>PR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="ms-auto">
              <Nav.Link style={{color: "#b0d387"}} href={Pdf}>resume</Nav.Link>
              <Nav.Link style={{color: "#b0d387"}} as={Link} to={"/projects"}>projects</Nav.Link>
              <Nav.Link style={{color: "#b0d387"}} as={Link} to={"/photography"}>photography</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='/photography' element={<Photography/>}/>
        <Route path='/projects' element={<ProjectsComp/>}/>
      </Routes>
    </HashRouter>
  );
}

export default NavbarComp;