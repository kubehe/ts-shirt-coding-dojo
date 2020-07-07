import * as React from "react";
import { Product } from "./types";
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText,
  Toast,
  ToastHeader,
  ToastBody
} from "reactstrap";
import ProductModal from "./ProductModal";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );
  const unSelectProduct = React.useCallback(() => setSelectedProduct(null), []);
  return (
    <React.Fragment>
      <div className="row m-4 justify-content-center">
        {products.map(product => (
          <Card
            key={product.id}
            className="col-3 m-1 product-card"
            onClick={(): void => setSelectedProduct(product)}
          >
            <CardImg
              top
              src={product.variants[0].imageSrc}
              alt={product.name}
            />
            <CardBody>
              <CardTitle>
                <strong>{product.name}</strong>
              </CardTitle>
              <CardText>{product.description}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
      <ProductModal
        product={selectedProduct}
        unSelectProduct={unSelectProduct}
      />
    </React.Fragment>
  );
};

export default ProductList;
