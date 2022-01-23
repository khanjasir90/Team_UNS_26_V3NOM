import React, { useEffect, useState } from "react";
import CropCardBuy from "./CropCardBuy/CropCardBuy";
import { GetAllCrops } from "../../../store/cropSlice";
import { useDispatch, useSelector } from "react-redux";

const BuyCrops = () => {
  const [crops, setCrops] = useState([]);
  const dispatch = useDispatch();

  const crops_data = useSelector((store) => store.crops);

  useEffect(() => {
    dispatch(GetAllCrops());
    setCrops(crops_data.all_crops);
    // eslint-disable-next-line
  }, [crops_data]);

  return (
    <div className="sell__crops__main">
      <div className="header__dash flex__center flex__space__between">
        <h1>Buy Crops</h1>
      </div>
      <div className="your__crop__section">
        <h3>Avialable Crops</h3>
        <div className="listed__crops">
          {crops.map((crop) => {
            return <CropCardBuy crop={crop} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default BuyCrops;
