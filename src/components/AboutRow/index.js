import React from "react";
import { Container, CardsRow } from "./styles";
import Card from "../Card";
import { MdWorkOutline } from "../../styles/Icons";
import Title from "../Title";

function AboutRow() {
  return (
    <Container>
      <Title icon={<MdWorkOutline size={100} />} title="nossos serviços" />

      <CardsRow>
        <Card title="Desenvolvimento Web" type="development" image="devices" />
        <Card title="Email Corporativo" type="development" image="email" />
        <Card title="Site Responsivos" type="development" image="responsive" />
      </CardsRow>
    </Container>
  );
}

export default AboutRow;
