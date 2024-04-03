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
import VideoBlod from "../VideoBlod";

function AboutUs(props) {
  return (
    <Container>
      {props.home && (
        <>
          <div className="left">
            <Title title={props.title} />
          </div>
          <MainRow>
            {props.isVideo ? (
              <video src={props.url} />
            ) : (
              <StockCard image={props.url} />
            )}
            <MainColumn>
              <h1>{props.subtitle}</h1>
              <p dangerouslySetInnerHTML={{__html: props.paragraph1}}></p>
              <p>{props.paragraph2}</p>
              <p>{props.paragraph3}</p>
              <p>{props.paragraph4}</p>
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
            <VideoBlod isVideo={props.isVideo} source={props.url}  />
            <MainColumn>
              <h1>{props.subtitle}</h1>
              <p dangerouslySetInnerHTML={{__html: props.paragraph1}}></p>
              <p>{props.paragraph2}</p>
              <p>{props.paragraph3}</p>
              <p>{props.paragraph4}</p>
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
              <p dangerouslySetInnerHTML={{__html: props.paragraph1}}></p>
              <p>{props.paragraph2}</p>
              <p>{props.paragraph3}</p>
              <p>{props.paragraph4}</p>
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
            {props.isVideo ? (
              <video controls>
                <source src={props.url} type="video/mp4" />
              </video>
            ) : (
              <StockCard image={props.url} />
            )}
          </MainRow>
        </>
      )}
    </Container>
  );
}

export default AboutUs;
