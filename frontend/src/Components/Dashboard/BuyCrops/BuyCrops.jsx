import React from "react";
import CropCardBuy from "./CropCardBuy/CropCardBuy";

const crops = [
  {
    id: 1,
    name: "Wheat Fine",
    quantity: 200,
    rateperkg: 12,
    email_farmer: "mukeshjaji@gmail.com",
    location: "Chandigarh",
  },
  {
    id: 2,
    name: "Wheat",
    quantity: 700,
    rateperkg: 13,
    email_farmer: "mukeshjaji@gmail.com",
    location: "Chandigarh",
  },
  {
    id: 3,
    name: "Rice Basmati",
    quantity: 900,
    rateperkg: 30,
    email_farmer: "mukeshjaji@gmail.com",
    location: "Chandigarh",
  },
  {
    id: 4,
    name: "Rice",
    quantity: 200,
    rateperkg: 20,
    email_farmer: "mukeshjaji@gmail.com",
    location: "Chandigarh",
  },
];

const BuyCrops = () => {
  return (
    <div className="sell__crops__main">
      <div className="header__dash flex__center flex__space__between">
        <h1>Sell Crops</h1>
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