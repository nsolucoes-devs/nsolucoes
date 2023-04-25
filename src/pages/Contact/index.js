import React from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
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
