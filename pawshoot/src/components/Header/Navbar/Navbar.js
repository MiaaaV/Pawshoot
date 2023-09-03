import './Navbar.css';

function FullNavbar() {
  return (
    <>
      <nav id='fullNavbar' className='d-flex align-items-center justify-content-between'>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="/">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>
        </ul>

        <div className='d-flex nav-links'>
          <a className="nav-link mt-2" href="/">
            <ion-icon id="nav-ionicon" name="logo-facebook" />
          </a>
          <a className="nav-link mt-2" href="/">
            <ion-icon id="nav-ionicon" name="logo-instagram" />
          </a>
          <a className="nav-link mt-2" href="/">
            <ion-icon id="nav-ionicon" name="logo-twitter" />
          </a>
        </div>
      </nav>
    </>
  );
}

export default FullNavbar;