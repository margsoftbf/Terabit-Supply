import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	items: {},
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action) {
			const productId = action.payload.id;
			if (state.items[productId]) {
				state.items[productId].quantity++;
			} else {
				state.items[productId] = { ...action.payload, quantity: 1 };
			}
		},
		removeFromCart(state, action) {
			delete state.items[action.payload.id];
		},
		updateQuantity(state, action) {
			const { id, quantity } = action.payload;
			if (state.items[id]) {
				state.items[id].quantity = quantity;
			}
		},
	},
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
