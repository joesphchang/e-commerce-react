import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	products: [],
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.products.find((item) => item.id === action.payload.id);

			if (item) {
				item.quantity += action.payload.quantity;
			} else {
				state.push(action.payload);
			}
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addToCart, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
