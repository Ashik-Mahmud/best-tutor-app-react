import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";
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

  /* handle facebook sign in */
  const handleFacebookSignIn = () => {
    const facebookProvider = new FacebookAuthProvider();
    signInWithSocial(facebookProvider);
  };
  /* handle github sign in */
  const handleGithubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithSocial(githubProvider);
  };

  /* handle twitter sign in */
  const handleTwitterSignIn = () => {
    const twitterProvider = new TwitterAuthProvider();
    signInWithSocial(twitterProvider);
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
        <button
          onClick={handleFacebookSignIn}
          title="Sign In with Facebook"
          type="button"
        >
          <BsFacebook />
        </button>
        <button
          onClick={handleGithubSignIn}
          title="Sign In with Github"
          type="button"
        >
          <BsGithub />
        </button>
        <button
          onClick={handleTwitterSignIn}
          title="Sign In with Twitter"
          type="button"
        >
          <BsTwitter />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
