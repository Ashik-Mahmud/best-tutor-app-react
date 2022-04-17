import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { VscSignIn } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../App";
import { auth } from "../../../Firebase/Firebase.config";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
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

  /*  handle form area  */
  const [formInput, setFormInput] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const formRef = useRef(null);
  /* handle sign up form  */
  const handleSignUpForm = async (event) => {
    event.preventDefault();
    if (!formInput.name) return toast.error("Name field is required.");
    if (!formInput.phone) return toast.error("Phone field is required.");
    if (!formInput.email) return toast.error("Email field is required.");
    if (!formInput.password) return toast.error("Password field is required");
    if (!formInput.confirmPassword)
      return toast.error("Confirm Password field is required");
    if (formInput.password !== formInput.confirmPassword)
      return toast.error("Password didn't match.");

    await createUserWithEmailAndPassword(
      auth,
      formInput.email,
      formInput.password
    )
      .then((res) => {
        updateProfile(res.user, {
          displayName: formInput.name,
          phoneNumber: formInput.phone,
        }).then(() => {
          toast.success("User created successfully done.");
          formRef.current.reset();
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message.split(":")[1]);
      });
  };

  return (
    <section className="signUp-wrapper">
      <form
        action="/"
        className="form-wrapper"
        onSubmit={handleSignUpForm}
        ref={formRef}
      >
        <h3>
          Sign Up to <span className="colorize">Account</span>
        </h3>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            onChange={(e) =>
              setFormInput({ ...formInput, name: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            name="phone"
            id="phone"
            onChange={(e) =>
              setFormInput({ ...formInput, phone: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            onChange={(e) =>
              setFormInput({ ...formInput, email: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={(e) =>
              setFormInput({ ...formInput, password: e.target.value })
            }
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm-password"
            id="confirm-password"
            onChange={(e) =>
              setFormInput({ ...formInput, confirmPassword: e.target.value })
            }
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
