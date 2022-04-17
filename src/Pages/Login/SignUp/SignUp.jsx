import React from "react";
import { VscSignIn } from "react-icons/vsc";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <section className="signUp-wrapper">
      <form action="/" className="form-wrapper">
        <h3>
          Sign Up to <span className="colorize">Account</span>
        </h3>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            id="name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            required
            placeholder="Phone Number"
            name="phone"
            id="phone"
          />
        </div>
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
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            required
            placeholder="Confirm Password"
            name="confirm-password"
            id="confirm-password"
          />
        </div>

        <div className="input-group">
          <button className="btn d-flex">
            Sign Up <VscSignIn />
          </button>
        </div>
        <p>
          Already have an Account?{" "}
          <Link to="/sign-in" className="colorize cursor-pointer">
            Sign In
          </Link>
        </p>
        <SocialLogin />
      </form>
    </section>
  );
};

export default SignUp;
