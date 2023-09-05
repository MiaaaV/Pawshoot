import './Navbar.css';
import { NavLink, useLocation } from 'react-router-dom';

function FullNavbar() {
  const { pathname } = useLocation();

  return (
    <nav id='fullNavbar' className='d-flex align-items-center justify-content-between'>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink to="/" className={`nav-link ${pathname === '/' ? 'activeNav' : ''}`}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/gallery" className={`nav-link ${pathname === '/gallery' ? 'activeNav' : ''}`}>
            Gallery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={`nav-link ${pathname === '/about' ? 'activeNav' : ''}`}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={`nav-link ${pathname === '/contact' ? 'activeNav' : ''}`}>
            Contact
          </NavLink>
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
  );
}

export default FullNavbar;
