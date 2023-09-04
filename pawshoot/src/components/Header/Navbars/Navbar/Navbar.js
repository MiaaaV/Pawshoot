import './Navbar.css';
import { NavLink } from 'react-router-dom';

function FullNavbar() {
  return (
    <>
      <nav id='fullNavbar' className='d-flex align-items-center justify-content-between'>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </li>
        </ul>

        <div className='d-flex nav-links'>
          <NavLink to="/" className="nav-link mt-2">
            <ion-icon id="nav-ionicon" name="logo-facebook" />
          </NavLink>
          <NavLink to="/" className="nav-link mt-2">
            <ion-icon id="nav-ionicon" name="logo-instagram" />
          </NavLink>
          <NavLink to="/" className="nav-link mt-2">
            <ion-icon id="nav-ionicon" name="logo-twitter" />
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default FullNavbar;