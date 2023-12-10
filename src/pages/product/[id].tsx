import { useRouter } from 'next/router';
import { productsData } from '../../data/data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const Id = () => {
	const router = useRouter();
	const { id } = router.query;

	const product = productsData.find((p) => p.id === id);

	if (!product) {
		return <div>Produkt nie znaleziony</div>;
	}

	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

	return (
		<div>
			<button onClick={() => router.back()}>Cofnij</button>
			<h1>{product.name}</h1>
			<p>{product.description}</p>
			<button onClick={handleAddToCart}>Dodaj do koszyka</button>
		</div>
	);
};

export default Id;
