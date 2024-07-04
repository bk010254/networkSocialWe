import React from 'react';
import brandinglogo from '../Imgages/cm-logo.png'
import './Test.css'
// import {bran}
import {  Typography,  Link } from '@mui/material';

import { Button, Container, TextField } from '@mui/material';
import LoginPage from '../Login/LoginPage';


const Test = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
   <>
    <div className='container'>
      <div className='container-box'>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='info-content'>
                  <div className='brandLogo'>
                    <img src={brandinglogo} />
                    
                    <p>Workwise, is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
                  </div>

                </div>
            </div>
            <div  className='col-lg-6'>
            <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          fullWidth
          label="Email Address or Phone Number"
          variant="outlined"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          required
        />
        <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
          Login
        </Button>
        <Typography align="center" sx={{ mt: 2 }}>
          <Link href="#" color="inherit">
            Forgotten Account?
          </Link>
        </Typography>
        <Typography align="center" sx={{ mt: 2 }}>
          Don't have an account? <Link href="#" color="inherit">Sign up for Facebook</Link>
        </Typography>
      </form>
    </Container>
            </div>
        </div>
      </div>
    </div>
   
   
   </>
  )
}

export default Test
