import React, { useState, useEffect } from "react";
import "../styles/Login.css";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  // 이메일과 비밀번호 값이 변경될 때마다 버튼 활성화 여부 검사
  useEffect(() => {
    const isEmailValid = email.trim() !== "";
    const isPasswordValid = password.length >= 8;
    setIsButtonEnabled(isEmailValid && isPasswordValid);
  }, [email, password]);

  // 이메일 입력값 삭제
  const handleEmailClear = () => {
    setEmail("");
  };

  // 비밀번호 입력값 삭제
  const handlePasswordClear = () => {
    setPassword("");
  };

  // 비밀번호 보이기/숨기기 토글
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 로그인 로직 추가
    console.log("로그인 시도:", { email, password });
  };

  return (
    <>
      {/* 로그인 폼 */}
      <form className="login-form" onSubmit={handleSubmit}>
        {/* 이메일 입력 */}
        <div className="login-form__input-group login-form__input-group--email">
          <input
            type="text"
            className="login-form__input login-form__input--email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            className="login-form__button login-form__button--close_email"
            onClick={handleEmailClear}
          >
            <span className="login-form__icon login-form__icon--close"></span>
          </button>
        </div>

        {/* 비밀번호 입력 */}
        <div className="login-form__input-group login-form__input-group--password">
          <input
            type={showPassword ? "text" : "password"}
            className="login-form__input login-form__input--password"
            placeholder="8~15자리 영문+숫자+특수문자 조합"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="login-form__button login-form__button--eye"
            onClick={togglePasswordVisibility}
          >
            <span
              className={`login-form__icon ${
                showPassword
                  ? "login-form__icon--eye_close"
                  : "login-form__icon--eye"
              }`}
            ></span>
          </button>
          <button
            type="button"
            className="login-form__button login-form__button--close_password"
            onClick={handlePasswordClear}
          >
            <span className="login-form__icon login-form__icon--close"></span>
          </button>
        </div>

        {/* 옵션 영역 */}
        <div className="login-form__actions">
          <label className="login-form__auto-login">
            <input type="checkbox" className="login-form__checkbox" />
            <span className="login-form__custom-checkbox"></span>
            <span className="login-form__auto-login-text">
              로그인 상태 유지
            </span>
          </label>
          <div className="login-form__links">
            <a
              href="#"
              className="login-form__link login-form__link--separator"
            >
              계정 찾기
            </a>
            <a
              href="#"
              className="login-form__link login-form__link--separator"
            >
              비밀번호 찾기
            </a>
            <a href="#" className="login-form__link">
              회원가입
            </a>
          </div>
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className="login-form__submit-button"
          disabled={!isButtonEnabled}
          style={{ opacity: isButtonEnabled ? 1 : 0.3 }}
        >
          로그인
        </button>
      </form>

      {/* 소셜 로그인 */}
      <SocialLogin />
    </>
  );
};

export default LoginForm;
