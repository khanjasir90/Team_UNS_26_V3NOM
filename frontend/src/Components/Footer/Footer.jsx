import React, { useContext } from "react";
import SignInContext from "../../contexts/SignInContext/SignInContext";
import SignUpContext from "../../contexts/SignUpContext/SignUpContext";
import "./Footer.css";

const Footer = () => {
  const signupcontext = useContext(SignUpContext);
  const { showSignUp } = signupcontext;
  const signincontext = useContext(SignInContext);
  const { showSignIn } = signincontext;
  return (
    <div className="footer__main flex__center flex__space__between">
      <div className="footer__left">
        <svg
          width="80"
          height="80"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 0C7.63 0 0 7.63 0 17C0 26.37 7.63 34 17 34H34V17C34 7.63 26.37 0 17 0ZM17 29C10.38 29 5 23.62 5 17C5 10.38 10.38 5 17 5C23.62 5 29 10.38 29 17C29 23.62 23.62 29 17 29ZM25 17C25 21.41 21.41 25 17 25C12.59 25 9 21.41 9 17C9 12.59 12.59 9 17 9C21.41 9 25 12.59 25 17ZM82 17C82 7.63 74.37 0 65 0C55.63 0 48 7.63 48 17V34H65C74.37 34 82 26.37 82 17ZM53 17C53 10.38 58.38 5 65 5C71.62 5 77 10.38 77 17C77 23.62 71.62 29 65 29C58.38 29 53 23.62 53 17ZM65 25C60.59 25 57 21.41 57 17C57 12.59 60.59 9 65 9C69.41 9 73 12.59 73 17C73 21.41 69.41 25 65 25ZM0 65C0 74.37 7.63 82 17 82C26.37 82 34 74.37 34 65V48H17C7.63 48 0 55.63 0 65ZM29 65C29 71.62 23.62 77 17 77C10.38 77 5 71.62 5 65C5 58.38 10.38 53 17 53C23.62 53 29 58.38 29 65ZM17 57C21.41 57 25 60.59 25 65C25 69.41 21.41 73 17 73C12.59 73 9 69.41 9 65C9 60.59 12.59 57 17 57ZM65 48H48V65C48 74.37 55.63 82 65 82C74.37 82 82 74.37 82 65C82 55.63 74.37 48 65 48ZM65 77C58.38 77 53 71.62 53 65C53 58.38 58.38 53 65 53C71.62 53 77 58.38 77 65C77 71.62 71.62 77 65 77ZM73 65C73 69.41 69.41 73 65 73C60.59 73 57 69.41 57 65C57 60.59 60.59 57 65 57C69.41 57 73 60.59 73 65Z"
            fill="#f0f3bd"
          />
        </svg>
      </div>
      <div className="footer__right">
        <ul className="footer__links flex__center">
          <li className="f__link flex__center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="25px"
              height="25px"
              fill="#f0f3bd"
            >
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
            </svg>
          </li>
          <li className="f__link">About</li>
          <li className="f__link" onClick={() => showSignIn()}>
            Sign In
          </li>
          <li className="f__link" onClick={() => showSignUp()}>
            Sign Up
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
