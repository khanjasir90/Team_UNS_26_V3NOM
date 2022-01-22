import React from "react";
import "./Alert.css";
import { useSelector } from "react-redux";

const Alert = () => {
  const alertstate = useSelector((state) => state.noti);

  return (
    <div
      className={alertstate.showNoti ? "alert__body translated" : "alert__body"}
    >
      <h1>{alertstate.heading}</h1>
      <h4>{alertstate.message}</h4>
    </div>
  );
};

export default Alert;
