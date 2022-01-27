import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Signin from "./pages/signin";
import User from "./pages/user";
import Header from "./components/header";
import Footer from "./components/footer";
import Error from "./components/error";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/sign-in" exact element={<Signin />} />
          <Route path="/user" exact element={<User />} />
          <Route path="/" exact element={<Main />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
