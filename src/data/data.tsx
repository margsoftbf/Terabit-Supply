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
	},
	{
		id: '2',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 5 5600X 3.7',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg',
		imgBig: "https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.1600.jpg",
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
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/2f3405387f23ab827695d966ea9f9682.1600.jpg',
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
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/fd6305088c9d16d59017b380fb9c408a.1600.jpg',
		imgAlt: 'AMD Ryzen 5 7600X 4.7 GHz 6-Core Box',
		rating: 4,
		reviewCount: 78,
		inStock: true,
		price: 218.59,
	},
	{
		id: '5',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5800X 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/9b4cefb2e43f2c358f3a97a31e1be90b.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/9b4cefb2e43f2c358f3a97a31e1be90b.1600.jpg',
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
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/c9117c605854e9387e57cd69ebca2415.1600.jpg',
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
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/5fe3c9cc8cbaaa4aa52aed7389d2cc10.1600.jpg',
		imgAlt: 'Intel Core i5-12400F 2.5 GHz 6-Core Box',
		rating: 3,
		reviewCount: 488,
		inStock: true,
		price: 146.36,
	},
	{
		id: '8',
		categoryId: '1',
		categoryName: 'CPUs',
		name: 'Intel Core i5-13600K 3.5 GHz 14-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/535b5631a223b77657804c8144c1277e.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/535b5631a223b77657804c8144c1277e.1600.jpg',
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
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/01163d618db9518d03041c9997e23bb1.1600.jpg',
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
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/b9d3c68bbf713cdd1211f3792040ce95.1600.jpg',
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
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'Cooler Master Hyper 212',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/b45763abe7a0517129d3c0e026d0370d.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/b45763abe7a0517129d3c0e026d0370d.1600.jpg',
		imgAlt: 'Cooler Master Hyper 212 Black Edition 42 CFM CPU Cooler Photo',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
	},
	{
		id: '12',
		categoryId: '2',
		categoryName: 'CPUs',
		name: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iure possimus, nihil a laudantium aspernatur fugit illum eaque itaque alias impedit, mollitia libero autem vitae illo inventore voluptatum eius consectetur expedita quas ex animi odio ut. Quam minima voluptatibus modi autem nihil! Exercitationem optio dolorum, accusantium, dolores soluta distinctio hic autem vitae cumque sunt fugiat laborum voluptas perferendis, id aliquid nisi consectetur non! Perferendis numquam animi quis nobis incidunt iste!',
		img: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.256p.jpg',
		imgBig: 'https://cdna.pcpartpicker.com/static/forever/images/product/f599944d7bed683e57062447764ce9d9.1600.jpg',
		imgAlt: 'AMD Ryzen 7 5700G 3.8 GHz 8-Core Box',
		rating: 5,
		reviewCount: 174,
		inStock: true,
		price: 275.99,
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
