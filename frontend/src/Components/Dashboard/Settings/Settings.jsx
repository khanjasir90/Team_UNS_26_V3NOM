import React from "react";
import { useState } from "react";
import "./Settings.css";
import { notiAction } from "../../../store/notificationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const dispatch = useDispatch();
  const [deletePass, setDeletePass] = useState("");
  const user_data = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const handleChangePass = async (id, e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:8000/api/settingApi/changePassword/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: pass,
          newPassword: newPass,
        }),
      }
    );
    const json = await response.json();
    if (json.status === 200) {
      dispatch(
        notiAction.enableNotification({
          message: "Password changed successfully!",
          heading: "Success",
        })
      );
      setTimeout(() => {
        dispatch(notiAction.disableNotification());
      }, 2000);
    }
    setPass("");
    setNewPass("");
  };

  const deleteAccount = async (id, e) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:8000/api/settingApi/deleteAccount/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPassword: deletePass,
        }),
      }
    );
    const json = await response.json();
    if (json.status === 200) {
      dispatch(
        notiAction.enableNotification({
          message: "Account deleted successfully!",
          heading: "Success",
        })
      );
      setTimeout(() => {
        dispatch(notiAction.disableNotification());
      }, 2000);
    }
    setDeletePass("");
    navigate("/");
  };

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
            <input
              className="input__field"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            ></input>
          </div>
          <div className="input__box flex__center flex__flow__down flex__left">
            <label className="input__field__label">New Password</label>
            <input
              className="input__field"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
            ></input>
          </div>
          <button
            className="button__primary"
            onClick={(e) => handleChangePass(user_data.user_id, e)}
          >
            Change
          </button>
        </form>
      </div>
      <div className="settings__section">
        <h2>Delete Account</h2>
        <form className="change__pass__form">
          <div className="input__box flex__center flex__flow__down flex__left">
            <label className="input__field__label">Password</label>
            <input
              className="input__field"
              type={"password"}
              value={deletePass}
              onChange={(e) => setDeletePass(e.target.value)}
            ></input>
          </div>
          <button
            className="button__primary"
            onClick={(e) => deleteAccount(user_data.user_id, e)}
          >
            Delete Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
