import "./AboutUs.css";
import React from "react";
import Contact from "./ContactForm"
import '../src/components/AboutUs/script-about';
import '../src/components/AboutUs/style-about.css';
export default function Contactus() {
  return (
    <main className="main" id="top">
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
              <a className="text-1000" href="#!">
                {" "}
                <svg
                  className="feather feather-search me-3"
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
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
        <img src='assets/Landing/img/gallery/about-us-logo.png'/>
        <div className="about-txt">
            <h1>About PharoahTradez</h1>
            <h5>Who we are<span> & our purpose</span></h5>
            <p>The gaming industry has been gaining in popularity recently. If you want to share your passion with the world, for game websites, then you’ll need a gaming website.
 Luckily, there are plenty of gaming website templates that can help you launch your website quickly and easily,
 but there is only 1 website in Egypt who trade games in Egypt  </p>

        </div>
    </div>
</section>
<Contact>
  
</Contact>
    </main>
  );
}