import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCrop } from "../../../../store/cropSlice";

const CropCard = ({ crop }) => {
  const [editPop, setEditPop] = useState(false);
  return (
    <div className="crop__sell__card flex__center flex__flow__down flex__space__between flex__left">
      <h1>{crop.name}</h1>
      <div>
        <h2 className="crop__quantity">{crop.quantity} Kg</h2>
        <p>At Rs. {crop.rateperkg} per Kg</p>
      </div>
      <svg
        className="editButton"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setEditPop(true)}
      >
        <path
          d="M21.1371 0.356844C20.6613 -0.118948 19.9032 -0.118948 19.4274 0.356844L10.2419 9.54154C10.0968 9.67866 10 9.85604 9.93549 10.0496L8.4355 15.0572C8.30644 15.4846 8.42742 15.9442 8.74195 16.2587C8.96773 16.4926 9.28225 16.6136 9.59678 16.6136C9.70965 16.6136 9.83064 16.5974 9.94355 16.5652L14.9516 15.0653C15.1452 15.0008 15.3226 14.904 15.4596 14.7589L24.6451 5.57413C24.871 5.34837 25 5.04194 25 4.71937C25 4.39685 24.871 4.09042 24.6451 3.86461L21.1371 0.356844Z"
          fill="#02C39A"
        />
        <path
          d="M23.7903 11.2915C23.1221 11.2915 22.5806 11.8333 22.5806 12.5011V20.5649C22.5806 21.6768 21.6761 22.5809 20.5645 22.5809H4.43548C3.32385 22.5809 2.41935 21.6768 2.41935 20.5649V4.4372C2.41935 3.32526 3.32385 2.42123 4.43548 2.42123H12.5C13.1682 2.42123 13.7097 1.87944 13.7097 1.21165C13.7097 0.54387 13.1682 0.0020752 12.5 0.0020752H4.43548C1.98975 0.0020752 0 1.99205 0 4.4372V20.5649C0 23.0101 1.98975 25 4.43548 25H20.5645C23.0102 25 25 23.0101 25 20.5649V12.5011C25 11.8333 24.4585 11.2915 23.7903 11.2915Z"
          fill="#02C39A"
        />
      </svg>
      {editPop && <EditCropPopup data={crop} setEditPop={setEditPop} />}
    </div>
  );
};

const EditCropPopup = ({ data, setEditPop }) => {
  const [cropname, setCropname] = useState(data.name);
  const [quant, setQuant] = useState(data.quantity);
  const [perkg, setPerkg] = useState(data.rateperkg);

  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    const edited = {
      quantity: quant,
      perKgPrice: perkg,
    };
    dispatch(updateCrop(data.id, edited));
  };

  return (
    <div className="edit__crop__main flex__center">
      <div className="edit__crop__cont">
        <h1>Edit Crop {cropname}</h1>
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
              value={quant}
              onChange={(e) => setQuant(e.target.value)}
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
            type="submit"
            onClick={(e) => handleUpdate(e)}
          >
            Save
          </button>
        </form>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="close__btn"
          width={"25px"}
          height={"25px"}
          onClick={() => setEditPop(false)}
        >
          <path d="M19,11H13V5a1,1,0,0,0-2,0v6H5a1,1,0,0,0,0,2h6v6a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2Z" />
        </svg>
      </div>
    </div>
  );
};

export default CropCard;
