import React, { useContext, useEffect, useState } from "react";
import { VscSignIn } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";
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
  return (
    <section className="signIn-wrapper">
      <form action="/" className="form-wrapper">
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
            required
            placeholder="Email"
            name="email"
            id="email"
          />
        </div>
        {!isReset && (
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
          <button className="btn d-flex">
            {isReset ? (
              <>Reset Password</>
            ) : (
              <>
                Sign In <VscSignIn />
              </>
            )}
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
