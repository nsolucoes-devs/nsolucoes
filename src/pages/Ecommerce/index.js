import React from 'react';
import { Container, Spacing, Button, Footer } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from '../../components/Budget';
import Techs from '../../components/Techs';

function Ecommerce() {

    return (
        <Container>
          <Spacing />
    
          {/* Sobre nós */}
          <AboutUs imageleft/>
    
          {/* Nossos serviços */}
          <AboutRow />

          <Budget />

          <Techs />

          <Support copyright/>

        </Container>
    );
}

export default Ecommerce;