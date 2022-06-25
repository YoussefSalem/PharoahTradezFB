import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase/config";
import { actionTypes } from "./Reducer";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    // sign In
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });

        // auth.createUserWithEmailAndPassword(
        //   result.user.email,
        //   result.user.email
        // );
        // auth.signInWithEmailLink(result.user.email);
        // console.log(result.user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <main className="main" id="top">
      {/* <link href="assets/Landing/css/theme.min.css" rel="stylesheet" /> */}
      {/* <script src="assets/Landing/js/popper.min.js"></script>
      <script src="assets/Landing/js/bootstrap.min.js"></script>
      <script src="assets/Landing/js/theme.js"></script> */}
      {/* <link rel="manifest" href="/manifest.json" />
      <link href="assets/Landing/css/bootstrap.css" rel="stylesheet" /> */}
      <link href="assets/Landing/css/ui.css" rel="stylesheet" />
      <link href="assets/Landing/css/responsive.css" rel="stylesheet" />
      <link href="assets/Landing/css/all.min.css" rel="stylesheet" />

      <nav
        className="navbar navbar-expand-lg navbar-light  py-3 d-block"
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
                <link
                  rel="stylesheet"
                  href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
                  crossorigin="anonymous"
                />

                {/* 
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
            </form> */}
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
      <div className="login">
        <div className="login__logo">
          <img
            src="assets/Landing/img/gallery/logo-black.png"
            alt="PharoahTradez"
          />
          <br></br>
          <Button type="submit" onClick={signIn}>
            Sign In With Google
          </Button>
          <br></br>
          <hr></hr>
          <br></br>
          <Link to="/">
            <Button>Go Back</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Login;
