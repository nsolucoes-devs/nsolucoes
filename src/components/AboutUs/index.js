import React from "react";
import {
  Container,
  MainRow,
  MainColumn,
  SecundaryColumn,
  SecundaryRow,
  DivSecundaryRow,
} from "./styles";
import Title from "../Title";
import {
  TiInfoLargeOutline,
  HiArchiveBox,
  RiPieChartFill,
  IoSpeedometer,
} from "../../styles/Icons";
import StockCard from "../StockCard";

function AboutUs(props) {
  return (
    <Container>
      {props.home && (
        <>
          <div className="left">
            <Title title={props.title} />
          </div>
          <MainRow>
            <StockCard image={props.url} />
            <MainColumn>
              <h1>{props.subtitle}</h1>
              <p>{props.paragraph1}</p>
              <p>{props.paragraph2}</p>
              <p>{props.paragraph3}</p>
              <DivSecundaryRow>
                {(props.cardIcon || []).map((card) => (
                  <SecundaryRow key={card.id}>
                    {card.icon}
                    <SecundaryColumn>
                      <strong title={card.title}>{card.title}</strong>
                      <small>{card.description}</small>
                    </SecundaryColumn>
                  </SecundaryRow>
                ))}
              </DivSecundaryRow>
            </MainColumn>
          </MainRow>
        </>
      )}

      {props.imageleft && (
        <>
          <div className="left color-title">
            <Title title={props.title} />
          </div>
          <MainRow>
            <StockCard image={props.url} />
            <MainColumn>
              <h1>{props.subtitle}</h1>
              <p>{props.paragraph1}</p>
              <p>{props.paragraph2}</p>
              <p>{props.paragraph3}</p>
              <DivSecundaryRow>
                {(props.cardIcon || []).map((card) => (
                  <SecundaryRow key={card.id}>
                    {card.icon}
                    <SecundaryColumn>
                      <strong title={card.title}>{card.title}</strong>
                      <small>{card.description}</small>
                    </SecundaryColumn>
                  </SecundaryRow>
                ))}
              </DivSecundaryRow>
            </MainColumn>
          </MainRow>
        </>
      )}

      {props.imageright && (
        <>
          <div className="left">
            <Title title={props.title} />
          </div>
          <MainRow>
            <MainColumn>
              <h1>{props.subtitle}</h1>
              <p>{props.paragraph1}</p>
              <p>{props.paragraph2}</p>
              <p>{props.paragraph3}</p>
              <DivSecundaryRow>
                {(props.cardIcon || []).map((card) => (
                  <SecundaryRow>
                    {card.icon}
                    <SecundaryColumn key={card.id}>
                      <strong title={card.title}>{card.title}</strong>
                      <small>{card.description}</small>
                    </SecundaryColumn>
                  </SecundaryRow>
                ))}
              </DivSecundaryRow>
            </MainColumn>
            <StockCard image={props.url} />
          </MainRow>
        </>
      )}
    </Container>
  );
}

export default AboutUs;
