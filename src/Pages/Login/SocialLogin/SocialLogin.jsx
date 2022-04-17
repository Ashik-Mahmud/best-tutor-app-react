import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";
import useFirebase from "../../../Hooks/useFirebase";
const SocialLogin = () => {
  const { signInWithSocial } = useFirebase();
  /* handle google sign in */
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithSocial(googleProvider);
  };

  return (
    <div className="social-login">
      <p className="line">OR</p>
      <div className="btn-group">
        <button
          onClick={handleGoogleSignIn}
          title="Sign In with Google"
          type="button"
        >
          <BsGoogle />
        </button>
        <button title="Sign In with Facebook" type="button">
          <BsFacebook />
        </button>
        <button title="Sign In with Github" type="button">
          <BsGithub />
        </button>
        <button title="Sign In with Twitter" type="button">
          <BsTwitter />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
