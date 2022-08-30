import React from "react";
import { ShoppingCartContext } from "../../providers/ShoppingCartProvider";
import { CheckoutContainer, ButtonContainer } from "./styles";

import { Button, Table } from "antd";

const CheckoutPage = () => {
  const { cartItems, clearCart } = React.useContext(ShoppingCartContext);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "id",
    },
  ];

  const dataSource = cartItems;

  return (
    <CheckoutContainer>
      <h1>Checkout</h1>
      <Table dataSource={dataSource} columns={columns} />;
      <ButtonContainer>
        <Button onClick={() => clearCart()}>Limpar carrinho</Button>
      </ButtonContainer>
    </CheckoutContainer>
  );
};
export default CheckoutPage;
