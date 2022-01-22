import React, { useContext } from "react";
import SignInContext from "../../contexts/SignInContext/SignInContext";
import "./SignIn.css";
import { useDispatch } from "react-redux";
import { signin } from "../../store/authSlice";
import { useState } from "react";

const SignIn = () => {
  const signincontext = useContext(SignInContext);
  const { hideSignIn } = signincontext;
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(signin(data));
  };

  const InputChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="signin__main flex__center">
      <div className="signin__cont">
        <h1>Sign In</h1>
        <form className="signup__form">
          <div className="signup__input__box flex__center flex__flow__down flex__left">
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Email</label>
              <input
                className="input__field"
                name="email"
                type={"email"}
                onChange={InputChange}
                value={data.email}
              ></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Password</label>
              <input
                className="input__field"
                onChange={InputChange}
                name="password"
                type={"password"}
                value={data.password}
              ></input>
            </div>
          </div>
          <button
            type="submit"
            className="button__primary"
            onClick={(e) => handleSignIn(e)}
          >
            Sign In
          </button>
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="25"
          height="25"
          fill="#02c39a"
          className="close__btn"
          onClick={() => hideSignIn()}
        >
          <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
        </svg>
      </div>
    </div>
  );
};

export default SignIn;
