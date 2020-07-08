import * as React from "react";
import { render } from "react-dom";
import useConstant from "use-constant";
import ProductService from "./product-service";
import { Product, Cart, Currency } from "./types";
import ProductList from "./ProductList";
import { Toast, ToastHeader, ToastBody, Badge, Button } from "reactstrap";

import "./style.css";

export const Root: React.FC = () => {
  const productService = useConstant(() => ProductService.Instance);

  const [products, setProducts] = React.useState<Product[]>([]);
  const [cart, setCart] = React.useState<Cart>({
    lineItems: [],
    subtotal: { amount: 0, currency: Currency.GBP },
    shippingPrice: { amount: 0, currency: Currency.GBP },
    total: { amount: 0, currency: Currency.GBP }
  });

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setProducts(productService.Products);
      setCart(productService.Cart);
    }, 10); // This is not production code, tasks are meant as typescript exercises only and react is for preview. Normally if you'd want state of your class to be accesible to react elements try using rx-js and Subject for state managment.
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="cart">
        <Toast>
          <ToastHeader>Cart</ToastHeader>
          <ToastBody>
            <p>
              <strong>Subtotal: </strong> {cart.subtotal.amount}
            </p>
            <p>
              <strong>Shipping price: </strong> {cart.shippingPrice.amount}
            </p>
            <p>
              <strong>Total: </strong> {cart.total.amount}
            </p>
          </ToastBody>
        </Toast>
        {cart.lineItems.map(({ variant, quantity }) => (
          <Toast key={variant.id}>
            <ToastHeader>
              {" "}
              <Badge className="ml-1" color="primary">
                {variant.size}
              </Badge>
              <Badge className="ml-1" color="gold">{`${variant.price.amount} ${
                variant.price.currency
              }`}</Badge>
              <Badge
                style={{
                  backgroundColor: variant.color,
                  color: variant.color === "black" ? "white" : undefined
                }}
                className="ml-1"
                color="gold"
              >{`${variant.color}`}</Badge>{" "}
              <strong>#{quantity}</strong>
            </ToastHeader>
            <ToastBody className="text-center">
              <img
                src={variant.imageSrc}
                width="60px"
                height="60px"
                className="mr-1"
              />
              <Button
                color="danger"
                className="ml-1"
                onClick={() =>
                  productService.removeLineItemFromCart(variant.id)
                }
              >
                Remove Line Item
              </Button>
            </ToastBody>
          </Toast>
        ))}
      </div>
      <ProductList products={products} />
    </div>
  );
};

render(<Root />, document.getElementById("root"));
