import React, { useContext } from "react";
import productList from "../../utils/products.json";
import { ShoppingCartContext } from "../../providers/ShoppingCartProvider";
import { useNavigate } from "react-router-dom";

import {
  ShoppingCartOutlined,
  PlusSquareOutlined,
  MinusSquareOutlined,
} from "@ant-design/icons";

import { Card, Button, Input } from "antd";

import {
  ProductPageContainer,
  CardBottomPrice,
  TextShoppingCartContainer,
  CartShoppingContainer,
} from "./styles";

const { Meta } = Card;

console.log(productList.length);

const ProductsPage = () => {
  const { cartItems, addItemToCart, removeItemFromCart, clearCart } =
    useContext(ShoppingCartContext);
  const navigate = useNavigate();
  {
    console.log(cartItems);
  }
  return (
    <ProductPageContainer>
      {productList.map((product) => {
        return (
          <Card
            hoverable
            style={{ width: "15rem" }}
            cover={<img alt={product.name} src={product.imgUrl} />}
            onClick={() => {
              navigate(`/product/${product.id}`);
            }}
          >
            <Meta title={product.name} description={product.description} />

            <br />
            <CardBottomPrice>
              <TextShoppingCartContainer>
                Price:
                {product.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TextShoppingCartContainer>
              <CartShoppingContainer>
                <Button
                  type="primary"
                  icon={
                    <MinusSquareOutlined
                      onClick={() => removeItemFromCart(product.id)}
                    />
                  }
                />
                <Input readOnly value={product?.quantity ?? 0} />
                <Button
                  type="primary"
                  icon={
                    <PlusSquareOutlined
                      onClick={() => addItemToCart(product.id)}
                    />
                  }
                />
              </CartShoppingContainer>
            </CardBottomPrice>
          </Card>
        );
      })}
    </ProductPageContainer>
  );
};
export default ProductsPage;
