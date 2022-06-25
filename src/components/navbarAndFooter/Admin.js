import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/android-chrome-512x512.png";
import { useAuth } from "../../global/AuthContext";
import { Button } from "react-bootstrap";
import { cart } from "react-icons-kit/entypo/cart";
import { Icon } from "react-icons-kit";
import { CartContext } from "../../global/CartContext";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
  const { currentUser, logout } = useAuth();
  const history = useNavigate();

  const { totalQty } = useContext(CartContext);
  const Admin = currentUser.uid === process.env.REACT_APP_ADMIN_ID;
  return (
    <>
      <main className="main" id="top">
        {/* <link href="assets/Landing/css/theme.min.css" rel="stylesheet" />
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
      ></script> */}
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
                  <a className="nav-link fw-medium" href="#community">
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
                {currentUser && (
                  <h9 style={{ marginTop: "7px" }}>
                    You are logged in as:{"  "}
                    <span className="font-weight-lighter m-2 p-2">
                      {currentUser.email}
                    </span>
                  </h9>
                )}
              </ul>
              <span className="font-weight-bolder text-danger mr-3">
                {totalQty}{" "}
              </span>
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
              {currentUser ? (
                <Button className="btn" onClick={() => logout()}>
                  Logout
                </Button>
              ) : (
                <NavLink to="/login" className="navLinks">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </nav>

        <div className="navbar">
          <div className="right">
            {
              // <NavLink to="/cart">
              //   <ShoppingCartOutlinedIcon size={30} style={{ color: "blue" }} />
              //   <span className="font-weight-bolder text-danger mr-3">
              //     {totalQty}{" "}
              //   </span>
              // </NavLink>
            }

            {/* <NavLink to="/signup" className="navLinks btn btn-primary">
            SignUp
          </NavLink> */}
            {/* <NavLink to="/login" className="navLinks btn btn-success">
            Login
          </NavLink> */}
          </div>
        </div>
      </main>
      <div className="navbar">
        {/* <div className="left">
          <NavLink to="/">
            <img src="./assets/Landing/img/gallery/logo-black.png" alt="logo" />
          </NavLink>
        </div> */}
        <div className="right">
          {/* {currentUser && (
            <h9>
              You are logged in as:{"  "}
              <span className="font-weight-lighter m-2 p-2">
                {currentUser.email}
              </span>
            </h9>
          )}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {!Admin && (
            <NavLink to="/cart">
              <Icon icon={cart} size={30} style={{ color: "orange" }} />
              <span className="font-weight-bolder text-danger mr-3">
                {totalQty}{" "}
              </span>
            </NavLink>
          )}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {!currentUser && (
            <NavLink to="/signup" className="navLinks">
              Sign Up
            </NavLink>
          )} */}
          {/* Show the Button if user is logged in */}
          {currentUser.uid === process.env.REACT_APP_ADMIN_ID ? (
            <Button
              className="btn-warning"
              onClick={() => {
                history.push("/orders");
              }}
            >
              Orders
            </Button>
          ) : (
            ""
          )}
          {Admin && (
            <Button
              className="btn btn-danger"
              onClick={() => {
                history.push("/addproducts");
              }}
            >
              AddProduct
            </Button>
          )}
          {/* {currentUser ? (
            <Button className="btn" onClick={() => logout()}>
              Logout
            </Button>
          ) : (
            <NavLink to="/login" className="navLinks">
              Login
            </NavLink>
          )} */}
        </div>
      </div>
      <br />
    </>
  );
};

export default AdminNav;
