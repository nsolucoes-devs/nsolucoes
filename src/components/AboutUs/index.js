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
                            marginBlock: "10px",
                            textAlign: "left",
                          }}
                        >
                          <TiInputChecked
                            color="var(--accent-color)"
                            size={24}
                          />
                          {item}
                          {index === props.paragraph1.length - 1 ? "." : ";"}
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
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked
                            color="var(--accent-color)"
                            size={24}
                          />
                          {item}
                          {index === props.paragraph2.length - 1 ? "." : ";"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p
                  style={
                    props.boldenGreen
                      ? {
                          fontWeight: "bold",
                          color: "var(--accent-color)",
                          marginBlock: "20px 40px",
                        }
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
                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked
                            color="var(--accent-color)"
                            size={24}
                          />
                          {item}
                          {index === props.paragraph3.length - 1 ? "." : ";"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: props.paragraph3 }} />
              )}
              <p>{props.paragraph4}</p>
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
              {props.isVideo ? (
                <VideoBlod isVideo={props.isVideo} source={props.url} />
              ) : (
                <StockCard image={props.url} />
              )}
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

                            marginBlock: "10px",
                            textAlign: "left",
                          }}
                        >
                          <TiInputChecked
                            color="var(--accent-color)"
                            size={24}
                          />
                          {item}
                          {index === props.paragraph1.length - 1 ? "." : ";"}
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

                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked
                            color="var(--accent-color)"
                            size={24}
                          />
                          {item}
                          {index === props.paragraph2.length - 1 ? "." : ";"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p
                  style={
                    props.boldenGreen
                      ? {
                          fontWeight: "bold",
                          color: "var(--accent-color)",
                          marginBlock: "20px 40px",
                        }
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

                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked
                            color="var(--accent-color)"
                            size={24}
                          />
                          {item}
                          {index === props.paragraph3.length - 1 ? "." : ";"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: props.paragraph3 }} />
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
          <div className="left color-title">
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

                            marginBlock: "10px",
                            textAlign: "left",
                          }}
                        >
                          <TiInputChecked
                            color="var(--accent-color)"
                            size={24}
                          />
                          {item}
                          {index === props.paragraph1.length - 1 ? "." : ";"}
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

                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked
                            color="var(--accent-color)"
                            size={24}
                          />
                          {item}
                          {index === props.paragraph2.length - 1 ? "." : ";"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p
                  style={
                    props.boldenGreen
                      ? {
                          fontWeight: "bold",
                          color: "var(--accent-color)",
                          marginBlock: "20px 40px",
                        }
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

                            marginBlock: "5px",
                          }}
                        >
                          <TiInputChecked
                            color="var(--accent-color)"
                            size={24}
                          />
                          {item}
                          {index === props.paragraph3.length - 1 ? "." : ";"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </p>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: props.paragraph3 }} />
              )}
              <p>{props.paragraph4}</p>
            </MainColumn>
            <div>
              {props.isVideo ? (
                <VideoBlod isVideo={props.isVideo} source={props.url} />
              ) : (
                <StockCard image={props.url} />
              )}
            </div>
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
    </Container>
  );
}

export default AboutUs;
