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