import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "./SideBar/Sidebar";

const Dashboard = () => {
  const user_data = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      if (!user_data.loggedIn) {
        navigate("/");
      }
    }, 1000);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="dashboard__main flex__center">
        <Sidebar />
        <div className="dash__container__main">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
