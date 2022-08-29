import { Button, InputNumber } from "antd";
import styled from "styled-components";

export const ProductPageContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #ccc;
  padding: 4vw 10vw;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  padding: 1vh;
  justify-content: center;

  img {
    width: 100%;
  }
`;

export const ProductDescriptionContainer = styled.div`
  width: 50%;
  display: flex;
  flex-flow: column wrap;
  border: 1px solid #555;
  padding: 1vh;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: #ddd;
  word-break: break-all;
  justify-content: space-around;
`;

export const TitleProductDescriptionContainer = styled.div`
  display: flex;
  align-content: center;
  width: 100%;

  h1 {
    margin: 2vh auto;
  }
`;

export const BottomActionsContainer = styled.div`
  display: grid;
  gap: 0.5vh;

  grid-template-areas:
    "quantity addToCart"
    "stockQuantity buyNow";
`;

export const AddToCartButton = styled(Button)`
  grid-area: addToCart;
`;

export const BuyNowButton = styled(Button)`
  grid-area: buyNow;
`;

export const Quantity = styled(InputNumber)`
  grid-area: quantity;

  && {
    width: 100%;
  }
`;

export const StockQuantity = styled.div`
  grid-area: stockQuantity;
  background-color: #fff;

  span {
    margin-left: 11px;
  }
`;
