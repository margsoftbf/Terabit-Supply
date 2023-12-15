import Hero from '../components/Hero';
import Category from '../components/Category';
import Popular from '@/components/Popular';
import Brands from '@/components/Brands';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';
import Aboutus from '@/components/Aboutus';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';

export default function Home() {
	return (
		<main className='m-auto'>
			<Hero />
			<Category />
			<Popular />
			<Brands />
			<Newsletter />
			<Testimonials />
			<Aboutus />
			<Blog />
			<Contact />
		</main>
	);
}
