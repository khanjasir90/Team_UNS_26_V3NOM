import React from "react";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings__main">
      <div className="header__dash">
        <h1>Settings</h1>
      </div>
      <div className="settings__section">
        <h2>Change Password</h2>
        <form className="change__pass__form">
          <div className="input__box flex__center flex__flow__down flex__left">
            <label className="input__field__label">Current Password</label>
            <input className="input__field"></input>
          </div>
          <div className="input__box flex__center flex__flow__down flex__left">
            <label className="input__field__label">New Password</label>
            <input className="input__field"></input>
          </div>
          <button className="button__primary">Change</button>
        </form>
      </div>
      <div className="settings__section">
        <h2>Delete Account</h2>
        <form className="change__pass__form">
          <div className="input__box flex__center flex__flow__down flex__left">
            <label className="input__field__label">Password</label>
            <input className="input__field" type={"password"}></input>
          </div>
          <button className="button__primary">Delete Account</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
