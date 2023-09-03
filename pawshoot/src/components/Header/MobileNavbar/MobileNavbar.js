import { useState } from 'react';
import './MobileNavbar.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../images/logo.png';

function MobileNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar id="oc-navbar" bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt='logo' id='oc-logo' />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body id="oc-body" className="d-flex align-items-center justify-content-center background-pattern">

          <Nav id="oc-nav" className='d-flex align-items-center'>
            <Nav.Link href="/" id='oc-nav-link'>Gallery</Nav.Link>
            <Nav.Link href="/" id='oc-nav-link'>About</Nav.Link>
            <Nav.Link href="/" id='oc-nav-link'>Contact</Nav.Link>

            <ul className='d-flex list-unstyled mt-5'>
              <li>
                <Nav.Link href="/">
                  <ion-icon id="oc-ionicon" name="logo-facebook" />
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="/">
                  <ion-icon id="oc-ionicon" name="logo-instagram" />
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="/">
                  <ion-icon id="oc-ionicon" name="logo-twitter" />
                </Nav.Link>
              </li>
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas >
    </>
  );
}

export default MobileNavbar;