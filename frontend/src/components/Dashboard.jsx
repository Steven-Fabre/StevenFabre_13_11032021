import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Transactions from "./Transactions";
import { saveToLocalStorage } from "../services/localStorage";
import { updateUser } from "../redux/actions/user.actions";

export default function Dashboard() {
  const [isEditing, setIsEditing] = useState(false);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userReducer);

  useEffect(() => {
    setNewFirstName(userData.data.firstName);
    setNewLastName(userData.data.lastName);
  }, []);

  const handleUpdate = () => {
    dispatch(updateUser(userData.token, newFirstName, newLastName));
    setIsEditing(false);
  };

  if (!userData.isLogged)
    return (
      <section className="error">
        <h1 className="account-welcome">Please Login</h1>
        <Link className="error-link" to="/sign-in">
          Go to Sign-in page
        </Link>
      </section>
    );

  if (userData.isRemember === true) {
    saveToLocalStorage({ userReducer: { ...userData } });
  }

  return (
    <div className="main bg-dark">
      <div className="header">
        <h1 className="account-welcome">Welcome back</h1>
        {isEditing ? (
          <React.Fragment>
            <div className="names-edit">
              <input
                className="name-edit"
                type="text"
                placeholder={userData.data.firstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              ></input>
              <input
                className="name-edit"
                type="text"
                placeholder={userData.data.lastName}
                onChange={(e) => setNewLastName(e.target.value)}
              ></input>
            </div>
            <div className="buttons-edit">
              <button className="button-edit" onClick={handleUpdate}>
                Save
              </button>
              <button className="button-edit" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h1 className="user-welcome"> {`${userData.data.firstName} ${userData.data.lastName}`}</h1>
            <button
              onClick={() => {
                setIsEditing(true);
              }}
              className="edit-button"
            >
              Edit Name
            </button>
          </React.Fragment>
        )}
      </div>
      <Transactions />
    </div>
  );
}
