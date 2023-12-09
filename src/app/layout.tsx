import Navbar from '../components/Navbar';
import './globals.css';
export const metadata = {
	title: 'Terabit Supply PC Shop',
	description: 'Terabit Supply PC Shop',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className='relative'>
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
