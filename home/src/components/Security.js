import React from 'react';
import { Button } from '@mui/material';

const Security = ({submitData, updateItem}) => {
    return (
        <>
            <h2>4. What home security features would you like to have?</h2>
            <h4>You can select multiple</h4>
            <Button className={"type-btn " + (submitData.securityCamera ? " active" : "")} variant="contained" onClick={(e) => updateItem({securityCamera: !submitData.securityCamera})}>Cameras</Button>
            <Button className={"type-btn " + (submitData.securitySensors ? " active" : "")} variant="contained" onClick={(e) => updateItem({securitySensors: !submitData.securitySensors})}>Motion Sensors</Button>
            <Button className={"type-btn " + (submitData.securityGlass ? " active" : "")} variant="contained" onClick={(e) => updateItem({securityGlass: !submitData.securityGlass})}>Glass break sensors</Button>
            <Button className={"type-btn " + (submitData.securityDoorbell ? " active" : "")} variant="contained" onClick={(e) => updateItem({securityDoorbell: !submitData.securityDoorbell})}>Doorbell Cameras</Button>
        </>
    );
}

export default Security;