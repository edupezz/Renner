import React from "react";
import { useParams } from "react-router-dom";
import productList from "../../utils/products.json";
import { ShoppingCartContext } from "../../providers/ShoppingCartProvider";
import { PlusSquareOutlined, MinusSquareOutlined } from "@ant-design/icons";

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
  const { handleShoppingCart } = React.useContext(ShoppingCartContext);
  const file = JSON.stringify(productList);
  const file2 = JSON.parse(file);

  const productUrl = `https://picsum.photos/300/300?random=${productId}`;

  const onChange = (value) => {
    setQtd(value);
  };

  const handleCart = (id) => {
    handleShoppingCart(id, qtd, "plus");
  };

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
            min={0}
            max={99}
            defaultValue="1"
            onChange={onChange}
            disabled={file2[productId - 1].quantity <= 0}
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
          <BuyNowButton
            onClick={() => handleCart(productId)}
            icon={<MinusSquareOutlined />}
            disabled={file2[productId - 1].quantity <= 0}
          >
            Remover do carrinho
          </BuyNowButton>
          <StockQuantity
            border={file2[productId - 1].quantity <= 0 ? "red" : "#fff"}
          >
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
