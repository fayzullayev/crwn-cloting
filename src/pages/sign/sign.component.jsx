import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sing-up/sign-up.component";
import "./sign.style.scss";

const SignInAndSignOut = () => {
  return (
    <div className="sign">
      <SignIn />
      <SignUp/>
    </div>
  );
};

export default SignInAndSignOut;
