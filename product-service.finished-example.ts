
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

export default class ProductService implements IProductService {
  // 1. Create cart field, product list field and constructor to initialize it

  private _cart: Cart;

  private _products: Product[];

  constructor() {
    this._cart = {
      lineItems: [],
      subtotal: { amount: 0, currency: Currency.GBP },
      shippingPrice: { amount: 10.5, currency: Currency.GBP },
      total: { amount: 0, currency: Currency.GBP }
    };
    this._products = generateProductList();
  }

  // Create getter for cart field

  get Cart() {
    return this._cart;
  }

  // 2. Browse the products
  //    Create product list getter

  get Products(): Product[] {
    return this._products;
  }

  // 1. Create singleton with getter method returning instance of ProductService

  static get Instance(): ProductService {
    if (!this._instance) {
      this._instance = new ProductService();
    }
    return this._instance;
  }

  private static _instance: ProductService;

  // Find variant by product id and variant id in product list
  private findVariant = (productId: string, variantId: string): Variant => {
    const product: Product = this._products.find(
      product => product.id === productId
    );

    if (!product) {
      throw Error(`Product with id: ${productId} not found`);
    }

    const variant = product.variants.find(variant => variant.id === variantId);

    if (!variant) {
      throw Error(`Variant with id: ${variantId} not found`);
    }

    return variant;
  };

  // 3. Add a product to the cart
  //    Find product by product id then in product find variant by variant id

  addVariantToCart = (
    productId: string,
    variantId: string,
    quantity: number
  ) => {
    const variant = this.findVariant(productId, variantId);
    const lineItems = [...this._cart.lineItems, { variant, quantity }];
    const subtotal = {
      ...this._cart.subtotal,
      amount: this._cart.subtotal.amount + variant.price.amount * quantity
    };
    const shippingPrice = this._cart.shippingPrice;
    this._cart = {
      lineItems,
      subtotal,
      shippingPrice,
      total: {
        ...this._cart.total,
        amount: subtotal.amount + shippingPrice.amount
      }
    };
  };

  // Remove line item from cart

  removeLineItemFromCart = (variantId: string) => {
    const { variant, quantity } = this._cart.lineItems.find(
      lineItem => lineItem.variant.id === variantId
    );

    const lineItems: LineItem[] = this._cart.lineItems.filter(
      lineItem => lineItem.variant.id !== variantId
    );

    const subtotal: Price = {
      ...this._cart.subtotal,
      amount: this._cart.subtotal.amount - variant.price.amount * quantity
    };

    const shippingPrice: Price = this._cart.shippingPrice;

    this._cart = {
      lineItems,
      subtotal,
      shippingPrice,
      total: {
        ...this._cart.total,
        amount: subtotal.amount + shippingPrice.amount
      }
    };
  };
}
