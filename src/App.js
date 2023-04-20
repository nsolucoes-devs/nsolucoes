import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Main from "./pages/Main";
import CustomCursor from "./components/CustomCursor";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AndroidIos from "./pages/MobileApps/index";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<AndroidIos />} path="/apps/mobile"/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
