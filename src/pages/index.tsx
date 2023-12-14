import Hero from '../components/Hero';
import Category from '../components/Category';
import Popular from '@/components/Popular';
import Brands from '@/components/Brands';

export default function Home() {
	return (
		<main className='overflow-hidden max-w-8xl m-auto'>
			<Hero />
			<Category />
			<Popular />
			<Brands />
		</main>
	);
}
