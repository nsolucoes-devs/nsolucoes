import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import MainWrapper from "./components/MainWrapper";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <MainPage />
      <GlobalStyle />
    </>
  );
}

export default App;
