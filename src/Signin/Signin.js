import React, { useState } from "react";
import Header from "../Header/Header";
import { Link, useHistory } from "react-router-dom";
import "./Signin.scss";
import { auth } from "../firebase";
import { getAllByPlaceholderText } from "@testing-library/dom";

function Signin() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        alert("Sign in Success!");
      })
      .then(() => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((e) => alert(e.message));
  };

  return (
    <>
      <Header />
      <div className="signin">
        <Link>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="logo"
            className="signin__logo"
          />
        </Link>
        <div className="signin__container">
          <h1>Sign in</h1>
          <form action="">
            <h5>E-mail</h5>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name=""
              id=""
            />
            <h5>Password</h5>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name=""
              id=""
            />
            <button onClick={login} type="submit" className="signin__signinBtn">
              Sign In
            </button>
            <p>
              By signing-in, you agree to Amazon's Conditions of Use & Sale.
              Please see our Privacy Notice, our Cookies Notice and our
              interest-Based Ads Notice.
            </p>
            <button onClick={register} className="signin__registerBtn">
              Create your Amazon Account
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
