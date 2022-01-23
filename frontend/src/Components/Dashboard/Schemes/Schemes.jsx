import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Schemes.css";

const Schemes = () => {
  const [schemes, setSchemes] = useState([]);
  const getSchemes = async () => {
    const response = await fetch("http://localhost:8000/api/farmer/schemes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (json.status === 200) {
      setSchemes(json.message);
    }
  };
  useEffect(() => {
    getSchemes();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="schemes__main">
      <div className="header__dash">
        <h1>Schemes</h1>
      </div>
      <div className="schemes__section">
        {schemes.map((scheme) => {
          return (
            <div className="scheme__card display__flex flex__flow__down flex__space__between">
              <h2>{scheme.name}</h2>
              <p>{scheme.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schemes;
