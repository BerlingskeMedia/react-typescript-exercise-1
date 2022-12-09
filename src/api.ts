import products from "./data/products.json";
import { Product } from "./types";

const data = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 300);
  });
};

export const api = {
  data,
};
