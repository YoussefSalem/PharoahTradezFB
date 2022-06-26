import "./AboutUs.css";
import React from "react";
import Contact from "./ContactForm";
import "../src/components/AboutUs/script-about";
import "../src/components/AboutUs/style-about.css";
export default function Contactus() {
  return (
    <main className="main" id="top">
      <link href="assets/Landing/css/theme.min.css" rel="stylesheet" />
      <script src="assets/Landing/js/popper.min.js"></script>
      <script src="assets/Landing/js/bootstrap.min.js"></script>
      <script src="assets/Landing/js/theme.js"></script>
      <link rel="manifest" href="/manifest.json" />
      <link href="assets/Landing/css/bootstrap.css" rel="stylesheet" />
      <link href="assets/Landing/css/ui.css" rel="stylesheet" />
      <link href="assets/Landing/css/responsive.css" rel="stylesheet" />
      <link href="assets/Landing/css/all.min.css" rel="stylesheet" />
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block"
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <a className="navbar-brand d-inline-flex" href="/">
            <img
              className="d-inline-block"
              src="assets/Landing/img/gallery/logo-black.png"
              alt="logo"
            />
            <span className="text-1000 fs-0 fw-bold ms-2"></span>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a className="nav-link fw-medium" href="/Trade">
                  Trades
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  className="nav-link fw-medium active"
                  aria-current="page"
                  href="/#gameyoustyle"
                >
                  Games
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-medium" href="/Store">
                  Products
                </a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link fw-medium" href="/#community">
                  Community
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  className="nav-link fw-medium active"
                  aria-current="page"
                  href="/AboutUs"
                >
                  About US
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <a className="text-1000" href="Cart">
                {" "}
                <svg
                  className="feather feather-shopping-cart me-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </a>
              <a className="text-1000" href="Login">
                {" "}
                <svg
                  className="feather feather-user me-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </a>
            </form>
          </div>
        </div>
      </nav>
      {/* <!-- Code Start --> */}
      <section className="about">
        <div className="image-logo-abt">
          <img src="assets/Landing/img/gallery/about-us-logo.png" />
          <div className="about-txt">
            <h1>About PharoahTradez</h1>
            <h5>
              Who we are<span> & our purpose</span>
            </h5>
            <p>
              Pharoah Tradez is Gaming Community, Store, and Trading Hub. We are
              gamers, we aim to ease the life of other gamers. Know more about
              us here! <br></br>
              Know more about us | Pharoah Tradez
            </p>
            <hr></hr>
            <br></br>
            <p>
              Do you have any suggestions? Complains? Or perhaps want to do some
              business with us? We are all ears! Contacts Us now!{" "}
            </p>
          </div>
        </div>
      </section>
      <Contact></Contact>
      <div className="Cfooter">
        <section className="py-0 pt-7">
          <div className="container">
            <div className="row">
              <div className="col-6 col-lg-2 mb-3">
                <h5
                  style={{
                    color: "white",
                  }}
                  className="lh-lg fw-bold text-1000"
                >
                  Company Info
                </h5>
                <ul className="list-unstyled mb-md-4 mb-lg-0">
                  <li className="lh-lg">
                    <a className="text-800 text-decoration-none" href="AboutUs">
                      About Us
                    </a>
                  </li>
                  <li className="lh-lg">
                    <a className="text-800 text-decoration-none" href="#!">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-2 mb-3">
                <h5
                  style={{
                    color: "white",
                  }}
                  className="lh-lg fw-bold text-1000"
                >
                  Help &amp; Support
                </h5>
                <ul className="list-unstyled mb-md-4 mb-lg-0">
                  <li className="lh-lg">
                    <a className="text-800 text-decoration-none" href="#!">
                      Refunds
                    </a>
                  </li>
                  <li className="lh-lg">
                    <a className="text-800 text-decoration-none" href="#!">
                      How to Order
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-auto ms-auto">
                <h5
                  style={{
                    color: "white",
                  }}
                  className="lh-lg fw-bold text-1000"
                >
                  Signup For The Latest News
                </h5>
                <div className="row input-group-icon mb-5">
                  <div className="col-12">
                    <input
                      className="form-control input-box"
                      type="email"
                      placeholder="Enter Email"
                      aria-label="email"
                    />
                    <svg
                      className="bi bi-arrow-right-short input-box-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="#424242"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      >
                        {" "}
                      </path>
                    </svg>
                  </div>
                </div>
                <p className="text-800">
                  <svg
                    className="feather feather-mail me-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span className="text-800">pharoahtradez@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="border-bottom border-3"></div>
            <div className="row flex-center my-3">
              <div className="col-md-6 order-1 order-md-0">
                <p
                  style={{
                    color: "white",
                  }}
                  className="my-2 text-1000 text-center text-md-start"
                >
                  {" "}
                  Made with{" "}
                  <svg
                    className="bi bi-suit-heart-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="#EB6453"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path>
                  </svg>{" "}
                  by{" "}
                  <a
                    className="text-800"
                    href="https://www.facebook.com/GamesTradeEgy/"
                    target="_blank"
                  >
                    Team 6{" "}
                  </a>
                </p>
              </div>
              <div className="col-md-6">
                <div className="text-center text-md-end">
                  <a href="#!">
                    <span className="me-4" data-feather="facebook"></span>
                  </a>
                  <a href="https://www.facebook.com/GamesTradeEgy/">
                    {" "}
                    <span className="me-4" data-feather="instagram"></span>
                  </a>
                  <a href="#!">
                    {" "}
                    <span className="me-4" data-feather="youtube"></span>
                  </a>
                  <a href="#!">
                    {" "}
                    <span className="me-4" data-feather="twitter"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
