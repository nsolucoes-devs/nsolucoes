import React from "react";
import { Container, CardsRow } from "./styles";
import Card from "../Card";
import { MdWorkOutline } from "../../styles/Icons";
import Title from "../Title";
import Description from "../Description";

function AboutRow(props) {
  return (
    <Container>
      {props.services && (
        <>
          <div className="left">
            <div>
              <Title
                icon={<MdWorkOutline size={100} />}
                title="nossas soluções"
              />
            </div>
          </div>
          <div className="left">
            <Description>
              Criamos soluções personalizadas de larga escala para atender às
              necessidades exclusivas do seu projeto. <br /> Desenvolvimento
              ágio, integrações, escalabilidade e alto fluxo de dados. <br />{" "}
              Atuamos com tecnologias modernas e melhores práticas de engenharia
              de software.
            </Description>
          </div>
          <CardsRow>
            <Card
              title="Aplicativos Android e IOS"
              type="development"
              image="responsive"
              text="Desenvolva aplicativos personalizados para atender às necessidades específicas da sua empresa, utilizando as plataformas Android e IOS."
            />
            <Card
              title="Desenvolvimento sob Medida"
              type="development"
              image="devices"
              text="Criamos soluções personalizadas para atender às necessidades exclusivas da sua empresa, com base em tecnologias modernas e melhores práticas de desenvolvimento."
            />
            <Card
              title="Ecommerces e Marketplaces"
              type="development"
              image="coin"
              text="Crie uma loja virtual ou marketplace para sua empresa e comece a vender online, com integração de pagamentos e ferramentas de gestão de estoque."
            />
            <Card
              title="Terceirização de Squads"
              type="development"
              image="squad"
              text="Tenha uma equipe completa de desenvolvimento de software para seu projeto, sem se preocupar com a contratação e gerenciamento de profissionais especializados."
            />
            <Card
              title="Plataformas de Gestão"
              type="development"
              image="fintech"
              text="Contamos com diversas plataformas de gestão para seu negócio! Gestão de Transportadoras, Controle de Estoque, Frente de Caixa, Locação de Roupas e muito mais."
            />
            <Card
              title="Integração de WhatsApp"
              type="development"
              image="api"
              text="Leve toda a tecnologia do Whatsapp para seu negócio, tenha varios atendentes em 1 unico número, atendimento automatizado, e muito mais."
            />
          </CardsRow>
        </>
      )}

      {props.aService && (
        <CardsRow>
          {props.cardInfo.map((card) => (
            <a href={card.url}>
              <Card
                title={card.title}
                type={card.type}
                image={card.image}
                text={card.text}
              />
            </a>
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
