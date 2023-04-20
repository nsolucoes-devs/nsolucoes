import React from 'react';
import { Container } from './styles';
import AboutUs from "../../components/AboutUs";
import Techs from "../../components/Techs";
import Support from "../../components/Support";

function MobileApps() {
  return (
    <Container>
        <AboutUs />
        <Techs />
        {/* <SpecialSupport /> */}
        <Support />
    </Container>
  );
}

export default MobileApps;