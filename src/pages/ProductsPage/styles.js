import styled from "styled-components";

export const ProductPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: flex-start;
  background-color: purple;
  grid-area: content;
`;

export const CardBottomPrice = styled.div`
  display: flex;
  width: 100%;

  && {
    .ant-btn-icon-only {
      border-radius: 0;
    }
  }
`;

export const TextShoppingCartContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 0.2vw;
`;

export const CartShoppingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.2vw;
  width: 100%;
  justify-content: right;
  font-size: 1.1rem;
`;
