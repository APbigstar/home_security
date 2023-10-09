import React, { useEffect, useState } from 'react';
import { Container, Button } from '@mui/material';
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
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const [errorMsg, setErrorMsg] = useState('');
  const [formStep, setFormStep] = useState(0);
  const [submitData, setSubmitData] = useState({property_type: '', zip_code: '', city: '', state: '', installation_preference: '', securityCamera: false,
    securitySensors: false, securityGlass: false, securityDoorbell: false, system_type: '', entrances: '', address: '', unit: '', country: '',
    first_name: '', last_name: '', email_address: '', phone_home: '', features: ''});
  const clickToNext = (data) => {
    setSubmitData({...submitData, ...data});
    setFormStep(formStep + 1);
    setErrorMsg('');
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
  }, [submitData.zip_code])

  return (
    <>
      <Container>
        <Header />
        <div className='d-flex'>
          <div className="section-left">
              <div>
                  <p className="highlight"> <br /> Help Protect <br /> Your Home <br /> with a New <br /> Security System</p>
                  <h2 className='text-left'>Quick and easy. Get matched with the best <br /> Home Security company in your area.</h2>
              </div>
          </div>
          <div className='section-right'>
            <Container sx={{textAlign: 'center', marginBottom: '20px'}}>
              {
                formStep === 0 ? <>
                  <div class="welcome" bis_skin_checked="1">
                    <h1>Let's find out how we can help</h1>
                    <p>CLick the "Get Started" button</p>
                    <Button sx={{width:"150px", margin: "5px 0"}} variant="contained" onClick={() => setFormStep(formStep + 1)}>Get Started</Button>
                  </div>
                </> :
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
              <h4 className='error-msg'>{errorMsg}</h4>
            </Container>
            {
              (formStep !== 0 && formStep !== 10) && <Buttons setErrorMsg={setErrorMsg} submitData={submitData} formStep={formStep} setFormStep={setFormStep} />
            }
            <div class="description" bis_skin_checked="1">
              <p> Safe Home Pros services hundreds of brands and provides trusted information for millions <br /> of individuals across the United States</p>
                  <div bis_skin_checked="1">
                  <ul>
                    <li>Easily compare competitors</li>
                    <li>Strengthen your consumer awareness</li>
                    <li>Find the best rates for your financial needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Container maxWidth='sm' sx={{padding: 0}}>
          <HowItWorks />
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default App;
