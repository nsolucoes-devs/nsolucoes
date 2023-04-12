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
  StacksRow
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
import logzzLogo from "../../assets/images/logzz-logo.png";
import StacksTag from "../StacksTag";

function Techs() {
  const stacks = {
    stack1,
    stack2,
    stack3,
    stack4,
    stack5,
    stack6,
    stack7,
    stack8,
    stack9,
  };

  return (
    <Container>
      <Title title="trabalhos" icon={<IoLogoReact size={100} />} />
      <ScrollContainer className="scroll-container">
        {Object.keys(stacks).map((stack) => (
          <div
            key={stack}
            style={{
              scrollBehavior: "smooth",
            }}
          >
            <img
              src={stacks[stack]}
              className="stacks"
              alt={stack}
              style={{ pointerEvents: "none", userSelect: "none" }}
            />
          </div>
        ))}
      </ScrollContainer>
      <br />
      <ProductRow>
        <ProductColumn>
          <h1>logzz</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            corrupti sunt facilis delectus corporis, exercitationem expedita
            voluptas fuga quaerat quos facere doloremque, iste fugiat dicta
            adipisci, voluptate veritatis ex quisquam
          </p>
          <strong>Ferramentas de desenvolvimento</strong>
          <StacksRow>
            {["html", "php", "css", "sql"].map((item) => {
              return <StacksTag title={item} />;
            })}
          </StacksRow>
        </ProductColumn>
        <img className="laptop" src={logzz} />
      </ProductRow>
      <div className="divider" />
      <ProductRow>
        <img className="laptop" src={mooncoded} />
        <ProductColumn>
          <h1>mooncoded</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            corrupti sunt facilis delectus corporis, exercitationem expedita
            voluptas fuga quaerat quos facere doloremque, iste fugiat dicta
            adipisci, voluptate veritatis ex quisquam
          </p>
          <strong>Ferramentas de desenvolvimento</strong>
          <StacksRow>
            {["react", "styledComponents", "mongo"].map((item) => {
              return <StacksTag title={item} />;
            })}
          </StacksRow>
        </ProductColumn>
      </ProductRow>
      <div className="divider" />
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
