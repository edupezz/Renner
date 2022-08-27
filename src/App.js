import { GlobalStyle, AppContainer } from "./globalStyles";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <div>oi</div>
      <Footer />
    </AppContainer>
  );
}

export default App;
