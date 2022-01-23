import React, { useState, useEffect, useRef } from "react";
import "./AnalyseCrops.css";
import { useDispatch } from "react-redux";
import { predictDisease } from "../../../store/analyzeSoil";
import { useSelector } from "react-redux";
import { langActions } from "../../../store/languageSlice";
const AnalyseCrops = () => {
  const langData = useSelector(state => state.lang);
  const diseaseData = useSelector(state => state.soil);
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result.toString());
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);
  const predictDiseaseHandler = () => {
    const formdata = new FormData();
    formdata.append("image",image);
    dispatch(predictDisease(formdata));
  }
  return (
    <div className="analyse__crops__main">
      <div className="header__dash flex__center flex__space__between">
        <h1>Analyze crops</h1>
        <div>
          <input
            type="file"
            id="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(event) => {
              const file = event.target.files[0];
              if (file) {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          ></input>
          <label
            htmlFor="file"
            className="upload__button"
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
            <i className="bi bi-file-earmark-arrow-up-fill"></i>
            Upload Image
          </label>
        </div>
      </div>
      <div className="analyse__section flex__center">
        <div className="image__section">
          {preview ? (
            <img src={preview} alt="preview" className="preview__image"></img>
          ) : (
            <h3>No image uploaded</h3>
          )}
          <br />
          <button className="button__primary" onClick={predictDiseaseHandler}>Analyse</button>
        </div>
        <div className="analysis__result flex__center flex__space__between flex__flow__down flex__left">
          <h2>Disease Name</h2>
          <p>
            { diseaseData.diseaseName? `Disease Name : ${diseaseData.diseaseName}` : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            commodo odio eu erat tempus, ut volutpat ligula consectetur. Aliquam
            sollicitudin nibh eros, tempus vehicula ex placerat a. Etiam augue
            tortor, euismod non consectetur eget, feugiat in purus. Nam quis
            elit lacus. Pellentesque in aliquet felis. Vivamus tincidunt
            vestibulum neque, ut faucibus ex molestie feugiat. Duis bibendum
            velit purus, sed vestibulum nibh ullamcorper placerat.`}
          </p>
          <h2>Result</h2>
          <p>
          { diseaseData.solution? `Solution : ${diseaseData.solution} \n Confidence : ${diseaseData.confidenceRate}` : (langData.lang === "HI"? `यहां आप किसी भी संभावित बीमारी या पौधों के संक्रमण के लिए अपनी फसलों का विश्लेषण कर सकते हैं और हमारे एमएल एल्गोरिथम के माध्यम से इसका समाधान प्राप्त कर सकते हैं, बस शीर्ष पर "अपलोड इमेज" बटन पर क्लिक करें और विश्लेषण विकल्प पर क्लिक करें।` : `Here you can analyse your crops for any possible diseases or plant infections and get a solution for that through our ML algorithm, just click the “upload image” button on the top and click Analyse option`)}
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

export default AnalyseCrops;
