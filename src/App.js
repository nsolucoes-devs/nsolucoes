import React from "react";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import Main from "./pages/Main";
import CustomCursor from "./components/CustomCursor";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AndroidIos from "./pages/MobileApps/index";
import UiUx from "./pages/UIUxDesign/index";
import Web from "./pages/WebPlataform/index";
import Management from "./pages/Management";
import InventoryControl from "./pages/InventoryControl";
import Squads from "./pages/Squads";
import FinTechs from "./pages/FinTechs"
import FleetManagement from "./pages/FleetManagement";
import Websites from "./pages/Websites";
import Ecommerce from "./pages/Ecommerce";
import Marketplace from "./pages/Marketplace"
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Header />
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<AndroidIos />} path="/apps/mobile" />
        <Route element={<UiUx />} path="/apps/uiux" />
        <Route element={<Web />} path="/software/web" />
        <Route element={<Management />} path="/software/gestaoevendas" />
        <Route element={<InventoryControl />} path="/software/inventory" />
        <Route element={<Squads />} path="/outsourcing/squads" />
        <Route element={<FinTechs />} path="/outsourcing/fintechs" />
        <Route element={<FleetManagement />} path="/software/fleet" />
        <Route element={<Websites />} path="/web/sites"/>
        <Route element={<Ecommerce />} path="/web/ecommerce"/>
        <Route element={<Marketplace />} path="/web/dropshipping"/>
        <Route element={<Contact />} path="/contact"/>
        <Route element={<About />} path="/about"/>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
