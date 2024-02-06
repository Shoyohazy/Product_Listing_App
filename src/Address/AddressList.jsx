import React from "react";
import { useDispatch } from "react-redux";
import { deleteAddress, displayAddress } from "../features/AddressSlice";

function AddressList(props) {
  const { id, city, street_name, street_address, zip_code, state, country } =
    props;
  const dispatch = useDispatch();

  const selectAddress = () => {
    //dispatch address id
    dispatch(displayAddress({ ...props }));
  };

  const handleDelete = () => {
    dispatch(deleteAddress(id));
  };

  return (
    <li key={id} className="address-list">
      <div>
        <button className="select-button" onClick={selectAddress}>
          {" "}
          Select{" "}
        </button>
        <p>{`Address : ${city}, ${street_name}, ${street_address}, ${zip_code}, ${state}, ${country} `}</p>
        <button className="delete-button" onClick={handleDelete}>
          <i class="gg-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default AddressList;
