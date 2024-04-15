import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import Navbar from "./components/NavBar";
import Blog from "./components/BlogSection"; // Import the BlogSection component

const Footer = () => {
  // get current year
  const year = new Date().getFullYear();

  return (
    <footer className="bg-info border-top border-white-10">
      <div className="container">
        <div className="row content-space-1">
          <div className="col-12 col-lg-3 mb-7 mb-lg-0">
            {/* Logo */}
            <div className="mb-5">
              {/* <Link href="/" passHref> */}
              <a className="navbar-brand" aria-label="Space">
                <img
                  className="navbar-brand-logo"
                  src="/branding/logo-no-bg-1080.png"
                  alt="Image Description"
                />
              </a>
              {/* </Link> */}
            </div>
            {/* End Logo */}

            <span className="d-block">
              <label htmlFor="selectLanguage" className="form-label text-white">
                Choose language
              </label>
            </span>

            {/* Button Group */}
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-light btn-sm dropdown-toggle"
                id="selectLanguage"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="d-flex align-items-center">
                  <img
                    className="avatar avatar-xss avatar-circle me-2"
                    src="/assets/vendor/flag-icon-css/flags/1x1/us.svg"
                    alt="Image description"
                    width="16"
                  />
                  <span>English (US)</span>
                </span>
              </button>

              <div className="dropdown-menu">
                <a className="dropdown-item d-flex align-items-center" href="#">
                  <img
                    className="avatar avatar-xss avatar-circle me-2"
                    src="/assets/vendor/flag-icon-css/flags/1x1/us.svg"
                    alt="Image description"
                    width="16"
                  />
                  <span>Swahili</span>
                </a>
                {/* Add other language options here */}
              </div>
            </div>
            {/* End Button Group */}
          </div>
          {/* End Col */}

          {/* Other columns */}
        </div>
        {/* End Row */}

        <div className="border-top border-white-10"></div>

        <div className="row align-items-md-end py-5">
          <div className="col-md mb-3 mb-md-0">
            <p className="text-white mb-0">
              © SwahilipotFM. {year} . All rights reserved.
            </p>
          </div>

          <div className="col-md d-md-flex justify-content-md-end">
            {/* Socials */}
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <a
                  className="btn btn-icon btn-sm btn-soft-light rounded-circle"
                  href="https://www.instagram.com/swahilipotfm/"
                >
                  <i className="bi-instagram" />{" "}
                </a>
              </li>
              {/* Add other social icons here */}
            </ul>
            {/* End Socials */}
          </div>
        </div>
      </div>
    </footer>
  );
};

const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="col-3 col-sm-5">
      <div className="text-center text-sm-start"></div>
    </div>
  );
};
const Home = () => {
  return (
    <>
      <Navbar /> {/* Include the Navbar component */}
      <HeroSection />{" "}
      {/* Include the HeroSection component just below the navbar */}
      <main id="content" role="main">
        {/* Content */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 mb-5">
              {/* Content 1 */}
              {/* Add your content here */}
            </div>
            <div className="col-12 col-md-6 mb-5">
              {/* Content 2 */}
              {/* Add your content here */}
            </div>
          </div>
        </div>
        {/* End Content */}
        <Blog /> {/* Add the BlogSection component here*/}
      </main>
      <Footer />
    </>
  );
};

export default Home;
