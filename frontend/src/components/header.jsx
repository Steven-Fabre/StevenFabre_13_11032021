import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Header() {
  const userData = useSelector((state) => state.userReducer);

  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src="./img/argentBankLogo.png" alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {userData.isLogged ? (
          <React.Fragment>
            <NavLink to="sign-in" className="main-nav-item">
              <i className="fas fa-user-circle"></i>
              {userData.data.firstName}
            </NavLink>
            <NavLink
              onClick={() => {
                localStorage.clear();
                window.location = "/";
              }}
              to="/"
              className="main-nav-item signout"
            >
              <i className="fas fa-sign-out-alt"></i>
            </NavLink>
          </React.Fragment>
        ) : (
          <NavLink to="sign-in" className="main-nav-item">
            <i className="fas fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}
