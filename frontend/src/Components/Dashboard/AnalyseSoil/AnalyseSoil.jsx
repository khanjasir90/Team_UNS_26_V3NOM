import React from "react";
import "./AnalyseSoil.css";

const AnalyseSoil = () => {
  return (
    <div className="analyse__soil__main">
      <div className="header__dash">
        <h1>Analyse Soil</h1>
      </div>
      <div className="analyse__section flex__center">
        <div className="input__fields">
          <h2>Input Here</h2>
          <form>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Nitrogen (%)</label>
              <input className="input__field"></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Phosphorus (%)</label>
              <input className="input__field"></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Potassium (%)</label>
              <input className="input__field"></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">PH Level (%)</label>
              <input className="input__field"></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Temperature (%)</label>
              <input className="input__field"></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Humidity (%)</label>
              <input className="input__field"></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Rainfall (%)</label>
              <input className="input__field"></input>
            </div>
            <br />
            <button className="button__primary" type="submit">
              Analyse Soil
            </button>
          </form>
        </div>
        <div className="analysis__result">
          <h2>Result</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            commodo odio eu erat tempus, ut volutpat ligula consectetur. Aliquam
            sollicitudin nibh eros, tempus vehicula ex placerat a. Etiam augue
            tortor, euismod non consectetur eget, feugiat in purus. Nam quis
            elit lacus. Pellentesque in aliquet felis. Vivamus tincidunt
            vestibulum neque, ut faucibus ex molestie feugiat. Duis bibendum
            velit purus, sed vestibulum nibh ullamcorper placerat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyseSoil;
