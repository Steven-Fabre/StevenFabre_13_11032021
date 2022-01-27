import React from "react";
import SignInForm from "../../components/SignInForm";

export default function Signin() {
  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SignInForm />
      </section>
    </div>
  );
}
