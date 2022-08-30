import React from "react";
import productList from "../../utils/products.json";
import { useNavigate } from "react-router-dom";

import { Card } from "antd";

import {
  ProductPageContainer,
  CardBottomPrice,
  TextShoppingCartContainer,
} from "./styles";

const { Meta } = Card;

const ProductsPage = () => {
  const navigate = useNavigate();

  return (
    <ProductPageContainer>
      {productList.map((product) => {
        return (
          <Card
            key={product.id}
            hoverable
            style={{ width: "15rem" }}
            cover={
              <img
                alt={product.name}
                src={product.imgUrl}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
              />
            }
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
            </CardBottomPrice>
          </Card>
        );
      })}
    </ProductPageContainer>
  );
};
export default ProductsPage;
