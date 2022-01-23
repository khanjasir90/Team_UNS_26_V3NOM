import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { analyseSoilHandler } from "../../../store/analyzeSoil";
import "./AnalyseSoil.css";
import {useSelector} from "react-redux";
import { langActions } from "../../../store/languageSlice";
const AnalyseSoil = () => {
  const langData = useSelector(state => state.lang);
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
              soilData.cropName ? `Crop Name : ${soilData.cropName}` : (langData.lang === "HI"? `मृदा स्वास्थ्य कार्ड (एसएचसी) भारत के कृषि विभाग द्वारा प्रदान की जाने वाली एक योजना है जिसमें वे मिट्टी के स्वास्थ्य का आकलन करने के लिए एक उपयोगकर्ता के अनुकूल, इसे स्वयं करें उपकरण प्रदान कर रहे हैं जिसमें 12 मानकों के संबंध में उसकी मिट्टी की स्थिति शामिल होगी, अर्थात् एन, पी, के (मैक्रो-पोषक तत्व); एस (माध्यमिक- पोषक तत्व); Zn, Fe, Cu, Mn, Bo (सूक्ष्म - पोषक तत्व); और पीएच, ईसी, ओसी (भौतिक पैरामीटर)।` : `Soil Health Card (SHC) is a Scheme provided by Agriculture Department of India in which they are providing a user-friendly,do-it-yourself tool to assess soil health which will contain the status of his soil with respect to 12 parameters, namely N,P,K (Macro-nutrients); S (Secondary- nutrient); Zn, Fe, Cu, Mn, Bo (Micro - nutrients); and pH, EC, OC (Physical parameters).`)
            }
          </p>
        </div>
      </div>
      <button className="button__primary" onClick={()=>{
        if (langData.lang == "EN"){
          dispatch(langActions.changeLang("HI"))
        }else{
          dispatch(langActions.changeLang("EN"));
        }
      }}>Toggle</button>
    </div>
  );
};

export default AnalyseSoil;
