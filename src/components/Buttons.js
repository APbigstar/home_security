import React from 'react';
import { Box, Button } from '@mui/material';

const Buttons = ({submitData, formStep, setFormStep}) => {
    const handleNextBtn = async () => {
        if(submitData.property_type === '' && formStep === 1) return;
        if((submitData.zip_code === '' || submitData.city === '' || submitData.state === '') && formStep === 2) return;
        if(submitData.installation_preference === '' && formStep === 3) return;
        if(!(submitData.securityCamera || submitData.securitySensors || submitData.securityGlass || submitData.securityDoorbell) && formStep === 4) return;
        if(submitData.system_type === '' && formStep === 5) return;
        if(submitData.entrances === '' && formStep === 6) return;
        if((submitData.address === '' || submitData.unit === '' || submitData.country === '') && formStep === 7) return;
        if((submitData.first_name === '' || submitData.last_name === '' || submitData.email_address === '' || submitData.phone === '') && formStep === 8) return;
        if(formStep === 8) {
            let wrong_email_flag = false;
            await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_EMAIL_ADDRESS_API}&email=${submitData.email_address}`)
            .then((response) => response.json())
            .then((data) => {
                if(!data?.is_smtp_valid?.value) {
                    wrong_email_flag = true;
                    alert('Wrong email address!')
                }
            });
            if(wrong_email_flag) return;
            await fetch(`http://apilayer.net/api/validate?access_key=${process.env.REACT_APP_PHONE_NUMBER_API}&number=${submitData.phone_home}&country_code=&format=1`)
            .then((response) => response.json())
            .then((data) => {
                if(data.valid)
                    setFormStep(formStep + 1);
                else alert('Wrong phone number!')
            });
            return;
        }
        if(formStep === 9) {
            var url_string = window.location;
            var url = new URL(url_string);
            var lp_s1 = url.searchParams.get("s1");
            var lp_s2 = url.searchParams.get("s2");
            var lp_s3 = url.searchParams.get("s3");
            var lp_s4 = url.searchParams.get("s4");
            var lp_s5 = url.searchParams.get("s5");
            
            const queryParams = {...submitData, features: (submitData.securityCamera ? 'Camera' : '') + ' ' + (submitData.securityDoorbell ? 'Doorbell' : '') + ' ' + (submitData.securityGlass ? 'Glass' : '') + ' ' + (submitData.securitySensors ? 'Sensors' : ''),
            lp_campaign_id: '64b9ccf73e38c', lp_campaign_key: 'mYFhzwtX7LKWBGgD34Tb', lp_s1, lp_s2, lp_s3, lp_s4, lp_s5};

            const queryString = Object.keys(queryParams)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(queryParams[key])}`)
            .join('&');
            
            const apiUrl = `https://bluemodo.leadspediatrack.com/post.do?${queryString}`;

            await fetch(apiUrl)
            .then((response) => response.text())
            .then((data) => {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data, 'text/xml');
                
                // Extract data from the XML response
                const leadId = xmlDoc.querySelector('lead_id').textContent;
                const result = xmlDoc.querySelector('result').textContent;
                const price = xmlDoc.querySelector('price').textContent;
                const msg = xmlDoc.querySelector('msg').textContent;

                if(leadId)
                 setFormStep(formStep + 1);
            });
            return;
        }
        setFormStep(formStep + 1);
    }
    const handleBackBtn = () => {
        if(formStep == 1) return;
        setFormStep(formStep - 1);
    }
    
    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                {
                    formStep != 1 && <Button sx={{width:"100px", margin: "5px 0"}} variant="contained" onClick={handleBackBtn}>Back</Button> 
                }
                <Button sx={{width:"100px", margin: "5px 0"}} variant="contained" onClick={handleNextBtn}>{formStep != 9 ? 'Next' : 'Submit'}</Button>
            </Box>
        </>
    );
}

export default Buttons;