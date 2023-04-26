import React from "react";
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

  const cardIcon = [
    {
      icon: <HiArchiveBox className="products" size={35} />,
      title: "teste",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: <RiPieChartFill className="pie" size={35} />,
      title: "teste 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: <IoSpeedometer className="performance" size={35} />,
      title: "teste 3",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: <HiArchiveBox className="products" size={35} />,
      title: "teste 4",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },    
  ]

  return (
    <Container>

      <MainPage />

      <AboutRow services/>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#f5f5f5"
          fill-opacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,224C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <AboutUs home
        cardIcon={cardIcon}
        title="Quem somos"
        url="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
        subtitle="Uma equipe criativa que constrói soluções eficientes e inovadoras"
        paragraph1="Nós somos uma agência digital apaixonada por tecnologia e inovação. Acreditamos que a criatividade é a chave para construir soluções eficientes e inovadoras que atendam às necessidades específicas dos nossos clientes. Somos uma equipe altamente qualificada e comprometida em gerar resultados incríveis para nossos parceiros de negócios."
        paragraph2="Combinamos design, desenvolvimento e marketing digital para criar experiências digitais excepcionais que elevam a marca dos nossos clientes ao próximo nível. Utilizamos as melhores práticas e tecnologias modernas para garantir que nossas soluções sejam escaláveis, seguras e confiáveis."
        paragraph3="Nosso objetivo é criar soluções personalizadas e eficientes que atendam às necessidades únicas de cada cliente. Trabalhamos em estreita colaboração com nossos parceiros de negócios para entender seus objetivos e desafios e, em seguida, desenvolvemos soluções criativas e inovadoras que os ajudam a alcançar seus objetivos. Somos apaixonados por tecnologia e estamos sempre em busca de novas maneiras de impulsionar negócios e transformar ideias em realidade."
      />

      <Techs caseWork />

      <Techs titleWork />

      <Support supportHome copyright/>

    </Container>
  );
}

export default Main;
