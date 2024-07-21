import React from "react";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/main");
  };

  return (
    <div className="login-page">
      <h2 className="page-title">로그인</h2>
      <div className="login-container">
        <form className="login-form">
          <label htmlFor="username">아이디</label>
          <input type="text" id="username" placeholder="아이디를 입력하세요." />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요."
          />
          <button type="button" className="login-button" onClick={handleLogin}>
            로그인
          </button>
          <button
            type="button"
            className="register-button"
            onClick={() => navigate("/signup")}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
