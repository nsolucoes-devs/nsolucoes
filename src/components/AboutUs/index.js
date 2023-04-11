import React from "react";
import { Container } from "./styles";
import Title from "../Title";
import { TiInfoLargeOutline } from "../../styles/Icons";

function AboutUs() {
  return (
    <Container>
      <Title icon={<TiInfoLargeOutline size={100} />} title="SOBRE NÓS" />
    </Container>
  );
}

export default AboutUs;
