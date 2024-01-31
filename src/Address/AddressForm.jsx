import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addAddress } from "../features/AddressSlice";

function AddressForm() {
    const dispatch = useDispatch();
    const [address, setAddress] = useState({
        city: "",
        street_name: "",
        street_address: "",
        zip: "",
        state: "",
        country: "",
    });

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAddress({ id: address.length + 1, ...address }));
    };

    return (
        <form className="address-form" onSubmit={handleSubmit}>
            <label htmlFor="city">City:</label>
            <input
                type="text"
                id="city"
                name="city"
                value={address.city}
                onChange={handleChange}
                required
            />

            <label htmlFor="street_name">Street Name/No:</label>
            <input
                type="text"
                id="street_name"
                name="street_name"
                value={address.street_name}
                onChange={handleChange}
                required
            />

            <label htmlFor="street_address">Street Address :</label>
            <input
                type="text"
                id="street_address"
                name="street_address"
                value={address.street_address}
                onChange={handleChange}
                required
            />

            <label htmlFor="zip">ZIP Code:</label>
            <input
                type="text"
                id="zip"
                name="zip"
                value={address.zip}
                onChange={handleChange}
                required
            />

            <label htmlFor="state">State:</label>
            <input
                type="text"
                id="state"
                name="state"
                value={address.state}
                onChange={handleChange}
                required
            />

            <label htmlFor="country">Country:</label>
            <input
                type="text"
                id="country"
                name="country"
                value={address.country}
                onChange={handleChange}
                required
            />

            <button type="submit">Add Address</button>
        </form>
    );
}

export default AddressForm;
