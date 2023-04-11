import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
