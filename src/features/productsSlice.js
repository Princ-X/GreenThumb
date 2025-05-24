import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: "Monstera", price: 25, category: "Tropical", image: "/monstera.jpg" },
    { id: 2, name: "Snake Plant", price: 18, category: "Low-Light", image: "/snake-plant.jpg" },
    // Add 4 more plants...
  ],
  categories: ["Tropical", "Low-Light", "Succulent"],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
