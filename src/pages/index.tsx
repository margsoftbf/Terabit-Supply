import Hero from '../components/Hero';
import Category from '../components/Category';
import Popular from '@/components/Popular';
import Brands from '@/components/Brands';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';

export default function Home() {
	return (
		<main className='m-auto'>
			<Hero />
			<Category />
			<Popular />
			<Brands />
			<Newsletter />
			<Testimonials />
		</main>
	);
}
