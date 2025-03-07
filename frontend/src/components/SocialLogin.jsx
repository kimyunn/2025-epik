import "../styles/Login.css";
import naverIcon from "../assets/icons/social_naver.icon.svg";
import kakaoIcon from "../assets/icons/social_kakao_icon.svg";
import googleIcon from "../assets/icons/social_google_icon.svg";

// 소셜 로그인 컴포넌트
const SocialLogin = () => {
  return (
    <section className="login-form__social">
      {/* 구분선 */}
      <div className="login-form__social-header">
        <span className="login-form__social-title">간편 로그인</span>
      </div>
      {/* 소셜 로그인 버튼 영역 */}
      <ul className="login-form__social-list">
        <li className="login-form__social-item">
          <button className="login-form__social-button login-form__social-button--naver">
            <img
              src={naverIcon}
              alt="네이버 로고"
              className="login-form__social-button-img login-form__social-button-img--naver"
            />
            네이버 로그인
          </button>
        </li>
        <li className="login-form__social-item">
          <button className="login-form__social-button login-form__social-button--kakao">
            <img
              src={kakaoIcon}
              alt="카카오 로고"
              className="login-form__social-button-img login-form__social-button-img--kakao"
            />
            카카오 로그인
          </button>
        </li>
        <li className="login-form__social-item">
          <button className="login-form__social-button login-form__social-button--google">
            <img
              src={googleIcon}
              alt="구글 로고"
              className="login-form__social-button-img login-form__social-button-img--google"
            />
            구글 로그인
          </button>
        </li>
      </ul>
    </section>
  );
};

export default SocialLogin;
