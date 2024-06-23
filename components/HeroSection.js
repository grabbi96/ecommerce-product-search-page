import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = React.memo(() => {
  return (
    <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        Our Product Collection
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: '2rem' }}>
        Discover the best products curated just for you
      </Typography>
      <Button variant="contained" color="primary" sx={{ padding: '0.5rem 2rem', borderRadius: '20px' }}>
        Shop Now
      </Button>
    </Box>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
