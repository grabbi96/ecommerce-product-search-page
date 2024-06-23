import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../store/categorySlice';
import { Button, Select, MenuItem, Box, TextField, Typography, Slider, InputLabel, FormControl, Grid, Paper } from '@mui/material';

const Filter = ({ setPriceRange, setSearchTerm, setCategory }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const [localCategory, setLocalCategory] = useState('');
  const [localPriceRange, setLocalPriceRange] = useState([0, 1000]);
  const [searchTerm, setSearchTermLocal] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleFilter = () => {
    setCategory(localCategory);
    setPriceRange(localPriceRange);
    setSearchTerm(searchTerm);
  };

  return (
    <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>Filter Products</Typography>
      
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <FormControl fullWidth variant="outlined" size="small">
            <InputLabel>Category</InputLabel>
            <Select
              value={localCategory}
              onChange={(e) => setLocalCategory(e.target.value)}
              label="Category"
            >
              <MenuItem value="">
                <em>All Categories</em>
              </MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Box>
            <Typography gutterBottom>Price Range</Typography>
            <Slider
              value={localPriceRange}
              onChange={(e, newValue) => setLocalPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={0}
              max={1000}
              sx={{ color: 'primary.main' }}
              size="small"
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">Min: ${localPriceRange[0]}</Typography>
              <Typography variant="body2">Max: ${localPriceRange[1]}</Typography>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            label="Search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTermLocal(e.target.value)}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Grid>
        
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleFilter} fullWidth>
            Apply Filter
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Filter;
