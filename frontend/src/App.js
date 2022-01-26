import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Signin from "./pages/signin";
import User from "./pages/user";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
