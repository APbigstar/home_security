import React from 'react';
import { Button } from '@mui/material';

const System = ({submitData, clickToNext}) => {
    return (
        <>
            <h2>5. What kind of System do you need?</h2>
            <Button className={"type-btn " + (submitData.system_type == "burglar" ? " active" : "")} variant="contained" onClick={() => clickToNext({system_type: "burglar"})}>Burglar / instrution</Button>
            <Button className={"type-btn " + (submitData.system_type == "fire" ? " active" : "")} variant="contained" onClick={() => clickToNext({system_type: "fire"})}>Fire detection</Button>
            <Button className={"type-btn " + (submitData.system_type == "both" ? " active" : "")} variant="contained" onClick={() => clickToNext({system_type: "both"})}>Both burglar and fire detection</Button>
        </>
    );
}

export default System;