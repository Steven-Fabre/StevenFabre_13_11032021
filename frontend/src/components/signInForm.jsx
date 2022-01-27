import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "../redux/actions/user.actions";

export default function SignInForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isRemember, setIsRemember] = useState(false);
  const emailError = document.querySelector(".emailError");
  const passwordError = document.querySelector(".passwordError");
  const userError = document.querySelector(".userError");
  const message = "Please enter";
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) emailError.innerHTML = `${message} an email`;
    else emailError.innerHTML = "";
    if (!password) passwordError.innerHTML = `${message} a password`;
    else passwordError.innerHTML = "";

    email && password && dispatch(getToken(email, password, isRemember));

    userError.innerHTML = "Loading...";
    setTimeout(() => {
      userError.innerHTML = "Incorrect Username or Password";
      return clearTimeout();
    }, 1000);
  };

  const handleOnChange = () => {
    setIsRemember(!isRemember);
  };

  //A CHANGER POUR DU LOCALSTORAGE
  if (userData.isLogged) return <Navigate to="/user" />;

  return (
    <form onSubmit={handleSubmit}>
      <p className="userError"></p>
      <div className="input-wrapper">
        <label htmlFor="username">E-mail</label>
        <input type="text" id="username" onChange={(e) => setEmail(e.target.value)} />
        <p className="emailError"></p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        <p className="passwordError"></p>
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" checked={isRemember} onChange={handleOnChange} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
}
