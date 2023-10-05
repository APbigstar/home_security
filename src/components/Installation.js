import React from 'react';
import { Button } from '@mui/material';

const Installation = ({submitData, clickToNext}) => {
    return (
        <>
            <h2>3. What is your installation preference?</h2>
            <Button className={"type-btn " + (submitData.installation_preference == "professional" ? " active" : "")} variant="contained" onClick={() => clickToNext({installation_preference: "professional"})}>Professional installation</Button>
            <Button className={"type-btn " + (submitData.installation_preference == "self" ? " active" : "")} variant="contained" onClick={() => clickToNext({installation_preference: "self"})}>Self installation</Button>
            <Button className={"type-btn " + (submitData.installation_preference == "none" ? " active" : "")} variant="contained" onClick={() => clickToNext({installation_preference: "none"})}>No preference</Button>
        </>
    );
}

export default Installation;