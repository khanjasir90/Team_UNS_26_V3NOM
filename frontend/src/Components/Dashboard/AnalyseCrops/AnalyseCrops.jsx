import React, { useState, useEffect, useRef } from "react";
import "./AnalyseCrops.css";

const AnalyseCrops = () => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

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
          <button className="button__primary">Analyse</button>
        </div>
        <div className="analysis__result flex__center flex__space__between flex__flow__down flex__left">
          <h2>Disease Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            commodo odio eu erat tempus, ut volutpat ligula consectetur. Aliquam
            sollicitudin nibh eros, tempus vehicula ex placerat a. Etiam augue
            tortor, euismod non consectetur eget, feugiat in purus. Nam quis
            elit lacus. Pellentesque in aliquet felis. Vivamus tincidunt
            vestibulum neque, ut faucibus ex molestie feugiat. Duis bibendum
            velit purus, sed vestibulum nibh ullamcorper placerat.
          </p>
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

export default AnalyseCrops;
