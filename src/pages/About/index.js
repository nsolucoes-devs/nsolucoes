import React from "react";
import { Container } from "./styles";
import AboutUs from "../../components/AboutUs";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { RiPieChartFill } from "react-icons/ri";
import { IoSpeedometer } from "react-icons/io5";
import { IoTime } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import AboutPhoto from "../../assets/images/about.jpg";

function About() {
  const cardIcon = [
    {
      icon: <IoTime className="performance" size={70} />,
      title: "",
      description:
        "Mais de 8 anos de mercado atuando em projetos projetos nacionais e internacionais.",
    },
    {
      icon: <IoSpeedometer className="performance" size={70} />,
      title: "",
      description:
        "Time especializado e atuante nas melhores praticas de Egenharia de Software e Desenvolvimento Ágil.",
    },
    {
      icon: <RiPieChartFill className="pie" size={70} />,
      title: "",
      description:
        "Atuamos em todas as etapas de seu projeto, da concepção ao desenvolvimento e implementação.",
    },
    {
      icon: <FaGear className="products" size={70} />,
      title: "",
      description:
        "Projetos sob medida, de médio e grande porte, totalmente escalavéis, sendo seu parceiro de tecnologia.",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
          cardIcon={cardIcon}
          title="Quem somos"
          subtitle="Uma Software House para ser seu braço tecnológico"
          paragraph1="Acreditamos que a tecnologia é o motor que impulsiona o mundo. Sempre rodeados por ideias inovadoras e projetos de larga escala, estamos prontos para ser seu parceiro em tecnologia, transformando suas ideias em realidade!"
          paragraph2="Criamos experiências digitais que elevam a marca dos nossos clientes a patamares superiores. Nosso compromisso com as melhores práticas e tecnologias de ponta nos permite garantir soluções escaláveis, seguras e confiáveis."
          paragraph3="Trabalhamos em estreita colaboração com nossos parceiros de negócios para entender seus objetivos e desafios! Desenvolvemos soluções criativas e inovadoras, somos movidos pela paixão a tecnologia e estamos sempre em busca de novas maneiras de impulsionar negócios e transformar ideias em realidade."
          url={AboutPhoto}
        />
      </div>

      <Budget title="meu negócio" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default About;
