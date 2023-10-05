import React from 'react';
import { usePlacesWidget } from "react-google-autocomplete";

const Address = ({submitData, setSubmitData, updateItem}) => {
    const { ref: materialRef } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        onPlaceSelected: (place) => {
          setSubmitData({...submitData, address: place.formatted_address, country: place?.address_components[2]?.long_name})
        },
        inputAutocompleteValue: "country"
    });
    return (
        <>
            <h2>7. What is your address?</h2>
            <input id="address" ref={materialRef} onChange={(e)=>{updateItem({address: e.target.value})}} value={submitData.address} className='text-field-input' type="text" placeholder="Address" />
            <input type="text" className='text-field-input' onChange={(e)=>{updateItem({unit: e.target.value})}} value={submitData.unit} placeholder="Unit / Apt / Suite" id="unit-apt-suite" required=""/>
            <input type="text" className='text-field-input' onChange={(e)=>{updateItem({country: e.target.value})}} value={submitData.country} placeholder="Country" id="country" required=""/>
        </>
    );
}

export default Address;