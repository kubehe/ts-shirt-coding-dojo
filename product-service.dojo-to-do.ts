import { v4 as uuid } from "uuid";
import {
  Product,
  Color,
  Size,
  Currency,
  Price,
  Cart,
  Variant,
  LineItems
} from "./types";

// Create class called ProductService
interface IProductService {
  readonly Cart: Cart;
  readonly Products: Product[];
  addVariantToCart: (productId: string, variantId: string, quantity: number) => void;
  removeLineItemFromCart: (variantId: string) => void;
};


// todo: do exercises here





































const generateProductList = (): Product[] => {
  let products: Product[] = [];
  for (let i = 0; i < 20; i++) {
    products = [
      ...products,
      {
        id: uuid(),
        name: "ADIDAS ADICOLOR TREFOIL HOODIE #" + i,
        description:
          "Which color tells your story best? Rooted in our heritage of sport, Adicolor is iconic adidas style in a spectrum of shades. This hoodie puts the spotlight on the Trefoil logo. French terry fabric is everyday-level cozy.",
        variants: [
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.black,
            size: Size.L,
            price: { amount: 100.5, currency: Currency.GBP }
          },
          {
            id: uuid(),
            imageSrc:
              "https://images.pexels.com/photos/1484807/pexels-photo-1484807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            color: Color.pink,
            size: Size.S,
            price: { amount: 100.5, currency: Currency.PLN }
          }
        ]
      }
    ];
  }
  return products;
};