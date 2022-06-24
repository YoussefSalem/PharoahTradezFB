import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { CartContext } from "../../global/CartContext";

function Navbar() {
  const { totalQty } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="left">
        <NavLink to="/">
        <img src="assets/Landing/img/gallery/logo-black.png" alt="logo" />
        </NavLink>
      </div>
      <div className="right">
        {
          <NavLink to="/cart">
            <ShoppingCartOutlinedIcon size={30} style={{ color: "blue" }} />
            <span className="font-weight-bolder text-danger mr-3">
              {totalQty}{" "}
            </span>
          </NavLink>
        }

        <NavLink to="/signup" className="navLinks btn btn-primary">
          SignUp
        </NavLink>
        <NavLink to="/login" className="navLinks btn btn-success">
          Login
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
