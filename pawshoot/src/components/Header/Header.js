import './Header.css';
import './HeaderQueries.css';
import logo from '../../images/logo.png';
import MobileNavbar from './MobileNavbar/MobileNavbar';
import FullNavbar from './Navbar/Navbar';

function Header() {
  return (
    <>
      <header>
        <div className="px-3 py-2 text-bg-dark border-bottom">
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