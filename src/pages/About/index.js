import React from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { HiArchiveBox } from "react-icons/hi2";
import { RiPieChartFill } from "react-icons/ri";
import { IoSpeedometer } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import AppVideo from "../../assets/videos/app.mp4";

function About() {
  const cardIcon = [
    {
      icon: <IoSpeedometer className="performance" size={35} />,
      title: "",
      description:
        "Mais de 8 anos de mercado atuando em projetos projetos nacionais e internacionais.",
    },
    {
      icon: <IoSpeedometer className="performance" size={35} />,
      title: "",
      description:
        "Time especializado e atuante nas melhores praticas de Egenharia de Software e Desenvolvimento Ágil.",
    },
    {
      icon: <RiPieChartFill className="pie" size={35} />,
      title: "",
      description:
        "Atuamos em todas as etapas de seu projeto, da concepção ao desenvolvimento e implementação.",
    },
    {
      icon: <FaGear className="products" size={35} />,
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
          subtitle="Uma Software House para ser seu braço tecnológico. "
          paragraph1="Nós somos uma agência digital apaixonada por tecnologia e inovação. Acreditamos que a criatividade é a chave para construir soluções eficientes e inovadoras que atendam às necessidades específicas dos nossos clientes. Somos uma equipe altamente qualificada e comprometida em gerar resultados incríveis para nossos parceiros de negócios."
          paragraph2="Combinamos design, desenvolvimento e marketing digital para criar experiências digitais excepcionais que elevam a marca dos nossos clientes ao próximo nível. Utilizamos as melhores práticas e tecnologias modernas para garantir que nossas soluções sejam escaláveis, seguras e confiáveis."
          paragraph3="Nosso objetivo é criar soluções personalizadas e eficientes que atendam às necessidades únicas de cada cliente. Trabalhamos em estreita colaboração com nossos parceiros de negócios para entender seus objetivos e desafios e, em seguida, desenvolvemos soluções criativas e inovadoras que os ajudam a alcançar seus objetivos. Somos apaixonados por tecnologia e estamos sempre em busca de novas maneiras de impulsionar negócios e transformar ideias em realidade."
          url={AppVideo}
          isVideo
        />
      </div>

      <Budget title="meu negócio" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default About;
