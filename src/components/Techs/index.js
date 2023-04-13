import React, { useRef, useState, useEffect } from "react";
import {
  Container,
  ProductColumn,
  ProductRow,
  TechRow,
  MobileApp,
  BackgroundMobile,
  AppDetails,
  Phone,
  Logo,
  InBuildBtn,
  StacksRow,
} from "./styles";
import Title from "../Title";
import { IoLogoReact } from "../../styles/Icons";
import stack1 from "../../assets/images/stack1.png";
import stack2 from "../../assets/images/stack2.png";
import stack3 from "../../assets/images/stack3.png";
import stack4 from "../../assets/images/stack4.png";
import stack5 from "../../assets/images/stack5.png";
import stack6 from "../../assets/images/stack6.png";
import stack7 from "../../assets/images/stack7.png";
import stack8 from "../../assets/images/stack8.png";
import stack9 from "../../assets/images/stack9.png";
import ScrollContainer from "react-indiana-drag-scroll";
import logzz from "../../assets/images/logzz.png";
import mooncoded from "../../assets/images/mooncoded.png";
import phoneMockup from "../../assets/images/phone-mockup.png";
import phoneMockup2 from "../../assets/images/phone_mockup2.png";
import logzzLogo from "../../assets/images/logzz-logo.png";
import StacksTag from "../StacksTag";

function Techs() {
  const stacks = [
    { name: stack8, size: "100px" },
    { name: stack1, size: "60px" },
    { name: stack3, size: "100px" },
    { name: stack6, size: "100px" },
    { name: stack7, size: "100px" },
    { name: stack9, size: "60px" },
  ];

  return (
    <Container>
      <Title title="Trabalhamos com" />
      <ScrollContainer className="scroll-container">
        {stacks.map((stack) => (
          <div
            key={stacks[stack.name]}
            style={{
              scrollBehavior: "smooth",
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
      <br />
      <MobileApp style={{marginTop: "80px"}} left>
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
                return <StacksTag title={item} />;
              })}
            </StacksRow>

            <InBuildBtn>🔨 Em construção</InBuildBtn>
          </AppDetails>
        </div>
      </MobileApp>

      <ProductRow>
        <ProductColumn>
          <div className="app-title">
            <Logo src={logzzLogo} /> <h1>Logzz App</h1>
          </div>
          <h2>O aplicativo que conecta clientes e entregadores.</h2>
          <h4>
            A praticidade chegou pra quem precisa de segurança e confiança!
          </h4>
          <StacksRow>
            {["html", "php", "css", "sql"].map((item) => {
              return <StacksTag title={item} />;
            })}
          </StacksRow>
        </ProductColumn>
        <img className="laptop" src={logzz} />
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
                return <StacksTag title={item} />;
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
    </Container>
  );
}

export default Techs;
