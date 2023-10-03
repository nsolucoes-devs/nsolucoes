import React from "react";
import { Container, Spacing, } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { FaCogs } from "react-icons/fa";
import { FiCheckCircle, FiClock, FiEye } from "react-icons/fi";

function Squads() {

  const cardInfo = [
    {
      id: 1,
      title: "Suporte a FinTechs",
      type: "development",
      image: "devices",
      text: "Transforme sua ideia em realidade com nosso suporte a FinTechs! Contamos com soluções sob medida para atender às demandas específicas do seu negócio e ajudá-lo a alcançar o sucesso desejado."
    },
    {
      id: 2,
      title: "MarketPlaces",
      url: "/apps/mobile",
      type: "development",
      image: "responsive",
      text: "Amplie sua visibilidade e aumente as vendas com nosso marketplace personalizado para a sua marca. Tenha uma vitrine online completa e atraente, que oferece uma experiência de compra segura e conveniente para os seus clientes."
    },
    {
      id: 3,
      title: "Ecommerces",
      type: "development",
      image: "responsive",
      text: "Descubra como potencializar suas vendas e alcançar mais clientes com nosso guia completo sobre E-commerce. Aproveite a oportunidade de começar agora mesmo e impulsione seu negócio para o sucesso!"
    },
  ]

  const cardIcon = [
    {
      icon: <FaCogs className="products" size={45} />,
      title: "Flexibilidade",
      description: "Times ágeis e multidisciplinares, capazes de se adaptar rapidamente às necessidades do projeto."
    },
    {
      icon: <FiCheckCircle className="pie" size={40} />,
      title: "Foco na qualidade",
      description: "Entrega de projetos com alto nível de qualidade e satisfação do cliente."
    },
    {
      icon: <FiClock  className="performance" size={45} />,
      title: "Produtividade",
      description: "Otimização do tempo e recursos para garantir a entrega dentro do prazo estabelecido."
    },
    {
      icon: <FiEye  className="products" size={50} />,
      title: "Transparência",
      description: "Comunicação aberta e clara sobre o andamento do projeto e tomada de decisões conjuntas com o cliente."
    },    
  ]

  return (
    <Container>

      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs imageleft 
          cardIcon={cardIcon}
          title="Terceirizações e Squads"
          url="https://i.imgur.com/5Lv9aKE.jpg"
          subtitle="Potencialize sua equipe com a alocação de squads terceirizados"
          paragraph1="A alocação de squad é um modelo de gestão de projetos que tem ganhado cada vez mais destaque no mercado. Com este modelo, você contrata uma equipe especializada para trabalhar em seu projeto, deixando toda a gestão nas mãos da nossa agência. Na nossa agência, oferecemos soluções de alocação de squad para empresas de diversos segmentos, com o objetivo de otimizar processos e aumentar a eficiência."
          paragraph2="Contamos com uma equipe de especialistas altamente qualificada e experiente em gerenciamento de projetos, design e desenvolvimento, garantindo que seu projeto seja entregue com qualidade e eficiência. Ao optar pela alocação de squad, você tem a flexibilidade de escolher a equipe que melhor atenda às suas necessidades específicas. Além disso, você pode contar com um modelo de gestão que garante a entrega de projetos no prazo e dentro do orçamento, permitindo que você se concentre em outras áreas do seu negócio."
          paragraph3="Nossa equipe de profissionais experientes garante a gestão completa do projeto, desde a concepção até a entrega final, com transparência e comunicação constante com o cliente. Dessa forma, você tem a garantia de que seu projeto está em boas mãos, enquanto se concentra em suas atividades cotidianas. Se você está procurando uma solução eficiente e econômica para seus projetos, a alocação de squad é a escolha certa. Entre em contato conosco para saber mais sobre nossos serviços de alocação de squad e como podemos ajudá-lo a alcançar seus objetivos de negócios."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      <div style={{ marginBottom: "50px" }}></div>

      {/* Faça seu orçamento */}
      <Budget title="Terceirizações e Squads"/>

      <Techs work/>

      <Support copyright/>

    </Container>
  );
  
}

export default Squads;
