// components/ProductGrid.js
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';
import Pagination from './Pagination';

const ProductCard = dynamic(() => import('./ProductCard'));

const ProductGrid = ({ status, products, currentPage, productsPerPage, totalItems, handlePageChange, hasMore }) => {
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
      {status === 'loading' && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
          <CircularProgress />
        </Box>
      )}
      {status === 'failed' && <Typography color="error">Failed to load products</Typography>}
      <Grid container spacing={4} marginTop={'.5rem'}>
        {status === 'succeeded' && currentProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      {hasMore && (
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
          <Pagination
            totalPages={Math.ceil(totalItems / productsPerPage)}
            currentPage={currentPage}
            setPage={handlePageChange}
          />
        </Box>
      )}
    </>
  );
};

export default ProductGrid;
