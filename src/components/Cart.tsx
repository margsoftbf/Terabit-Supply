import { useSelector } from 'react-redux';
import { CartState } from '../types/types';
const Cart = () => {
	const cartItems = useSelector(
		(state: { cart: CartState }) => state.cart.items
	);

	const totalPrice = Object.values(cartItems).reduce((total, item) => {
		return total + item.price * item.quantity;
	}, 0);

	return (
		<div className='absolute h-[500px] w-[500px] z-50'>
			<h2>Koszyk</h2>
			<ul>
				{Object.values(cartItems).map((item) => (
					<li key={item.id}>
						{item.name} - {item.quantity} x {item.price}
					</li>
				))}
			</ul>
			<p>Suma całkowita: {totalPrice}</p>
		</div>
	);
};

export default Cart;
