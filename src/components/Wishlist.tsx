import { useSelector } from 'react-redux';

interface WishlistItem {
	id: string;
	name: string;
}
const Wishlist = () => {
	const wishlistItems = useSelector((state: any) => state.wishlist.items);

	return (
		<div className='absolute h-[500px] w-[500px] z-50'>
			{wishlistItems.length === 0 ? (
				<p>Twoja lista życzeń jest pusta.</p>
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
