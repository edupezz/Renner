import { GlobalStyle, AppContainer } from "./globalStyles";
import { BrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./providers/ShoppingCartProvider";

import Router from "./Routes";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {
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
