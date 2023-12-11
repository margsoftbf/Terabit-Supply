import { useSelector } from 'react-redux';
import { WishlistItem } from '../types/types';

const Wishlist = () => {
	const wishlistItems = useSelector((state: any) => state.wishlist.items);

	return (
		<div className='absolute h-[500px] w-[500px] z-50'>
			{wishlistItems.length === 0 ? (
				<p>Your wishlist is empty.</p>
			) : (
				wishlistItems.map((item: WishlistItem) => (
					<div key={item.id} className='wishlist-item'>
						<p>{item.name}</p>
					</div>
				))
			)}
		</div>
	);
};

export default Wishlist;
