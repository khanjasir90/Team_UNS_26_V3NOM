import React, { useState } from "react";
import { useEffect } from "react";
import CropCard from "./CropCard/CropCard";
import "./SellCrops.css";
import { AddCrop, CropData } from "../../../store/cropSlice";
import { useDispatch, useSelector } from "react-redux";

const SellCrops = () => {
  const [addPop, setAddPop] = useState(false);
  const [crops, setCrops] = useState([]);
  const dispatch = useDispatch();

  const crops_data = useSelector((store) => store.crops);

  const getCrops = () => {
    dispatch(CropData());
    setCrops(crops_data.farmer_crops);
  };

  useEffect(() => {
    getCrops();
    // eslint-disable-next-line
  }, [crops_data]);

  return (
    <div className="sell__crops__main">
      <div className="header__dash flex__center flex__space__between">
        <h1>Sell Crops</h1>
        <button className="button__primary" onClick={() => setAddPop(true)}>
          Add Crops
        </button>
      </div>
      <div className="your__crop__section">
        <h3>Your Crops</h3>
        <div className="listed__crops">
          {crops.map((crop) => {
            return <CropCard crop={crop} />;
          })}
        </div>
      </div>
      {addPop && <AddCropModal setAddPop={setAddPop} />}
    </div>
  );
};

const AddCropModal = ({ setAddPop }) => {
  const [cropname, setCropname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [perkg, setPerkg] = useState("");
  const dispatch = useDispatch();

  const handleAddCrop = (e) => {
    e.preventDefault();
    const data = {
      email: localStorage.getItem("userData"),
      cropName: cropname,
      quantity: quantity,
      perKgPrice: perkg,
    };
    dispatch(AddCrop(data));
    setCropname("");
    setQuantity("");
    setPerkg("");
  };

  return (
    <div className="add__crop__main flex__center">
      <div className="add__crop__cont">
        <h1>Add new crop</h1>
        <form>
          <div className="input__box flex__center flex__flow__down flex__left">
            <label className="input__field__label">Name</label>
            <input
              className="input__field"
              type={"text"}
              value={cropname}
              onChange={(e) => setCropname(e.target.value)}
            ></input>
          </div>
          <div className="input__box flex__center flex__flow__down flex__left">
            <label className="input__field__label">Quantity</label>
            <input
              className="input__field"
              type={"number"}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            ></input>
          </div>
          <div className="input__box flex__center flex__flow__down flex__left">
            <label className="input__field__label">Price Per Kg.</label>
            <input
              className="input__field"
              type={"number"}
              value={perkg}
              onChange={(e) => setPerkg(e.target.value)}
            ></input>
          </div>
          <button
            className="button__primary"
            onClick={(e) => handleAddCrop(e)}
            type="submit"
          >
            Add Crop
          </button>
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="close__btn"
          width={"25px"}
          height={"25px"}
          onClick={() => setAddPop(false)}
        >
          <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
        </svg>
      </div>
    </div>
  );
};

export default SellCrops;
