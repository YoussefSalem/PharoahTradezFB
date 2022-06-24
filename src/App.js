import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useStateValue } from "./StateProvider";
import Widgets from "./Widgets";
import Landing from "./Landing";
import AddProducts from "./components/AddProducts";
import Home from "./components/Home";
import SignUp from "./components/user/Signup";
// import Login from "./components/user/Login";
import Slogin from "./components/user/Login";
import NavAndFooter from "./components/navbarAndFooter/NavAndFooter";
import AuthProvider from "./global/AuthContext";
import CartContextProvider from "./global/CartContext";
import Cart from "./components/Cart";
import { Cashout } from "./components/Cashout";
import Orders from "./components/Orders";
import AboutUs from "./AboutUs";
import { auth } from "./firebase/config";
import { actionTypes } from "./Reducer";
import { useAuth } from "./global/AuthContext";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [currentUser, setCurrentUser] = useState(auth.currentUser && null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch({
      // user: auth.
    });
    // const unsubscribe = auth.user((user) => {
    //   setCurrentUser(user);
    //   dispatch({
    //     user: user,
    //   });
    //   console.log(user);
    //   // auth.signOut();
    //   setLoading(false);
    // });
    // return unsubscribe;
  }, []);
  return (
    // Bem
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route
            path="/Trade"
            element={
              !user ? (
                <Login />
              ) : (
                <>
                  <Header />

                  <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                  </div>
                </>
              )
            }
          />
          <Route
            path="/Store"
            element={
              <AuthProvider>
                <CartContextProvider>
                  <NavAndFooter>
                    <Home />
                  </NavAndFooter>
                </CartContextProvider>
              </AuthProvider>
            }
          />
          <Route
            path="/cart"
            element={
              <AuthProvider>
                <CartContextProvider>
                  <NavAndFooter>
                    <Cart />
                  </NavAndFooter>
                </CartContextProvider>
              </AuthProvider>
            }
          />
          <Route
            path="/login"
            element={
              <AuthProvider>
                <CartContextProvider>
                  <NavAndFooter>
                    <Slogin />
                  </NavAndFooter>
                </CartContextProvider>
              </AuthProvider>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthProvider>
                <CartContextProvider>
                  <NavAndFooter>
                    <SignUp />
                  </NavAndFooter>
                </CartContextProvider>
              </AuthProvider>
            }
          />
          <Route
            path="/cart/cashout"
            element={
              <AuthProvider>
                <CartContextProvider>
                  <NavAndFooter>
                    <Cashout />
                  </NavAndFooter>
                </CartContextProvider>
              </AuthProvider>
            }
          />
          <Route
            path="/orders"
            element={
              <AuthProvider>
                <CartContextProvider>
                  <NavAndFooter>
                    <Orders />
                  </NavAndFooter>
                </CartContextProvider>
              </AuthProvider>
            }
          />
          <Route
            path="/addproducts"
            element={
              <AuthProvider>
                <CartContextProvider>
                  <NavAndFooter>
                    <AddProducts />
                  </NavAndFooter>
                </CartContextProvider>
              </AuthProvider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
