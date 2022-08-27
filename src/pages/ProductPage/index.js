import React from "react";
import { useParams } from "react-router-dom";

import { ProductPageContainer } from "./styles";

const ProductPage = () => {
  const pathParams = useParams();
  const productId = pathParams.id;

  console.log(productId);

  return (
    <ProductPageContainer>
      <div>specific</div>
    </ProductPageContainer>
  );
};
export default ProductPage;
