import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import SignInContext from "../../contexts/SignInContext/SignInContext";
import SignUpContext from "../../contexts/SignUpContext/SignUpContext";
import "./Navbar.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const signupcontext = useContext(SignUpContext);
  const { showSignUp } = signupcontext;
  const signincontext = useContext(SignInContext);
  const { showSignIn } = signincontext;
  return (
    <div className="navbar__main flex__center flex__space__between">
      <div className="navbar__left flex__center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 0C7.63 0 0 7.63 0 17C0 26.37 7.63 34 17 34H34V17C34 7.63 26.37 0 17 0ZM17 29C10.38 29 5 23.62 5 17C5 10.38 10.38 5 17 5C23.62 5 29 10.38 29 17C29 23.62 23.62 29 17 29ZM25 17C25 21.41 21.41 25 17 25C12.59 25 9 21.41 9 17C9 12.59 12.59 9 17 9C21.41 9 25 12.59 25 17ZM82 17C82 7.63 74.37 0 65 0C55.63 0 48 7.63 48 17V34H65C74.37 34 82 26.37 82 17ZM53 17C53 10.38 58.38 5 65 5C71.62 5 77 10.38 77 17C77 23.62 71.62 29 65 29C58.38 29 53 23.62 53 17ZM65 25C60.59 25 57 21.41 57 17C57 12.59 60.59 9 65 9C69.41 9 73 12.59 73 17C73 21.41 69.41 25 65 25ZM0 65C0 74.37 7.63 82 17 82C26.37 82 34 74.37 34 65V48H17C7.63 48 0 55.63 0 65ZM29 65C29 71.62 23.62 77 17 77C10.38 77 5 71.62 5 65C5 58.38 10.38 53 17 53C23.62 53 29 58.38 29 65ZM17 57C21.41 57 25 60.59 25 65C25 69.41 21.41 73 17 73C12.59 73 9 69.41 9 65C9 60.59 12.59 57 17 57ZM65 48H48V65C48 74.37 55.63 82 65 82C74.37 82 82 74.37 82 65C82 55.63 74.37 48 65 48ZM65 77C58.38 77 53 71.62 53 65C53 58.38 58.38 53 65 53C71.62 53 77 58.38 77 65C77 71.62 71.62 77 65 77ZM73 65C73 69.41 69.41 73 65 73C60.59 73 57 69.41 57 65C57 60.59 60.59 57 65 57C69.41 57 73 60.59 73 65Z"
            fill="#02c39a"
          />
        </svg>
        <h3>Farmzo</h3>
      </div>
      <div className={nav ? "navbar__right translated" : "navbar__right"}>
        <ul className="nav__links__cont flex__center">
          <li className="flex__center">
            <Link
              to="/about"
              style={{ textDecoration: "none" }}
              className="nav__link"
            >
              About
            </Link>
          </li>
          <li className="nav__link" onClick={() => showSignUp()}>
            Sign Up
          </li>
          <li className="nav__link" onClick={() => showSignIn()}>
            Sign In
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="close__button"
          width="35"
          height="35"
          onClick={() => setNav(false)}
          fill="#02c39a"
        >
          <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
        </svg>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="burger"
        width={"25px"}
        height={"25px"}
        onClick={() => setNav(true)}
        fill="#02c39a"
      >
        <g data-name="Layer 2">
          <g data-name="menu">
            <rect
              width="24"
              height="24"
              opacity="0"
              transform="rotate(180 12 12)"
            />
            <rect width="18" height="2" x="3" y="11" rx=".95" ry=".95" />
            <rect width="18" height="2" x="3" y="16" rx=".95" ry=".95" />
            <rect width="18" height="2" x="3" y="6" rx=".95" ry=".95" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Navbar;
