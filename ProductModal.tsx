import * as React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  Badge,
  ModalFooter,
  Button,
  Input
} from "reactstrap";
import { Product } from "./types";
import useConstant from "use-constant";
import ProductService from "./product-service";

interface ProductProps {
  product: Product | null;
  unSelectProduct: () => void;
}

const ProductModal: React.FC<ProductProps> = ({ product, unSelectProduct }) => {
  const productService = useConstant(() => ProductService.Instance);
  const [pickedVariantId, setPickedVariantId] = React.useState(null);
  const [quantity, setQuantity] = React.useState(0);

  return (
    <Modal isOpen={!!product} toggle={unSelectProduct} centered>
      {!!product && (
        <React.Fragment>
          <ModalHeader>{product.name}</ModalHeader>

          <ModalBody>
            <Card>
              <CardImg
                top
                src={product.variants[0].imageSrc}
                alt={product.name}
              />
              <CardBody>
                <CardText>{product.description}</CardText>
              </CardBody>
            </Card>
          </ModalBody>
          <div className="m-2">
            <h3>Choose variant</h3>
            <div className="d-flex flex-row h-25 align-content-center justify-content-between">
              {product.variants.map(variant => (
                <Card
                  key={variant.id}
                  onClick={() => setPickedVariantId(variant.id)}
                  className={`m-2 variant ${
                    pickedVariantId === variant.id ? "variant-picked" : ""
                  }`}
                >
                  <CardImg top src={variant.imageSrc} alt={product.name} />
                  <CardBody>
                    <CardText>
                      <Badge className="ml-1" color="primary">
                        {variant.size}
                      </Badge>
                      <Badge className="ml-1" color="gold">{`${
                        variant.price.amount
                      } ${variant.price.currency}`}</Badge>
                      <Badge
                        style={{
                          backgroundColor: variant.color,
                          color: variant.color === "black" ? "white" : undefined
                        }}
                        className="ml-1"
                        color="gold"
                      >{`${variant.color}`}</Badge>
                    </CardText>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
          <div className="m-2">
            <h3>Pick quantity</h3>
            <Input
              onChange={e => setQuantity(Number(e.target.value))}
              type="select"
              name="select"
              id="exampleSelect"
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </div>
          <ModalFooter className="align-content-center justify-content-center">
            <Button
              disabled={pickedVariantId === null || quantity === 0}
              className="gsi gsi-send"
              color="primary"
              onClick={() => {
                productService.addVariantToCart(
                  product.id,
                  pickedVariantId,
                  quantity
                );
                unSelectProduct();
              }}
            >
              Add to Cart
            </Button>
          </ModalFooter>
        </React.Fragment>
      )}
    </Modal>
  );
};

export default ProductModal;
