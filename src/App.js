import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Main from "./pages/Main";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Main />
      <GlobalStyle />
    </>
  );
}

export default App;
