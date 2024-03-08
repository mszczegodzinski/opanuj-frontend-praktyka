import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { RootState } from '../store';

type ProductState = { products: Product[] };

const initialState: ProductState = {
  products: [],
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data as Product[];
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<Product[]>) => {
        return { ...state, products: action.payload };
      }
    );
  },
});

export const selectProducts = (state: RootState) => state.product.products;

export default productSlice.reducer;
