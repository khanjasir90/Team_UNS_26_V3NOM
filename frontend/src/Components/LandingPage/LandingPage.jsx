import React, { useContext } from "react";
import "./LandingPage.css";

// importing components
import Navbar from "../Navbar/Navbar";
import Card from "./Card/Card";
import Footer from "../Footer/Footer";
// importing assets
import cards from "../../assets/json/cards";
// importing contexts
import SignUpContext from "../../contexts/SignUpContext/SignUpContext";
import SignInContext from "../../contexts/SignInContext/SignInContext";

const LandingPage = () => {
  const signupcontext = useContext(SignUpContext);
  const { showSignUp } = signupcontext;
  const signincontext = useContext(SignInContext);
  const { showSignIn } = signincontext;
  return (
    <>
      <div className="landing__page__main">
        <Navbar />
        <Header showSignUp={showSignUp} showSignIn={showSignIn} />
      </div>
      <CardSection />
      <Footer />
    </>
  );
};

const Header = ({ showSignUp, showSignIn }) => {
  return (
    <div className="landing__page__header flex__center flex__flow__down flex__left">
      <h1>Farmzo</h1>
      <h3>A one stop solution for a farmer</h3>
      <div className="landing__header__buttons">
        <button className="button__primary" onClick={() => showSignIn()}>
          Sign In
        </button>
        <button className="button__secondry" onClick={() => showSignUp()}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

const CardSection = () => {
  return (
    <div className="landing__card__section">
      <h2>We are here to help you in -&#62;</h2>
      <div className="card__section">
        {cards.map((card) => {
          return <Card data={card} />;
        })}
      </div>
    </div>
  );
};

export default LandingPage;
