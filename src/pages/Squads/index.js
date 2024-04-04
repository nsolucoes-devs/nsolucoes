import React from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { FaCogs } from "react-icons/fa";
import { FiCheckCircle, FiClock, FiEye } from "react-icons/fi";
import DevVideo from "../../assets/videos/dev.mp4";

function Squads() {
  const cardIcon = [
    {
      icon: <FaCogs className="products" size={45} />,
      title: "Flexibilidade",
      description:
        "Validar suas ideias em pouco tempo",
    },
    {
      icon: <FiCheckCircle className="pie" size={40} />,
      title: "Foco na qualidade",
      description:
        "Alta qualidade de sprints entregas",
    },
    {
      icon: <FiClock className="performance" size={45} />,
      title: "Produtividade",
      description:
        "Velocidade nos entregaveis",
    },
    {
      icon: <FiEye className="products" size={50} />,
      title: "Transparência",
      description:
        "Apoio multidisciplinar",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
          cardIcon={cardIcon}
          title="Alocação de Squad"
          url={DevVideo}
          isVideo
          subtitle="Tenha um time exclusivo para o seu projeto"
          paragraph1="Tem um projeto inovador e precisa apenas da equipe de tecnologia? Conte conosco para oferecer a melhor equipe e tornar o seu projeto realidade. 
          Contamos com um time de especialistas nas mais diversas áreas de desenvolvimento, além de dominarem as mais modernas linguagens de programação."
          paragraph2="Nosso time transforma suas ideias em soluções personalizadas de alta escala, impulsionando o sucesso do seu negócio, tudo de forma eficiente e profissional!
          Nossos squads são compostos por profissionais altamente qualificados, capazes de entregar soluções personalizadas de alta qualidade e profissionalismo.
          Garanta um time dedicado ao seu projeto, focado em impulsionar o sucesso do seu negócio, com entregas períodas e acompanhamento assincrono de todas as etapas
          com o cliente. <br /> <br />Contamos com equipe de:"
          paragraph3={[
            "Analista de requisitos",
            "Desenvolvedores Web Fullstack",
            "Especialistas em Banco de Dados",
            "Especialistas em DevOPS",
            "Especialistas em Ui e UX",
            "P.O (Produtor Owner)",
            "Q.A (Quality Assurance)",
            "Tech Leads",
            "CTO Chief (Technology Office)",
          ]}
        />
      </div>

      {/* Faça seu orçamento */}
      <Budget title="Terceirizações e Squads" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default Squads;
