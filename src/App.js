import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import "./App.css";
import Property from "./components/Property"
import Location from "./components/Location"
import Installation from './components/Installation';
import Security from './components/Security';
import System from './components/System';
import Entrances from './components/Entrances';
import Address from './components/Address';
import Details from './components/Details';
import Buttons from './components/Buttons';
import HowItWorks from './components/HowItWorks';

function App() {
  const [formStep, setFormStep] = useState(1);
  const [submitData, setSubmitData] = useState({property_type: '', zip_code: '', city: '', state: '', installation_preference: '', securityCamera: false,
    securitySensors: false, securityGlass: false, securityDoorbell: false, system_type: '', entrances: '', address: '', unit: '', country: '',
    first_name: '', last_name: '', email_address: '', phone_home: '', features: ''});
  const clickToNext = (data) => {
    setSubmitData({...submitData, ...data});
    setFormStep(formStep + 1);
  }
  const updateItem = (data) => {
    setSubmitData({...submitData, ...data})
  }

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:${submitData.zip_code}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if(data.status === "OK") {
        setSubmitData({...submitData, city: data.results[0]?.formatted_address.split(",")[0], state: (data.results[0]?.formatted_address.split(",")[1]).split(' ')[1]})
      }
    });
  }, [submitData])

  return (
    <Container maxWidth="sm" sx={{marginTop: '100px'}}>
      <Container sx={{textAlign: 'center', marginBottom: '20px'}}>
        {
          formStep === 1 ? <>
            <Property submitData={submitData} clickToNext={clickToNext} />
          </> :
          formStep === 2 ? <>
            <Location submitData={submitData} updateItem={updateItem} />
          </> :
          formStep === 3 ? <>
            <Installation submitData={submitData} clickToNext={clickToNext} />
          </> :
          formStep === 4 ? <>
            <Security submitData={submitData} updateItem={updateItem} />
          </> :
          formStep === 5 ? <>
            <System submitData={submitData} clickToNext={clickToNext} />
          </> :
          formStep === 6 ? <>
            <Entrances submitData={submitData} clickToNext={clickToNext} />
          </> :
          formStep === 7 ? <>
            <Address submitData={submitData} setSubmitData={setSubmitData} updateItem={updateItem} />
          </> :
          formStep === 8 ? <>
            <Details submitData={submitData} updateItem={updateItem} />
          </> :
          formStep === 9 ? <h2>Would you like to submit this info?</h2>
          : <h2>Submitted Successfully!</h2>
        }
      </Container>
      {
        formStep !== 10 && <Buttons submitData={submitData} formStep={formStep} setFormStep={setFormStep} />
      }
      <HowItWorks />
    </Container>
  );
}

export default App;
