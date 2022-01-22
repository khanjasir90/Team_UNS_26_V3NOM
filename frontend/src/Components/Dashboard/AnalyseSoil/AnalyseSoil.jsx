import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { analyseSoilHandler } from "../../../store/analyzeSoil";
import "./AnalyseSoil.css";
import {useSelector} from "react-redux";
const AnalyseSoil = () => {
  const soilData = useSelector(state => state.soil);
  const dispatch = useDispatch();
  const [nitrogen,setNitrogen] = useState();
  const [phosphorous,setphosphorous] = useState();
  const [phLevel,setphLevel] = useState();
  const [temperature,settemperature] = useState();
  const [humidity,sethumidity] = useState();
  const [rainfall,setrainfall] = useState();
  const [potassium,setpotassium] = useState();
  // const [nitrogen,setNitrogen] = useState();
  const submitHandler = (event) => {
      event.preventDefault();
      dispatch(analyseSoilHandler({
        nitrogen,
        phosphorous,
        phLevel,
        temperature,
        humidity,
        rainfall,
        potassium
      }))
  }
  const nitrogenHandler = (event) => {
    setNitrogen(event.target.value);
  }
  const phosphorousHandler = (event) => {
    setphosphorous(event.target.value);
  }
  const potassiumHandler = (event) => {
    setpotassium(event.target.value);
  }
  const phLevelHandler = (event) => {
    setphLevel(event.target.value);
  }
  const humidityHandler = (event) => {
    sethumidity(event.target.value);
  }
  const temperatureHandler = (event) => {
    settemperature(event.target.value);
  }
  const rainfallHandler = (event) => {
    setrainfall(event.target.value);
  }
  return (
    <div className="analyse__soil__main">
      <div className="header__dash">
        <h1>Analyse Soil</h1>
      </div>
      <div className="analyse__section flex__center">
        <div className="input__fields">
          <h2>Input Here</h2>
          <form onSubmit={submitHandler}>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Nitrogen (%)</label>
              <input className="input__field" onChange={nitrogenHandler}></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Phosphorus (%)</label>
              <input className="input__field" onChange={phosphorousHandler}></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Potassium (%)</label>
              <input className="input__field" onChange={potassiumHandler}></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">PH Level (%)</label>
              <input className="input__field" onChange={phLevelHandler}></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Temperature (%)</label>
              <input className="input__field" onChange={temperatureHandler}></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Humidity (%)</label>
              <input className="input__field" onChange={humidityHandler}></input>
            </div>
            <div className="input__box flex__center flex__flow__down flex__left">
              <label className="input__field__label">Rainfall (%)</label>
              <input className="input__field" onChange={rainfallHandler}></input>
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
            {
              soilData.cropName ? `Crop Name : ${soilData.cropName}` : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              commodo odio eu erat tempus, ut volutpat ligula consectetur. Aliquam
              sollicitudin nibh eros, tempus vehicula ex placerat a. Etiam augue
              tortor, euismod non consectetur eget, feugiat in purus. Nam quis
              elit lacus. Pellentesque in aliquet felis. Vivamus tincidunt
              vestibulum neque, ut faucibus ex molestie feugiat. Duis bibendum
              velit purus, sed vestibulum nibh ullamcorper placerat.`
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalyseSoil;
