import { GlobalStyle, AppContainer } from "./globalStyles";
import { BrowserRouter } from "react-router-dom";

import Router from "./Routes";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
      <Footer />
    </AppContainer>
  );
}

export default App;
