import { Box, Container, Grid, Paper, Typography } from '@mui/material';

const FeatureSection = () => {
  return (
    <Box sx={{ backgroundColor: '#fff', padding: '2rem 0', marginTop: '2rem' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5" sx={{ marginBottom: '1rem' }}>Free Shipping</Typography>
              <Typography variant="body1">On all orders over $50</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5" sx={{ marginBottom: '1rem' }}>24/7 Support</Typography>
              <Typography variant="body1">We are here to help you anytime</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper sx={{ padding: '2rem', textAlign: 'center' }}>
              <Typography variant="h5" sx={{ marginBottom: '1rem' }}>Money Back Guarantee</Typography>
              <Typography variant="body1">30 days money back guarantee</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeatureSection;
