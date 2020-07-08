import {
  Product,
  Color,
  Size,
  Currency,
  Price,
  Cart,
  Variant,
  LineItem
} from "./types";
import { generateProductList } from './generate-product-list';

// Create class called ProductService
interface IProductService {
  readonly Cart: Cart;
  readonly Products: Product[];
  addVariantToCart: (productId: string, variantId: string, quantity: number) => void;
  removeLineItemFromCart: (variantId: string) => void;
};


// todo: do exercises here



































