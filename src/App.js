import { GlobalStyle, AppContainer } from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./providers/ShoppingCartProvider";

import Router from "./Routes";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {
  const verifyPalindromo = (word) => {
    try {
      let receivedWord = word;
      if (receivedWord) {
        const newWord = word.toLowerCase();
        const wordToCompare = newWord
          .split("")
          .reverse()
          .join("")
          .toString()
          .toLowerCase();
        console.log(wordToCompare);
        console.log(newWord === wordToCompare);
      } else {
        typeof receivedWord !== "string" ?? console.log("nao digitou palavra");
      }
    } catch (error) {
      if (typeof word !== String) {
        console.log("digite uma palavra");
      } else {
        console.log({ error });
      }
    }
  };

  verifyPalindromo(de);

  return (
    <ShoppingCartProvider>
      <AppContainer>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
        <Footer />
      </AppContainer>
    </ShoppingCartProvider>
  );
}

export default App;
