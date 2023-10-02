import React from "react";
import { Container, Spacing } from "./styles";
import Support from "../../components/Support";
import Techs from "../../components/Techs";

function Contact() {

  return (
    <Container>
      
      <div className="margin-contact">
        <Support supportContact />
      </div>

      <Techs work/>

      <Support copyright />

    </Container>
  );
}

export default Contact;
