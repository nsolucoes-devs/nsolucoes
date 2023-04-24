import {React, Button} from "react";
import { Container, Spacing} from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Techs from "../../components/Techs";
import Budget from "../../components/Budget";

function Management() {

  return (
    <Container>
      <Spacing />

      {/* Sobre nós */}
      <AboutUs imageright/>

      {/* Nossos serviços */}
      <AboutRow />
      
      <Budget />

      <Techs />

      <Support copyright/>

    </Container>
  );
}

export default Management;
