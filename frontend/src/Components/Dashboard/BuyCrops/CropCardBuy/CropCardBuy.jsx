import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CropCardBuy = ({ crop }) => {
  // const [transactionData , setTransaction] = useState();
  const [btnClick, setBtnClick] = useState(false);
  useEffect(() => {
    if (btnClick) {
      fetch("http://localhost:8000/api/transaction/create-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: crop.rateperkg * crop.quantity,
          desc: "Farmer crop sell",
          customer_name: crop.email_farmer,
          customer_email: crop.email_farmer,
          customer_contact: crop.email_farmer,
          notesObj: {
            farmer: crop.email_farmer,
            quantity: crop.quantity,
            amount: crop.rateperkg * crop.quantity,
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.href = data.paymentLink.short_url;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [btnClick]);
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
      <button
        className="button__primary"
        onClick={() => {
          setBtnClick(true);
        }}
      >
        Buy Now
      </button>
    </div>
  );
};

export default CropCardBuy;
