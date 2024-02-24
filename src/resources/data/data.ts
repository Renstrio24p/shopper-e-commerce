import { Product } from "../types/Product";

export const
  p1_img = 'product_1',
  p2_img = 'product_2',
  p3_img = 'product_3',
  p4_img = 'product_4';

let data_product: Product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p1_img,
    new_price: 50.00,
    old_price: 80.50,
  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p2_img,
    new_price: 85.00,
    old_price: 120.50,
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p3_img,
    new_price: 60.00,
    old_price: 100.50,
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    image: p4_img,
    new_price: 100.00,
    old_price: 150.00,
  },
];

export default data_product;
