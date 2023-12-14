export interface CartItem {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

export interface CartState {
	items: { [id: string]: CartItem };
}

export interface WishlistItem {
	id: string;
	name: string;
}

export interface WishlistState {
	items: WishlistItem[];
}

export interface ProductProps {
	id: string;
	categoryId: string;
	name: string;
	description: string;
	img?: string;
	imgAlt?: string;
	rating: number;
	reviewCount: number;
	price: number;
}

export interface BlogPostProps {
	id: number;
	title: string;
	href: string;
	description: string;
	imageUrl: string;
	date: string;
	datetime: string; // Dodaj datetime
	category: { title: string; href: string };
	author: {
		name: string;
		role: string;
		href: string;
		imageUrl: string;
	};
}
