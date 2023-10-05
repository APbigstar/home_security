import React from 'react';
import { Box, Container } from '@mui/material';
import Img1 from './../assets/howitworks1.png';
import Img2 from './../assets/howitworks2.png';
import Img3 from './../assets/howitworks3.png';

const HowItWorks = () => {
    return (
        <Container sx={{marginTop:'100px', padding: '0 !important'}}>
            <h1>How it Works</h1>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <img src={Img1} />
                <img src={Img2} />
                <img src={Img3} />
            </Box>
        </Container>
    );
}

export default HowItWorks;