import { useState } from 'react';
import './MobileNavbar.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../../images/logo.png';
import { NavLink } from 'react-router-dom';

function MobileNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar id="oc-navbar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow}>
          <ion-icon id="toggler-icon" name="menu-outline" />
        </Navbar.Toggle>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={logo} alt='logo' id='oc-logo' />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body id="oc-body" className="d-flex align-items-center justify-content-center background-pattern">

          <Nav id="oc-nav" className='d-flex align-items-center'>
            <NavLink to="/gallery" id='oc-nav-link'>Gallery</NavLink>
            <NavLink to="/about" id='oc-nav-link'>About</NavLink>
            <NavLink to="/contact" id='oc-nav-link'>Contact</NavLink>

            <ul className='d-flex list-unstyled mt-5 gap-3'>
              <li>
                <NavLink to="/">
                  <ion-icon id="oc-ionicon" name="logo-facebook" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery">
                  <ion-icon id="oc-ionicon" name="logo-instagram" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <ion-icon id="oc-ionicon" name="logo-twitter" />
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas >
    </>
  );
}

export default MobileNavbar;