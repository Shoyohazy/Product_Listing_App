import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddressList from '../Address/AddressList'
import '../styling/useraddress.css'
import '../styling/addressform.css'
import AddressForm from '../Address/AddressForm';
import { toggle } from '../features/AddressSlice'
import logo from '../assets/nodata.png'

function UserAdress() {

    const addressList = useSelector((state) => state.address.addresses);
    const toggleState = useSelector((state) => state.address.toggleForm);
    const dispatch = useDispatch();

    //adding address button toggler to make it visible/invisible
    const handleAddress = () => {
        dispatch(toggle());
    }

    //logic for if we delete all addresses
    if (addressList.length == 0) {
        return (
            <>
                <div className='nodata-image'><img src={logo} alt="" /></div>
                <div className='add-button'>
                    <button onClick={handleAddress}><i className="gg-user-add"></i></button>
                </div>

                {toggleState && <AddressForm />}
            </>
        )
    }

    return (
        <>
            <div className='Address-div'>
                <ul >
                    {addressList && addressList.map((address) => {
                        return <AddressList {...address} key={address.id} />
                    })}
                </ul>
            </div>
            <div className='address-header'>Click to Add Address!</div>
            <div className='add-button'>
                <button onClick={handleAddress}><i className="gg-user-add"></i></button>
            </div>

            {toggleState && <AddressForm />}

            {/* <div className='address-form'>
            </div> */}
        </>
    )
}

export default UserAdress