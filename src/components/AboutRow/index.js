import React from "react";
import { Container, CardsRow } from "./styles";
import Card from "../Card";
import { MdWorkOutline } from "../../styles/Icons";
import Title from "../Title";

function AboutRow(props) {

  return (
    <Container>

      {props.services && (
        <>
          <div className="left">
            <Title icon={<MdWorkOutline size={100} />} title="nossos serviços" />
          </div>
          <CardsRow>
            <Card title="Aplicações Web" type="development" image="devices" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
            <Card title="Aplicativos Android e IOS" type="development" image="responsive" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
            <Card title="Ecommerces e Marketplaces" type="development" image="coin" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
            <Card title="Aplicações Web" type="development" image="devices" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
            <Card title="Aplicativos Android e IOS" type="development" image="responsive" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
            <Card title="Ecommerces e Marketplaces" type="development" image="coin" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
          </CardsRow>
        </>
      )}

      {props.aService && (
        <CardsRow>
          {props.cardInfo.map((card) => (
            <Card title={card.title} type={card.type} image={card.image} text={card.text} />
          ))}
          {/* <Card title={props.title1} type={props.type1} image={props.image1} text={props.text1} />
          <Card title={props.title2} type={props.type2} image={props.image2} text={props.text2} />
          <Card title={props.title3} type={props.type3} image={props.image3} text={props.text3} /> */}
        </CardsRow>
      )}

    </Container>
  );
}

export default AboutRow;
