import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
// importing svgs
import SellCrop from "../../../assets/svgs/box.svg";
import CropIcon from "../../../assets/svgs/sprout.svg";

const Sidebar = () => {
  const [select, setSelect] = useState(0);

  return (
    <div className="sidebar__main">
      <div className="sidebar__header">
        <h1>Hi 👋</h1>
        <h2>Username</h2>
        <svg
          width="40"
          height="40"
          viewBox="0 0 82 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sidebar__logo"
        >
          <path
            d="M17 0C7.63 0 0 7.63 0 17C0 26.37 7.63 34 17 34H34V17C34 7.63 26.37 0 17 0ZM17 29C10.38 29 5 23.62 5 17C5 10.38 10.38 5 17 5C23.62 5 29 10.38 29 17C29 23.62 23.62 29 17 29ZM25 17C25 21.41 21.41 25 17 25C12.59 25 9 21.41 9 17C9 12.59 12.59 9 17 9C21.41 9 25 12.59 25 17ZM82 17C82 7.63 74.37 0 65 0C55.63 0 48 7.63 48 17V34H65C74.37 34 82 26.37 82 17ZM53 17C53 10.38 58.38 5 65 5C71.62 5 77 10.38 77 17C77 23.62 71.62 29 65 29C58.38 29 53 23.62 53 17ZM65 25C60.59 25 57 21.41 57 17C57 12.59 60.59 9 65 9C69.41 9 73 12.59 73 17C73 21.41 69.41 25 65 25ZM0 65C0 74.37 7.63 82 17 82C26.37 82 34 74.37 34 65V48H17C7.63 48 0 55.63 0 65ZM29 65C29 71.62 23.62 77 17 77C10.38 77 5 71.62 5 65C5 58.38 10.38 53 17 53C23.62 53 29 58.38 29 65ZM17 57C21.41 57 25 60.59 25 65C25 69.41 21.41 73 17 73C12.59 73 9 69.41 9 65C9 60.59 12.59 57 17 57ZM65 48H48V65C48 74.37 55.63 82 65 82C74.37 82 82 74.37 82 65C82 55.63 74.37 48 65 48ZM65 77C58.38 77 53 71.62 53 65C53 58.38 58.38 53 65 53C71.62 53 77 58.38 77 65C77 71.62 71.62 77 65 77ZM73 65C73 69.41 69.41 73 65 73C60.59 73 57 69.41 57 65C57 60.59 60.59 57 65 57C69.41 57 73 60.59 73 65Z"
            fill="#fff"
          />
        </svg>
      </div>
      <div className="sidebar__options flex__center flex__flow__down">
        <Link
          to="stats"
          className="sidebar__link"
          style={{ textDecoration: "none" }}
        >
          <button
            className={
              select === 1
                ? "sidebar__button flex__center sidebar__selected"
                : "sidebar__button flex__center"
            }
            onClick={() => setSelect(1)}
          >
            <i
              className="bi bi-bar-chart-fill"
              style={{ fontSize: "25px" }}
            ></i>
            <h3>Stats</h3>
          </button>
        </Link>
        <Link
          to="sellcrops"
          className="sidebar__link"
          style={{ textDecoration: "none" }}
        >
          <button
            className={
              select === 2
                ? "sidebar__button flex__center sidebar__selected"
                : "sidebar__button flex__center"
            }
            onClick={() => setSelect(2)}
          >
            <img
              src={SellCrop}
              alt="sell crop"
              width={"25px"}
              style={{ filter: "invert(1)" }}
            ></img>
            <h3>Sell Crops</h3>
          </button>
        </Link>
        <Link
          to="analysecrop"
          className="sidebar__link"
          style={{ textDecoration: "none" }}
        >
          <button
            className={
              select === 3
                ? "sidebar__button flex__center sidebar__selected"
                : "sidebar__button flex__center"
            }
            onClick={() => setSelect(3)}
          >
            <img
              src={CropIcon}
              alt="analyse crop"
              width={"25px"}
              style={{ filter: "invert(1)" }}
            ></img>
            <h3>Analyse Crops</h3>
          </button>
        </Link>
        <Link
          to="analysesoil"
          className="sidebar__link"
          style={{ textDecoration: "none" }}
        >
          <button
            className={
              select === 4
                ? "sidebar__button flex__center sidebar__selected"
                : "sidebar__button flex__center"
            }
            onClick={() => setSelect(4)}
          >
            <img
              src={CropIcon}
              alt="analyse soil"
              width={"25px"}
              style={{ filter: "invert(1)" }}
            ></img>
            <h3>Analyse Soil</h3>
          </button>
        </Link>
        <Link
          to="schemes"
          className="sidebar__link"
          style={{ textDecoration: "none" }}
        >
          <button
            className={
              select === 5
                ? "sidebar__button flex__center sidebar__selected"
                : "sidebar__button flex__center"
            }
            onClick={() => setSelect(5)}
          >
            <i className="bi bi-card-heading" style={{ fontSize: "25px" }}></i>
            <h3>Govt. Schemes</h3>
          </button>
        </Link>
        <Link
          to="buycrops"
          className="sidebar__link"
          style={{ textDecoration: "none" }}
        >
          <button
            className={
              select === 6
                ? "sidebar__button flex__center sidebar__selected"
                : "sidebar__button flex__center"
            }
            onClick={() => setSelect(6)}
          >
            <i className="bi bi-bag-fill" style={{ fontSize: "25px" }}></i>
            <h3>Buy Crops</h3>
          </button>
        </Link>
        <Link
          to="settings"
          className="sidebar__link"
          style={{ textDecoration: "none" }}
        >
          <button
            className={
              select === 7
                ? "sidebar__button flex__center sidebar__selected"
                : "sidebar__button flex__center"
            }
            onClick={() => setSelect(7)}
          >
            <i className="bi bi-gear-fill" style={{ fontSize: "25px" }}></i>
            <h3>Settings</h3>
          </button>
        </Link>
        <button className="sidebar__button flex__center">
          <i className="bi bi-box-arrow-left" style={{ fontSize: "25px" }}></i>
          <h3>Log Out</h3>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
