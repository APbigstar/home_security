import React from 'react';
import { Button } from '@mui/material';

const Property = ({submitData, clickToNext}) => {
    return (
        <>
            <h2>1. What type of property is this system for?</h2>
            <Button className={"type-btn " + (submitData.property_type == "Owned" ? " active" : "")} variant="contained" onClick={() => clickToNext({property_type: "Owned"})}>Owned</Button>
            <Button className={"type-btn " + (submitData.property_type == "Rented" ? " active" : "")} variant="contained" onClick={() => clickToNext({property_type: "Rented"})}>Rented</Button>
        </>
    );
}

export default Property;