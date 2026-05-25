import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types';
import { PRODUCTS } from '../../data';

export interface ProductsState {
  products: Product[];
  selectedCategory: 'All' | 'Spices' | 'Agriculture' | 'Dehydrated' | 'Pulses' | 'Oils' | 'Herbal';
  selectedProduct: Product | null;
}

const initialState: ProductsState = {
  products: PRODUCTS,
  selectedCategory: 'All',
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Updates active product filter tab option selection
    setSelectedCategory: (
      state,
      action: PayloadAction<'All' | 'Spices' | 'Agriculture' | 'Dehydrated' | 'Pulses' | 'Oils' | 'Herbal'>
    ) => {
      state.selectedCategory = action.payload;
    },
    // Sets target product detail specifications model popup drawer
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedCategory, setSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
