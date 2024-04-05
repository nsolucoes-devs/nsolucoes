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
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { GrUserExpert } from "react-icons/gr";
import { FaUserCheck } from "react-icons/fa6";
import { TfiPencil } from "react-icons/tfi";
import { FaGoogle } from "react-icons/fa";

function Websites() {
  const cardIcon = [
    {
      icon: <HiOutlineDeviceMobile className="products" size={70} />,
      title: "SITES 100% RESPONSIVOS",
      description:
        "Sites projetados a se adaptar a qualquer tipo de tela, computador, tablet ou celular.",
    },
    {
      icon: <FaUserCheck className="pie" size={70} />,
      title: "EXPERIÊNCIA DO USUÁRIO",
      description:
        "Aplicamos UI e UX tornando o site atrativo, de facil utilização, gerando uma experiência unica ao navegar.",
    },
    {
      icon: <TfiPencil className="performance" size={30} />,
      title: "PERSONALIZAÇÃO",
      description: "Seu site sob medida.",
    },
    {
      icon: <FaGoogle className="products" size={70} />,
      title: "OTIMIZADO P/ GOOGLE",
      description:
        "Integrados aos mecanismos de busca do google, adequando seu site as pesquisas na web.",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageright
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

      {/* Faça seu orçamento */}
      <Budget title="Sites e Portais" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default Websites;
