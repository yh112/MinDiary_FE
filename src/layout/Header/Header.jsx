import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import "./header.css";
import logoImage from "./logo.png";
import GoogleLoginButton from "../../pages/GoogleLoginButton";
import useTokenHandler from "./useTokenHandler";
import axios from "axios";

Modal.setAppElement("#root");

const Header = () => {
  const { checkToken } = useTokenHandler();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    closeModal();
  };
  const handlelogout = async () => {
    const response = await axios.get("/api/v1/account/logout", {
      headers: {
        Authorization: `${localStorage.getItem("accessToken")}`,
      },
    });
  };

  const logout = () => {
    handlelogout();
    console.log("Logout function called");
    setIsLoggedIn(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    console.log("isLoggedIn state:", isLoggedIn);
  };

  return (
    <header className="header-1">
      <nav className="navigation">
        <ul>
          <li className="nav-item">
            <NavLink to="/" className="nav-link" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/diary"
              className="nav-link"
              activeClassName="active"
              onClick={checkToken}
            >
              DIARY
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="logo">
        <img src={logoImage} alt="logo" />
      </div>
      <div className="auth-buttons">
        {isLoggedIn ? (
          <button className="login-btn" onClick={logout}>
            Log out
          </button>
        ) : (
          <button className="login-btn" onClick={openModal}>
            Log in
          </button>
        )}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
        className="modal full-screen-modal"
        overlayClassName="overlay full-screen-overlay"
      >
        <button onClick={closeModal} className="close-modal-btn">
          Close
        </button>
        <GoogleLoginButton onLoginSuccess={handleLogin} />
      </Modal>
    </header>
  );
};

export default Header;
