import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "antd/dist/antd.css";

export const GlobalStyle = createGlobalStyle`

  html {
    font-size: 16px;
  }
  body {
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }`;

export const AppContainer = styled.main`
  display: grid;
  grid-template: 10vh 80vh 10vh / 1fr 1fr 1fr;
  grid-template-areas:
    "header header header"
    "content content content"
    "footer footer footer";
`;
