import React from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { RiDatabase2Line } from "react-icons/ri";
import { HiOutlineAdjustments } from "react-icons/hi";
import { FiMonitor } from "react-icons/fi";
import { BsCodeSlash } from "react-icons/bs";
import { ImLock } from "react-icons/im";
import SitesVideo from "../../assets/videos/site.mp4";

function Websites() {
  const cardInfo = [
    {
      id: 1,
      title: "MarketPlaces",
      url: "/apps/mobile",
      type: "development",
      image: "responsive",
      text: "Amplie sua visibilidade e aumente as vendas com nosso marketplace personalizado para a sua marca. Tenha uma vitrine online completa e atraente, que oferece uma experiência de compra segura e conveniente para os seus clientes.",
    },
    {
      id: 2,
      title: "Ecommerces",
      type: "development",
      image: "responsive",
      text: "Descubra como potencializar suas vendas e alcançar mais clientes com nosso guia completo sobre E-commerce. Aproveite a oportunidade de começar agora mesmo e impulsione seu negócio para o sucesso!",
    },
    {
      id: 3,
      title: "Suporte a FinTechs",
      type: "development",
      image: "devices",
      text: "Transforme sua ideia em realidade com nosso suporte a FinTechs! Contamos com soluções sob medida para atender às demandas específicas do seu negócio e ajudá-lo a alcançar o sucesso desejado.",
    },
  ];

  const cardIcon = [
    {
      icon: <RiDatabase2Line className="products" size={45} />,
      title: "SITES 100% RESPONSIVOS",
      description:
        "Desenvolvemos sites responsivos totalmente inteligentementes, projetados para serem adaptados a qualquer tipo de tela, sem distorções, seja no computador, tablet ou celular seu site terá um acesso adequado.",
    },
    {
      icon: <HiOutlineAdjustments className="pie" size={45} />,
      title: "EXPERIÊNCIA DO USUÁRIO",
      description:
        "Através de técnica de UI e UX Design tornamos o site atrativo, de facil utilização para o usuário, gerando uma experiência unica ao navegar, com conteudo direto e de fácil acesso. Gerando altos níveis de conversão e maior tempo de navegação.      ",
    },
    {
      icon: <FiMonitor className="performance" size={45} />,
      title: "PERSONALIZAÇÃO",
      description:
        "Desenvolvemos layouts inovadores, com aparência moderna é o que transmita confiança a seus visitantes. Formas, cores, imagens, ícones. Tudo isso é pensado nos mínimos detalhes, especialmente para seu site.",
    },
    {
      icon: <ImLock className="products" size={45} />,
      title: "OTIMIZADO P/ GOOGLE",
      description:
        "Todos nossos sites são integrados aos mecanismos de busca do google, adequando seu site as pesquisas na web, permitindo que sejam encontrados de forma mais rápida.",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
          cardIcon={cardIcon}
          title="Sites e Portais"
          url={SitesVideo}
          isVideo
          subtitle="Alavanque sua presença digital com nossos sites e portais personalizados"
          paragraph1="A internet não só possibilitou a aproximação de mercados, como também vem aumentando a concorrência. Ter um site bem estruturado, que passe informações concretas sobre sua empresa vai passar uma boa impressão para os seus potenciais consumidores."
          paragraph2="O seu site é sua vitrine na internet. Sua empresa pode estar fora do horário comercial mas, em contrapartida, seu site estará 24 horas por dia apresentando os seus produtos ou serviços para os seus clientes."
          paragraph3="A internet se torna um grande aliado na hora de fortalecer a sua marca, se for bem utilizada. Mas, para isso você precisa ter um site funcional, que proporcione uma ótima experiência ao usuário e que transmita confiança."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      {/* Faça seu orçamento */}
      <Budget title="Sites e Portais" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default Websites;
