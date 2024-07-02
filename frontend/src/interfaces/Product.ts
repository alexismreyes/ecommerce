export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    /* category_id: Cateogory; */
    created_at: Date;
  }