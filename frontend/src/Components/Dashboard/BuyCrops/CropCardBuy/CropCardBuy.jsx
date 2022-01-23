import React from "react";

const CropCardBuy = ({ crop }) => {
  return (
    <div className="crop__sell__card flex__center flex__flow__down flex__space__between flex__left">
      <h1>{crop.cropName}</h1>
      <div>
        <h2 className="crop__quantity">{crop.quantity} Kg</h2>
        <p>At Rs. {crop.perKgPrice} per Kg</p>
      </div>
      <div>
        <p>Farmer Details</p>
        <p>{crop.email}</p>
      </div>
      <button className="button__primary" onClick={() => console.log("Click")}>
        Buy Now
      </button>
    </div>
  );
};

export default CropCardBuy;
