import { createSlice } from '@reduxjs/toolkit';
import { CartItem } from '../types/types';

interface WishlistState {
	items: CartItem[];
}

const initialState: WishlistState = {
	items: [],
};

const wishlistSlice = createSlice({
	name: 'wishlist',
	initialState,
	reducers: {
		addToWishlist(state, action) {
			const productId = action.payload.id;
			if (!state.items.find((item) => item.id === productId)) {
				state.items.push({ ...action.payload });
			}
		},
		removeFromWishlist(state, action) {
			state.items = state.items.filter((item) => item.id !== action.payload.id);
		},
	},
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
