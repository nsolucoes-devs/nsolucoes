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
            <Title
              icon={<MdWorkOutline size={100} />}
              title="nossas soluções"
            />
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
              title="Terceirizações de Squads"
              type="development"
              image="squad"
              text="Monte uma equipe completa de desenvolvimento de software para sua empresa, sem se preocupar com a contratação e gerenciamento de profissionais especializados."
            />
            <Card
              title="Suporte a FinTechs"
              type="development"
              image="fintech"
              text="Oferecemos suporte técnico e estratégico para startups de tecnologia financeira (FinTechs), ajudando a desenvolver soluções inovadoras e escaláveis."
            />
            <Card
              title="Integração de Sistemas (API)"
              type="development"
              image="api"
              text="Integre seus sistemas internos e externos com outras plataformas, utilizando APIs e tecnologias modernas de integração."
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
