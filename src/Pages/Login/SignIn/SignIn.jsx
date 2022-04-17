import React from "react";
import { VscSignIn } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import "../Styles/Styles.css";
const SignIn = () => {
  return (
    <section className="signIn-wrapper">
      <form action="/" className="form-wrapper">
        <h3>
          Sign In to <span className="colorize">Account</span>
        </h3>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            id="email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            id="password"
          />
        </div>
        <p>
          Forget password ?{" "}
          <span className="colorize cursor-pointer">Reset</span>
        </p>
        <div className="input-group">
          <button className="btn d-flex">
            Sign In <VscSignIn />
          </button>
        </div>
        <p>
          Don't have an Account?{" "}
          <Link to="/sign-up" className="colorize cursor-pointer">
            Create
          </Link>
        </p>
        <SocialLogin />
      </form>
    </section>
  );
};

export default SignIn;
