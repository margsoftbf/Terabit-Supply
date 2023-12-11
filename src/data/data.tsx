export const navigation = [
	{ name: 'Home', href: '/', hash: '/', current: true },
	{ name: 'Category', href: 'categories', hash: 'categories', current: false },
	{ name: 'About us', href: '#', current: false },
	{ name: 'Popular', href: '#', current: false },
	{ name: 'Deals', href: '#', current: false },
	{ name: 'Newsletter', href: '#', current: false },
	{ name: 'Testimonials', href: '#', current: false },
	{ name: 'Contact', href: '#', current: false },
];

import procesorSmall from '../../public/assets/hero/procesor-small.webp';
import gpuSmall from '../../public/assets/hero/gpu-small.webp';
import procesorBig from '../../public/assets/hero/procesor-big.webp';
import gpuBig from '../../public/assets/hero/gpu-big.webp';

export const heroData = [
	{
		id: 1,
		src: procesorSmall,
		srcMd: procesorBig,
		alt: 'cpu picture',
		title: 'Choose your processor',
		subtitle: 'Intel - Core i9-13900K',
		price: '$543.33 or 55.55/mo. for 24 mo.',
		btn: 'Shop now',
	},
	{
		id: 2,
		src: gpuSmall,
		scrMd: gpuBig,
		alt: 'gpu picture',
		title: 'Choose your GPU',
		subtitle: 'NVIDIA - GeForce RTX 3090 Ti',
		price: '$1243.33 or 95.55/mo. for 24 mo.',
		btn: 'Shop now',
	},
];




export const categoriesData = [
	{
		id: '1',
		name: 'CPUs',
		imageUrl: './assets/categoryImage/cpu.webp',
	},
	{
		id: '2',
		name: 'CPU Coolers',
		imageUrl: './assets/categoryImage/cpu-cooler.webp',
	},
	{
		id: '3',
		name: 'Motherboards',
		imageUrl: './assets/categoryImage/motheboard.webp',
	},
	{
		id: '4',
		name: 'Memory',
		imageUrl: './assets/categoryImage/ram.webp',
	},
	{
		id: '5',
		name: 'Storage',
		imageUrl: './assets/categoryImage/storage.webp',
	},
	{
		id: '6',
		name: 'Video Card',
		imageUrl: './assets/categoryImage/gpu.webp',
	},
	{
		id: '7',
		name: 'Power Supplies',
		imageUrl: './assets/categoryImage/power-supplies.webp',
	},
	{
		id: '8',
		name: 'Cases',
		imageUrl: './assets/categoryImage/cases.webp',
	},
];

export const productsData = [
	{
		id: '1',
		categoryId: '1',
		name: 'AMD Ryzen 7 7800X3D',
		description:
			'The Dominant Gaming Processor, with AMD 3D V-Cache™ Technology for Even More Game Performance Whatever the setting, whatever the resolution, lead your team to victory with this incredible gaming processor. Plus, enjoy the benefits of next-gen AMD 3D V-Cache™ technology for low latency and even more game performance.',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg',
		imgAlt: 'AMD Ryzen 7 7800X3D Box',
		rating: 5,
		reviewCount: 118,
		price: 358.99,
	},
	{
		id: '2',
		categoryId: '1',
		name: 'AMD Ryzen 5 5600X 3.7',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg',
		imgAlt: '',
		rating: 4,
		reviewCount: 148,
		price: 156.0,
	},
	{
		id: '3',
		categoryId: '1',
		name: 'Intel Core i7-13700K 3.4 GHz',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/2f3405387f23ab827695d966ea9f9682.256p.jpg',
		imgAlt: 'Intel Core i7-13700K 3.4 GHz Box',
		rating: 3,
		reviewCount: 188,
		price: 369.99,
	},
	{
		id: '4',
		categoryId: '1',
		name: 'AMD Ryzen 5 7600X 4.7 GHz 6-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/fd6305088c9d16d59017b380fb9c408a.256p.jpg',
		imgAlt: 'AMD Ryzen 5 7600X 4.7 GHz 6-Core Box',
		rating: 4,
		reviewCount: 78,
		price: 218.59,
	},
	{
		id: '5',
		categoryId: '1',
		name: 'AMD Ryzen 7 5800X 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/9b4cefb2e43f2c358f3a97a31e1be90b.256p.jpg',
		imgAlt: 'AMD Ryzen 7 5800X 3.8 GHz 8-Core Box',
		rating: 2,
		reviewCount: 192,
		price: 209.0,
	},
	{
		id: '6',
		categoryId: '1',
		name: 'Intel Core i9-14900K 3.2 GHz 24-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/c9117c605854e9387e57cd69ebca2415.256p.jpg',
		imgAlt: 'Intel Core i9-14900K 3.2 GHz 24-Core Box',
		rating: 5,
		reviewCount: 74,
		price: 576.75,
	},
	{
		id: '7',
		categoryId: '1',
		name: 'Intel Core i5-12400F 2.5 GHz 6-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg',
		imgAlt: 'Intel Core i5-12400F 2.5 GHz 6-Core Box',
		rating: 3,
		reviewCount: 488,
		price: 146.36,
	},
	{
		id: '8',
		categoryId: '1',
		name: 'Intel Core i5-13600K 3.5 GHz 14-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/535b5631a223b77657804c8144c1277e.256p.jpg',
		imgAlt: 'Intel Core i5-13600K 3.5 GHz 14-Core Box',
		rating: 5,
		reviewCount: 18,
		price: 299.99,
	},
	{
		id: '2',
		categoryId: '2',
		name: 'Produkt 1',
		description: 'Opis produktu 1',
		img: '',
		imgAlt: '',
		rating: 1,
		reviewCount: 1,
		price: 100,
	},
];

