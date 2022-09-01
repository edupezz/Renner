import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: #eee;
  grid-area: header;
  justify-content: space-around;
  align-items: center;
  color: #333;
  border-top: 0.7vh solid #111;
`;

export const LogoContainer = styled.div`
  display: flex;
  height: auto;

  p {
    font-size: 1.8rem;
    margin: 0;
    font-weight: 600;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  flex-flow: row;
  font-size: 1rem;

  ul {
    width: 20vw;
    display: flex;
    margin: 0%;
    padding: 0;
    justify-content: space-around;

    li {
      display: flex;
      list-style-type: none;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 20vw;
  display: flex;
`;

export const ShoppingCartContainer = styled.div`
  .cart {
    font-size: 2rem;
  }
`;
