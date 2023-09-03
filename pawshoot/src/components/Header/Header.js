import './Header.css';
import logo from '../../images/logo.png';
import MobileNavbar from './Navbars/MobileNavbar/MobileNavbar';
import FullNavbar from './Navbars/Navbar/Navbar';

function Header() {
  return (
    <>
      <header>
        <div className="px-3 py-2">
          <div className="container">
            <div className="d-flex align-items-center justify-content-between justify-content-lg-start">

              <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <img className="logo" src={logo} alt="Pawshoot Photography logo" />
              </a>

              <MobileNavbar />
              <FullNavbar />

            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;