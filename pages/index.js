// pages/index.js
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setFilteredItems, setPriceRange, setSearchTerm } from '../store/productSlice';
import { Container, Box } from '@mui/material';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Filter = dynamic(() => import('../components/Filter'));
const HeroSection = dynamic(() => import('../components/HeroSection'));
const FeatureSection = dynamic(() => import('../components/FeatureSection'));
const ProductGrid = dynamic(() => import('../components/ProductGrid'));
import { useEffect, useState, useCallback } from 'react';
import { debounce } from 'lodash';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const filteredProducts = useSelector((state) => state.products.filteredItems);
  const status = useSelector((state) => state.products.status);
  const totalItems = useSelector((state) => state.products.totalItems);
  const hasMore = useSelector((state) => state.products.hasMore);
  const priceRange = useSelector((state) => state.products.priceRange);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const limit = currentPage * productsPerPage;
        await dispatch(fetchProducts({ category, limit }));
      } catch (err) {
        console.error('Error fetching products:', err);
      }
    };

    fetchData();
  }, [dispatch, category, currentPage, productsPerPage]);

  useEffect(() => {
    const limit = currentPage * productsPerPage;
    dispatch(setFilteredItems({ products, priceRange, searchTerm, limit }));
  }, [dispatch, products, priceRange, searchTerm]);

  const handlePriceRangeChange = (range) => {
    dispatch(setPriceRange(range));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const debouncedSearch = useCallback(
    debounce((term) => {
      dispatch(setSearchTerm(term));
      setCurrentPage(1); // Reset to first page on filter change
    }, 500),
    []
  );

  const handleSearchTermChange = (term) => {
    debouncedSearch(term);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1); // Reset to first page on category change
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Browse our selection of products" />
        <meta name="keywords" content="products, e-commerce, buy online" />
      </Head>
      <Box sx={{ backgroundColor: '#f5f5f5', paddingBottom: '5rem' }}>
        <Container sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <HeroSection />
          <Filter 
            setPriceRange={handlePriceRangeChange} 
            setSearchTerm={handleSearchTermChange}
            setCategory={handleCategoryChange} 
          />
          <ProductGrid 
            status={status} 
            products={filteredProducts} 
            currentPage={currentPage} 
            productsPerPage={productsPerPage} 
            totalItems={totalItems} 
            handlePageChange={handlePageChange} 
            hasMore={hasMore}
          />
        </Container>
        <FeatureSection />
      </Box>
    </>
  );
};

export default Home;
