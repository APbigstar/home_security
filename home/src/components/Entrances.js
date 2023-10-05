import React from 'react';
import { Button } from '@mui/material';

const Entrances = ({submitData, clickToNext}) => {
    return (
        <>
            <h2>6. How many entrances exist?</h2>
            <Button className={"type-btn " + (submitData.entrances == "1" ? " active" : "")} variant="contained" onClick={() => clickToNext({entrances: '1'})}>1</Button>
            <Button className={"type-btn " + (submitData.entrances == "2-4" ? " active" : "")} variant="contained" onClick={() => clickToNext({entrances: "2-4"})}>2-4</Button>
            <Button className={"type-btn " + (submitData.entrances == "5" ? " active" : "")} variant="contained" onClick={() => clickToNext({entrances: "5"})}>5</Button>
            <Button className={"type-btn " + (submitData.entrances == "6+" ? " active" : "")} variant="contained" onClick={() => clickToNext({entrances: "6+"})}>More than 5</Button>
        </>
    );
}

export default Entrances;