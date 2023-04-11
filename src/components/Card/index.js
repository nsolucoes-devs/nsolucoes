import React from "react";
import { Container } from "./styles";
import devices from "../../assets/images/devices.png";

function Card() {
  return (
    <Container>
      <img src={devices} />
      <h2>Desenvolvimento Web</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        itaque voluptas commodi
      </p>
    </Container>
  );
}

export default Card;
