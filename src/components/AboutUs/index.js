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
import { TiInputChecked } from "react-icons/ti";

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
              {Array.isArray(props.paragraph1) ? (
                <p>
                  <ul style={{ listStyle: "none" }}>
                    {props.paragraph1.map((item, index) => (
                      <li key={index}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked color="var(--accent-color)" /> {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: props.paragraph1 }} />
              )}
              {Array.isArray(props.paragraph2) ? (
                <p>
                  <ul style={{ listStyle: "none" }}>
                    {props.paragraph2.map((item, index) => (
                      <li key={index}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked color="var(--accent-color)" /> {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p
                  style={
                    props.boldenGreen
                      ? { fontWeight: "bold", color: "var(--accent-color)" }
                      : {}
                  }
                  dangerouslySetInnerHTML={{ __html: props.paragraph2 }}
                />
              )}
              {Array.isArray(props.paragraph3) ? (
                <p>
                  <ul style={{ listStyle: "none" }}>
                    {props.paragraph3.map((item, index) => (
                      <li key={index}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked color="var(--accent-color)" /> {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: props.paragraph1 }} />
              )}
              <p> {props.paragraph4}</p>
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
            <div>
              <VideoBlod isVideo={props.isVideo} source={props.url} />
            </div>
            <MainColumn>
              <h1>{props.subtitle}</h1>
              {Array.isArray(props.paragraph1) ? (
                <p>
                  <ul style={{ listStyle: "none" }}>
                    {props.paragraph1.map((item, index) => (
                      <li key={index}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked color="var(--accent-color)" /> {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: props.paragraph1 }} />
              )}
              {Array.isArray(props.paragraph2) ? (
                <p>
                  <ul style={{ listStyle: "none" }}>
                    {props.paragraph2.map((item, index) => (
                      <li key={index}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked color="var(--accent-color)" /> {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p
                  style={
                    props.boldenGreen
                      ? { fontWeight: "bold", color: "var(--accent-color)" }
                      : {}
                  }
                  dangerouslySetInnerHTML={{ __html: props.paragraph2 }}
                />
              )}
              {Array.isArray(props.paragraph3) ? (
                <p>
                  <ul style={{ listStyle: "none" }}>
                    {props.paragraph3.map((item, index) => (
                      <li key={index}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked color="var(--accent-color)" /> {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: props.paragraph1 }} />
              )}
              <p>{props.paragraph4}</p>
            </MainColumn>
          </MainRow>
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
              {Array.isArray(props.paragraph1) ? (
                <p>
                  <ul style={{ listStyle: "none" }}>
                    {props.paragraph1.map((item, index) => (
                      <li key={index}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked color="var(--accent-color)" /> {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: props.paragraph1 }} />
              )}
              {Array.isArray(props.paragraph2) ? (
                <p>
                  <ul style={{ listStyle: "none" }}>
                    {props.paragraph2.map((item, index) => (
                      <li key={index}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked color="var(--accent-color)" /> {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p
                  style={
                    props.boldenGreen
                      ? { fontWeight: "bold", color: "var(--accent-color)" }
                      : {}
                  }
                  dangerouslySetInnerHTML={{ __html: props.paragraph2 }}
                />
              )}
              {Array.isArray(props.paragraph3) ? (
                <p>
                  <ul style={{ listStyle: "none" }}>
                    {props.paragraph3.map((item, index) => (
                      <li key={index}>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "600",
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked color="var(--accent-color)" /> {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: props.paragraph1 }} />
              )}
              <p> {props.paragraph4}</p>
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
