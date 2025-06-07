import React, { useState } from 'react';
import { Container, Box, Tabs, Tab } from '@mui/material';

const Homepage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container 
      maxWidth="xl"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 6,           // Shadow added here
        borderRadius: 3,        // Optional: rounded corners for container
        bgcolor: 'background.paper',
        p: 4,                   // padding inside container
        mx: 'auto',             // center horizontally if width is limited
      }}
    >
      <Box sx={{ mb: 2, fontSize: '2rem', fontWeight: 'bold' }}>
        Talky
      </Box>

      <Box sx={{mb:2}}>
        <Tabs value={value} onChange={handleChange} aria-label="tabs example" centered>
          <Tab label="Login" />
          <Tab label="SignUp" />
        </Tabs>   
      </Box>
      <Box>
        {value === 0 && <Box sx={{ mt: 2 }}>Login</Box>}
        {value === 1 && <Box sx={{ mt: 2 }}> {/* Empty for now */} </Box>}
      </Box>
    </Container>
  );
};

export default Homepage;
