import React from "react";
import { Container, Wrapper, Pin } from "./styles";
import devices from "../../assets/images/devices.png";
import email from "../../assets/images/email.png";
import responsive from "../../assets/images/responsive.png";
import pin from "../../assets/images/pin1.png";
import coin from "../../assets/images/coin.png"

function Card({ type, image, title, desc, text }) {
  const images = {
    pin,
    devices,
    email,
    responsive,
    coin
  };

  return (
    <Wrapper>
      <Container imageType={image}>
        <img src={images[image]} />
        <h2>{title}</h2>
        <p>
          {text}
        </p>
      </Container>
      {image == "coin" && <Pin src={pin} />}
    </Wrapper>
  );
}

export default Card;
