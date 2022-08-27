import React from "react";
import {
  ShoppingCartContainer,
  SearchContainer,
  HeaderContainer,
  LogoContainer,
  NavContainer,
} from "./styles";
import { Input, Space } from "antd";

import { ShoppingCartOutlined } from "@ant-design/icons";

const { Search } = Input;

const Header = () => {
  const onSearch = (value) => console.log(value);

  return (
    <HeaderContainer>
      <Space direction="horizontal">
        <LogoContainer>
          <p>Header</p>
        </LogoContainer>
        <NavContainer>
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>FAQ</li>
          </ul>
        </NavContainer>
        <SearchContainer>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </SearchContainer>
        <ShoppingCartContainer>
          <ShoppingCartOutlined />
        </ShoppingCartContainer>
      </Space>
    </HeaderContainer>
  );
};

export default Header;
