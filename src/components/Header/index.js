import React from "react";
import { ShoppingCartContext } from "../../providers/ShoppingCartProvider";
import {
  ShoppingCartContainer,
  SearchContainer,
  HeaderContainer,
  LogoContainer,
  NavContainer,
} from "./styles";
import { Input, Badge } from "antd";
import { Link } from "react-router-dom";

import { ShoppingCartOutlined } from "@ant-design/icons";

const { Search } = Input;

const Header = () => {
  const { totalItems } = React.useContext(ShoppingCartContext);

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
        <Link to={"/checkout"}>
          <ShoppingCartContainer>
            <Badge count={totalItems ?? 0} showZero>
              <ShoppingCartOutlined className="cart" />
            </Badge>
          </ShoppingCartContainer>
        </Link>
      </HeaderContainer>
    </>
  );
};

export default Header;
