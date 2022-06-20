// import "./App.css";
import React from "react";

export default function Landing() {
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
      <script
        src="assets/Landing/js/jquery.min.js"
        type="text/javascript"
      ></script>
      <script
        src="assets/Landing/js/bootstrap.bundle.min.js"
        type="text/javascript"
      ></script>
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
                <a className="nav-link fw-medium" href="#community">
                  Community
                </a>
              </li>
              <li className="nav-item px-2">
                <a
                  className="nav-link fw-medium active"
                  aria-current="page"
                  href="AboutUs"
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
                <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                  crossorigin="anonymous"
                />

                <form action="">
                  <input type="search" required />{" "}
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
                </form>
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
      <section className="py-11 bg-light-gradient border-bottom border-white border-5">
        <div
          className="bg-holder overlay overlay-light"
          style={{
            backgroundImage: "url(assets/Landing/img/gallery/header.png)",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container">
          <div className="row flex-center">
            <div className="col-12 mb-10">
              <div className="d-flex align-items-center flex-column">
                <h1 className="fw-normal"> Pharoah Tradez</h1>
                <h1 className="fs-4 fs-lg-8 fs-md-6 fw-bold">
                  A New Era of Gaming
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0" id="header">
        <div className="container">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                {" "}
                <img
                  className="img-fluid"
                  src="assets/Landing/img/gallery/build-it-the-easy-way.png"
                  width="790"
                  alt="..."
                />
                <div className="card-img-overlay d-flex flex-center">
                  {" "}
                  <a className="btn btn-lg btn-light" href="#!">
                    Buy Games
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                {" "}
                <img
                  className="img-fluid"
                  src="assets/Landing/img/gallery/pre-owned-games.png"
                  width="790"
                  alt="..."
                />
                <div className="card-img-overlay d-flex flex-center">
                  {" "}
                  <a className="btn btn-lg btn-light" href="/Trade">
                    Trade Games{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-0">
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Best Deals</h5>
            </div>
            <div className="col-12">
              <div
                className="carousel slide"
                id="carouselBestDeals"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/cyberpunk.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Cyberpunk
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $59.99
                              </span>
                              <span className="text-primary">$29.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/bloodstained-ritual-of-the-night.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Bloodstained:Ritual of the night
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $39.99
                              </span>
                              <span className="text-primary">$15.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/spider-man-miles-morales.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Spider Man Miles Morales
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $49.99
                              </span>
                              <span className="text-primary">$29.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/ghost-of-tsushima.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Ghost of Tsushima
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $29.99
                              </span>
                              <span className="text-primary">$14.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/god-of-war.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              God of War
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $49.99
                              </span>
                              <span className="text-primary">$19.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/persona-5.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Persona 5
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $59.99
                              </span>
                              <span className="text-primary">$25.02</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/resident-evil-village.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Resident Evil Village
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $79.99
                              </span>
                              <span className="text-primary">$59.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/mortal-kombat.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Mortal Kombat
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $49.99
                              </span>
                              <span className="text-primary">$19.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/call-of-duty-vanguard.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Call Of Duty Vanguard
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $59.99
                              </span>
                              <span className="text-primary">$44.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/death-stranding.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Death Stranding
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $59.99
                              </span>
                              <span className="text-primary">$39.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/detroit-become-human.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Detroit Become Human
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $39.99
                              </span>
                              <span className="text-primary">$27.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/elden-ring.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Elden Ring
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $79.99
                              </span>
                              <span className="text-primary">$59.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/friday-the-13th.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Friday the 13th
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $29.99
                              </span>
                              <span className="text-primary">$14.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/overwatch.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Overwatch
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $39.99
                              </span>
                              <span className="text-primary">$19.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/horizon.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Horizon
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $49.99
                              </span>
                              <span className="text-primary">$24.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/demon-slayer.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Demon Slayer
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $59.99
                              </span>
                              <span className="text-primary">$41.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselBestDeals"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselBestDeals"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
              {" "}
              <a className="btn btn-lg btn-dark" href="#!">
                View All{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row h-100 g-0">
            <div className="col-md-6">
              <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">
                <h4 className="text-800">Exclusive collection 2022</h4>
                <h1 className="fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">
                  New Definition of Gaming
                </h1>
                <p className="mb-5 fs-1">
                  PC Gamer? <hr></hr> Console Gamer? <hr></hr>We've got you
                  covered Huge Savings on Hit Games!
                </p>
                <div className="d-grid gap-2 d-md-block">
                  <a className="btn btn-lg btn-dark" href="#" role="button">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                <img
                  className="card-img h-100"
                  src="assets/Landing/img/gallery/ps-logo.png"
                  alt="..."
                />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="d-flex align-items-end justify-content-center h-100">
                    <a
                      className="btn btn-lg text-light fs-1"
                      href="#!"
                      role="button"
                    >
                      PS5
                      <svg
                        className="bi bi-arrow-right-short"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        >
                          {" "}
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row h-100 g-2 py-1">
            <div className="col-md-4">
              <div className="card card-span h-100 text-white">
                <img
                  className="card-img h-100"
                  src="assets/Landing/img/gallery/pc-logo.png"
                  alt="..."
                />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="d-flex align-items-end justify-content-center h-100">
                    <a
                      className="btn btn-lg text-light fs-1"
                      href="#!"
                      role="button"
                    >
                      PC Games
                      <svg
                        className="bi bi-arrow-right-short"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        >
                          {" "}
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-span h-100 text-white">
                <img
                  className="card-img h-100"
                  src="assets/Landing/img/gallery/xbox-logo.png"
                  alt="..."
                />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="d-flex align-items-end justify-content-center h-100">
                    <a
                      className="btn btn-lg text-light fs-1"
                      href="#!"
                      role="button"
                    >
                      Xbox
                      <svg
                        className="bi bi-arrow-right-short"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        >
                          {" "}
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-span h-100 text-white">
                <img
                  className="card-img h-100"
                  src="assets/Landing/img/gallery/many-more.png"
                  alt="..."
                />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="d-flex align-items-end justify-content-center h-100">
                    <a
                      className="btn btn-lg text-light fs-1"
                      href="#!"
                      role="button"
                    >
                      Many More!
                      <svg
                        className="bi bi-arrow-right-short"
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        >
                          {" "}
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-6">
              <h5 className="fs-3 fs-lg-5 lh-sm mb-3">Checkout Trade-Ins</h5>
            </div>
            <div className="col-12">
              <div
                className="carousel slide"
                id="carouselNewArrivals"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/no-mans-sky.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PS4</p>
                            <h4 className="text-light">No Mans Sky</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/ori-and-the-blind-forest.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PC</p>
                            <h4 className="text-light">
                              Ori and the Blind Forest
                            </h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/sea-of-thieves.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">Xbox</p>
                            <h4 className="text-light">Sea of Thieves</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/subnautica.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PC</p>
                            <h4 className="text-light">Subnautica</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/cobra-kai.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">Xbox</p>
                            <h4 className="text-light">Cobra Kai</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/destiny-2.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PS4</p>
                            <h4 className="text-light">Destiny 2</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/doom-eternal.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PC</p>
                            <h4 className="text-light">Doom Eternal</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/forza-horizon-4.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PC</p>
                            <h4 className="text-light">Forza Horizon 4</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/hades.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PS4</p>
                            <h4 className="text-light">Hades</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/halo-infinite.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PC</p>
                            <h4 className="text-light">Halo Infinite</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/hollow-knight.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PS4</p>
                            <h4 className="text-light">Hollow Knight</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/jumanji.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">Xbox</p>
                            <h4 className="text-light">Jumanji</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/microsoft-flight-simulator.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">Xbox</p>
                            <h4 className="text-light">
                              Microsoft Flight Simulator
                            </h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/minecraft.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PC</p>
                            <h4 className="text-light">Minecraft</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/monster-hunter-rise.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PC</p>
                            <h4 className="text-light">Monster Hunter Rise</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="card-img h-100"
                            src="assets/Landing/img/gallery/need-for-speed-heat.png"
                            alt="..."
                          />
                          <div className="card-img-overlay bg-dark-gradient d-flex flex-column-reverse">
                            <p className="text-400 fs-1">PS4</p>
                            <h4 className="text-light">Need for Speed Heat</h4>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselNewArrivals"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselNewArrivals"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="gameyoustyle">
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-6">
              <h5 style={{ fontSize: "70px" }}>
                Game <p>YOU style</p>
              </h5>
            </div>
            <div className="col-12">
              <nav>
                <div
                  className="nav nav-tabs majestic-tabs mb-4 justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="pc-games-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#pc-games"
                    type="button"
                    role="tab"
                    aria-controls="pc-games"
                    aria-selected="true"
                  >
                    Buy Games
                  </button>
                  <button
                    className="nav-link"
                    id="nav-men-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-men"
                    type="button"
                    role="tab"
                    aria-controls="nav-men"
                    aria-selected="false"
                  >
                    Trade Games
                  </button>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pc-games"
                    role="tabpanel"
                    aria-labelledby="pc-games-tab"
                  >
                    <ul
                      className="nav nav-pills justify-content-center mb-5"
                      id="pills-tab-women"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-wtshirt-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-wtshirt"
                          type="button"
                          role="tab"
                          aria-controls="pills-wtshirt"
                          aria-selected="true"
                        >
                          PC
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-dresses-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-dresses"
                          type="button"
                          role="tab"
                          aria-controls="pills-dresses"
                          aria-selected="false"
                        >
                          PS5
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-wshoes-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-wshoes"
                          type="button"
                          role="tab"
                          aria-controls="pills-wshoes"
                          aria-selected="false"
                        >
                          PS4
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-wwatch-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-wwatch"
                          type="button"
                          role="tab"
                          aria-controls="pills-wwatch"
                          aria-selected="false"
                        >
                          Xbox One{" "}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-wsunglasses-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-wsunglasses"
                          type="button"
                          role="tab"
                          aria-controls="pills-wsunglasses"
                          aria-selected="false"
                        >
                          Xbox 360{" "}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-wbagpacks-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-wbagpacks"
                          type="button"
                          role="tab"
                          aria-controls="pills-wbagpacks"
                          aria-selected="false"
                        >
                          Retro{" "}
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContentWomen">
                      <div
                        className="tab-pane fade"
                        id="pills-dresses"
                        role="tabpanel"
                        aria-labelledby="pills-dresses-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryDresses"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/all-star-brawl-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        All Star Brawl
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $49.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/assassins-creed-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Assassin's Creed Valhalla
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $39.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demons-souls-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Demons Souls
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $69.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/ghostwire-tokyo-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Ghostwire: Tokyo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/guardians-of-the-galaxy-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Guardians of the Galaxy
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/horizon-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Horizon
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/kena-bridge-of-spirits-deluxe-edition-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Kena: Bridge of Spirits
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $49.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/marvel-avengers-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Marvel's Avengers
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $39.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/necromunda-hired-gun-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Necromunda: Hired Gun
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $39.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/project-athia-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Project Athia
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $59.57
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/ratchet-and-clank-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Ratchet and Clank
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $32
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/resident-evil-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Resident Evil Village
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $29.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/sackboy-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sackboy
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $24.47
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/spiderman-miles-morales-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Spider-Man: Miles Morales
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $29.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/the-medium-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        The Medium
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $49.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/the-pathless-price-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        The Pathless
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryDresses"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryDresses"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="pills-wtshirt"
                        role="tabpanel"
                        aria-labelledby="pills-wtshirt-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWTshirt"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/dead-by-daylight.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Dead by Daylight
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $19.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/death-stranding.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Death Stranding
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $39.99
                                        </span>
                                        <span className="text-primary">
                                          $39.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/detroit-become-human.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Detroit Become Human
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $39.99
                                        </span>
                                        <span className="text-primary">
                                          $27.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/doom-eternal.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Doom Eternal
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $29.99
                                        </span>
                                        <span className="text-primary">
                                          $19.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/forza-horizon-4.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Forza Horizon 4
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $79.99
                                        </span>
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/grand-theft-auto-v.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Grand Theft Auto V
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $59.99
                                        </span>
                                        <span className="text-primary">
                                          $29.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/halo-infinite.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Halo Infinite
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $47.99
                                        </span>
                                        <span className="text-primary">
                                          $39.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/minecraft.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Minecraft
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $29.99
                                        </span>
                                        <span className="text-primary">
                                          $26.95
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/monster-hunter-rise.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Monster Hunter Rise
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $59.99
                                        </span>
                                        <span className="text-primary">
                                          $32.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/ori-and-the-blind-forest.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Ori and the Blind Forest
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $29.75
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/overwatch.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Overwatch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $39.99
                                        </span>
                                        <span className="text-primary">
                                          $19.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/portal-2.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Portal 2
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $9.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/resident-evil-village.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Resident Evil Village
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $79.99
                                        </span>
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/subnautica.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Subnautica
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $79.96
                                        </span>
                                        <span className="text-primary">
                                          $29.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/the-witcher.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        The Witcher 3: Wild Hunt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $49.99
                                        </span>
                                        <span className="text-primary">
                                          $33.58
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/world-of-warcraft.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        World of Warcraft
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $14.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWTshirt"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWTshirt"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-wshoes"
                        role="tabpanel"
                        aria-labelledby="pills-wshoes-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWShoes"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/batman-arkham-knight.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Batman Arkham Knight
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $59.99
                                        </span>
                                        <span className="text-primary">
                                          $39.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/bloodstained-ritual-of-the-night.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bloodstained Ritual of the Night
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $39.99
                                        </span>
                                        <span className="text-primary">
                                          $15.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/cyberpunk.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Cyperpunk
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $59.99
                                        </span>
                                        <span className="text-primary">
                                          $29.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demon-slayer.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Demon Slayer
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $69.99
                                        </span>
                                        <span className="text-primary">
                                          $39.89
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/destiny-2.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Destiny 2
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $29.99
                                        </span>
                                        <span className="text-primary">
                                          $17.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/elden-ring.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Eldin Ring
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/ghost-of-tsushima.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Ghost of Tsushima
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $29.99
                                        </span>
                                        <span className="text-primary">
                                          $14.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/god-of-war.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        God of War
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $49.99
                                        </span>
                                        <span className="text-primary">
                                          $19.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/gran-turismo-7.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Gran Turismo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $69.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/hades.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Hades
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $24.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/hollow-knight.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Hollow Knight
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $14.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/horizon.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Horizon
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/mortal-kombat.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Mortal Kombat
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $19.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/need-for-speed-heat.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Need for Speed Heat
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/persona-5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Persona 5
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $25.02
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/spider-man-miles-morales.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Spider Man Miles Morales
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $49.99
                                        </span>
                                        <span className="text-primary">
                                          $29.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWShoes"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWShoes"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-wwatch"
                        role="tabpanel"
                        aria-labelledby="pills-wwatch-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWwatch"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/battlefield-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Battlefield
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $39.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/call-of-duty-vanguard.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Call of Duty Vanguard
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $59.99
                                        </span>
                                        <span className="text-primary">
                                          $44.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/crash-bandicoot-3-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Crash Bandicoot
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $39.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/deadpool-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Deadpool
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $24.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/far-cry-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Far Cry 6
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/friday-the-13th.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Friday the 13th
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $29.99
                                        </span>
                                        <span className="text-primary">
                                          $14.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/ghostbusters-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Ghostbusters
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $19.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/grand-theft-auto-v-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Grand Theft Auto V
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $15.00
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/hitman-2-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Hitman 2
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/jedi-fallen-order-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        JEDI Fallen Order
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $49.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/jumanji.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Jumanji
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $19.75
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/kart-racers-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Kart Racers
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $27.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/lego-star-wars-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        LEGO Star Wars
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $59.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/sea-of-thieves.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sea of Thieves
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $28.21
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/sniper-ghost-warrior-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sniper Ghost Warrior
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $31.49
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/the-sojourn.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        The Sojourn
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $24.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWwatch"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWwatch"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-wsunglasses"
                        role="tabpanel"
                        aria-labelledby="pills-wsunglasses-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWSunglasses"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/angry-birds-trilogy-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Angry Birds Trilogy
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $28.30
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/call-of-duty-world-at-war-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Call of Duty: World at War
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $39.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/cars-2-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Cars 2
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $19.95
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/darksiders-2-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Darksiders II
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $6.95
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/dark-souls-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Dark Souls
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $39.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/deadpool-xbox360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Deadpool
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $14.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/helpingdishonored-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Dishonored
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $14.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/red-death-redemption-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Red Dead Redemption
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $20.86
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/red-faction-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Red Faction: Guerrilla
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $14.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/skylanders-spyros-xbox360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Skylanders Spyro's Adventure
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $13.72
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/spongebob-heropants-xbox-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        SpongeBob HeroPants
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $18.19
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/star-wars-3-xbox360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        LEGO Star Wars III
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $32.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/super-star-kartz-xbox360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Super Star Kartz
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $16.75
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/the-walking-dead-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        The Walking Dead
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $29.99
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/tomb-raider-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Tomb Raider
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $37.35
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/xcom-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        XCOM Enemy Unknown
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-primary">
                                          $29.95
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWSunglasses"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWSunglasses"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-wbagpacks"
                        role="tabpanel"
                        aria-labelledby="pills-wbagpacks-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWBagpacks"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $000
                                        </span>
                                        <span className="text-primary">
                                          $000
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWBagpacks"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWBagpacks"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-men"
                    role="tabpanel"
                    aria-labelledby="nav-men-tab"
                  >
                    <ul
                      className="nav nav-pills mb-5 justify-content-center"
                      id="pills-tab-men"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-tshirt-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-tshirt"
                          type="button"
                          role="tab"
                          aria-controls="pills-tshirt"
                          aria-selected="true"
                        >
                          PC
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-shirt-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-shirt"
                          type="button"
                          role="tab"
                          aria-controls="pills-shirt"
                          aria-selected="false"
                        >
                          PS5
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-shoes-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-shoes"
                          type="button"
                          role="tab"
                          aria-controls="pills-shoes"
                          aria-selected="false"
                        >
                          PS4
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-watch-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-watch"
                          type="button"
                          role="tab"
                          aria-controls="pills-watch"
                          aria-selected="false"
                        >
                          Xbox One{" "}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-sunglasses-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-sunglasses"
                          type="button"
                          role="tab"
                          aria-controls="pills-sunglasses"
                          aria-selected="false"
                        >
                          Xbox 360{" "}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-bagpacks-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-bagpacks"
                          type="button"
                          role="tab"
                          aria-controls="pills-bagpacks"
                          aria-selected="false"
                        >
                          Retro{" "}
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContentMen">
                      <div
                        className="tab-pane fade show active"
                        id="pills-tshirt"
                        role="tabpanel"
                        aria-labelledby="pills-tshirt-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryTshirt"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/grand-theft-auto-v.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Grand Theft Auto V
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/death-stranding.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Death Stranding
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/monster-hunter-rise.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Monster Hunter Rise
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/portal-2.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Portal 2
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/forza-horizon-4.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Forza Horizon 4
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/overwatch.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Overwatch
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/doom-eternal.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Doom Eternal
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/detroit-become-human.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Detroit Become Human
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/halo-infinite.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Halo Infinite
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/dead-by-daylight.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Dead by Daylight
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/ori-and-the-blind-forest.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Ori and the Blind Forest
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/minecraft.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Minecraft
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/world-of-warcraft.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        World of Warcraft
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/resident-evil-village.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Resident Evil Village
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/the-witcher.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        The Witcher 3: Wild Hunt
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/subnautica.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Subnautica
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryTshirt"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryTshirt"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-shirt"
                        role="tabpanel"
                        aria-labelledby="pills-shirt-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryShirt"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/spiderman-miles-morales-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Spider-Man: Miles Morales
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/ghostwire-tokyo-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Ghostwire Tokyo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/kena-bridge-of-spirits-deluxe-edition-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Kena: Bridge of Spirits
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/assassins-creed-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Assassin's Creed
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/all-star-brawl-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        All Star Brawl
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demons-souls-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Demon Souls
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/horizon-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Horizon
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/guardians-of-the-galaxy-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Guardians of the Galaxy
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/sackboy-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sackboy
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/the-medium-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        The Medium
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/marvel-avengers-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Marvel's Avengers
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/resident-evil-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Resident Evil Village
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/necromunda-hired-gun-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Necromunda Hired Gun
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/project-athia-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Project Athia
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/the-pathless-price-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        The Pathless
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/ratchet-and-clank-ps5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Ratchet and Clank
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryShirt"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryShirt"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-shoes"
                        role="tabpanel"
                        aria-labelledby="pills-shoes-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryShoes"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/spider-man-miles-morales.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Spider Man Miles Morales
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/bloodstained-ritual-of-the-night.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bloodstained Ritual of the Night
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/batman-arkham-knight.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Batman Arkham Knight
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/elden-ring.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Eldin Ring
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/ghost-of-tsushima.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Ghost of Tsushima
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/hollow-knight.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Hollow Knight
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/god-of-war.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        God of War
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/gran-turismo-7.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Gran Turismo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/destiny-2.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Destiny 2
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/hades.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Hades
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/horizon.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Horizon
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/mortal-kombat.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Mortal Kombat
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/need-for-speed-heat.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Need for Speed Heat
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/persona-5.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Persona 5
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demon-slayer.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Demon Slayer
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/cyberpunk.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Cyperpunk
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryShoes"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryShoes"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-watch"
                        role="tabpanel"
                        aria-labelledby="pills-watch-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWatch"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/battlefield-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Battlefield
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/call-of-duty-vanguard.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Call of Duty Vanguard
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/crash-bandicoot-3-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Crash Bandicoot
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/deadpool-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Deadpool
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/far-cry-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Far Cry 6
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/friday-the-13th.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Friday the 13th
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/ghostbusters-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Ghostbusters
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/grand-theft-auto-v-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Grand Theft Auto V
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/hitman-2-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Hitman 2
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/jedi-fallen-order-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        JEDI Fallen Order
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/jumanji.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Jumanji
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/kart-racers-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Kart Racers
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/lego-star-wars-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        LEGO Star Wars
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/sea-of-thieves.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sea of Thieves
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/sniper-ghost-warrior-xbox1.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sniper Ghost Warrior
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/the-sojourn.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        The Sojourn
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWatch"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWatch"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-sunglasses"
                        role="tabpanel"
                        aria-labelledby="pills-sunglasses-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategorySunglasses"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/xcom-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        XCOM Enemy Unknown
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/call-of-duty-world-at-war-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Call of Duty: World at War
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/cars-2-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Cars 2
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/darksiders-2-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Darksiders II
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/dark-souls-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Dark Souls
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/helpingdishonored-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Dishonored
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/tomb-raider-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Tomb Raider
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/red-death-redemption-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Red Dead Redemption
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/red-faction-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Red Faction: Guerrilla
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/star-wars-3-xbox360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        LEGO Star Wars III
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/super-star-kartz-xbox360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Super Star Kartz
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/the-walking-dead-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        The Walking Dead
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/deadpool-xbox360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Deadpool
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/angry-birds-trilogy-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Angry Birds Trilogy
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/skylanders-spyros-xbox360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Skylanders Spyro's Adventure
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/spongebob-heropants-xbox-360.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        SpongeBob HeroPants
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategorySunglasses"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategorySunglasses"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-bagpacks"
                        role="tabpanel"
                        aria-labelledby="pills-bagpacks-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryBagpacks"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/Landing/img/gallery/demo-pic.png"
                                      alt="..."
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {" "}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        demo
                                      </h5>
                                    </div>
                                    <a className="stretched-link" href="#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryBagpacks"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryBagpacks"
                                data-bs-slide="next"
                              >
                                <span
                                  className="carousel-control-next-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next </span>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {" "}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0" id="collection">
        <div className="container">
          <div className="row h-100 gx-2">
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                <img
                  className="card-img h-100"
                  src="assets/Landing/img/gallery/playstation-games.png"
                  alt="..."
                />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="p-5 p-md-2 p-xl-5">
                    <h1 className="fs-md-4 fs-lg-7 text-light">
                      Playstation Games{" "}
                    </h1>
                    <h5 className="fs-2 text-light">Collection</h5>
                  </div>
                </div>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                <img
                  className="card-img h-100"
                  src="assets/Landing/img/gallery/xbox-games.png"
                  alt="..."
                />
                <div className="card-img-overlay bg-dark-gradient">
                  <div className="p-5 p-md-2 p-xl-5 d-flex flex-column flex-end-center align-items-baseline h-100">
                    <h1 className="fs-md-4 fs-lg-7 text-light">Xbox Games</h1>
                    <h5 className="fs-2 text-light">Collection</h5>
                  </div>
                </div>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-6">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Best Selling</h5>
            </div>
            <div className="col-12">
              <div
                className="carousel slide"
                id="carouselBestSellers"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/the-witcher.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              The Witcher 3: Wild Hunt
                            </h5>
                            <div className="fw-bold">
                              <span className="text-danger">$39.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/batman-arkham-knight.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Batman Arkham Knight
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $59.99
                              </span>
                              <span className="text-danger">$39.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/cobra-kai.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Cobra Kai
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $34.91
                              </span>
                              <span className="text-danger">$19.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/cyberpunk.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Cyberpunk
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $59.99
                              </span>
                              <span className="text-danger">$29.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/death-stranding.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Death Stranding
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $39.99
                              </span>
                              <span className="text-danger">$24.00</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/demon-slayer.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Demon Slayer
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $69.99
                              </span>
                              <span className="text-danger">$39.89</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/destiny-2.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              destiny 2
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $29.99
                              </span>
                              <span className="text-danger">$17.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/detroit-become-human.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Detroit Become Human
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $39.99
                              </span>
                              <span className="text-danger">$21.90</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/elden-ring.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Elden Ring
                            </h5>
                            <div className="fw-bold">
                              <span className="text-danger">$59.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/god-of-war.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              God of War
                            </h5>
                            <div className="fw-bold">
                              <span className="text-danger">$49.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/hollow-knight.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Hollow Knight
                            </h5>
                            <div className="fw-bold">
                              <span className="text-danger">$14.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/minecraft.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Minecraft
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $29.99
                              </span>
                              <span className="text-danger">$26.95</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/ori-and-the-blind-forest.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Ori and the Blind Forest
                            </h5>
                            <div className="fw-bold">
                              <span className="text-danger">$29.75</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/resident-evil-village.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Resident Evil Village
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $69.99
                              </span>
                              <span className="text-danger">$59.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/sea-of-thieves.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Sea of Thieves
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $19.99
                              </span>
                              <span className="text-danger">$39.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                      <div className="col-md-3 mb-3 mb-md-0 h-100">
                        <div className="card card-span h-100 text-white">
                          <img
                            className="img-fluid h-100"
                            src="assets/Landing/img/gallery/spider-man-miles-morales.png"
                            alt="..."
                          />
                          <div className="card-img-overlay ps-0"> </div>
                          <div className="card-body ps-0 bg-200">
                            <h5 className="fw-bold text-1000 text-truncate">
                              Spiderman Miles Morales
                            </h5>
                            <div className="fw-bold">
                              <span className="text-600 me-2 text-decoration-line-through">
                                $49.99
                              </span>
                              <span className="text-danger">$29.99</span>
                            </div>
                          </div>
                          <a className="stretched-link" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselBestSellers"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselBestSellers"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0" id="community">
        <div className="container">
          <div className="row h-100 g-0">
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                <img
                  className="card-img h-100"
                  src="assets/Landing/img/gallery/enjoy-games.png"
                  alt="..."
                />
                <div className="card-img-overlay bg-dark-gradient rounded-0">
                  <div className="p-5 p-md-2 p-xl-5 d-flex flex-column flex-end-center align-items-baseline h-100">
                    <h1 className="fs-md-4 fs-lg-7 text-light">
                      Enjoy 'N Trade your Summer of '22
                    </h1>
                  </div>
                </div>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-md-6 h-100">
              <div className="row h-100 g-0">
                <div className="col-md-6 h-100">
                  <div className="card card-span h-100 text-white">
                    <img
                      className="card-img h-100"
                      src="assets/Landing/img/gallery/nintendo-red.png"
                      alt="..."
                    />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Nitendo</h3>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!"></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-span h-100 text-white">
                    <img
                      className="card-img h-100"
                      src="assets/Landing/img/gallery/pc-black.png"
                      alt="..."
                    />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">PC</h3>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!"></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-span h-100 text-white">
                    <img
                      className="card-img h-100"
                      src="assets/Landing/img/gallery/xbox-green.png"
                      alt="..."
                    />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Xbox</h3>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!"></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-span h-100 text-white">
                    <img
                      className="card-img h-100"
                      src="assets/Landing/img/gallery/playstation-blue.png"
                      alt="..."
                    />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Playstation</h3>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!">
                      {" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row h-100 g-0">
            <div className="col-md-6">
              <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">
                <h1 className="fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">
                  New Releases{" "}
                </h1>
                <p className="mb-5 fs-1">Play today's hit new Games</p>
                <div className="d-grid gap-2 d-md-block">
                  <a className="btn btn-lg btn-dark" href="#!" role="button">
                    Explore Collection
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                <img
                  className="card-img h-100"
                  src="assets/Landing/img/gallery/new-hits.png"
                  alt="..."
                />
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0 pb-8">
        <div className="container-fluid container-lg">
          <div className="row h-100 g-2 justify-content-center">
            <div className="col-sm-9 col-md-4 mb-3 mb-md-0 h-100">
              <div className="card card-span text-white h-100">
                <img
                  className="img-card h-100"
                  src="assets/Landing/img/gallery/background-1.png"
                  alt="..."
                />
                <div className="card-body px-xl-5 px-md-3 pt-0 pb-7">
                  <div className="d-flex justify-content-between align-items-center bg-100 mt-n5 me-auto">
                    <img
                      src="assets/Landing/img/gallery/pfp-1.png"
                      width="60"
                      alt="..."
                    />
                    <div className="d-flex flex-1 justify-content-around">
                      {" "}
                      <span className="text-900 text-center">
                        <i data-feather="eye"> </i>
                        <span className="text-900 ms-2">MMO,</span>
                      </span>
                      <span className="text-900 text-center">
                        <i data-feather="heart"> </i>
                        <span className="text-900 ms-2">Action,</span>
                      </span>
                      <span className="text-900 text-center">
                        <i data-feather="corner-up-right"> </i>
                        <span className="text-900 ms-2">Adventure.</span>
                      </span>
                    </div>
                  </div>
                  <h6 className="text-900 mt-3">
                    The King . <span className="fw-normal">I buy games . </span>
                  </h6>
                  <h3 className="fw-bold text-1000 mt-5 text-truncate">
                    Delightful Customer Service
                  </h3>
                  <p className="text-900 mt-3">
                    When you call PharoahTradez Support, a person answers the
                    phone. There is no menu or message, a real person answers.
                    PharoahTradez Support appears to know what they are doing
                    and have the tools/abilities to make things right.
                    PharoahTradez really did delight me with their customer
                    service, and if you want to judge a company you should judge
                    them by what they do after they get your money.
                  </p>
                  <a
                    className="btn btn-lg text-900 fs-1 px-0 hvr-icon-forward"
                    href="#!"
                    role="button"
                  >
                    Read more
                    <svg
                      className="bi bi-arrow-right-short hover-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      >
                        {" "}
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-9 col-md-4 mb-3 mb-md-0 h-100">
              <div className="card card-span text-white h-100">
                <img
                  className="img-card h-100"
                  src="assets/Landing/img/gallery/background-2.png"
                  alt="..."
                />
                <div className="card-body px-xl-5 px-md-3 pt-0 pb-7">
                  <div className="d-flex justify-content-between align-items-center bg-100 mt-n5 me-auto">
                    <img
                      src="assets/Landing/img/gallery/pfp-2.png"
                      width="60"
                      alt="..."
                    />
                    <div className="d-flex flex-1 justify-content-around">
                      {" "}
                      <span className="text-900 text-center">
                        <i data-feather="eye"> </i>
                        <span className="text-900 ms-2">MOBA,</span>
                      </span>
                      <span className="text-900 text-center">
                        <i data-feather="heart"> </i>
                        <span className="text-900 ms-2">Sim,</span>
                      </span>
                      <span className="text-900 text-center">
                        <i data-feather="corner-up-right"> </i>
                        <span className="text-900 ms-2">Shooters.</span>
                      </span>
                    </div>
                  </div>
                  <h6 className="text-900 mt-3">
                    Killjoyy . <span className="fw-normal">game lover </span>
                  </h6>
                  <h3 className="fw-bold text-1000 mt-5 text-truncate">
                    Amazing company
                  </h3>
                  <p className="text-900 mt-3">
                    Amazing company. I trust no other company to have my best
                    interest at heart as I trust PharoahTradez. Their investor
                    relations is unparalleled. Good luck trying to compete with
                    The Pharoah Tradez team!
                  </p>
                  <a
                    className="btn btn-lg text-900 fs-1 px-0 hvr-icon-forward"
                    href="#!"
                    role="button"
                  >
                    Read more
                    <svg
                      className="bi bi-arrow-right-short hover-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      >
                        {" "}
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-9 col-md-4 mb-3 mb-md-0 h-100">
              <div className="card card-span text-white h-100">
                <img
                  className="img-card h-100"
                  src="assets/Landing/img/gallery/background-3.png"
                  alt="..."
                />
                <div className="card-body px-xl-5 px-md-3 pt-0 pb-7">
                  <div className="d-flex justify-content-between align-items-center bg-100 mt-n5 me-auto">
                    <img
                      src="assets/Landing/img/gallery/pfp-3.png"
                      width="60"
                      alt="..."
                    />
                    <div className="d-flex flex-1 justify-content-around">
                      {" "}
                      <span className="text-900 text-center">
                        <i data-feather="eye"> </i>
                        <span className="text-900 ms-2">CRPG,</span>
                      </span>
                      <span className="text-900 text-center">
                        <i data-feather="heart"> </i>
                        <span className="text-900 ms-2">Action</span>
                      </span>
                      <span className="text-900 text-center">
                        <i data-feather="corner-up-right"> </i>
                        <span className="text-900 ms-2">Sim.</span>
                      </span>
                    </div>
                  </div>
                  <h6 className="text-900 mt-3">
                    ARMINNNN . <span className="fw-normal">Hiii </span>
                  </h6>
                  <h3 className="fw-bold text-1000 mt-5 text-truncate">
                    Trading at PharoahTradez
                  </h3>
                  <p className="text-900 mt-3">
                    Phenomenal Expericence, i never thought that one day i would
                    be able to trade a lot of my old, pre-owned games to newer
                    ones, I'm a college student and it really helped save a
                    bunch of money. I really do suggest giving Their Trade HUb a
                    shot, with the right guidlines, and an already nice
                    community, Trading and discussing Games is so much fun! I
                    Love PharoahTradez!
                  </p>
                  <a
                    className="btn btn-lg text-900 fs-1 px-0 hvr-icon-forward"
                    href="#!"
                    role="button"
                  >
                    Read more
                    <svg
                      className="bi bi-arrow-right-short hover-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                      >
                        {" "}
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-11">
        <div
          className="bg-holder overlay overlay-0"
          style={{
            backgroundImage:
              "url(assets/Landing/img/gallery/start-playing.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="carousel slide carousel-fade"
                id="carouseCta"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-12">
                        <div className="text-light text-center py-2">
                          <h5 className="display-4 fw-normal text-400 fw-normal mb-4">
                            What are you waiting for? Start
                          </h5>
                          <h1 className="display-1 text-white fw-normal mb-8">
                            Gaming
                          </h1>
                          <a
                            className="btn btn-lg text-light fs-1"
                            href="#!"
                            role="button"
                          >
                            Let's GO
                            <svg
                              className="bi bi-arrow-right-short"
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              >
                                {" "}
                              </path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="5000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-12">
                        <div className="text-light text-center py-2">
                          <h5 className="display-4 fw-normal text-400 fw-normal mb-4">
                            What are you waiting for? Start
                          </h5>
                          <h1 className="display-1 text-white fw-normal mb-8">
                            Playing
                          </h1>
                          <a
                            className="btn btn-lg text-light fs-1"
                            href="#!"
                            role="button"
                          >
                            Let's GO
                            <svg
                              className="bi bi-arrow-right-short"
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              >
                                {" "}
                              </path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval="3000">
                    <div className="row h-100 align-items-center g-2">
                      <div className="col-12">
                        <div className="text-light text-center py-2">
                          <h5 className="display-4 fw-normal text-400 fw-normal mb-4">
                            What are you waiting for? Start
                          </h5>
                          <h1 className="display-1 text-white fw-normal mb-8">
                            Trading
                          </h1>
                          <a
                            className="btn btn-lg text-light fs-1"
                            href="#!"
                            role="button"
                          >
                            Let's GO
                            <svg
                              className="bi bi-arrow-right-short"
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="23"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                              >
                                {" "}
                              </path>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouseCta"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouseCta"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                    Affiliate
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-800 text-decoration-none" href="#!">
                    Gamer Blogger
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
                    Shipping Info
                  </a>
                </li>
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
                <li className="lh-lg">
                  <a className="text-800 text-decoration-none" href="#!">
                    How to Track
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-800 text-decoration-none" href="#!">
                    Size Guides
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
                Customer Care
              </h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-800 text-decoration-none" href="#!">
                    Contact Us
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-800 text-decoration-none" href="#!">
                    Payment Methods
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-800 text-decoration-none" href="#!">
                    Bonus Point
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
                <a href="#!">
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
    </main>
  );
}
