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
      <div className="navbar">
        <div className="left">
          <NavLink to="/">
            <img src="assets/Landing/img/gallery/logo-black.png" alt="logo" />
          </NavLink>
        </div>
        <div className="right">
          {currentUser && (
            <h5>
              you are logged in as:{"  "}
              <span className="font-weight-lighter m-2 p-2">
                {currentUser.email}
              </span>
            </h5>
          )}
          {!Admin && (
            <NavLink to="/cart">
              <Icon icon={cart} size={30} style={{ color: "orange" }} />
              <span className="font-weight-bolder text-danger mr-3">
                {totalQty}{" "}
              </span>
            </NavLink>
          )}
          {!currentUser && (
            <NavLink to="/signup" className="navLinks">
              Sign Up
            </NavLink>
          )}

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
      <br />
    </>
  );
};

export default AdminNav;
