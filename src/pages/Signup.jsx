import React, { useState } from "react";
import "./auth.css";

const Signup = () => {
  const [errors, setErrors] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = () => {
    const newErrors = {};
    if (!document.getElementById("username").value) {
      newErrors.username = "아이디를 입력해주세요.";
    }
    if (!document.getElementById("nickname").value) {
      newErrors.nickname = "닉네임을 입력해주세요.";
    }
    if (!document.getElementById("password").value) {
      newErrors.password = "비밀번호를 입력해주세요.";
    }
    if (
      document.getElementById("password").value !==
      document.getElementById("confirm-password").value
    ) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newErrors);
  };

  return (
    <div className="signup-page">
      <h2 className="page-title">회원가입</h2>
      <div className="signup-container">
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="username">아이디</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="username"
                placeholder="아이디를 입력하세요."
              />
              <button type="button" className="check-button">
                중복 확인
              </button>
            </div>
            {errors.username && (
              <div className="error-message">{errors.username}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="nickname">닉네임</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="nickname"
                placeholder="8글자 이하로 입력해주세요."
              />
              <button type="button" className="check-button">
                중복 확인
              </button>
            </div>
            {errors.nickname && (
              <div className="error-message">{errors.nickname}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호는 대문자, 숫자를 포함하는 8~15자리로 입력해주세요."
            />
            {errors.password && (
              <div className="error-message">{errors.password}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">비밀번호 확인</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="비밀번호를 다시 입력하세요."
            />
            {errors.confirmPassword && (
              <div className="error-message">{errors.confirmPassword}</div>
            )}
          </div>
          <button
            type="button"
            className="signup-button"
            onClick={handleSubmit}
          >
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
