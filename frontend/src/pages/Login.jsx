import React from "react";
import "../styles/Login.css";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div className="login-wrap">
        {/* 로고 영역 */}
        <header className="header">
          <h1 className="header__title">EPIK</h1>
        </header>

        {/* 로그인 폼 */}
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
