import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ category, limit }) => {
    let url = 'https://fakestoreapi.com/products';

    if (category) {
      url = `https://fakestoreapi.com/products/category/${category}`;
    }

    if (limit !== undefined) {
      url += `?limit=${limit}`;
    }

    const response = await axios.get(url);
    const products = response.data;

    const hasMoreItems = products.length === limit;
    const totalItems = hasMoreItems ? products.length + 12 : products.length;
    
    return {
      products,
      totalItems,
      hasMoreItems,
    };
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    filteredItems: [],
    status: 'idle',
    totalItems: 0,
    hasMore: true,
    priceRange: [0, 1000], // Initial price range
    searchTerm: '', // Initial search term
  },
  reducers: {
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setFilteredItems: (state, action) => {
      const { products, priceRange, searchTerm, limit } = action.payload;
      state.filteredItems = products.filter(product => 
        product.price >= priceRange[0] && product.price <= priceRange[1] &&
        (product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
         product.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      const hasMoreItems = state.filteredItems.length === limit;
       const totalItems = hasMoreItems ? state.filteredItems.length + 12 : state.filteredItems.length;
      state.totalItems = totalItems;
      state.hasMore = state.filteredItems.length > 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.products;
        state.filteredItems = action.payload.products;
        state.totalItems = action.payload.totalItems;
        state.hasMore = action.payload.hasMoreItems;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setPriceRange, setSearchTerm, setFilteredItems } = productSlice.actions;

export default productSlice.reducer;
