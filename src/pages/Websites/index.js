import React from 'react';
import { Container, Spacing, } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from '../../components/Budget';
import Techs from '../../components/Techs';
import { RiDatabase2Line } from 'react-icons/ri';
import { HiOutlineAdjustments } from 'react-icons/hi';
import { FiMonitor } from 'react-icons/fi';
import { BsCodeSlash } from 'react-icons/bs';
import { ImLock } from 'react-icons/im';
import SitesVideo from "../../assets/videos/site.mp4";

function Websites() {

  const cardInfo = [
    {
      id: 1,
      title: "MarketPlaces",
      url: "/apps/mobile",
      type: "development",
      image: "responsive",
      text: "Amplie sua visibilidade e aumente as vendas com nosso marketplace personalizado para a sua marca. Tenha uma vitrine online completa e atraente, que oferece uma experiência de compra segura e conveniente para os seus clientes."
    },
    {
      id: 2,
      title: "Ecommerces",
      type: "development",
      image: "responsive",
      text: "Descubra como potencializar suas vendas e alcançar mais clientes com nosso guia completo sobre E-commerce. Aproveite a oportunidade de começar agora mesmo e impulsione seu negócio para o sucesso!"
    },
    {
      id: 3,
      title: "Suporte a FinTechs",
      type: "development",
      image: "devices",
      text: "Transforme sua ideia em realidade com nosso suporte a FinTechs! Contamos com soluções sob medida para atender às demandas específicas do seu negócio e ajudá-lo a alcançar o sucesso desejado."
    },
  ]

  const cardIcon = [
    {
      icon: <RiDatabase2Line className="products" size={45} />,
      title: "Atendimento ágil",
      description: "Suporte rápido e eficiente para resolver os problemas dos clientes."
    },
    {
      icon: <HiOutlineAdjustments className="pie" size={45} />,
      title: "Customização flexível",
      description: "Possibilidade de personalização de acordo com as necessidades do cliente."
    },
    {
      icon: <FiMonitor className="performance" size={45} />,
      title: "Monitoramento constante",
      description: "Acompanhamento contínuo do site/portal para garantir seu funcionamento adequado."
    },
    {
      icon: <ImLock className="products" size={45} />,
      title: "Segurança garantida",
      description: "Implementação de medidas de segurança para proteção dos dados dos usuários e da empresa."
    },    
  ]

  return (
    <Container>

      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs imageleft 
          cardIcon={cardIcon}
          title="Sites e Portais"
          url={SitesVideo}
          isVideo
          subtitle="Alavanque sua presença digital com nossos sites e portais personalizados"
          paragraph1="Nós da agência de desenvolvimento de sites e portais, temos o compromisso de fornecer soluções completas e personalizadas para nossos clientes. Com a crescente demanda por presença online, nossos profissionais altamente capacitados estão prontos para criar e desenvolver projetos que atendam às suas necessidades específicas."
          paragraph2="Desde a criação de sites institucionais, e-commerce, landing pages, até portais complexos, temos o expertise necessário para garantir a melhor performance, navegabilidade e usabilidade para os usuários."
          paragraph3="Conte com nossa equipe para trazer a sua ideia para o mundo digital de forma inovadora e eficiente. Entre em contato conosco e veja como podemos ajudá-lo a impulsionar o seu negócio online."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      {/* Faça seu orçamento */}
      <Budget title="Sites e Portais"/>

      <Techs work/>

      <Support copyright/>

    </Container>
  );
}

export default Websites;