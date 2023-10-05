import React from 'react';

const Location = ({submitData, updateItem}) => {
    return (
        <>
            <h2>2. What is your zip code?</h2>
            <input type="text" className='text-field-input' onChange={(e)=>{updateItem({zip_code: e.target.value})}} value={submitData.zip_code} placeholder="43215" id="zip_code" required=""/>
            <h3>City</h3>
            <input type="text" className='text-field-input' onChange={(e)=>{updateItem({city: e.target.value})}} value={submitData.city} placeholder="Columbus" id="city" required=""/>
            <h3>State</h3>
            <input type="text" className='text-field-input' onChange={(e)=>{updateItem({state: e.target.value})}} value={submitData.state} placeholder="OH" id="state" required=""/>
        </>
    );
}

export default Location;