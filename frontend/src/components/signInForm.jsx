import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function SignInForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isChecked, setIsChecked] = useState(false);
  const emailError = document.querySelector(".emailError");
  const passwordError = document.querySelector(".passwordError");
  const userError = document.querySelector(".userError");
  const message = "Please enter";

  useEffect(() => {}, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(isChecked);

    if (!email) emailError.innerHTML = `${message} an email`;
    else emailError.innerHTML = "";
    if (!password) passwordError.innerHTML = `${message} a password`;
    else passwordError.innerHTML = "";

    email &&
      password &&
      axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_URL}/user/login`,
        "Access-Control-Allow-Credentials": true,
        data: {
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            console.log(res.data.errors);
          } else {
            // renvoi res.data.token
            window.location = "/user";
          }
        })
        .catch((err) => {
          console.log(err);
          userError.innerHTML = "Incorrect Username or Password";
        });
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

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
        <input type="checkbox" id="remember-me" checked={isChecked} onChange={handleOnChange} />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button className="sign-in-button">Sign In</button>
    </form>
  );
}
