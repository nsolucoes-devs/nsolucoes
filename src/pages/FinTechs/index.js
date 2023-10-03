import React from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { FaHandsHelping, FaShieldAlt } from "react-icons/fa";
import { MdPalette } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";

function FinTechs() {

  const cardInfo = [
    {
      id: 1,
      title: "Terceirizações e Squads",
      type: "development",
      image: "devices",
      text: "Descubra como a terceirização de squads pode otimizar sua produtividade e reduzir custos. Conheça nossa abordagem colaborativa e flexível para desenvolver soluções sob medida para sua empresa. "
    },
    {
      id: 2,
      title: "Gestão e Vendas",
      type: "development",
      image: "responsive",
      text: "Aumente a eficiência e a rentabilidade do seu negócio com nossas soluções de gestão e vendas, que permitem um controle total sobre suas operações. Nossos sistemas oferecem recursos como controle de estoque, gerenciamento financeiro e integração com plataformas de venda online."
    },
    {
      id: 3,
      title: "Plataformas Webs",
      type: "development",
      image: "devices",
      text: "Descubra como criar uma forte presença online para sua empresa com nossas plataformas webs personalizadas, desenvolvidas para atender às necessidades específicas do seu negócio. Oferecemos soluções completas de design, desenvolvimento e hospedagem."
    },
  ]

  const cardIcon = [
    {
      icon: <FaHandsHelping className="products" size={50} />,
      title: "Experiência em Fintechs",
      description: "Equipe especializada e com experiência em atender as necessidades específicas de startups financeiras."
    },
    {
      icon: <MdPalette className="pie" size={50} />,
      title: "Personalização",
      description: "Soluções personalizadas para atender as demandas únicas de cada Fintech."
    },
    {
      icon: <IoIosFlash className="performance" size={70} />,
      title: "Suporte ágil e eficiente",
      description: " Atendimento rápido e eficiente para ajudar as Fintechs a solucionar problemas e tomar decisões estratégicas."
    },
    {
      icon: <FaShieldAlt className="products" size={70} />,
      title: "Compliance e segurança",
      description: "Suporte em compliance e segurança para garantir que as Fintechs estejam em conformidade com as regulamentações e tenham uma estrutura segura."
    },    
  ]

  return (
    <Container>

      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs imageleft 
          cardIcon={cardIcon}
          title="Suporte a FinTechs"
          url="https://i.imgur.com/5Lv9aKE.jpg"
          subtitle="Expanda sua fintech com a ajuda da nossa Inovação e Tecnologia para Fintechs"
          paragraph1="Na nossa agência, temos um suporte especializado para as fintechs, que são empresas que utilizam tecnologia para oferecer serviços financeiros de forma mais ágil e eficiente. Sabemos que essas empresas precisam de soluções específicas para atender as demandas do mercado financeiro e, por isso, estamos preparados para oferecer todo o suporte necessário."
          paragraph2="Nossa equipe conta com profissionais experientes e capacitados para atender as demandas das fintechs. Oferecemos desde soluções para a construção de plataformas de pagamento até a criação de aplicativos de investimento, passando por serviços de consultoria em segurança e compliance. Além disso, nosso suporte está sempre disponível para esclarecer dúvidas e fornecer suporte técnico em todas as etapas do desenvolvimento do projeto."
          paragraph3="Nosso objetivo é ajudar as fintechs a atingir seus objetivos e se destacar em um mercado cada vez mais competitivo. Estamos comprometidos em oferecer soluções inovadoras e de qualidade, que atendam às necessidades específicas de cada cliente. Com nossa experiência e conhecimento técnico, podemos ajudar as fintechs a alcançar o sucesso que elas merecem."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      <div style={{ marginBottom: "50px" }}></div>

      {/* Faça seu orçamento */}
      <Budget title="Suporte a FinTechs"/>

      <Techs work/>

      <Support copyright/>

    </Container>
  );
  
}

export default FinTechs;
