import React from "react";
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from "react-icons/bs";
const SocialLogin = () => {
  return (
    <div className="social-login">
      <p className="line">OR</p>
      <div className="btn-group">
        <button title="Sign In with Google" type="button">
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
