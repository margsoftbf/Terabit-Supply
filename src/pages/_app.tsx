import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import '../styles/globals.css';
import Navbar from '../components/Navbar';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Head>
				<title>Terabit Supply PC Shop</title>
				<meta name='description' content='Terabit Supply PC Shop' />
				<link rel='icon' href='/favicon.ico' />
				<meta httpEquiv="Content-Language" content="en" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</Provider>
	);
};

export default MyApp;
