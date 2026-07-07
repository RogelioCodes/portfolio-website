import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import me from '../assets/images/Untitled-2.svg';

const NavbarComp: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isDarkPage = location.pathname.startsWith('/writing/');

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      // hide when scrolling down, show when scrolling up
      if (y > lastY && y > 80) setHidden(true);
      else setHidden(false);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="navbar-container">
      <Navbar expand="lg" variant="flat" className={`navbar ${isHome ? 'navbar-home' : ''} ${isDarkPage ? 'navbar-dark-page' : ''} ${hidden ? 'navbar-hidden' : ''}`} >
        <Container>
          <Navbar.Brand as={Link} to="/" className="navbar-title navbar-logo-link" aria-label="Rogelio Cordova home">
            <img src={me} alt="" aria-hidden="true" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-links links ms-auto justify-content-end" >
              <Nav.Link as={Link} to="/engineering">Engineering</Nav.Link>
              <Nav.Link as={Link} to="/photography">Photography</Nav.Link>
              <Nav.Link as={Link} to="/writing">Writing</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/hello">Hello</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComp;
