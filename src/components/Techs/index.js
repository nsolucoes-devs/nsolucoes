import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  ProductRow,
  MobileApp,
  AppDetails,
  Phone,
  Logo,
  InBuildBtn,
  StacksRow
} from "./styles";
import Title from "../Title";
import stack1 from "../../assets/images/stack1.png";
import stack2 from "../../assets/images/stack2.png";
import stack3 from "../../assets/images/stack3.png";
import stack6 from "../../assets/images/stack6.png";
import stack7 from "../../assets/images/stack7.png";
import stack9 from "../../assets/images/stack9.png";
import stack10 from "../../assets/images/stack10.png";
import stack11 from "../../assets/images/stack11.png";
import stack12 from "../../assets/images/stack12.png";
import stack13 from "../../assets/images/stack13.png";
import ScrollContainer from "react-indiana-drag-scroll";
import logzz from "../../assets/images/logzz.png";
import phoneMockup from "../../assets/images/phone-mockup.png";
import phoneMockup2 from "../../assets/images/phone_mockup2.png";
import logzzLogo from "../../assets/images/logzz-logo.png";
import StacksTag from "../StacksTag";

function Techs(props) {
  const stacks = [
    { id: 1, name: stack1, size: "60px" },
    { id: 2, name: stack2, size: "40px" },
    { id: 3, name: stack9, size: "60px" },
    { id: 4, name: stack13, size: "100px" },
    { id: 5, name: stack11, size: "100px" },
    { id: 6, name: stack12, size: "80px" },
    { id: 7, name: stack3, size: "100px" },
    { id: 8, name: stack6, size: "120px" },
    { id: 9, name: stack10, size: "150px" },
    { id: 10, name: stack7, size: "100px" },
  ];

  const scrollContainerRef = useRef(null);

  return (
    <Container>

      {props.titleWork &&(
        <>
          <div className="left">
            <Title title="Desenvolvemos em" />
          </div>
          <ScrollContainer className="scroll-container-work">
            {stacks.map((stack) => (
              <div
                key={stack.name}
                style={{
                  scrollBehavior: "smooth",
                  height: "100%"
                }}
              >
                <img
                  src={stack.name}
                  className="stacks"
                  alt={stack.name}
                  style={{
                    pointerEvents: "none",
                    userSelect: "none",
                    width: stack.size,
                  }}
                />
              </div>
            ))}
          </ScrollContainer>
        </>
      )}

      {props.work &&(
        <ScrollContainer className="scroll-container">
          {stacks.map((stack) => (
            <div
              key={stack.name}
              style={{
                scrollBehavior: "smooth",
                height: "100%"
              }}
            >
              <img
                src={stack.name}
                className="stacks"
                alt={stack.name}
                style={{
                  pointerEvents: "none",
                  userSelect: "none",
                  width: stack.size,
                }}
              />
            </div>
          ))}
        </ScrollContainer>        
      )}

      {props.caseWork &&(
        <>
          <div className="left case-title">
            <Title title="Nossas Cases" />
          </div>
          <MobileApp>
            <div className="main-wrapper">
              <div className="right-side">
                <div className="phone-holder">
                  <Phone src={phoneMockup2} />
                </div>
              </div>
              <AppDetails>
                <div className="app-title">
                  <Logo src={logzzLogo} /> <h1>Logzz</h1>
                </div>
                <h2>A primeira plataforma cash on delivery do Brasil!.</h2>
                <h4>
                  A praticidade chegou pra quem precisa de segurança e confiança!
                </h4>
                <StacksRow>
                  {["html", "php", "css", "sql"].map((item) => {
                    return <StacksTag key={item} title={item} />;
                  })}
                </StacksRow>

                <InBuildBtn>🔨 Em construção</InBuildBtn>
              </AppDetails>
            </div>
          </MobileApp>

          <ProductRow>
            <div className="main-wrapper">
              <AppDetails>
                <div className="app-title">
                  <Logo src={logzzLogo} /> <h1>Logzz App</h1>
                </div>
                <h2>O aplicativo que conecta clientes e entregadores.</h2>
                <h4>
                  A praticidade chegou pra quem precisa de segurança e confiança!
                </h4>
                <StacksRow>
                  {["html", "php", "css", "sql"].map((item) => {
                    return <StacksTag key={item} title={item} />;
                  })}
                </StacksRow>

                <InBuildBtn>🔨 Em construção</InBuildBtn>
              </AppDetails>
              <div className="right-side">
                <div className="phone-holder">
                  <img className="laptop" src={logzz} />
                </div>
              </div>
            </div>
          </ProductRow>

          <MobileApp>
            <div className="main-wrapper">
              <AppDetails>
                <div className="app-title">
                  <Logo src={logzzLogo} /> <h1>Logzz App</h1>
                </div>
                <h2>O aplicativo que conecta clientes e entregadores.</h2>
                <h4>
                  A praticidade chegou pra quem precisa de segurança e confiança!
                </h4>
                <StacksRow>
                  {["html", "php", "css", "sql"].map((item) => {
                    return <StacksTag key={item} title={item} />;
                  })}
                </StacksRow>

                <InBuildBtn>🔨 Em construção</InBuildBtn>
              </AppDetails>
              <div className="right-side">
                <div className="phone-holder">
                  <Phone src={phoneMockup} />
                </div>
              </div>
            </div>
          </MobileApp>
        </>
      )}


    </Container>
  );
}

export default Techs;
