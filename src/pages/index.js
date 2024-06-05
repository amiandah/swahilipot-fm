/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '@/pages/components/Footer/footer';

const Header = () => {
  return (
    <>
    {/* ========== HEADER ========== */}
    <header
      id="header"
      className="navbar navbar-expand-lg navbar-light navbar-end bg-white"
    >
      <div className="container">
        <nav className="js-mega-menu navbar-nav-wrap">
          {/* Default Logo */}
          <a className="navbar-brand" href="#" aria-label="Space">
            <img
              className="navbar-brand-logo"
              src="/branding/logo-no-bg-500.png"
              alt="Image Description"
            />
          </a>
          {/* End Default Logo */}
          {/* Toggler */}
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
              <i className="bi-list" />
            </span>
            <span className="navbar-toggler-toggled">
              <i className="bi-x" />
            </span>
          </button>
          {/* End Toggler */}
          {/* Collapse */}
          <div className="collapse navbar-collapse" 
          id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* Landings */}
              <li
                className="hs-has-mega-menu nav-item"
                data-hs-mega-menu-item-options='{
            "desktop": {
              "maxWidth": "30rem"
            }
          }'
              >
                <a
                  id="landingsMegaMenu"
                  className="btn b"
                  aria-current="page"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                Home
                </a>
                
                  
              </li>  
    
              {/* Pages */}
              <li className="hs-has-mega-menu nav-item">
                <a
                  id="pagesMegaMenu"
                  className="btn b"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Podcast
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-mega-menu hs-position-right dropdown-menu w-100"
                  aria-labelledby="pagesMegaMenu"
                  style={{ minWidth: "42rem" }}
                >
                 
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Pages */}
              {/* Blog */}
              <li className="hs-has-sub-menu nav-item">
                <a
                  id="blogMegaMenu"
                  className="btn b"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  What's New?
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-sub-menu dropdown-menu"
                  aria-labelledby="blogMegaMenu"
                  style={{ minWidth: "12rem" }}
                >
                  <a className="dropdown-item" href="#">
                    Classic
                  </a>
                  <a className="dropdown-item" href="#">
                    Author Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Single Article
                  </a>
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Blog */}
              {/* Docs */}
              <li
                className="hs-has-mega-menu nav-item"
                data-hs-mega-menu-item-options='{
            "desktop": {
              "maxWidth": "20rem"
            }
          }'
              >
                <a
                  id="docsMegaMenu"
                  className="hs-mega-menu-invoker nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Schedule
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-mega-menu hs-position-right dropdown-menu"
                  aria-labelledby="docsMegaMenu"
                  style={{ minWidth: "20rem" }}
                >
                  {/* Link */}
                  <a className="navbar-dropdown-menu-media-link" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <span className="svg-icon svg-icon-sm text-primary">
                          @@include("../../assets/vendor/duotone-icons/gen/gen005.svg")
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <span className="navbar-dropdown-menu-media-title">
                          Documentation{" "}
                          <span className="badge bg-primary rounded-pill ms-1">
                            v1.0
                          </span>
                        </span>
                        <p className="navbar-dropdown-menu-media-desc">
                          Development guides for building projects with Space
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* End Link */}
                  
                  <div className="dropdown-divider" />
                  {/* Link */}
                  <a className="navbar-dropdown-menu-media-link" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <span className="svg-icon svg-icon-sm text-primary">
                          @@include("../../assets/vendor/duotone-icons/cod/cod010.svg")
                        </span>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <span className="navbar-dropdown-menu-media-title">
                          Snippets
                        </span>
                        <p className="navbar-dropdown-menu-media-desc">
                          Move quickly with copy-to-clipboard feature
                        </p>
                      </div>
                    </div>
                  </a>
                  {/* End Link */}
                </div>
                {/* End Mega Menu */}
              </li>
              {/* End Docs */}
              <li className="nav-divider" />
              {/* Log in */}
              <li className="hs-has-mega-menu nav-item">
                <a
                  id="pagesMegaMenu"
                  className="btn b"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  About Us
                </a>
                {/* Mega Menu */}
                <div
                  className="hs-mega-menu hs-position-right dropdown-menu w-100"
                  aria-labelledby="pagesMegaMenu"
                  style={{ minWidth: "42rem" }}
                >
                 
                </div>
                {/* End Mega Menu */}
              </li>
              <li className="nav-item">
                <a
                  className="js-animation-link btn btn-ghost-secondary btn-no-focus me-2 me-lg-0"
                  href="javascript:;"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormLogin",
                   "groupName": "idForm"
                 }'
                >
                  Live Radio
                </a>
                <a
                  className="js-animation-link d-lg-none btn btn-primary"
                  href="javascript:;"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignup",
                   "groupName": "idForm"
                 }'
                >
                  <i className="bi-person-circle me-1" /> Sign up
                </a>
              </li>
              {/* End Log in */}
              {/* Sign up */}
              <li className="nav-item">
                <a
                  className="js-animation-link d-none d-lg-inline-block btn btn-primary"
                  href="javascript:;"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signupModal"
                  data-hs-show-animation-options='{
                   "targetSelector": "#signupModalFormSignup",
                   "groupName": "idForm"
                 }'
                >
                  <i className="bi-person-circle me-1" /> Sign up
                </a>
              </li>
              {/* End Sign up */}
            </ul>
          </div>
          {/* End Collapse */}
        </nav>
      </div>
    </header>
    {/* ========== END HEADER ========== */}
    {/* ========== SECONDARY CONTENTS ========== */}
    <div
      className="modal fade"
      id="signupModal"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* Header */}
          <div className="modal-close">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="modal-body p-sm-5">
            {/* Log in */}
            <div id="loginModalForm">
              {/* Heading */}
              <div className="text-center mb-7">
                <h4>Log in</h4>
                <p>
                  Don't have an account yet?
                  <a
                    className="js-animation-link"
                    href="javascript:;"
                    role="button"
                    data-hs-show-animation-options='{
                   "targetSelector": "#signupModalForm",
                   "groupName": "idForm"
                 }'
                  >
                    Sign up here
                  </a>
                </p>
              </div>
              {/* End Heading */}
              <div className="d-grid gap-2">
                <a className="btn btn-white btn-lg" href="#">
                  <span className="d-flex justify-content-center align-items-center">
                    <img
                      className="avatar avatar-xss me-2"
                      src="./assets/svg/brands/google-icon.svg"
                      alt="Image Description"
                    />
                    Log in with Google
                  </span>
                </a>
                <a
                  className="js-animation-link btn btn-primary btn-lg"
                  href="#"
                  data-hs-show-animation-options='{
                 "targetSelector": "#loginWithEmailModalForm",
                 "groupName": "idForm"
               }'
                >
                  Log in with Email
                </a>
              </div>
            </div>
            {/* End Log in */}
            {/* Log in with Modal */}
            <div
              id="loginWithEmailModalForm"
              style={{ display: "none", opacity: 0 }}
            >
              {/* Heading */}
              <div className="text-center mb-7">
                <h4>Log in</h4>
                <p>
                  Don't have an account yet?
                  <a
                    className="js-animation-link"
                    href="javascript:;"
                    role="button"
                    data-hs-show-animation-options='{
                   "targetSelector": "#signupModalForm",
                   "groupName": "idForm"
                 }'
                  >
                    Sign up here
                  </a>
                </p>
              </div>
              {/* End Heading */}
              <form className="js-validate needs-validation" noValidate="">
                {/* Form */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="loginModalFormEmail">
                    Your email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="loginModalFormEmail"
                    placeholder="email@site.com"
                    aria-label="email@site.com"
                    required=""
                  />
                  <span className="invalid-feedback">
                    Please enter a valid email address.
                  </span>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <label
                      className="form-label"
                      htmlFor="loginModalFormPassword"
                    >
                      Password
                    </label>
                    <a
                      className="js-animation-link form-label-link"
                      href="javascript:;"
                      data-hs-show-animation-options='{
                 "targetSelector": "#forgotPasswordModalForm",
                 "groupName": "idForm"
               }'
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="loginModalFormPassword"
                    placeholder="8+ characters required"
                    aria-label="8+ characters required"
                    required=""
                    minLength={8}
                  />
                  <span className="invalid-feedback">
                    Please enter a valid password.
                  </span>
                </div>
                {/* End Form */}
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Log in
                  </button>
                </div>
              </form>
            </div>
            {/* End Log in with Modal */}
            {/* Sign up */}
            <div id="signupModalForm" style={{ display: "none", opacity: 0 }}>
              {/* Heading */}
              <div className="text-center mb-7">
                <h4>Sign up</h4>
                <p>
                  Already have an account?
                  <a
                    className="js-animation-link"
                    href="javascript:;"
                    role="button"
                    data-hs-show-animation-options='{
                   "targetSelector": "#loginModalForm",
                   "groupName": "idForm"
                 }'
                  >
                    Log in here
                  </a>
                </p>
              </div>
              {/* End Heading */}
              <div className="d-grid gap-3">
                <a className="btn btn-white btn-lg" href="#">
                  <span className="d-flex justify-content-center align-items-center">
                    <img
                      className="avatar avatar-xss me-2"
                      src="./assets/svg/brands/google-icon.svg"
                      alt="Image Description"
                    />
                    Sign up with Google
                  </span>
                </a>
                <a
                  className="js-animation-link btn btn-primary btn-lg"
                  href="#"
                  data-hs-show-animation-options='{
                 "targetSelector": "#signupWithEmailModalForm",
                 "groupName": "idForm"
               }'
                >
                  Sign up with Email
                </a>
                <div className="text-center">
                  <p className="small mb-0">
                    By continuing you agree to our{" "}
                    <a href="#">Terms and Conditions</a>
                  </p>
                </div>
              </div>
            </div>
            {/* End Sign up */}
            {/* Sign up with Modal */}
            <div
              id="signupWithEmailModalForm"
              style={{ display: "none", opacity: 0 }}
            >
              {/* Heading */}
              <div className="text-center mb-7">
                <h4>Sign up</h4>
                <p>
                  Already have an account?
                  <a
                    className="js-animation-link"
                    href="javascript:;"
                    role="button"
                    data-hs-show-animation-options='{
                   "targetSelector": "#loginModalForm",
                   "groupName": "idForm"
                 }'
                  >
                    Log in here
                  </a>
                </p>
              </div>
              {/* End Heading */}
              <form className="js-validate need-validate" noValidate="">
                {/* Form */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="signupModalFormEmail">
                    Your email
                  </label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    name="email"
                    id="signupModalFormEmail"
                    placeholder="email@site.com"
                    aria-label="email@site.com"
                    required=""
                  />
                  <span className="invalid-feedback">
                    Please enter a valid email address.
                  </span>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="mb-3">
                  <label className="form-label" htmlFor="signupModalFormPassword">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="password"
                    id="signupModalFormPassword"
                    placeholder="8+ characters required"
                    aria-label="8+ characters required"
                    required=""
                  />
                  <span className="invalid-feedback">
                    Your password is invalid. Please try again.
                  </span>
                </div>
                {/* End Form */}
                {/* Form */}
                <div className="mb-3">
                  <label
                    className="form-label"
                    htmlFor="signupModalFormConfirmPassword"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    name="confirmPassword"
                    id="signupModalFormConfirmPassword"
                    placeholder="8+ characters required"
                    aria-label="8+ characters required"
                    data-hs-validation-equal-field="#signupModalFormPassword"
                    required=""
                  />
                  <span className="invalid-feedback">
                    Password does not match the confirm password.
                  </span>
                </div>
                {/* End Form */}
                <div className="d-grid mb-3">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Sign up
                  </button>
                </div>
                <div className="text-center">
                  <p className="small mb-0">
                    By continuing you agree to our{" "}
                    <a href="#">Terms and Conditions</a>
                  </p>
                </div>
              </form>
            </div>
            {/* End Sign up with Modal */}
            {/* Forgot Password */}
            <div
              id="forgotPasswordModalForm"
              style={{ display: "none", opacity: 0 }}
            >
              {/* Heading */}
              <div className="text-center mb-7">
                <h4>Forgot password?</h4>
                <p>
                  Enter the email address you used when you joined and we'll send
                  you instructions to reset your password.
                </p>
              </div>
              {/* En dHeading */}
              <form className="js-validate need-validate" noValidate="">
                <div className="mb-3">
                  {/* Form */}
                  <div className="d-flex justify-content-between align-items-center">
                    <label
                      className="form-label"
                      htmlFor="resetPasswordSrEmailModalForm"
                      tabIndex={0}
                    >
                      Your email
                    </label>
                    <a
                      className="js-animation-link form-label-link"
                      href="javascript:;"
                      data-hs-show-animation-options='{
                   "targetSelector": "#loginModalForm",
                   "groupName": "idForm"
                 }'
                    >
                      <i className="bi-chevron-left small me-1" /> Back to Log in
                    </a>
                  </div>
                  {/* End Form */}
                  {/* Form */}
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      name="email"
                      id="resetPasswordSrEmailModalForm"
                      tabIndex={1}
                      placeholder="Enter your email address"
                      aria-label="Enter your email address"
                      required=""
                      data-msg="Please enter a valid email address."
                    />
                  </div>
                  {/* End Form */}
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Forgot Password */}
          </div>
          {/* End Body */}
          {/* Footer */}
          <div className="modal-footer d-block text-center py-sm-5">
            <small className="text-cap mb-4">
              Trusted by the world's best teams
            </small>
            <div className="w-85 mx-auto">
              <div className="row justify-content-between">
                <div className="col">
                  <img
                    className="img-fluid"
                    src="./assets/svg/brands/gitlab-gray.svg"
                    alt="Logo"
                  />
                </div>
                {/* End Col */}
                <div className="col">
                  <img
                    className="img-fluid"
                    src="./assets/svg/brands/fitbit-gray.svg"
                    alt="Logo"
                  />
                </div>
                {/* End Col */}
                <div className="col">
                  <img
                    className="img-fluid"
                    src="./assets/svg/brands/flow-xo-gray.svg"
                    alt="Logo"
                  />
                </div>
                {/* End Col */}
                <div className="col">
                  <img
                    className="img-fluid"
                    src="./assets/svg/brands/layar-gray.svg"
                    alt="Logo"
                  />
                </div>
                {/* End Col */}
              </div>
            </div>
            {/* End Row */}
          </div>
          {/* End Footer */}
        </div>
      </div>
    </div>
    {/* ========== END SECONDARY CONTENTS ========== */}
  </>
  
  )
}


const CountDown = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
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
    <div className='col-3 col-sm-5'>
      <div className='text-center text-sm-start'>
        <h3 className='h2 text-primary'>Swahilipot FM</h3>
        {/* <div>
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div> */}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Header />
      <main id='content' role='main'>
        {/* Content */}
        <div className='d-sm-flex'>
          <div className='container d-sm-flex align-items-sm-center vh-sm-100 content-space-t-3 content-space-b-1 content-space-b-sm-3 content-space-sm-0'>
            <div className='row justify-content-sm-between align-items-sm-center flex-grow-1'>
              <div className='col-9 col-sm-5 mb-5 mb-sm-0'>
                <Image
                  className='img-fluid'
                  src='/assets/svg/illustrations/oc-yelling.svg'
                  width={500}
                  height={500}
                  alt='SVG Illustration'
                />
              </div>
              {/* End Col */}
              <CountDown />
              {/* End Col */}
            </div>
            {/* End Row */}
          </div>
        </div>
        {/* End Content */}
        <Footer/>    

      </main>

</>
  )
}

export default Home;
