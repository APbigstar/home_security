import React from 'react';

const Details = ({submitData, updateItem}) => {
    return (
        <>
            <h2>8. Your details</h2>
            <input type="text" className='text-field-input' onChange={(e)=>{updateItem({first_name: e.target.value})}} value={submitData.first_name} placeholder="First Name" id="first_name" required=""/>
            <input type="text" className='text-field-input' onChange={(e)=>{updateItem({last_name: e.target.value})}} value={submitData.last_name} placeholder="Last Name" id="last_name" required=""/>
            <input type="email" className='text-field-input' onChange={(e)=>{updateItem({email_address: e.target.value})}} value={submitData.email_address} placeholder="email@example.com" id="email" required=""/>
            <input type="text" className='text-field-input' onChange={(e)=>{updateItem({phone_home: e.target.value})}} value={submitData.phone_home} placeholder="+1-415-858-6273" id="phone-number" required=""/>
        </>
    );
}

export default Details;