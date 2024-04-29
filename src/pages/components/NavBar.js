import Image from "next/image";
import Link from "next/link";
import ScheduleDay from "../schedule"; // Import the ScheduleDay component

const Navbar = () => {
  return (
    <header
      id="header"
      className="navbar navbar-expand-lg navbar-light navbar-end bg-white"
    >
      <div className="container">
        <nav className="navbar-nav-wrap">
          <a className="navbar-barnd" href="#" aria-label="Space">
            <Image
              className="navbar-brand-logo"
              src="/branding/logo-no-bg-500.png"
              width={50}
              height={100}
              alt="Swahilipot FM Official Logo"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-default">
              <i className="bi-list"></i>
            </span>
            <span className="navbar-toggler-toggled">
              <i className="bi-x"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/">
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/schedule">
                  <span className="nav-link">Programs</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <span className="nav-link">About Us</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#">
                  <span className="nav-link">News and Updates</span>
                </Link>
              </li>
              {/* Replace the dropdown with a direct link to the contact page */}
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <div className="ms-auto">
                  <a
                    className="btn btn-primary btn-transition"
                    href="https://swahilipothub.co.ke/"
                    target="_blank"
                  >
                    About Swahilipot
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* Insert the ScheduleDay component here */}
      {/* <ScheduleDay /> */}
    </header>
  );
};

export default Navbar;
