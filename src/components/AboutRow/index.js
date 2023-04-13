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
        <Card title="Aplicações Web" type="development" image="devices" />
        <Card title="Aplicativos Android e IOS" type="development" image="responsive" />
        <Card title="Ecommerces e Marketplaces" type="development" image="coin" />
      </CardsRow>
    </Container>
  );
}

export default AboutRow;
