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
		src: procesorSmall.src,
		srcMd: procesorBig.src,
		alt: 'cpu picture',
		title: 'Choose your processor',
		subtitle: 'Intel - Core i9-13900K',
		price: '$543.33 or 55.55/mo. for 24 mo.',
		btn: 'Shop now',
	},
	{
		id: 2,
		src: gpuSmall.src,
		srcMd: gpuBig.src,
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
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 7800X3D',
		description:
			'The Dominant Gaming Processor, with AMD 3D V-Cache™ Technology for Even More Game Performance Whatever the setting, whatever the resolution, lead your team to victory with this incredible gaming processor. Plus, enjoy the benefits of next-gen AMD 3D V-Cache™ technology for low latency and even more game performance.',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/f0e0e59d75066ec825667b71c31e3c83.1600.jpg',
		imgAlt: 'AMD Ryzen 7 7800X3D Box',
		rating: 5,
		reviewCount: 118,
		inStock: true,
		price: 358.99,
		isTrending: true,
	},
	{
		id: '2',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 5 5600X 3.7',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.1600.jpg',
		imgAlt: 'AMD Ryzen 5 5600X 3.7 Box',
		rating: 4,
		reviewCount: 148,
		inStock: true,
		price: 156.0,
	},
	{
		id: '3',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'Intel Core i7-13700K 3.4 GHz',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/2f3405387f23ab827695d966ea9f9682.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/2f3405387f23ab827695d966ea9f9682.1600.jpg',
		imgAlt: 'Intel Core i7-13700K 3.4 GHz Box',
		rating: 3,
		reviewCount: 188,
		inStock: true,
		price: 369.99,
	},
	{
		id: '4',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 5 7600X 4.7 GHz 6-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/fd6305088c9d16d59017b380fb9c408a.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/fd6305088c9d16d59017b380fb9c408a.1600.jpg',
		imgAlt: 'AMD Ryzen 5 7600X 4.7 GHz 6-Core Box',
		rating: 4,
		reviewCount: 78,
		inStock: true,
		price: 218.59,
		isTrending: true,
	},
	{
		id: '5',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5800X 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/9b4cefb2e43f2c358f3a97a31e1be90b.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/9b4cefb2e43f2c358f3a97a31e1be90b.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5800X 3.8 GHz 8-Core Box',
		rating: 2,
		reviewCount: 192,
		inStock: true,
		price: 209.0,
	},
	{
		id: '6',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'Intel Core i9-14900K 3.2 GHz 24-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/c9117c605854e9387e57cd69ebca2415.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/c9117c605854e9387e57cd69ebca2415.1600.jpg',
		imgAlt: 'Intel Core i9-14900K 3.2 GHz 24-Core Box',
		rating: 5,
		reviewCount: 74,
		inStock: true,
		price: 576.75,
	},
	{
		id: '7',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'Intel Core i5-12400F 2.5 GHz 6-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.1600.jpg',
		imgAlt: 'Intel Core i5-12400F 2.5 GHz 6-Core Box',
		rating: 3,
		reviewCount: 488,
		inStock: true,
		price: 146.36,
		isTrending: true,
	},
	{
		id: '8',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'Intel Core i5-13600K 3.5 GHz 14-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/535b5631a223b77657804c8144c1277e.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/535b5631a223b77657804c8144c1277e.1600.jpg',
		imgAlt: 'Intel Core i5-13600K 3.5 GHz 14-Core Box',
		rating: 5,
		reviewCount: 18,
		inStock: true,
		price: 299.99,
	},
	{
		id: '9',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'Intel Core i5-12600KF 3.7 GHz 10-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/01163d618db9518d03041c9997e23bb1.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/01163d618db9518d03041c9997e23bb1.1600.jpg',
		imgAlt: 'Intel Core i5-12600KF 3.7 GHz 10-Core Box',
		rating: 4,
		reviewCount: 127,
		inStock: true,
		price: 154.99,
	},
	{
		id: '10',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'Intel Core i9-12900K 3.2 GHz 16-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/b9d3c68bbf713cdd1211f3792040ce95.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/b9d3c68bbf713cdd1211f3792040ce95.1600.jpg',
		imgAlt: 'Intel Core i9-12900K 3.2 GHz 16-Core Box',
		rating: 4,
		reviewCount: 18,
		inStock: true,
		price: 339.99,
	},
	{
		id: '11',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
		isTrending: true,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'Cooler Master Hyper 212',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/b45763abe7a0517129d3c0e026d0370d.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/b45763abe7a0517129d3c0e026d0370d.1600.jpg',
		imgAlt: 'Cooler Master Hyper 212 Black Edition 42 CFM CPU Cooler Photo',
		rating: 4,
		reviewCount: 104,
		inStock: true,
		price: 49.99,
	},
	{
		id: '13',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'Cooler Master MASTERLIQUID ML240L',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/5b6a5e7f4cf456ccf6415235cf7adc99.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/5b6a5e7f4cf456ccf6415235cf7adc99.1600.jpg',
		imgAlt:
			'Cooler Master MASTERLIQUID ML240L RGB V2 65.59 CFM Liquid CPU Cooler Photo',
		rating: 3,
		reviewCount: 104,
		inStock: true,
		price: 96.96,
	},
	{
		id: '14',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'be quiet! Dark Rock Pro 4 50.5 CFM CPU Cooler',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/8ab57dc3c0eb346c72ef7a2405e31227.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/8ab57dc3c0eb346c72ef7a2405e31227.1600.jpg',
		imgAlt: 'be quiet! Dark Rock Pro 4 50.5 CFM CPU Cooler Photo',
		rating: 4,
		reviewCount: 124,
		inStock: true,
		price: 84.0,
		isTrending: true,
	},
	{
		id: '15',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'Thermalright Peerless Assassin 120',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://m.media-amazon.com/images/I/41hFTmi5aUL.jpg',
		imgBig: 'https://m.media-amazon.com/images/I/41hFTmi5aUL.jpg',
		imgAlt: 'Thermalright Peerless Assassin 120 SE 66.17 CFM CPU Cooler Photo',
		rating: 5,
		reviewCount: 285,
		inStock: true,
		price: 33.99,
	},
	{
		id: '16',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'Corsair iCUE H150i ELITE CAPELLIX',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/12bfecb3325a384ef35e38ada6b8bca3.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/12bfecb3325a384ef35e38ada6b8bca3.1600.jpg',
		imgAlt:
			'Corsair iCUE H150i ELITE CAPELLIX XT 65.57 CFM Liquid CPU Cooler Photo',
		rating: 5,
		reviewCount: 99,
		inStock: true,
		price: 174.99,
	},
	{
		id: '17',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'NZXT Kraken Elite 360 RGB',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/49ed312d967c71e5bf866285deee9f9c.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/49ed312d967c71e5bf866285deee9f9c.1600.jpg',
		imgAlt: 'NZXT Kraken Elite 360 RGB 78.02 CFM Liquid CPU Cooler',
		rating: 5,
		reviewCount: 1100,
		inStock: true,
		price: 282.99,
	},
	{
		id: '18',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'Noctua NH-D15 chromax.black 82.52 CFM',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://m.media-amazon.com/images/I/51kgqhkUNuL.jpg',
		imgBig: 'https://m.media-amazon.com/images/I/51kgqhkUNuL.jpg',
		imgAlt: 'Noctua NH-D15 chromax.black 82.52 CFM CPU Cooler Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 85.99,
		isTrending: true,
	},
	{
		id: '19',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'NZXT Kraken 240 78.02 CFM Liquid',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/157afeba59d05304fe181106745e6177.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/157afeba59d05304fe181106745e6177.1600.jpg',
		imgAlt: 'NZXT Kraken 240 78.02 CFM Liquid CPU Cooler Photo',
		rating: 4,
		reviewCount: 14,
		inStock: true,
		price: 134.99,
	},
	{
		id: '20',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'Deepcool AG400 BK ARGB 75.89 CFM',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/9464a59a8e91c8203397a01ab96d0ec7.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/9464a59a8e91c8203397a01ab96d0ec7.1600.jpg',
		imgAlt: 'Deepcool AG400 BK ARGB 75.89 CFM CPU Cooler Photo',
		rating: 3,
		reviewCount: 334,
		inStock: true,
		price: 45.99,
	},
	{
		id: '21',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'ARCTIC Liquid Freezer II 360 56.3 CFM',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/211ec0a76765180845d9eda341ab7a7b.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/211ec0a76765180845d9eda341ab7a7b.1600.jpg',
		imgAlt: 'ARCTIC Liquid Freezer II 360 56.3 CFM Liquid CPU Cooler Photo',
		rating: 4,
		reviewCount: 74,
		inStock: true,
		price: 135.99,
	},
	{
		id: '22',
		categoryId: '2',
		categoryName: 'CPU Cooler',
		name: 'Cooler Master Hyper 212 RGB Black Edition',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/b40d38a6383f462adfcec85b193216b1.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/bfcb874bb3eccf12ebbf109c2a7e5b5d.1600.jpg',
		imgAlt: 'Cooler Master Hyper 212 RGB Black Edition 59 CFM CPU Cooler Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 62.99,
		isTrending: true,
	},
	{
		id: '23',
		categoryId: '3',
		categoryName: 'Motherboards',
		name: 'Asus ROG STRIX B650-A GAMING WIFI ATX AM5',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://m.media-amazon.com/images/I/51W9XJLDRlL.jpg',
		imgBig: 'https://m.media-amazon.com/images/I/51i24bacF2L.jpg',
		imgAlt: 'Asus ROG STRIX B650-A GAMING WIFI ATX AM5 Motherboard Photo',
		rating: 5,
		reviewCount: 140,
		inStock: true,
		price: 269.99,
	},
	{
		id: '24',
		categoryId: '3',
		categoryName: 'Motherboards',
		name: 'Gigabyte Z790 AORUS ELITE AX ATX LGA1700',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/ba20600286bf8f74ce71df37ed8aef65.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/ba20600286bf8f74ce71df37ed8aef65.1600.jpg',
		imgAlt: 'Gigabyte Z790 AORUS ELITE AX ATX LGA1700 Motherboard Photo',
		rating: 5,
		reviewCount: 104,
		inStock: true,
		price: 239.99,
	},
	{
		id: '25',
		categoryId: '3',
		categoryName: 'Motherboards',
		name: 'MSI B550 GAMING GEN3 ATX AM4',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/cbc52effd345bd5e9d66b5f7d198f8b4.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/cbc52effd345bd5e9d66b5f7d198f8b4.1600.jpg',
		imgAlt: 'MSI B550 GAMING GEN3 ATX AM4 Motherboard Photo',
		rating: 5,
		reviewCount: 140,
		inStock: true,
		price: 109.99,
		isTrending: true,
	},
	{
		id: '26',
		categoryId: '3',
		categoryName: 'Motherboards',
		name: 'Asus ROG STRIX B550-F GAMING WIFI II ATX AM4',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://m.media-amazon.com/images/I/417jkaDUMWL.jpg',
		imgBig: 'https://m.media-amazon.com/images/I/41kR0RWNsrL.jpg',
		imgAlt: 'Asus ROG STRIX B550-F GAMING WIFI II ATX AM4 Motherboard Photo',
		rating: 4,
		reviewCount: 142,
		inStock: true,
		price: 189.99,
	},
	{
		id: '27',
		categoryId: '3',
		categoryName: 'Motherboards',
		name: 'Gigabyte B650 GAMING X AX ATX AM5 Motherboard		',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/40037fa5f1c2c2b92273f1a5547ed181.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/40037fa5f1c2c2b92273f1a5547ed181.1600.jpg',
		imgAlt: 'Gigabyte B650 GAMING X AX ATX AM5 Motherboard Photo',
		rating: 5,
		reviewCount: 147,
		inStock: true,
		price: 193.99,
	},
	{
		id: '28',
		categoryId: '3',
		categoryName: 'Motherboards',
		name: 'MSI MAG Z790 TOMAHAWK WIFI ATX LGA1700 Motherboard		',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/4776555bd90ed817bdfa00fc78ae3043.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/4776555bd90ed817bdfa00fc78ae3043.1600.jpg',
		imgAlt: 'MSI MAG Z790 TOMAHAWK WIFI ATX LGA1700 Motherboard Photo',
		rating: 4,
		reviewCount: 147,
		inStock: true,
		price: 344.99,
		isTrending: true,
	},
	{
		id: '29',
		categoryId: '3',
		categoryName: 'Motherboards',
		name: 'MSI MAG B650 TOMAHAWK WIFI ATX AM5',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/dc9235e0d8052745493eb900bb9df6f6.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/dbf6a1ab70de7ab5ae575544966d138a.1600.jpg',
		imgAlt: 'MSI MAG B650 TOMAHAWK WIFI ATX AM5 Motherboard Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 213.99,
	},
	{
		id: '30',
		categoryId: '4',
		categoryName: 'Memory',
		name: 'Corsair Vengeance LPX 16 GB (2 x 8 GB) DDR4-3200 CL16 Memory',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/835ab3efad1be13bbe53beef3e3c6f96.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/835ab3efad1be13bbe53beef3e3c6f96.1600.jpg',
		imgAlt:
			'Corsair Vengeance LPX 16 GB (2 x 8 GB) DDR4-3200 CL16 Memory Photo',
		rating: 4,
		reviewCount: 14,
		inStock: true,
		price: 41.99,
	},
	{
		id: '31',
		categoryId: '4',
		categoryName: 'Memory',
		name: 'Corsair Vengeance 32 GB (2 x 16 GB) DDR5-5600 CL36 Memory',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://m.media-amazon.com/images/I/41jJSPS8W7L.jpg',
		imgBig: 'https://m.media-amazon.com/images/I/41jJSPS8W7L.jpg',
		imgAlt: 'Corsair Vengeance 32 GB (2 x 16 GB) DDR5-5600 CL36 Memory Photo',
		rating: 5,
		reviewCount: 250,
		inStock: true,
		price: 124.99,
	},
	{
		id: '32',
		categoryId: '4',
		categoryName: 'Memory',
		name: 'Corsair Vengeance RGB Pro 32 GB (2 x 16 GB) DDR4-3600 CL18 Memory',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/5f09867b54e9ad932b4dd1bc767f6238.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/5f09867b54e9ad932b4dd1bc767f6238.1600.jpg',
		imgAlt:
			'Corsair Vengeance RGB Pro 32 GB (2 x 16 GB) DDR4-3600 CL18 Memory Photo',
		rating: 5,
		reviewCount: 140,
		inStock: true,
		price: 99.99,
	},
	{
		id: '33',
		categoryId: '4',
		categoryName: 'Memory',
		name: 'G.Skill Trident Z5 RGB 32 GB (2 x 16 GB) DDR5-6000 CL36 Memory',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/e8d573bd2eac864d427645f0d2f7cad8.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/e8d573bd2eac864d427645f0d2f7cad8.1600.jpg',
		imgAlt:
			'G.Skill Trident Z5 RGB 32 GB (2 x 16 GB) DDR5-6000 CL36 Memory Photo',
		rating: 5,
		reviewCount: 65,
		inStock: true,
		price: 114.99,
	},
	{
		id: '34',
		categoryId: '4',
		categoryName: 'Memory',
		name: 'G.Skill Ripjaws V 32 GB (2 x 16 GB) DDR4-3200 CL16 Memory',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f97fce0b44ff2447a790b0bffc74f9f3.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/f97fce0b44ff2447a790b0bffc74f9f3.1600.jpg',
		imgAlt: 'G.Skill Ripjaws V 32 GB (2 x 16 GB) DDR4-3200 CL16 Memory Photo',
		rating: 5,
		reviewCount: 79,
		inStock: true,
		price: 64.99,
		isTrending: true,
	},
	{
		id: '35',
		categoryId: '4',
		categoryName: 'Memory',
		name: 'TEAMGROUP T-Force Delta RGB 32 GB (2 x 16 GB) DDR5-6000 CL30 Memory',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/09e373465295e5629efd7959a7147a3b.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/09e373465295e5629efd7959a7147a3b.1600.jpg',
		imgAlt:
			'TEAMGROUP T-Force Delta RGB 32 GB (2 x 16 GB) DDR5-6000 CL30 Memory Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 104.99,
	},
	{
		id: '36',
		categoryId: '5',
		categoryName: 'Storage',
		name: 'Samsung 980 Pro 2 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/3b2a91588d1a28bfa1b0184fb7f1c0a1.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/3b2a91588d1a28bfa1b0184fb7f1c0a1.1600.jpg',
		imgAlt:
			'Samsung 980 Pro 2 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive Photo',
		rating: 5,
		reviewCount: 144,
		inStock: true,
		price: 129.99,
	},
	{
		id: '37',
		categoryId: '5',
		categoryName: 'Storage',
		name: 'Samsung 970 Evo Plus 1 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/326881d073c1b667bd348893696c690e.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/326881d073c1b667bd348893696c690e.1600.jpg',
		imgAlt:
			'Samsung 970 Evo Plus 1 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive Photo',
		rating: 3,
		reviewCount: 14,
		inStock: true,
		price: 99.99,
	},
	{
		id: '38',
		categoryId: '5',
		categoryName: 'Storage',
		name: 'Seagate Barracuda Compute 2 TB 3.5" 7200 RPM Internal Hard Drive',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/c7b5b7dacbecdcdd0e073b761193eef6.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/c7b5b7dacbecdcdd0e073b761193eef6.1600.jpg',
		imgAlt:
			'Seagate Barracuda Compute 2 TB 3.5" 7200 RPM Internal Hard Drive Photo',
		rating: 4,
		reviewCount: 14,
		inStock: true,
		price: 59.99,
	},
	{
		id: '39',
		categoryId: '5',
		categoryName: 'Storage',
		name: 'Kingston NV2 1 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/7aa3028d0fc04e0ee3323f474bd349bd.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/7aa3028d0fc04e0ee3323f474bd349bd.1600.jpg',
		imgAlt:
			'Kingston NV2 1 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive Photo',
		rating: 4,
		reviewCount: 14,
		inStock: true,
		price: 64.99,
	},
	{
		id: '40',
		categoryId: '5',
		categoryName: 'Storage',
		name: 'Samsung 870 Evo 1 TB 2.5" Solid State Drive',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://m.media-amazon.com/images/I/31ITAX-GoIL.jpg',
		imgBig: 'https://m.media-amazon.com/images/I/31ITAX-GoIL.jpg',
		imgAlt: 'Samsung 870 Evo 1 TB 2.5" Solid State Drive Photo',
		rating: 2,
		reviewCount: 14,
		inStock: true,
		price: 104.99,
	},
	{
		id: '41',
		categoryId: '5',
		categoryName: 'Storage',
		name: 'Mushkin Source HC 16 TB 2.5" Solid State Drive',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://m.media-amazon.com/images/I/31KeULdwSLL.jpg',
		imgBig: 'https://m.media-amazon.com/images/I/31KeULdwSLL.jpg',
		imgAlt: 'Mushkin Source HC 16 TB 2.5" Solid State Drive Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 104.99,
	},
	{
		id: '42',
		categoryId: '5',
		categoryName: 'Storage',
		name: 'Western Digital Caviar Blue 1 TB 3.5" 7200 RPM Internal Hard Drive',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/daf819b70eccf7fec275bd65e3fe2b6a.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/daf819b70eccf7fec275bd65e3fe2b6a.1600.jpg',
		imgAlt:
			'Western Digital Caviar Blue 1 TB 3.5" 7200 RPM Internal Hard Drive Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 44.99,
	},
	{
		id: '43',
		categoryId: '6',
		categoryName: 'Video Card',
		name: 'MSI GeForce RTX 3060 Ventus 2X 12G GeForce RTX 3060 12GB 12 GB',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/dbc81b89efc82ce66fb2e3ab7e0f0658.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/c740684e2cd2339bf845f7493711bcb7.1600.jpg',
		imgAlt:
			'MSI GeForce RTX 3060 Ventus 2X 12G GeForce RTX 3060 12GB 12 GB Video Card Photo',
		rating: 5,
		reviewCount: 104,
		inStock: true,
		price: 289.99,
	},
	{
		id: '44',
		categoryId: '6',
		categoryName: 'Video Card',
		name: 'Gigabyte WINDFORCE OC GeForce RTX 4070 12 GB Video Card',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/772cce097c55469671a0d75ea4aca83a.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/772cce097c55469671a0d75ea4aca83a.1600.jpg',
		imgAlt: 'Gigabyte WINDFORCE OC GeForce RTX 4070 12 GB Video Card Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 549.99,
	},
	{
		id: '45',
		categoryId: '6',
		categoryName: 'Video Card',
		name: 'Gigabyte EAGLE GeForce RTX 4060 Ti 8 GB Video Card',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/80f174eea93a4a0981c63721c9a9805d.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/80f174eea93a4a0981c63721c9a9805d.1600.jpg',
		imgAlt: 'Gigabyte EAGLE GeForce RTX 4060 Ti 8 GB Video Card Photo',
		rating: 4,
		reviewCount: 14,
		inStock: true,
		price: 399.99,
	},
	{
		id: '46',
		categoryId: '6',
		categoryName: 'Video Card',
		name: 'PNY VCNRTX6000ADA-PB RTX 6000 Ada Generation 48 GB Video Card',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/6ef5b8f1b94982c71019a0d9ac2795e2.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/72a597d050456c35e29a0fe9a5703b64.1600.jpg',
		imgAlt:
			'PNY VCNRTX6000ADA-PB RTX 6000 Ada Generation 48 GB Video Card Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 999.99,
	},
	{
		id: '47',
		categoryId: '6',
		categoryName: 'Video Card',
		name: 'Sapphire PULSE Radeon RX 6700 XT 12 GB Video Card',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/dac0a423e293d98957670b9e46e997f1.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/dac0a423e293d98957670b9e46e997f1.1600.jpg',
		imgAlt: 'Sapphire PULSE Radeon RX 6700 XT 12 GB Video Card Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 314.99,
	},
	{
		id: '48',
		categoryId: '6',
		categoryName: 'Video Card',
		name: 'XFX Speedster SWFT 319 Radeon RX 6800 16 GB Video Card',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://m.media-amazon.com/images/I/41aCdMMAvYL.jpg',
		imgBig: 'https://m.media-amazon.com/images/I/41aCdMMAvYL.jpg',
		imgAlt: 'XFX Speedster SWFT 319 Radeon RX 6800 16 GB Video Card Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 459.99,
	},
	{
		id: '49',
		categoryId: '7',
		categoryName: 'Power Supplies',
		name: 'Corsair RM750e (2023) 750 W 80+ Gold Certified Fully Modular ATX Power Supply',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/336c7955df0312d04655dd3a13973c95.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/336c7955df0312d04655dd3a13973c95.1600.jpg',
		imgAlt:
			'Corsair RM750e (2023) 750 W 80+ Gold Certified Fully Modular ATX Power Supply Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 459.99,
	},
	{
		id: '50',
		categoryId: '8',
		categoryName: 'Cases',
		name: 'NZXT H9 Flow ATX Mid Tower Case',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/61eb5534e35ce8af07f25ff28197862b.256p.jpg',
		imgBig:
			'https://cdna.pcpartpicker.com/static/forever/images/product/bb483399e7e3fb1da85e1df3795d43ec.1600.jpg',
		imgAlt: 'NZXT H9 Flow ATX Mid Tower Case Photo',
		rating: 5,
		reviewCount: 14,
		inStock: true,
		price: 159.99,
	},
];

export const policies = [
	{
		name: 'Free delivery all year long',
		description:
			'Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.',
		imageSrc:
			'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
	},
	{
		name: '24/7 Customer Support',
		description:
			'Or so we want you to believe. In reality our chat widget is powered by a naive series of if/else statements that churn out canned responses. Guaranteed to irritate.',
		imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
	},
	{
		name: 'Fast Shopping Cart',
		description:
			"Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know.",
		imageSrc:
			'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
	},
	{
		name: 'Gift Cards',
		description:
			"We sell these hoping that you will buy them for your friends and they will never actually use it. Free money for us, it's great.",
		imageSrc:
			'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
	},
];

export const reviewsProduct = {
	average: 4,
	totalCount: 2500,
	counts: [
		{ rating: 5, count: 1600 },
		{ rating: 4, count: 200 },
		{ rating: 3, count: 250 },
		{ rating: 2, count: 150 },
		{ rating: 1, count: 30 },
	],
	featured: [
		{
			id: 1,
			rating: 3,
			content: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe omnis rem incidunt at fugiat quae maxime soluta culpa. Sed ex, repellendus porro soluta enim ipsa laboriosam iste beatae vel!</p>
      `,
			author: 'Daniel Rodriguez',
			avatarSrc:
				'https://admin-garski-dashboard.netlify.app/assets/img/people/avatar-rizky-hasanuddin.webp',
		},
		{
			id: 1,
			rating: 5,
			content: `
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quam, natus quos dolorum voluptatibus assumenda doloremque nostrum corrupti in, aliquam sint laudantium asperiores hic. Odio, beatae sit. Culpa, numquam facilis!</p>
      `,
			author: 'Kevin Roberts',
			avatarSrc:
				'https://admin-garski-dashboard.netlify.app/assets/img/people/avatar-kimberly-smith.webp',
		},
	],
};

import {
	FaFacebook,
	FaInstagram,
	FaTwitter,
	FaGithub,
	FaYoutube,
} from 'react-icons/fa';
export const footerNavigation = {
	main: [
		{ name: 'Category', href: '#' },
		{ name: 'About', href: '#' },
		{ name: 'Popular', href: '#' },
		{ name: 'Deals', href: '#' },
		{ name: 'Newsletter', href: '#' },
		{ name: 'Contact', href: '#' },
	],
	social: [
		{
			name: 'Facebook',
			href: '#',
			icon: FaFacebook,
		},
		{
			name: 'Instagram',
			href: '#',
			icon: FaInstagram,
		},
		{
			name: 'Twitter',
			href: '#',
			icon: FaTwitter,
		},
		{
			name: 'GitHub',
			href: '#',
			icon: FaGithub,
		},
		{
			name: 'YouTube',
			href: '#',
			icon: FaYoutube,
		},
	],
};
