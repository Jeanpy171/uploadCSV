export interface Product {
  productId: string;
  name: string;
  description?: string;
  goldCoins: number;
  silverCoins: number;
  image?: string;
  active: boolean;
  category: string;
  stock?: number;
}

export interface DataTable {
  data: Product[];
}
