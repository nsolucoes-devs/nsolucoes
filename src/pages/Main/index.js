import { React, useState } from "react";
import { Container } from "./styles";
import MainPage from "../../components/MainPage";
import AboutRow from "../../components/AboutRow";
import AboutUs from "../../components/AboutUs";
import Techs from "../../components/Techs";
import Support from "../../components/Support";
import { HiArchiveBox } from "react-icons/hi2";
import { RiPieChartFill } from "react-icons/ri";
import { IoSpeedometer } from "react-icons/io5";

function Main() {
  const cardIcon = useState([
    {
      id: 1,
      icon: <HiArchiveBox className="products" size={35} />,
      title: "",
      description:
        "Mais de 8 anos de mercado atuando em projetosprojetos nacionais e internacionais.",
    },
    {
      id: 2,
      icon: <RiPieChartFill className="pie" size={35} />,
      title: "",
      description:
        "Time especializado e atuante nas melhores praticas de Engenharia e Desenvolvimento Ágil.",
    },
    {
      id: 3,
      icon: <IoSpeedometer className="performance" size={35} />,
      title: "",
      description:
        "Atuamos em todas as etapas de seu projeto, da concepção ao desenvolvimento e implementação.",
    },
    {
      id: 4,
      icon: <HiArchiveBox className="products" size={35} />,
      title: "",
      description: "Projetos sob medida, de médio e grande porte, totalmente escalavéis, sendo seu parceiro de tecnologia."
    },    
  ]);

  return (
    <Container>
      <MainPage />

      <AboutRow services />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#f5f5f5"
          fillOpacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,224C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <AboutUs
        home
        cardIcon={cardIcon[0]}
        title="Quem somos"
        url="https://i.imgur.com/5Lv9aKE.jpg"
        subtitle="Uma Software House para ser seu braço tecnológico"
        paragraph1="Acreditamos que a tecnologia é o motor que impulsiona o mundo. Sempre rodeados por ideias inovadoras e projetos de larga escala, estamos prontos para ser seu parceiro em tecnologia, transformando suas ideias em realidade!"
        paragraph2="Criamos experiências digitais que elevam a marca dos nossos clientes a patamares superiores. Nosso compromisso com as melhores práticas e tecnologias de ponta nos permite garantir soluções escaláveis, seguras e confiáveis."
        paragraph3="Trabalhamos em estreita colaboração com nossos parceiros de negócios para entender seus objetivos e desafios! Desenvolvemos soluções criativas e inovadoras, somos movidos pela paixão a tecnologia e estamos sempre em busca de novas maneiras de impulsionar negócios e transformar ideias em realidade."
      />

      <Techs caseWork />

      <Techs titleWork />

      <Support supportHome copyright />
    </Container>
  );
}

export default Main;
