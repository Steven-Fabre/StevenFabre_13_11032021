import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { saveToLocalStorage } from "../../services/localStorage";

export default function Dashboard() {
  const userData = useSelector((state) => state.userReducer);

  if (userData.isRemember === true) {
    saveToLocalStorage({ userReducer: { ...userData } });
  }

  if (!userData.isLogged)
    return (
      <section className="error">
        <h1 className="account-welcome">Please Login</h1>
        <Link className="error-link" to="/sign-in">
          Go to Sign-in page
        </Link>
      </section>
    );

  return (
    <div className="main bg-dark">
      <div className="header">
        <h1 className="account-welcome">
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  );
}