import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./header.css";
import underlineImage from "./밑줄.png";
import logoImage from "./logo.png";
import Login from "../../pages/Login";
import GoogleLoginButton from "../../pages/GoogleLoginButton";
import axios from "axios";

Modal.setAppElement("#root");

const Header = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogin = (state) => {
    setIsLoggedIn(state);
    closeModal();
  };

  const logout = () => {
    setIsLoggedIn(false); // 로그인 상태를 false로 변경합니다.
    // axios.get("/api/v1/account/logout")
  };

  const config = {
    headers: {
      Authorization: `${localStorage.getItem("accessToken")}`,
    },
  };
  const config2 = {
    headers: {
      Authorization: `${localStorage.getItem("accessToken")}`,
      refreshToken: `${localStorage.getItem("refreshToken")}`,
    },
  };
  const handlelogin_tk2 = async () => {
    console.log("TLqkf");
    const res = await axios
      .get("/api/v1/test", config2)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data == "refreshToken 만료") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          navigate("/");
        } else if (err.response.data == "Access 토큰 발급") {
          localStorage.setItem(
            "accessToken",
            err.response.headers.authorization
          );
          console.log("Access token 재발급");
        }
      });
  };
  const handlelogin_tk = async () => {
    try {
      console.log(localStorage.getItem("accessToken"));
      const res = await axios.get("/api/v1/test", config);
      console.log(res);
    } catch (err) {
      if (err.response?.data === "만료된 토큰") {
        console.log("만료된 토큰");
        await handlelogin_tk2();
      } else {
        navigate("/");
      }
    }
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
              onClick={handlelogin_tk}
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
        <GoogleLoginButton onLoginSuccess={() => handleLogin(true)} />
      </Modal>
    </header>
  );
};

export default Header;
