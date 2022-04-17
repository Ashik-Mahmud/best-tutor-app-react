import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { VscSignIn } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";
import { auth } from "../../../Firebase/Firebase.config";
import SocialLogin from "../SocialLogin/SocialLogin";
import "../Styles/Styles.css";
const SignIn = () => {
  /* if user has redirect on desire page */
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  useEffect(() => {
    if (isAuth) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, isAuth]);

  const [isReset, setIsReset] = useState(false);

  /* handle login form  */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginForm = async (event) => {
    event.preventDefault();
    if (!email) return toast.error("Email field is required.");
    if (!isReset) {
      if (!password) return toast.error("Password field is required.");
    }

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Logged In successfully done.");
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  /* handle reset password  */
  const handleResetPassword = () => {
    if (!email) return toast.error("You need put email here");
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success(`We sent you email with password reset link on ${email}`);
      })
      .catch((err) => toast.error(err.message.split(":")[1]));
  };

  return (
    <section className="signIn-wrapper">
      <form action="/" className="form-wrapper" onSubmit={handleLoginForm}>
        <h3>
          {isReset ? (
            <>
              Reset <span className="colorize">Password</span>
            </>
          ) : (
            <>
              Sign In to <span className="colorize">Account</span>
            </>
          )}
        </h3>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onBlur={(event) => setEmail(event.target.value)}
          />
        </div>
        {!isReset && (
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              onBlur={(event) => setPassword(event.target.value)}
            />
          </div>
        )}

        <p>
          {isReset ? "Go to Sign In" : "Forget password ?"}

          <span
            className="colorize cursor-pointer"
            onClick={() => setIsReset((prev) => !prev)}
          >
            {isReset ? " Page" : " Reset"}
          </span>
        </p>
        <div className="input-group">
          {isReset ? (
            <button onClick={handleResetPassword} type="button" className="btn">
              Reset Password
            </button>
          ) : (
            <button className="btn d-flex">
              Sign In <VscSignIn />
            </button>
          )}
        </div>
        <p>
          Don't have an Account?{" "}
          <Link to="/sign-up" className="colorize cursor-pointer">
            Sign Up
          </Link>
        </p>
        <SocialLogin />
      </form>
    </section>
  );
};

export default SignIn;
