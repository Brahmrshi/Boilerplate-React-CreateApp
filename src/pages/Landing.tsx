import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Landing = () => (
  <Box p={2} textAlign="center">
    <Typography variant="h4" gutterBottom>
      Welcome
    </Typography>
    <Button variant="contained" component={Link} to="/login">
      Login
    </Button>
  </Box>
);

export default Landing;
