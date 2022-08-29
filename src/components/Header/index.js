import React from "react";
import {
  ShoppingCartContainer,
  SearchContainer,
  HeaderContainer,
  LogoContainer,
  NavContainer,
} from "./styles";
import { Input } from "antd";
import { Link } from "react-router-dom";

import { ShoppingCartOutlined } from "@ant-design/icons";

const { Search } = Input;

const Header = () => {
  //const onSearch = (value) => console.log(value);

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <Link to={"/"}>
            <p>Header</p>
          </Link>
        </LogoContainer>
        <NavContainer>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"products"}>
              <li>Products</li>
            </Link>
            <Link to={"/faq"}>
              <li>FAQ</li>
            </Link>
          </ul>
        </NavContainer>
        <SearchContainer>
          <Search placeholder="input search text" enterButton />
        </SearchContainer>
        <ShoppingCartContainer>
          <ShoppingCartOutlined className="cart" />
        </ShoppingCartContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
