import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CropCardBuy = ({ crop }) => {
  const [transactionData , setTransaction] = useState();
  const [btnClick , setBtnClick] = useState(false);
  useEffect(() => {
    if(btnClick){
      fetch("http://localhost:8000/create-payment",{
        method : "POST",
        
      })
    }
  },[btnClick]);
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
      <button className="button__primary">Buy Now</button>
    </div>
  );
};

export default CropCardBuy;
