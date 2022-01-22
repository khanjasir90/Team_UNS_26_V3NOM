import React from "react";

const CropCardBuy = ({ crop }) => {
  return (
    <div className="crop__sell__card flex__center flex__flow__down flex__space__between flex__left">
      <h1>{crop.name}</h1>
      <div>
        <h2 className="crop__quantity">{crop.quantity} Kg</h2>
        <p>At Rs. {crop.rateperkg} per Kg</p>
      </div>
      <div>
        <p>Farmer Details</p>
        <p>{crop.email_farmer}</p>
        <p>{crop.location}</p>
      </div>
      <button className="button__primary">Buy Now</button>
    </div>
  );
};

export default CropCardBuy;
