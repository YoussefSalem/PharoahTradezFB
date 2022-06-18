import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
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
        console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://cdn.discordapp.com/attachments/970813061919281202/982666918043451422/NLogo-modified.png"
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
