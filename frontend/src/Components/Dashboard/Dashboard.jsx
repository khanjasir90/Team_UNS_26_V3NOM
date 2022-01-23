import React from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import Sidebar from "./SideBar/Sidebar";

const Dashboard = () => {
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
