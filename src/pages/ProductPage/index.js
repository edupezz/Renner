import React from "react";
import { useParams } from "react-router-dom";
import productList from "../../utils/products.json";
import { ShoppingCartContext } from "../../providers/ShoppingCartProvider";
import { PlusSquareOutlined } from "@ant-design/icons";

import {
  Quantity,
  BuyNowButton,
  StockQuantity,
  AddToCartButton,
  ProductPageContainer,
  ProductImageContainer,
  BottomActionsContainer,
  ProductDescriptionContainer,
  TitleProductDescriptionContainer,
} from "./styles";

const ProductPage = () => {
  const [qtd, setQtd] = React.useState(1);
  const pathParams = useParams();
  const productId = Number(pathParams.id);
  const { addItemToCart } = React.useContext(ShoppingCartContext);
  const file = JSON.stringify(productList);
  const file2 = JSON.parse(file);

  const productUrl = `https://picsum.photos/300/300?random=${productId}`;

  const onChange = (value) => {
    console.log(value);
    setQtd(value);
  };

  const handleCart = (id) => {
    console.log(id);
    addItemToCart(id, qtd);
  };

  //console.log("Product", +productId);
  //console.log(productList[productId - 1]);
  console.log(file2);
  console.log(productList);
  console.log(file2[productId - 1].quantity > 0);
  console.log(qtd);
  return (
    <ProductPageContainer>
      <ProductImageContainer>
        <img src={productUrl} />
      </ProductImageContainer>
      <ProductDescriptionContainer>
        <TitleProductDescriptionContainer>
          <h1>{productList[productId - 1].name}</h1>
          <h1>
            {productList[productId - 1].price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </h1>
        </TitleProductDescriptionContainer>
        Description: <br /> {productList[productId - 1].description}
        <BottomActionsContainer>
          <Quantity
            defaultValue="1"
            onChange={onChange}
            bordered
            controls
            keyboard
          />
          <AddToCartButton
            onClick={() => handleCart(productId)}
            icon={<PlusSquareOutlined />}
            disabled={file2[productId - 1].quantity <= 0}
          >
            Adicionar ao carrinho
          </AddToCartButton>
          <BuyNowButton>oi</BuyNowButton>
          <StockQuantity>
            <span>
              {file2[productId - 1].quantity} - Quantidade em estoque.
            </span>
          </StockQuantity>
        </BottomActionsContainer>
      </ProductDescriptionContainer>
    </ProductPageContainer>
  );
};
export default ProductPage;
