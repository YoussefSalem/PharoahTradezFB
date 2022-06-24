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
  );
}

export default Login;
