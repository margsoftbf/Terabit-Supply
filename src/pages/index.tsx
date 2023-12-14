import Hero from '../components/Hero';
import Category from '../components/Category';
import Popular from '@/components/Popular';

export default function Home() {
	return (
		<main className='overflow-hidden max-w-8xl m-auto'>
			<Hero />
			<Category />
			<Popular />
		</main>
	);
}
