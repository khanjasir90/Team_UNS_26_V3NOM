import React from "react";
import "./Schemes.css";

const schemes = [
  {
    id: "1",
    name: "Pardarshi Kisan Seva Yojana",
    desc: "Pardarshi Kisan Seva Yojana has been implemented for the convenience of farmers in the state. Under this, the selection of farmers will be done online to provide financial assistance. The cash grant will be sent directly to the bank account of the beneficiary farmers. farmers and laborers can get their registration done online.",
  },
  {
    id: "1",
    name: "Pardarshi Kisan Seva Yojana",
    desc: "Pardarshi Kisan Seva Yojana has been implemented for the convenience of farmers in the state. Under this, the selection of farmers will be done online to provide financial assistance. The cash grant will be sent directly to the bank account of the beneficiary farmers. farmers and laborers can get their registration done online.",
  },
  {
    id: "1",
    name: "Pardarshi Kisan Seva Yojana",
    desc: "Pardarshi Kisan Seva Yojana has been implemented for the convenience of farmers in the state. Under this, the selection of farmers will be done online to provide financial assistance. The cash grant will be sent directly to the bank account of the beneficiary farmers. farmers and laborers can get their registration done online.",
  },
];

const Schemes = () => {
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
              <p>{scheme.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schemes;
