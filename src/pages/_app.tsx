import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '@/components/Footer';
import Navbar2 from '@/components/Navbar2';
import Navbar3 from '@/components/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Head>
				<title>Terabit Supply PC Shop</title>
				<meta name='description' content='Terabit Supply PC Shop' />
				<link rel='icon' href='/favicon.ico' />
				<meta httpEquiv='Content-Language' content='en' />
			</Head>
			{/* <Navbar /> */}
			{/* <Navbar2 /> */}
			<Navbar3 />
			<Component {...pageProps} />
			<Footer />
		</Provider>
	);
};

export default MyApp;
