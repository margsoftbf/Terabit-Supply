export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface CartState {
    items: { [id: string]: CartItem };
  }