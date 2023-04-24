import React from "react";
import { Container, Spacing, } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";

function MobileApps() {

  return (
    <Container>
      <Spacing />

      {/* Sobre nós */}
      <AboutUs imageleft/>

      {/* Nossos serviços */}
      <AboutRow />

      <div style={{ marginBottom: "50px" }}></div>

      {/* Faça seu orçamento */}
      <Budget />

      <Techs />

      <Support copyright/>

    </Container>
  );
}

export default MobileApps;
