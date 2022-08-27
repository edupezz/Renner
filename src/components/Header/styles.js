import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: red;
  grid-area: header;
`;

export const LogoContainer = styled.div`
  display: flex;
  height: auto;
  background-color: aliceblue;

  p {
    color: coral;
    font-size: 1.5rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  width: 20vw;
  flex-direction: row;
  flex-flow: row;
  background-color: gainsboro;

  ul {
    display: flex;
    align-items: center;
  }

  li {
    list-style-type: none;
  }
`;

export const SearchContainer = styled.div`
  width: 20vw;
  display: flex;
`;

export const ShoppingCartContainer = styled.div`
  width: 10vw;

  :first-child {
    font-size: 1.7rem;
    color: #fff;
  }
`;
